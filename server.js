const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('html')); // Serve static files from 'html' folder
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/images', express.static('images'));

// -------------------------------------------------------------------------
// DATABASE CONNECTION (SEQUELIZE)
// -------------------------------------------------------------------------
const mysql = require('mysql2/promise');

// -------------------------------------------------------------------------
// INITIALIZATION: Check if DB exists, if not create it
// -------------------------------------------------------------------------
async function initializeDatabase() {
    const isLocal = process.env.DB_HOST === 'localhost' || process.env.DB_HOST === '127.0.0.1';

    // Skip creating database if using SQLite (file is created automatically)
    if (!isLocal) {
        try {
            // Connect to MySQL server (no database selected)
            const connection = await mysql.createConnection({
                host: process.env.DB_HOST,
                port: process.env.DB_PORT || 3306,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                ssl: { rejectUnauthorized: false }
            });

            await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
            console.log(`✅ Database '${process.env.DB_NAME}' checked/created successfully.`);
            await connection.end();
        } catch (error) {
            console.error("❌ Error creating database:", error);
        }
    }
}

// Global Sequelize instance
let sequelize;

// Function to start the app
async function startApp() {
    await initializeDatabase();

    // Re-determine environment
    const isLocal = process.env.DB_HOST === 'localhost' || process.env.DB_HOST === '127.0.0.1';

    if (isLocal) {
        // Use SQLite for local development
        console.log("🛠️ Using SQLite for local development...");
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: './database.sqlite',
            logging: false
        });
    } else {
        // Use MySQL for production/cloud
        const dialectOptions = {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        };

        sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT || 3306,
            dialect: 'mysql',
            logging: false,
            dialectOptions: dialectOptions
        });
    }

    // Define Models and Sync
    defineModels();

    await sequelize.sync({ force: false });
    console.log("✅ Database & Tables synced successfully!");

    // Start Server
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
}

// -------------------------------------------------------------------------
// DEFINE USER MODEL (Moved to function)
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// DEFINE USER MODEL (Moved to function)
// -------------------------------------------------------------------------
let User;
let Booking;

function defineModels() {
    User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'users',
        timestamps: true
    });

    Booking = sequelize.define('Booking', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        carName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        carImage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        startDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        totalPrice: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'Active' // Active, Completed, Cancelled
        }
    }, {
        tableName: 'bookings',
        timestamps: true
    });

    // Associations
    User.hasMany(Booking, { foreignKey: 'userId' });
    Booking.belongsTo(User, { foreignKey: 'userId' });
}

// -------------------------------------------------------------------------
// API ENDPOINTS
// -------------------------------------------------------------------------

// SIGNUP
app.post('/signup', async (req, res) => {
    try {
        const { email, password, fullName } = req.body;
        // Simple check if user exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.json({ success: false, message: "User already exists" });
        }

        const newUser = await User.create({ email, password, fullName });
        return res.json({ success: true, user: newUser });
    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
});

// LOGIN
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        if (user.password !== password) {
            return res.json({ success: false, message: "Incorrect password" });
        }

        return res.json({ success: true, user });
    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
});

// CREATE BOOKING
app.post('/book', async (req, res) => {
    try {
        const { email, carName, carImage, startDate, duration, totalPrice } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.json({ success: false, message: "User not found. Please login." });
        }

        const newBooking = await Booking.create({
            userId: user.id,
            carName,
            carImage,
            startDate,
            duration,
            totalPrice,
            status: 'Active'
        });

        return res.json({ success: true, booking: newBooking });

    } catch (error) {
        console.error("Booking Error:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
});

// GET USER BOOKINGS
app.get('/my-bookings', async (req, res) => {
    try {
        const { email } = req.query;
        if (!email) return res.json({ success: false, message: "Email required" });

        const user = await User.findOne({ where: { email } });
        if (!user) return res.json({ success: false, message: "User not found" });

        const bookings = await Booking.findAll({
            where: { userId: user.id },
            order: [['createdAt', 'DESC']]
        });

        return res.json({ success: true, bookings });

    } catch (error) {
        console.error("Get Bookings Error:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
});

// Initialize
startApp();

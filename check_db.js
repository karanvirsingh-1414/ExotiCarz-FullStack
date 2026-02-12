const mysql = require('mysql2/promise');

async function checkUsers() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root123',
            database: 'exoticarz_db'
        });

        const [rows] = await connection.execute('SELECT * FROM users');

        console.log("\n--- 👥 USERS IN DATABASE ---");
        if (rows.length === 0) {
            console.log("No users found yet.");
        } else {
            console.table(rows);
        }
        console.log("----------------------------\n");

        await connection.end();
    } catch (error) {
        console.error("Error checking database:", error.message);
    }
}

checkUsers();

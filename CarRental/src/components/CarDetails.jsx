import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { cars } from '../data/cars';
import Header from './Header';
import Footer from './Footer';
import '../login_2.css'; // Reusing some styles
import '../App.css';

const CarDetails = () => {
    const { id } = useParams();
    const car = cars.find(c => c.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!car) {
        return (
            <>
                <Header />
                <div style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'white' }}>
                    <h1>Car Not Found</h1>
                    <Link to="/rent" className="btn btn-light mt-3">Back to Renting</Link>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh', color: 'white' }}>
            <Header />

            <div className="container" style={{ paddingTop: '100px' }}>
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <img
                            src={car.bgImage || car.image}
                            alt={car.name}
                            style={{ width: '100%', borderRadius: '10px', objectFit: 'cover' }}
                        />
                    </div>
                    <div className="col-lg-6">
                        <h1 style={{ fontFamily: 'Orbitron, sans-serif' }}>{car.name}</h1>
                        <h3 style={{ color: '#f94c4c', margin: '20px 0' }}>From {car.price} per day</h3>
                        <p style={{ fontSize: '1.1rem', color: '#ccc' }}>{car.intro}</p>

                        <div className="mt-4">
                            <h4>Features</h4>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                {car.features.map((feature, index) => (
                                    <li key={index} style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ color: '#f94c4c', position: 'absolute', left: 0 }}>•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-6 mb-4">
                        <h4>Specifications</h4>
                        <table className="table table-dark table-striped mt-3">
                            <tbody>
                                <tr>
                                    <th>Dimension</th>
                                    <td>{car.specifications.Dimension}</td>
                                </tr>
                                <tr>
                                    <th>Weight</th>
                                    <td>{car.specifications.Weight}</td>
                                </tr>
                                <tr>
                                    <th>Fuel Economy</th>
                                    <td>{car.specifications.FuelEconomy}</td>
                                </tr>
                                <tr>
                                    <th>Top Speed</th>
                                    <td>{car.specifications.TopSpeed}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-lg-6">
                        <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '10px' }}>
                            <h3 className="mb-4">Book Your Experience</h3>
                            <form onSubmit={(e) => { e.preventDefault(); alert("Booking feature coming soon!"); }}>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" required style={{ backgroundColor: '#333', color: 'white', border: 'none' }} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email Address</label>
                                    <input type="email" className="form-control" required style={{ backgroundColor: '#333', color: 'white', border: 'none' }} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input type="tel" className="form-control" required style={{ backgroundColor: '#333', color: 'white', border: 'none' }} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Rental Period (Days)</label>
                                    <input type="number" min="1" className="form-control" required style={{ backgroundColor: '#333', color: 'white', border: 'none' }} />
                                </div>
                                <button type="submit" className="btn w-100" style={{ backgroundColor: '#f94c4c', color: 'white', fontWeight: 'bold' }}>
                                    Book Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CarDetails;

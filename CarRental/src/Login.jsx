import React, { useState, useEffect } from 'react';
import './login_2.css';
import { Link, useLocation } from 'react-router-dom';

const Login = () => {
    const location = useLocation();
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        if (location.pathname === '/signup') {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    }, [location.pathname]);

    const toggleForm = (login) => {
        setIsLogin(login);
    };

    return (
        <div className="login-page">
            {/* LOGO */}
            <img src="/images/logo-removebg.png" width="20%" className="top_logo" alt="Logo" />

            {/* HERO VIDEO */}
            <div className="hero">
                <video autoPlay loop muted playsInline className="back-video">
                    <source src="/images/ok.mp4" />
                </video>
            </div>

            <div className="wrapper">
                <div className="title-text">
                    <div className="title login" style={{ marginLeft: isLogin ? '0%' : '-50%' }}>
                        Get Started Here
                    </div>
                    <div className="title signup">Signup Here</div>
                </div>

                <div className="form-container">
                    <div className="slide-controls">
                        <input
                            type="radio"
                            name="slide"
                            id="login"
                            checked={isLogin}
                            onChange={() => toggleForm(true)}
                        />
                        <input
                            type="radio"
                            name="slide"
                            id="signup"
                            checked={!isLogin}
                            onChange={() => toggleForm(false)}
                        />

                        <label
                            htmlFor="login"
                            className="slide login"
                            onClick={() => toggleForm(true)}
                        >
                            Login
                        </label>
                        <label
                            htmlFor="signup"
                            className="slide signup"
                            onClick={() => toggleForm(false)}
                        >
                            Signup
                        </label>

                        <div className="slider-tab"></div>
                    </div>

                    <div className="form-inner">
                        {/* LOGIN FORM */}
                        <form action="#" className="login" style={{ marginLeft: isLogin ? '0%' : '-50%' }}>
                            <div className="field">
                                <input type="text" placeholder="Email Address" required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Password" required />
                            </div>
                            <div className="pass-link">
                                <a href="#">Forgot password?</a>
                            </div>
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Login" />
                            </div>
                            <div className="signup-link">
                                Not a member? <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(false); }}>Signup now</a>
                            </div>
                        </form>

                        {/* SIGNUP FORM */}
                        <form action="#" className="signup">
                            <div className="field">
                                <input type="text" placeholder="Email Address" required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Password" required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Confirm password" required />
                            </div>
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Signup" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

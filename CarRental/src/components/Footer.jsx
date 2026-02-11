import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return(
        <>
          
    <br />
    {/* FOOTER START */}
    <div
      className="container-fluid  text-white"
      style={{ backgroundColor: "#000000" }}
    >
      <footer className="py-5">
        <div className="row">
          <div className="footer_links col-6 col-md-2 mb-3">
            <h5>Sitemap</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 ">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 ">
                  About
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/rent" className="nav-link p-0 ">
                  Rent
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 ">
                  Top Picks
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 ">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer_links col-6 col-md-2 mb-3">
            <h5>Cars</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 ">
                  Lamborghini
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 ">
                  Maybach
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 ">
                  McLaren
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 ">
                  Rolls Royce
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 ">
                  Dodge
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer_links col-6 col-md-2 mb-3">
            <h5>Access</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 ">
                  Login
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 ">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 ">
                  Start
                </Link>
              </li>
              <li className="nav-item mb-2">
                <a href="#luxury" className="nav-link p-0 ">
                  Luxury Cars
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#ev" className="nav-link p-0 ">
                  Electric Cars
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Discover what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-danger" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2024 Exoticarz, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#twitter" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#instagram" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#facebook" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
        </>
    )
}
export default Footer;
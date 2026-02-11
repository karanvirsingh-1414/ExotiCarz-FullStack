import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            {/* Exoticarz Logo */}
            <img
              src="/images/logo.jpg"
              width="20%"
              className="navbar-brand fs-4"
            />
            {/* Hamburger icon*/}
            <button
              className="navbar-toggler shadow-none border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <i className="navbar-toggler-icon" />
            </button>
            {/* Sidebar */}
            <div
              className="sidebar offcanvas offcanvas-end"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              {/* sidebar header */}
              <div className="offcanvas-header text-white border-bottom">
                <button
                  type="button"
                  className="btn-close btn-close-white shadow-none"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              {/* sidebar body*/}
              <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                <ul
                  id="align"
                  className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3"
                >
                  <li className="nav-item mx-2">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link" href="/#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <Link className="nav-link active" to="/rent">
                      Rent
                    </Link>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link" href="/#picks">
                      Top Picks
                    </a>
                  </li>
                  {/* <li class="nav-item mx-2">
            <a class="nav-link" href="/">Top Brands</a>
          </li> */}
                </ul>
                {/* login & signup  */}
                <div
                  id="log_sign"
                  className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-2"
                >
                  <Link
                    to="/login"
                    className="login text-decoration-none px-3 py-1 rounded-3"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="signup text-decoration-none px-3 py-1 rounded-3"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
export default Header;
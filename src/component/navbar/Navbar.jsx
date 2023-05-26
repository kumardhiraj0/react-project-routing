import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  Dhiraj
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0 margin" >
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                        style={({isActive})=>{return {color : isActive ? "blue" : ""} }}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink  className="nav-link" to="/service" style={({isActive})=>{return {color : isActive ? "blue" : ""} }}>
                        Services
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink  className="nav-link" to="/contact" style={({isActive})=>{return {color : isActive ? "blue" : ""} }}>
                        Contact
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink  className="nav-link" to="/about" style={({isActive})=>{return {color : isActive ? "blue" : ""} }}>
                        About
                      </NavLink>
                    </li>

                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;

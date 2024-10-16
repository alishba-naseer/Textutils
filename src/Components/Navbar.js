import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutus}
                </Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`} >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"  onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.btntext}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

// Navbar.propTypes = {
//   title : PropTypes.string.isRequired,
//   aboutus : PropTypes.string.isRequired,
// }

// Navbar.defaultProps = {
//   title : "Set title here",
//   aboutus : "About here",
// }
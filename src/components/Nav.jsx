import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="row">
      <nav>
        <img src={Logo} id="logo" alt="" onClick={() => navigate("/")}/>
        <ul className="nav__links">
          <li className="nav__link">
            <Link to="/" className="nav__link--anchor link__hover-effect">
              Home
            </Link>
          </li>
          <li className="nav__link">
            <Link
              to="/browse-movies"
              className="nav__link--anchor link__hover-effect"
            >
              Search Movies
            </Link>
          </li>
          <li className="nav__link nav__link--primary">
            <Link
              to=""
              className="nav__link--anchor nav__link--anchor--primary link__hover-effect"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

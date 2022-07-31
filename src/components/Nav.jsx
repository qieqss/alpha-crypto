import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Nav = () => {
  const navigate = useNavigate();
  const isHomePage = window.location.pathname === "/";
  const isSearchPage = window.location.pathname === "/browse";
  return (
    <div className="row">
      <nav>
        <img src={Logo} id="logo" alt="" onClick={() => navigate("/")} />
        <ul className="nav__links">
          <li className="nav__link">
            <Link
              to="/"
              className={`nav__link--anchor link__hover-effect ${
                isHomePage && "nav__link--anchor--active"
              } ${isSearchPage && "nav__link--anchor--white"}`}
            >
              Home
            </Link>
          </li>
          <li className="nav__link">
            <Link
              to="/browse"
              className={`nav__link--anchor link__hover-effect ${
                isSearchPage &&
                "nav__link--anchor--active " + "nav__link--anchor--white"
              }`}
            >
              Search Movies
            </Link>
          </li>
          <li
            className={`nav__link nav__link--primary no-cursor ${
              isSearchPage && "nav__link--primary--change"
            }`}
          >
            <Link
              to=""
              className="nav__link--anchor nav__link--anchor--primary link__hover-effect no-cursor"
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

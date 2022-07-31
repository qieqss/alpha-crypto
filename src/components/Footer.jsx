import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <img src={Logo} id="logo" alt="" />
            </figure>
          </Link>
          <div className="footer__links">
            <Link className="footer__link" to="/">
              Home
            </Link>
            <Link className="footer__link" to="/browse">
              Movies
            </Link>
            <span className="footer__link no-cursor">About</span>
          </div>
          <div className="footer__copyright">
            Copyright &copy; {new Date().getFullYear()} Alpha Movies
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

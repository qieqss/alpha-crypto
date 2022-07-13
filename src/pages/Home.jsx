import { IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";
import Illustration from "../assets/stock_prices.svg";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <section id="landing">
        <div className="row">
          <div className="container">
            <header>
              <div className="text--wrapper">
                <h1 className="orange">
                  Russia's most awarded cryptocurrency tracking platform
                </h1>
                <h2>
                  Acquire your dream token with{" "}
                  <span className="orange">Alpha Crypto</span>
                </h2>
              </div>
              <form className="search--wrapper">
                <div className="input--wrapper">
                  <input type="text" placeholder="Search by name" autoFocus />
                </div>
                <IconButton className="search__img--wrapper">
                  <Search fontSize="large" />
                </IconButton>
              </form>
              <figure>
                <img src={Illustration} alt="" />
              </figure>
            </header>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

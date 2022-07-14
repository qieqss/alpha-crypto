import { IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";
import Illustration from "../assets/movies.svg";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <section id="landing">
        <div className="row">
          <div className="container">
            <header>
              <div className="text--wrapper">
                <h1 className="orange">
                  Russia's most awarded online streaming platform
                </h1>
                <h2>
                  Discover your dream show with{" "}
                  <span className="orange">Alpha Movies</span>
                </h2>
              </div>
              <div className="search--wrapper">
                <div className="input--wrapper">
                  <input type="text" placeholder="Search by name" autoFocus />
                </div>
                <IconButton
                  onClick={() => navigate("/browse")}
                  className="search__img--wrapper"
                >
                  <Search fontSize="large" />
                </IconButton>
              </div>
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

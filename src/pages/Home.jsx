import { IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";
import Illustration from "../assets/movies.svg";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
import { Loop } from "@mui/icons-material";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  function handleSearch() {
    query && localStorage.setItem("searchValue", query);
  }

  function fetchMovies(search) {
    query && setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=b69c1933d70772560f256dfcc45c6056&query=${search}&language=en-US`
      )
      .then(() => {
        setLoading(false);
        query && navigate("/browse");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <Nav />
      <section id="landing">
        <div className="row">
          <div className="container">
            <header>
              <div className="text--wrapper">
                <h1 className="purple">
                  World's most awarded online streaming platform
                </h1>
                <h2>
                  Discover your dream show with{" "}
                  <span className="purple">Alpha Movies</span>
                </h2>
              </div>
              <div className="search--wrapper">
                <div className="input--wrapper">
                  <input
                    type="text"
                    placeholder="Search by name"
                    autoFocus
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    onKeyDown={(event) =>
                      event.key === "Enter" && (fetchMovies(), handleSearch())
                    }
                  />
                </div>
                {loading ? (
                  <IconButton className="search__img--wrapper">
                    <Loop fontSize="large" className="loading__icon" />
                  </IconButton>
                ) : (
                  <IconButton
                    className="search__img--wrapper"
                    onClick={(handleSearch, fetchMovies)}
                  >
                    <Search fontSize="large" />
                  </IconButton>
                )}
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

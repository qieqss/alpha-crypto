import React from "react";
import { Search } from "@mui/icons-material";
import Nav from "../components/Nav";
import axios from "axios";
import Movies from "../components/Movies";
import { IconButton } from "@mui/material";

const Browse = () => {
  const [movies, setMovies] = React.useState([]);
  const [query, setQuery] = React.useState();
  const [loading, setLoading] = React.useState(true);

  function handleSearch() {
    renderMovies(query);
    localStorage.setItem("searchValue", query);
  }

  function renderMovies(query) {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=b69c1933d70772560f256dfcc45c6056&query=${query}&language=en-US`
      )
      .then(({ data }) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  
  React.useEffect(() => {
    localStorage.getItem("searchValue") &&
      renderMovies(localStorage.getItem("searchValue"));
  }, []);

  return (
    <>
      <section id="browse">
        <Nav />
        <div className="row">
          <header>
            <h1>Browse our Movies</h1>
            <div className="browser--wrapper">
              <input
                type="text"
                placeholder="Search by name"
                onChange={(event) => setQuery(event.target.value)}
                defaultValue={localStorage.getItem("searchValue") || query}
                onKeyDown={(event) => event.key === "Enter" && handleSearch()}
              />
              <figure>
                <IconButton onClick={() => handleSearch()}>
                  <Search fontSize="large" />
                </IconButton>
              </figure>
            </div>
          </header>
        </div>
      </section>
      <Movies movies={movies} loading={loading} />
    </>
  );
};

export default Browse;

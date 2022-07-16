import React from "react";
import { Search } from "@mui/icons-material";
import Nav from "../components/Nav";
import axios from "axios";
import API_KEY from "../keys";
import Movies from "../components/Movies";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = React.useState([]);
  const [query, setQuery] = React.useState();
  const [loading, setLoading] = React.useState(true);



  function handleSearch() {
    query && renderMovies(query);
    localStorage.setItem("searchValue", query);
  }

  function renderMovies(query) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=${API_KEY}&query=${query}`
      )
      .then(({ data }) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((err) => {
        alert(err.message);
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
      <Movies movies={movies} />
    </>
  );
};

export default Browse;

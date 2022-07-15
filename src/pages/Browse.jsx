import React from "react";
import { Search } from "@mui/icons-material";
import Nav from "../components/Nav";
import axios from "axios";
import API_KEY from "../keys";
import Movies from "../components/Movies";
import { IconButton } from "@mui/material";

const Browse = () => {
  const [movies, setMovies] = React.useState([]);
  const [query, setQuery] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  function handleSearch() {
    query === "" ? setQuery(null) : renderMovies(query);
  }

  function renderMovies(query) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=b69c1933d70772560f256dfcc45c6056&query=${query}`
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
    renderMovies();
  }, []);

  console.log(movies);
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
                value={query}
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
      <Movies moviesValue={movies}/>
    </>
  );
};

export default Browse;

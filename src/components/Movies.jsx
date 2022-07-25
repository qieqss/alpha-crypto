import React from "react";
import MovieList from "./MovieList";

const Movies = ({ movies, loading }) => {
  return (
    <section id="movies">
      <div className="container">
        <div className="row">
          <div className="search__info">
            <h2>
              Search results for{" "}
              <span className="purple">
                "{localStorage.getItem("searchValue")}"
              </span>
            </h2>
          </div>
          <div className="movies">
            <MovieList movies={movies} loading={loading}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movies;

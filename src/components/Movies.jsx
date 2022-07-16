import React from "react";
import NotFound from "../assets/search.svg";

const Movies = ({ movies }) => {

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
            {movies
              .map((movie) => {
                return movie.poster_path ? (
                  <div className="movie" key={movie.id}>
                    <figure className="movie__poster">
                      <img
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt=""
                        className="movie__poster--img"
                      />
                    </figure>
                  </div>
                ) : movies.total_results === 0 ? (
                  <figure>
                    <img src={NotFound} alt="" />
                  </figure>
                ) : null;
              })
              .slice(0, 8)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movies;

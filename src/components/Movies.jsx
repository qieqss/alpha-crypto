import React from "react";

const Movies = ({ moviesValue }) => {
  return (
    <section id="movies">
      <div className="container">
        <div className="row">
          <h2 className="search__info">
            Search results for <span className="orange">""</span>
          </h2>
          <div className="movies" key={moviesValue}>
            {moviesValue
              .map((movie) => {
                <div className="movie">
                  <figure>
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt=""
                    />
                  </figure>
                  {movie.original_title}
                </div>
              })
              .slice(0, 8)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movies;

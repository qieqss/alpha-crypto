import React from "react";
import { useNavigate } from "react-router-dom";

const MovieList = ({ movies }) => {
  const navigate = useNavigate();
  return (
    <>
      {movies
        .sort((low, high) => high.popularity - low.popularity) // Sort from high to low popularity
        .slice(0, 8)
        .map((movie) => {
          return (
            movie.poster_path && (
              <div className="movie" key={movie.id}>
                <figure
                  className="movie__poster"
                  onClick={() => {
                    navigate(`/movie/${movie.id}`);
                    scrollTo(0, 0);
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt=""
                    className="movie__poster--img"
                  />
                </figure>
              </div>
            )
          );
        })}
    </>
  );
};

export default MovieList;

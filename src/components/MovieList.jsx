import React from "react";
import { useNavigate } from "react-router-dom";
import NotFound from "../assets/search.svg"

const MovieList = ({ movies, loading }) => {
  const navigate = useNavigate();
  return (
    <>
      {loading ?
      new Array(8).fill(0).map((_, index) => {
        return (
          <div className="movies--skeletons" key={index}>
            <div className="movie--skeleton"></div>
          </div>
        )
      })
      : movies.length ? movies
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
        }) : (
          <figure className="not__found">
            <img src={NotFound} alt="" className="not__found--img"/>
            <figcaption>We searched far and wide, but no movies are to be found 🤔</figcaption>
          </figure>
        )}
    </>
  );
};

export default MovieList;

import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import API_KEY from "../keys";

const Recommended = ({ id }) => {
  const navigate = useNavigate();
  const [recommended, setRecommended] = React.useState([]);
  function fetchRecommendedMovies() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US`
      )
      .then(({ data }) => {
        setRecommended(data.results);
      });
  }

  React.useEffect(() => {
    fetchRecommendedMovies();
  }, []);
  return (
    <section id="recommended">
      <div className="container">
        <div className="row">
          <h2 className="purple">Recommended movies</h2>
          <div className="movies">
            {recommended
              .sort((high, low) => high.popularity - low.popularity)
              .slice(0, 4)
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommended;

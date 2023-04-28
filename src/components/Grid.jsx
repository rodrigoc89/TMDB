import axios from "axios";
import React, { useEffect, useState } from "react";

const Grid = () => {
  const API_URL = "https://api.themoviedb.org/3/discover/movie";
  const API_KEY = "api_key=6f1b1d3f1cf45762adec641bdc6baedb";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  const [movies, SetMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}?${API_KEY}`)
      .then((movies) => SetMovies(movies.data.results));
  }, []);
  console.log(movies);
  return (
    <>
      <div className="container">
        <div className="row">
          {movies.map((movie, i) => {
            return (
              <div className="col" key={i}>
                <h1 style={{ fontSize: "30px" }}>{movie.title}</h1>
                <img
                  src={`${URL_IMAGE + movie.poster_path}`}
                  alt="asd"
                  style={{ width: "150px" }}
                />
                <button type="button">Añadir a Favorito</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Grid;

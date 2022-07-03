import React, { useEffect, useState } from "react";
import MovieGridItem from "./MovieGridItem";
import styles from "../components styles/MoviesGrid.module.css";
import axios from "axios";

const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://api.tvmaze.com/search/shows?q=star%20wars")
      .then((pelis) => setMovies(pelis.data));
  }, []);
  
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieGridItem key={movie.show.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesGrid;

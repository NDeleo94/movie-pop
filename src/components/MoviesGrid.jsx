import React, { useEffect, useState } from "react";
import MovieGridItem from "./MovieGridItem";
import styles from "../components styles/MoviesGrid.module.css";
import axios from "axios";

const MoviesGrid = ({ search }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const searchURL = search ? search : "star wars";
    axios
      .get("http://api.tvmaze.com/search/shows?q=" + searchURL)
      .then((pelis) => setMovies(pelis.data));
  }, [search]);

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieGridItem key={movie.show.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesGrid;

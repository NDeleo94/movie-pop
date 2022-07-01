import React from "react";
import MovieGridItem from "./MovieGridItem";
import styles from "../components styles/MoviesGrid.module.css"

const MoviesGrid = () => {
  return <ul className={styles.moviesGrid}><MovieGridItem/>
  <MovieGridItem/>
  <MovieGridItem/>
  <MovieGridItem/>
  <MovieGridItem/>
  <MovieGridItem/>
  </ul>;
};

export default MoviesGrid;

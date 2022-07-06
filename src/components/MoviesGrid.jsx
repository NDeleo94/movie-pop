import React, { useEffect, useState } from "react";
import MovieGridItem from "./MovieGridItem";
import styles from "../components styles/MoviesGrid.module.css";
import axios from "axios";
import Loading from "./Loading";
import NoResults from "./NoResults";

const MoviesGrid = ({ search }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const searchURL = search ? search : "star wars";
    axios
      .get("https://api.tvmaze.com/search/shows?q=" + searchURL)
      .then((pelis) => {
        setMovies(pelis.data);
        setIsLoading(false);
      })
      .catch((error) => alert(error));
  }, [search]);

  if (isLoading) {
    return <Loading />;
  }

  if (movies.length === 0) {
    return <NoResults text={"No se encontraron resultados"}/>;
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieGridItem key={movie.show.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesGrid;

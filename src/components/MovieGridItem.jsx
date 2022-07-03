import React from "react";
import { Link } from "react-router-dom";
import styles from "../components styles/MovieGridItem.module.css";
import movies from "../data.json";
import { getPoster } from "../utils/getPoster";

const MovieGridItem = ({ movie }) => {
  return (
    <li className={styles.movieItem}>
      <Link to={"/pelicula/" + movie.show.id}>
        <img
          className={styles.movieImage + " " + styles.objetfit}
          width={230}
          height={345}
          src={getPoster(movie.show.image)}
          alt={"poster" + movie.show.name}
        />
        <div className={styles.movieTitle}>{movie.show.name}</div>
      </Link>
    </li>
  );
};

export default MovieGridItem;

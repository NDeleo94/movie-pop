import React from "react";
import { Link } from "react-router-dom";
import styles from "../components styles/MovieGridItem.module.css";
import movies from "../data.json";

const MovieGridItem = () => {
  return (
    <li className={styles.movieItem}>
      <Link to={"/pelicula/" + movies[0].show.id}>
        <img
          className={styles.movieImage + " " + styles.objetfit}
          width={230}
          height={345}
          src={movies[0].show.image.original}
          alt={"poster" + movies[0].show.name}
        />
        <div className={styles.movieTitle}>{movies[0].show.name}</div>
      </Link>
    </li>
  );
};

export default MovieGridItem;

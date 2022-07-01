import React from "react";
import styles from "../pages styles/DetailPage.module.css";
import movie from "../data.json";

const DetailPage = () => {
  return (
    <div className={styles.detailContainer}>
      <img
        className={`${styles.col} ${styles.movieImage} ${styles.objetfit}`}
        src={movie[0].show.image.medium}
        alt="poster"
      />
      {/* <div>
          <button>Favorito</button>
          Rating
        </div> */}
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <h1>{movie[0].show.name}</h1>
        <p>
          <strong>Lenguaje: </strong>
          {movie[0].show.language ? movie[0].show.language : "?"}
        </p>
        <p>
          <strong>Géneros: </strong>
          {movie[0].show.genres.length ? movie[0].show.genres.join(", ") : "?"}
        </p>
        <p>
          <strong>Fecha de Estreno: </strong>
          {movie[0].show.premiered}
        </p>
        <h1>Sinopsis </h1>
        <p>{movie[0].show.summary}</p>
      </div>
    </div>
  );
};

export default DetailPage;

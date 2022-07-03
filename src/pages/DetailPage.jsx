import React, { useEffect, useState } from "react";
import styles from "../pages styles/DetailPage.module.css";
import { cleanTags } from "../utils/cleanTags";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
  const { idPelicula } = useParams();

  const [pelicula, setPelicula] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://api.tvmaze.com/shows/" + idPelicula)
      .then((data) => {
        setPelicula(data.data);
        setIsLoading(false);
      })
      .catch((error) => alert(error));
  }, [idPelicula]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={styles.detailContainer}>
      <img
        className={`${styles.col} ${styles.movieImage} ${styles.objetfit}`}
        src={pelicula.image.medium}
        alt={"poster" + pelicula.name}
      />
      {/* <div>
          <button>Favorito</button>
          Rating
        </div> */}
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <h1>{pelicula.name}</h1>
        <p>
          <strong>Lenguaje: </strong>
          {pelicula.language ? pelicula.language : "?"}
        </p>
        <p>
          <strong>Géneros: </strong>
          {pelicula.genres.length ? pelicula.genres.join(", ") : "?"}
        </p>
        <p>
          <strong>Fecha de Estreno: </strong>
          {pelicula.premiered}
        </p>
        <h1>Sinopsis </h1>
        <p>{cleanTags(pelicula.summary)}</p>
      </div>
    </div>
  );
};

export default DetailPage;

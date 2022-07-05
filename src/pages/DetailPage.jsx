import React, { useContext, useEffect, useState } from "react";
import styles from "../pages styles/DetailPage.module.css";
import { cleanTags } from "../utils/cleanTags";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getPoster } from "../utils/getPoster";
import Loading from "../components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regular } from "@fortawesome/free-regular-svg-icons";
import Rating from "../components/Rating";
import { getRating } from "../utils/getRating";
import { LogginContext } from "../context/LogginContext";
import { useDispatch } from "react-redux";
import { crearRegistro, eliminarRegistro } from "../actions/fav";
import { useSelector } from "react-redux";

const DetailPage = () => {
  const dispatch = useDispatch();

  const { fav } = useSelector((state) => state);

  const { isLogged } = useContext(LogginContext);
  const { idPelicula } = useParams();

  const [pelicula, setPelicula] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [idDoc, setIdDoc] = useState(null);

  const initialToggle = () => {
    fav.favoritas.forEach((favorita) => {
      if (favorita.movie.id == idPelicula) {
        setIdDoc(favorita.id);
        setToggle(true);
        return;
      }
    });
  };

  const favoriteToggle = () => {
    if (!toggle) {
      dispatch(crearRegistro(pelicula));
    }
    dispatch(eliminarRegistro(idDoc));
    setToggle(!toggle);
  };

  const isAuth = () => {
    return !isLogged ? styles.hidden : styles.favoriteSection;
  };

  useEffect(() => {
    axios
      .get("http://api.tvmaze.com/shows/" + idPelicula)
      .then((peli) => {
        setPelicula(peli.data);
        initialToggle();
        setIsLoading(false);
      })
      .catch((error) => alert(error));
  }, [idPelicula]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={styles.detailContainer}>
      <img
        className={`${styles.col} ${styles.movieImage} ${styles.objetfit}`}
        src={getPoster(pelicula.image)}
        alt={"poster" + pelicula.name}
      ></img>

      <div className={styles.ratingSection}>
        <Rating stars={getRating(pelicula.rating)} />
      </div>

      <div className={isAuth()}>
        <button className={styles.favoriteButton} onClick={favoriteToggle}>
          <FontAwesomeIcon icon={toggle ? solid : regular} size="2x" />
        </button>
      </div>

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

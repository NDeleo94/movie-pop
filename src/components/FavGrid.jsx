import React from "react";
import { useSelector } from "react-redux/es/exports";
import { getFav } from "../utils/getFav";
import NoResults from "./NoResults";
import styles from "../components styles/FavGrid.module.css";
import MovieGridItem from "./MovieGridItem";

const FavGrid = () => {
  const { fav } = useSelector((state) => state);
  const listaFav = getFav(fav.favoritas);

  if (listaFav.length === 0) {
    return <NoResults text={"Aun no agregaste favoritas"} />;
  }
  return (
    <ul className={styles.moviesGrid}>
      {listaFav.map((favorita) => (
        <MovieGridItem key={favorita.show.id} movie={favorita} />
      ))}
    </ul>
  );
};

export default FavGrid;

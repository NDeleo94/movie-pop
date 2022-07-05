import React from "react";
import FavGrid from "../components/FavGrid";
import styles from "../pages styles/FavPage.module.css";
import { useSelector } from "react-redux/es/exports";
import { getFav } from "../utils/getFav";

const FavPage = () => {
  const { fav } = useSelector((state) => state);
  const listaFav = getFav(fav.favoritas);
  
  return (
    <div>
      <h1 className={styles.h1}>Tus Favoritas</h1>
      <hr className={styles.hr} />
      <FavGrid />
    </div>
  );
};

export default FavPage;

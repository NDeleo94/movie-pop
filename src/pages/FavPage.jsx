import React from "react";
import FavGrid from "../components/FavGrid";
import styles from "../pages styles/FavPage.module.css";

const FavPage = () => {
  return (
    <div>
      <h1 className={styles.h1}>Tus Favoritas</h1>
      <hr className={styles.hr} />
      <FavGrid />
    </div>
  );
};

export default FavPage;

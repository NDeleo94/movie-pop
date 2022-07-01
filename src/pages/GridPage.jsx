import React from "react";
import MoviesGrid from "../components/MoviesGrid";
import Search from "../components/Search";
import styles from "../pages styles/GridPage.module.css";

const GridPage = () => {
  return (
    <div>
      <Search />
      <h1 className={styles.h1}>Películas</h1>
      <hr className={styles.hr} />
      <MoviesGrid />
    </div>
  );
};

export default GridPage;

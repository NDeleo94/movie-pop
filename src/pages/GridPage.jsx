import React from "react";
import MoviesGrid from "../components/MoviesGrid";
import Search from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";
import styles from "../pages styles/GridPage.module.css";

const GridPage = () => {
  const query = useQuery();
  const search = query.get("search");
  // console.log(search);

  const searchDebounced = useDebounce(search, 300);

  return (
    <div>
      <Search />
      <h1 className={styles.h1}>Películas</h1>
      <hr className={styles.hr} />
      <MoviesGrid key={searchDebounced} search={searchDebounced} />
    </div>
  );
};

export default GridPage;

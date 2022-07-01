import React from "react";
import styles from "../components styles/Search.module.css";

const Search = () => {
  return (
    <form className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Buscar"
        />
      </div>
    </form>
  );
};

export default Search;

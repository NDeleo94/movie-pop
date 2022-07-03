import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../components styles/Search.module.css";
import { useQuery } from "../hooks/useQuery";

const Search = () => {
  const query = useQuery();
  const search = query.get("search");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Buscar"
          value={search ?? ""}
          onChange={(e) => {
            const value = e.target.value;
            navigate("/buscar/?search=" + value);
          }}
        />
      </div>
    </form>
  );
};

export default Search;

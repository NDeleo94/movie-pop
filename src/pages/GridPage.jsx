import React from "react";
import MoviesGrid from "../components/MoviesGrid";
import Search from "../components/Search";

const GridPage = () => {
  return (
    <div>
      <Search />
      <h2>Películas</h2>
      <hr />
      <MoviesGrid />
    </div>
  );
};

export default GridPage;

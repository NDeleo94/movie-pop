import React from "react";
import { Link } from "react-router-dom";
import image from "../images/unavailable.jpeg";

const MovieGridItem = () => {
  return (
    <li>
      <Link to="/pelicula">
        <img src={image} alt="movie poster"/>
        <div></div>
      </Link>
    </li>
  );
};

export default MovieGridItem;

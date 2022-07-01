import React from "react";
import { Link } from "react-router-dom";
import image from "../images/unavailable.jpeg";
import movies from "../data.json";

const MovieGridItem = () => {
  return (
    <li>
      <Link to={"/pelicula/" + movies[0].show.id}>
        <img
          width={230}
          height={345}
          src={movies[0].show.image.original}
          alt={"poster" + movies[0].show.name}
        />
        <div>{movies[0].show.name}</div>
      </Link>
    </li>
  );
};

export default MovieGridItem;

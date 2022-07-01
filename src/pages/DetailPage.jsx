import React from "react";
import image from "../images/unavailable.jpeg";

const DetailPage = () => {
  return (
    <div>
      <div>
        <img src={image} alt="poster" />
        {/* <div>
          <button>Favorito</button>
          Rating
        </div> */}
        <div>
          <h1>Pelicula</h1>
          <p>
            <strong>Lenguaje: </strong>
            Ingles
          </p>
          <p>
            <strong>Géneros: </strong>
            Miedo
          </p>
          <p>
            <strong>Fecha de Estreno: </strong>
            1010/10/10
          </p>
          <h1>Sinopsis </h1>
          <p>Resumen</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

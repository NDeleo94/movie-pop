import {
  faArrowLeft,
  faHouseChimney,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, useMatch } from "react-router-dom";
import styles from "../components styles/NavBar.module.css";

const NavBar = () => {
  const match = useMatch("/pelicula/:id");

  const estilos = (active) => {
    let estilo = ``;
    active ? (estilo += `${styles.colorB} `) : (estilo += `${styles.colorA} `);
    match ? (estilo += `${styles.hidden} `) : (estilo += ``);
    return estilo;
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to={-1}
            className={() => (match ? styles.colorA : styles.hidden)}
          >
            {" "}
            <FontAwesomeIcon icon={faArrowLeft} size={"2x"} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/buscar"}
            className={({ isActive }) => estilos(isActive)}
          >
            {" "}
            <FontAwesomeIcon icon={faSearch} size={"2x"} />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/login"} className={({ isActive }) => estilos(isActive)}>
            {" "}
            <FontAwesomeIcon icon={faUser} size={"2x"} />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/"} className={({ isActive }) => estilos(isActive)}>
            {" "}
            <FontAwesomeIcon icon={faHouseChimney} size={"2x"} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

// className={({ isActive }) =>
//               isActive ? styles.colorB : styles.colorA
//             }

export default NavBar;

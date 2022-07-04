import {
  faArrowLeft,
  faHouseChimney,
  faSearch,
  faUser,
  faHeart,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, useMatch } from "react-router-dom";
import styles from "../components styles/NavBar.module.css";
import { useSelector } from "react-redux/es/exports";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  const match = useMatch("/pelicula/:id");
  const { auth } = useSelector((state) => state);

  const estaActivo = (active) => {
    let estilo = ``;
    active ? (estilo += `${styles.colorB} `) : (estilo += `${styles.colorA} `);
    match ? (estilo += `${styles.hidden} `) : (estilo += ``);
    return estilo;
  };

  const isMatch = () => {
    return match ? styles.colorA : styles.hidden;
  };

  const isAuth = () => {
    return !auth.uid ? styles.hidden : "";
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <NavBarItem ruta={-1} funcEstilo={isMatch} icono={faArrowLeft}/>
        <NavBarItem
          ruta={"/login"}
          funcEstilo={estaActivo}
          icono={auth.uid ? faArrowRightFromBracket : faUser}
        />
        <li className={isAuth()}>
          <NavLink
            to={"/favoritos"}
            className={({ isActive }) => estaActivo(isActive)}
          >
            {" "}
            <FontAwesomeIcon icon={faHeart} size={"2x"} />
          </NavLink>
        </li>
        <NavBarItem ruta={"/buscar"} funcEstilo={estaActivo} icono={faSearch} />
        <NavBarItem ruta={"/"} funcEstilo={estaActivo} icono={faHouseChimney} />
      </ul>
    </nav>
  );
};

// className={({ isActive }) =>
//               isActive ? styles.colorB : styles.colorA
//             }

export default NavBar;

import {
  faArrowLeft,
  faHouseChimney,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../components styles/NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <NavLink to={-1} className={styles.colorA}>
            {" "}
            <FontAwesomeIcon icon={faArrowLeft} size={"2x"} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/buscar"}
            className={({ isActive }) =>
              isActive ? styles.colorB : styles.colorA
            }
          >
            {" "}
            <FontAwesomeIcon icon={faSearch} size={"2x"} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? styles.colorB : styles.colorA
            }
          >
            {" "}
            <FontAwesomeIcon icon={faHouseChimney} size={"2x"} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

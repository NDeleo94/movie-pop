import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={-1}>back</NavLink>
        </li>
        <li>
          <NavLink to={"/buscar"}>Buscar</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

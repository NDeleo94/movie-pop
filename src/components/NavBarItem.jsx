import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarItem = ({ruta, funcEstilo, icono}) => {
  return (
    <li>
    <NavLink to={ruta} className={({isActive})=>funcEstilo(isActive)}>
      {" "}
      <FontAwesomeIcon icon={icono} size={"2x"} />
    </NavLink>
  </li>
  )
}

export default NavBarItem
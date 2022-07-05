import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/auth";
import styles from "../components styles/Welcome.module.css";

const Welcome = ({ user }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <h1 className={styles.welcome}>Bienvenido, {user}!</h1>
      <div className={styles.welcomeContainer}>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Cerrar Sesion
        </button>
      </div>
    </>
  );
};

export default Welcome;

import React from "react";
import styles from "../components styles/Welcome.module.css";

const Welcome = ({ user }) => {
  return <h1 className={styles.welcome}>Bienvenido, {user}!</h1>;
};

export default Welcome;

import React from 'react'
import logo from "../images/cinema.png";
import styles from  "../pages styles/HomePage.module.css";

const HomePage = () => {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <p className={styles.p}>MoviePop!</p>
    </header>
  )
}

export default HomePage
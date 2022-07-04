import React from "react";
import styles from "../components styles/NoResults.module.css";

const NoResults = ({text}) => {
  return <div className={styles.noResults}>{text}</div>;
};

export default NoResults;

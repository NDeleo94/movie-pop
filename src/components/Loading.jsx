import React from "react";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../components styles/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.img}>
      <FontAwesomeIcon
        icon={faCircleNotch}
        className={styles.loading}
        size={"5x"}
      />
    </div>
  );
};

export default Loading;

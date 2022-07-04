import React from "react";
import { useSelector } from "react-redux";
import Login from "../components/Login";
import Welcome from "../components/Welcome";
import styles from "../pages styles/LoginPage.module.css";

const LoginPage = () => {
  const { auth } = useSelector((state) => state);

  return (
    <div>
      <h1 className={styles.login}>MoviePop!</h1>
      {!auth.uid ? <Login/> : <Welcome user={auth.displayName}/>} 
    </div>
  );
};

export default LoginPage;

import React from "react";
import { useSelector } from "react-redux";
import LoginRegister from "../components/LoginRegister";
import Welcome from "../components/Welcome";
import styles from "../pages styles/LoginPage.module.css";

const LoginPage = () => {
  const { auth } = useSelector((state) => state);

  return (
    <div>
      <h1 className={styles.login}>MoviePop!</h1>
      {!auth.uid ? <LoginRegister/> : <Welcome user={auth.displayName}/>} 
    </div>
  );
};

export default LoginPage;

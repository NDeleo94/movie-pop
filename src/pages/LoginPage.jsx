import React from "react";
import GoogleButton from "react-google-button";
import styles from "../pages styles/LoginPage.module.css";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {" "}
      <h1 className={styles.login}>MoviePop!</h1>
      <form className={styles.loginContainer} onSubmit={handleSubmit}>
        <div className={styles.loginBox}>
          <input
            className={styles.loginInput}
            type="text"
            placeholder="Usuario"
          />
          <input
            className={styles.loginInput}
            type="password"
            placeholder="Contraseña"
          />
          <button className={styles.loginButton} type="sumbit">
            Login
          </button>
        </div>
      </form>
      <hr />
      <div className={styles.loginContainer}>
        <GoogleButton onClick={()=>console.log("Hello Google")}/>
      </div>
    </div>
  );
};

export default LoginPage;

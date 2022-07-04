import React from "react";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import { googleLogin } from "../actions/auth";
import styles from "../components styles/Login.module.css";

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLoginGoogle = () => {
    dispatch(googleLogin());
  };

  return (
    <>
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
        <GoogleButton onClick={handleLoginGoogle} />
      </div>
    </>
  );
};

export default Login;

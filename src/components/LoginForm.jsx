import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import { emailAndPasswordLogin, googleLogin } from "../actions/auth";
import styles from "../components styles/LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }

    if (password.trim().length < 6) {
      return;
    }

    dispatch(emailAndPasswordLogin(email, password));
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
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <input
            className={styles.loginInput}
            type="password"
            placeholder="Contraseña"
            name="password"
            onChange={handleChange}
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

export default LoginForm;

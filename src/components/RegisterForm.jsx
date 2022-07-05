import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../actions/auth";
import styles from "../components styles/RegisterForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    password2: "",
  });

  const { email, username, password, password2 } = data;

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

    if (username.trim().length < 3) {
      return;
    }

    if (password.trim().length < 6) {
      return;
    } else {
      if (password.trim() !== password2.trim()) {
        return;
      }
    }
    dispatch(register(email, password, username));
  };

  return (
    <>
      <form className={styles.loginContainer} onSubmit={handleSubmit}>
        <div className={styles.loginBox}>
          <input
            className={styles.loginInput}
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={email}
          />
          <input
            className={styles.loginInput}
            type="text"
            placeholder="Usuario"
            name="username"
            onChange={handleChange}
            value={username}
          />
          <input
            className={styles.loginInput}
            type="password"
            placeholder="Contraseña"
            name="password"
            onChange={handleChange}
            value={password}
          />
          <input
            className={styles.loginInput}
            type="password"
            placeholder="Confirmar contraseña"
            name="password2"
            onChange={handleChange}
            value={password2}
          />
          <button className={styles.loginButton} type="sumbit">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;

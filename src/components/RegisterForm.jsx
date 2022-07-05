import React from "react";
import styles from "../components styles/RegisterForm.module.css";

const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form form className={styles.loginContainer} onSubmit={handleSubmit}>
        <div className={styles.loginBox}>
          <input
            className={styles.loginInput}
            type="email"
            placeholder="Email"
          />
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
          <input
            className={styles.loginInput}
            type="password"
            placeholder="Confirmar contraseña"
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

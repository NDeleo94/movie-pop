import React, { useState } from "react";
import styles from "../components styles/LoginRegister.module.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Login = () => {
  const [toggleReg, setToggleReg] = useState(true);

  const handleClick = () => {
    setToggleReg(!toggleReg)
  };

  return (
    <>
      {toggleReg ? <LoginForm/> : <RegisterForm/>}
      <hr />
      <div className={styles.loginContainer}>
        <button className={styles.toggleButton} onClick={handleClick}>
          {toggleReg ? "Registrarse" : "Iniciar Sesion"}
        </button>
      </div>
    </>
  );
};

export default Login;

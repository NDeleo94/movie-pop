import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import DetailPage from "../pages/DetailPage";
import FavPage from "../pages/FavPage";
import GridPage from "../pages/GridPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { login } from "../actions/auth";
import { auth } from "../firebase/config";
import { LogginContext } from "../context/LogginContext";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  const dispatch = useDispatch();
  const { setIsLogged } = useContext(LogginContext);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        setIsLogged(true);
        // console.log("Loggeado");
      } else {
        setIsLogged(false);
        // console.log("Desloggeado");
      }
    });
  });

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route end path="*" element={<HomePage />} />
        <Route end path="/login" element={<LoginPage />} />
        <Route end path="/buscar" element={<GridPage />} />
        <Route
          end
          path="/favoritos"
          element={
            <PrivateRouter>
              <FavPage />
            </PrivateRouter>
          }
        />
        <Route end path="/pelicula/:idPelicula" element={<DetailPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

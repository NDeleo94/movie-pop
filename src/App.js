import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import DetailPage from "./pages/DetailPage";
import GridPage from "./pages/GridPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route end path="/" element={<HomePage />} />
            <Route end path="/login" element={<LoginPage />} />
            <Route end path="/buscar" element={<GridPage />} />
            <Route end path="/pelicula/:idPelicula" element={<DetailPage />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;

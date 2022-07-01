import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import DetailPage from "./pages/DetailPage";
import GridPage from "./pages/GridPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route end path="/" element={<HomePage />} />
          <Route end path="/buscar" element={<GridPage />} />
          <Route end path="/pelicula/:idPelicula" element={<DetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

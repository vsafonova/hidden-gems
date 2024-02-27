import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import MainPage from "./pages/MainPage";
import CityPage from "./pages/CityPage";
import AboutPage from "./pages/AboutPage";
import TipsPage from "./pages/TipsPage";
import Stockholm from "./pages/Stockholm";
import Visby from "./pages/Visby";
import Järvsö from "./pages/Järvsö";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/CityPage" element={<CityPage />} />
          <Route path="/TipsPage" element={<TipsPage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/Stockholm" element={<Stockholm />} />
          <Route path="/Visby" element={<Visby />} />
          <Route path="/Järvsö" element={<Järvsö />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

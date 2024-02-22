import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage"
import CityPage from "./pages/CityPage";
import AboutPage from "./pages/AboutPage";
import TipsPage from "./pages/TipsPage";
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<ErrorPage/>} />
          <Route path="/" element={<MainPage/>} />
          <Route path="/CityPage" element={<CityPage/>}/>
          <Route path="/TipsPage" element={<TipsPage/>}/>
          <Route path="/AboutPage" element={<AboutPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import MovingTips from "./pages/MovingTips/MovingTips";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Areas from "./pages/Areas/Areas";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movingtips" element={<MovingTips />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/admin-dashboard" element={<Admin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

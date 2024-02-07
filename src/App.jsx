import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import MovingTips from "./pages/MovingTips/MovingTips";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movingtips" element={<MovingTips />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  async function getTokens() {
    console.log("this works");
  }

  React.useEffect(() => {
    getTokens();
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse-movies" element={<Movies />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Footer from "./components/Footer";
import MoviePage from "./pages/MoviePage";
// import express from "express";
// import cors from "cors"

function App() {
  // const app = express();
  // app.use(cors());
  // const { createProxyMiddleware } = require("http-proxy-middleware");
  // app.use(
  //   "/browse",
  //   createProxyMiddleware({
  //     target: "https://api.coingecko.com", //original url
  //     changeOrigin: true,
  //     //secure: false,
  //     onProxyRes: function (proxyRes, req, res) {
  //       proxyRes.headers["Access-Control-Allow-Origin"] = "*";
  //     },
  //   })
  // );
  // app.listen(5000);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/login/Login";
import About from "../pages/About";
import Investors from "../pages/Investors";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/investors" element={<Investors />} />
      <Route path="/signin.html" element={<Login />} />
    </Routes>
  );
};

export default MainRouter;

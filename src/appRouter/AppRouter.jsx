import React from "react";
import { Route, Routes } from "react-router-dom";
import NavbarComp from "../components/Navbar";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <div>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AppRouter;

import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import EnumRoutes from "./EnumRoutes";
import React from "react";

const HomePage = lazy(() => import("../components/pages/HomePage"));

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path={EnumRoutes.HomePage} element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;

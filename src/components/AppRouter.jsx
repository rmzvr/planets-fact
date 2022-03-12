import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Mercury from "../pages/Mercury";

function AppRouter() {
  return (
    <Routes>
      {/* <Route path="*" element={<Navigate to="/mercury" />} /> */}
      <Route path="/" element={<Navigate to="mercury" />} />
      <Route path="mercury" element={<Mercury />} />
    </Routes>
  );
}

export default AppRouter;

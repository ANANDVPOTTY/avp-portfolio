import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components Used
import ParentFile from "../pages/a-main/ParentFile";

const ContentRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ParentFile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ContentRoutes;

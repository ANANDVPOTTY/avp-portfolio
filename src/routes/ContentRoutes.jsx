import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components Used
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import SkillsPage from "../pages/skills/SkillsPage";
import ParentFile from "../pages/a-main/ParentFile";
import ContactsPage from "../pages/contact/ContactsPage";
import ProjectsPage from "../pages/projects/ProjectsPage";

const ContentRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ParentFile />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ContentRoutes;

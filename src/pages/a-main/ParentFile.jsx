import React from "react";

// Mui
import { Box } from "@mui/material";

// Components used
import HomePage from "../home/HomePage";
import AboutPage from "../about/AboutPage";
import SkillsPage from "../skills/SkillsPage";
import ProjectsPage from "../projects/ProjectsPage";
import ContactsPage from "../contact/ContactsPage";
import MyNavbar from "../../components/navbar/MyNavbar";
import FloatingBar from "../../components/floating-bar/FloatingBar";

const ParentFile = () => {
  return (
    <>
      <Box sx={pagesBox}>
        <MyNavbar />

        <Box sx={pagesContainerBox}>
          <HomePage />
          <AboutPage />
          <SkillsPage />
          <ProjectsPage />
          <ContactsPage />
        </Box>
      </Box>

      <Box sx={floatingBarBox}>
        <FloatingBar />
      </Box>
    </>
  );
};

export default ParentFile;

const pagesBox = {
  px: {
    lg: "var(--padding-xDir-Lg--)",
    md: "var(--padding-xDir-Md--)",
    sm: "var(--padding-xDir-Sm--)",
    xs: "var(--padding-xDir-Xs--)",
  },
};

const pagesContainerBox = {
  height: {
    lg: "calc(100vh - 6.9vh)",
    md: "calc(100vh - 7.6vh)",
    sm: "calc(100vh - 7.6vh)",
    xs: "calc(100vh - 7.6vh)",
  },

  overflowY: "auto",
};

const floatingBarBox = {
  px: "1rem",
  position: "absolute",
  left: "0",
  bottom: "0",
};

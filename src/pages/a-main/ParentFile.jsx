import React from "react";

// Mui
import { Box } from "@mui/material";

// Components used
import HomePage from "../home/HomePage";
import AboutPage from "../about/AboutPage";
import SkillsPage from "../skills/SkillsPage";
import ContactsPage from "../contact/ContactsPage";
import ProjectsPage from "../projects/ProjectsPage";

// Others
import MyNavbar from "../../components/navbar/MyNavbar";
import FooterComp from "../../components/footer/FooterComp";
import FloatingBar from "../../components/floating-bar/FloatingBar";

const ParentFile = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Box sx={pagesBox}>
        <MyNavbar onNavigate={scrollToSection} />

        <Box sx={pagesContainerBox}>
          <HomePage onNavigate={scrollToSection} />
          <AboutPage />
          <SkillsPage />
          <ProjectsPage />
          <ContactsPage onNavigate={scrollToSection} />
          <FooterComp onNavigate={scrollToSection} />
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

  /*-------| Display Scale 125% |-------*/
  "@media all and (min-resolution: 1.1dppx) and (max-resolution: 1.25dppx)": {
    height: "calc(100vh - 8.9vh)",
  },

  /*-------| Display Scale 150% |-------*/
  "@media all and (min-resolution: 1.26dppx) and (max-resolution: 1.5dppx)": {
    height: "calc(100vh - 11vh)",
  },
};

const floatingBarBox = {
  mx: "1rem",
  position: "absolute",
  left: "0",
  bottom: "0",
};

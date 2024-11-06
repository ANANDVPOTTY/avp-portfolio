import React from "react";
import { motion } from "framer-motion";

// Mui
import { Box, Fade, Typography } from "@mui/material";

// Components used
import { projectText } from "../../datas/Data";
import { fadeInFromLeft } from "../../ui-helpers/animations/CustomAnimations";

const ProjectsPage = () => {
  return (
    <Fade in={true} timeout={500} id="projects">
      <Box sx={parentBox}>
        <Box>
          <Typography sx={textOneStyle}>Projects</Typography>
        </Box>

        <Box sx={contentBox}>
          {projectText?.map((item, index) => {
            return (
              <motion.div
                key={item?.id}
                variants={fadeInFromLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 60,
                  damping: 30,
                  ease: "easeInOut",
                }}
              >
                <Box sx={eachItemBox}>
                  <Typography sx={textTwoStyle}>
                    {item?.heading ?? "--"}
                  </Typography>

                  <Typography sx={textThreeStyle}>
                    {item?.dscr ?? "--"}
                  </Typography>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Box>
    </Fade>
  );
};

export default ProjectsPage;

const parentBox = {
  height: {
    lg: "60vh",
    md: "auto",
    sm: "auto",
    xs: "auto",
  },

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",

  /*-------| Display Scale 125% |-------*/
  "@media all and (min-resolution: 1.1dppx) and (max-resolution: 1.25dppx)": {
    height: "auto",
    my: "4rem",
  },

  /*-------| Display Scale 150% |-------*/
  "@media all and (min-resolution: 1.26dppx) and (max-resolution: 1.5dppx)": {
    height: "auto",
    my: "2rem",
  },
};

const contentBox = {
  width: {
    lg: "min(85vw, 100%)",
    md: "min(60vw, 100%)",
    sm: "auto",
    xs: "min(auto, 100vw)",
  },

  display: "flex",

  flexDirection: {
    lg: "row",
    md: "column",
    sm: "column",
    xs: "column",
  },

  alignItems: "center",
  justifyContent: "center",

  gap: {
    lg: "4rem",
    md: "2rem",
    sm: "2rem",
    xs: "2rem",
  },
};

const eachItemBox = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
};

//-------| Text Style |-------//
const textOneStyle = {
  fontSize: {
    lg: "var(--fontFor-48px-Lg--)",
    md: "var(--fontFor-48px-Md--)",
    sm: "var(--fontFor-48px-Sm--)",
    xs: "var(--fontFor-48px-Xs--)",
  },

  fontWeight: "400",
  color: "var(--fullWhite--)",
  textAlign: "center",

  /*-------| Display Scale 125% |-------*/
  "@media all and (min-resolution: 1.1dppx) and (max-resolution: 1.25dppx)": {
    fontSize: "var(--fontFor-48px-Md--)",
  },

  /*-------| Display Scale 150% |-------*/
  "@media all and (min-resolution: 1.26dppx) and (max-resolution: 1.5dppx)": {
    fontSize: "var(--fontFor-48px-Xs--)",
  },
};

const textTwoStyle = {
  fontSize: {
    lg: "var(--fontFor-36px-Lg--)",
    md: "var(--fontFor-36px-Md--)",
    sm: "var(--fontFor-36px-Sm--)",
    xs: "var(--fontFor-36px-Xs--)",
  },

  fontWeight: "300",
  color: "var(--favPink--)",

  /*-------| Display Scale 125% |-------*/
  "@media all and (min-resolution: 1.1dppx) and (max-resolution: 1.25dppx)": {
    fontSize: "var(--fontFor-36px-Md--)",
  },

  /*-------| Display Scale 150% |-------*/
  "@media all and (min-resolution: 1.26dppx) and (max-resolution: 1.5dppx)": {
    fontSize: "var(--fontFor-36px-Xs--)",
  },
};

const textThreeStyle = {
  fontSize: {
    lg: "var(--fontFor-26px-Lg--)",
    md: "var(--fontFor-26px-Md--)",
    sm: "var(--fontFor-26px-Sm--)",
    xs: "var(--fontFor-26px-Xs--)",
  },

  fontWeight: "300",
  color: "var(--lightGrayTypeOne--)",
  textAlign: "center",
  lineHeight: 1.3,

  /*-------| Display Scale 125% |-------*/
  "@media all and (min-resolution: 1.1dppx) and (max-resolution: 1.25dppx)": {
    fontSize: "var(--fontFor-26px-Md--)",
  },

  /*-------| Display Scale 150% |-------*/
  "@media all and (min-resolution: 1.26dppx) and (max-resolution: 1.5dppx)": {
    fontSize: "var(--fontFor-26px-Xs--)",
  },
};

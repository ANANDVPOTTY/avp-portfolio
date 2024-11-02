import React from "react";

// Mui
import { Box, Fade, Typography } from "@mui/material";
import { aboutText } from "../../datas/Data";

// Components used
import { fadeIn } from "../../ui-helpers/animations/CustomAnimations";

const AboutPage = () => {
  return (
    <Fade in={true} timeout={500}>
      <Box sx={parentBox}>
        <Box>
          <Typography sx={textOneStyle}>About My</Typography>
        </Box>

        <Box sx={aboutBox}>
          {aboutText?.map((item) => {
            return (
              <Box key={item?.id} sx={eachItemBox}>
                <Typography sx={textTwoStyle}>
                  {item?.heading ?? "--"}
                </Typography>
                <Typography sx={textThreeStyle}>
                  {item?.dscr ?? "--"}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Fade>
  );
};

export default AboutPage;

const parentBox = {
  height: {
    lg: "55vh",
    md: "auto",
    sm: "auto",
    xs: "auto",
  },

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
};

const aboutBox = {
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
  animation: `${fadeIn} 0.3s both`,
};

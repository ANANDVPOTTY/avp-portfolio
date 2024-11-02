import React from "react";

// Mui
import { Box } from "@mui/material";

// Images & Icons
import AdjustIcon from "@mui/icons-material/Adjust";
import githubIcon from "../../assets/images/ghub2.svg";
import gmailIcon from "../../assets/images/mailIcon.svg";
import linkedinIcon from "../../assets/images/linkedinIcon.svg";

// Components used
import {
  flashAnimation,
  flipInYAnimation,
} from "../../ui-helpers/animations/CustomAnimations";

const FloatingBar = () => {
  return (
    <Box sx={parentBox}>
      <Box sx={iconBox}>
        <Box component="img" src={gmailIcon} alt="mail" sx={iconStyle} />
        <Box component="img" src={linkedinIcon} alt="linkedin" sx={iconStyle} />
        <Box component="img" src={githubIcon} alt="github" sx={iconStyle} />
      </Box>

      <Box sx={lineWithIcon}>
        <AdjustIcon sx={circleIconStyle} />
        <Box sx={lineStyle} />
      </Box>
    </Box>
  );
};

export default FloatingBar;

const parentBox = {
  display: {
    lg: "flex",
    md: "flex",
    sm: "none",
    xs: "none",
  },

  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
  animation: `${flipInYAnimation} 1.5s both ease-in-out`,
  backfaceVisibility: "visible",
};

const iconBox = {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
};

const iconStyle = {
  width: {
    lg: "30px",
    md: "22px",
    sm: "auto",
    xs: "auto",
  },

  objectFit: "contain",
  transition: "transform 0.2s ease-in-out",
  cursor: "pointer",

  "&:hover": {
    transform: "scale(1.2)",
  },
};

const lineWithIcon = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const circleIconStyle = {
  fill: "var(--favYellow--)",
  boxShadow: "0px 0px 40px 6px rgba(255,221,0,0.5)",
  animation: `${flashAnimation} 1.5s both ease-in-out`,
  borderRadius: "50px",
};

const lineStyle = {
  width: "4px",

  height: {
    lg: "150px",
    md: "110px",
    sm: "auto",
    xs: "auto",
  },

  bgcolor: "var(--fullWhite--)",
  borderRadius: "8px",
};

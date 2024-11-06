import React, { useRef } from "react";
import { motion } from "framer-motion";

// Mui
import { Box, IconButton, Typography } from "@mui/material";

// Images & Icons
import logo from "../../assets/images/logos/roundLogoDark.svg";
import arrowUpIcon from "../../assets/images/arrowUp.svg";

// Tones Used
import swipeTone from "../../assets/tones/swipe.mp3";

// Components used
import {
  fadeInFromBottom,
  forthAndBack,
} from "../../ui-helpers/animations/CustomAnimations";

const FooterComp = ({ onNavigate }) => {
  const audioRef = useRef(new Audio(swipeTone));

  const handleArrowClick = () => {
    audioRef.current.play().catch((error) => {
      console.error("Error playing sound:", error);
    });

    onNavigate("home");
  };

  return (
    <motion.div
      variants={fadeInFromBottom}
      initial={{ opacity: 0, translateY: 45 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: false }}
      transition={{
        duration: 0.4,
        stiffness: 80,
        damping: 10,
        ease: "easeIn",
      }}
    >
      <Box sx={arrowBtnBox}>
        <IconButton onClick={handleArrowClick}>
          <Box
            component="img"
            src={arrowUpIcon}
            alt="icon"
            sx={arrowIconStyle}
          />
        </IconButton>
      </Box>

      <Box sx={parentBox}>
        <Box sx={contentBox}>
          <IconButton onClick={handleArrowClick}>
            <Box component="img" src={logo} alt="icon" sx={logoStyle} />
          </IconButton>

          <Box>
            <Box>
              <Typography sx={textOneStyle}>
                I’m grateful for the time you’ve shared with me.
              </Typography>
            </Box>

            <Box>
              <Typography sx={textOneStyle}>
                Designed and developed by - Anand V Potty
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography sx={textTwoStyle}>© 2024. All rights reserved.</Typography>
      </Box>
    </motion.div>
  );
};

export default FooterComp;

const arrowBtnBox = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pt: "3rem",
};

const arrowIconStyle = {
  animation: `${forthAndBack} 1.5s ease-in-out infinite`,
};

const parentBox = {
  height: {
    lg: "auto",
    md: "auto",
    sm: "auto",
    xs: "auto",
  },

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  p: "10px",
  mb: "2rem",

  ml: {
    lg: "0",
    md: "1rem",
    sm: "0",
    xs: "0",
  },

  borderRadius: "12px",
  bgcolor: "var(--favBg--)",

  /*-------| Display Scale 125% |-------*/
  "@media all and (min-resolution: 1.1dppx) and (max-resolution: 1.25dppx)": {
    height: "auto",
  },

  /*-------| Display Scale 150% |-------*/
  "@media all and (min-resolution: 1.26dppx) and (max-resolution: 1.5dppx)": {
    height: "auto",
  },
};

const contentBox = {
  width: "100%",
  display: "flex",

  flexDirection: {
    lg: "row",
    md: "row",
    sm: "column",
    xs: "column",
  },

  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
  pb: "1rem",
  textAlign: "center",
  borderBottom: "4px solid #1e698092",
};

const logoStyle = {
  width: "70px",
};

//-------| Text Style |-------//
const textOneStyle = {
  fontSize: {
    lg: "var(--fontFor-20px-Lg--)",
    md: "var(--fontFor-20px-Md--)",
    sm: "var(--fontFor-20px-Sm--)",
    xs: "var(--fontFor-20px-Xs--)",
  },

  fontWeight: "400",
  color: "var(--fullWhite--)",
  textAlign: "center",

  /*-------| Display Scale 125% |-------*/
  "@media all and (min-resolution: 1.1dppx) and (max-resolution: 1.25dppx)": {
    fontSize: "var(--fontFor-20px-Md--)",
  },

  /*-------| Display Scale 150% |-------*/
  "@media all and (min-resolution: 1.26dppx) and (max-resolution: 1.5dppx)": {
    fontSize: "var(--fontFor-20px-Xs--)",
  },
};

const textTwoStyle = {
  fontSize: {
    lg: "var(--fontFor-16px-Lg--)",
    md: "var(--fontFor-16px-Md--)",
    sm: "var(--fontFor-16px-Sm--)",
    xs: "var(--fontFor-16px-Xs--)",
  },

  fontWeight: "400",
  color: "var(--favPink--)",
  textAlign: "center",

  /*-------| Display Scale 125% |-------*/
  "@media all and (min-resolution: 1.1dppx) and (max-resolution: 1.25dppx)": {
    fontSize: "var(--fontFor-16px-Md--)",
  },

  /*-------| Display Scale 150% |-------*/
  "@media all and (min-resolution: 1.26dppx) and (max-resolution: 1.5dppx)": {
    fontSize: "var(--fontFor-16px-Xs--)",
  },
};

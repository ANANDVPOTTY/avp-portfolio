import React from "react";
import { ReactTyped } from "react-typed";

// Mui
import { Box, Fade, Link, Typography } from "@mui/material";

// Video Used
import bgVideo from "/assets/videos/social.mp4";

// Components used
import { contactItems } from "../../datas/Data";
import { forthAndBack } from "../../ui-helpers/animations/CustomAnimations";

const ContactsPage = () => {
  return (
    <Fade in={true} timeout={500} id="contact">
      <Box sx={parentBox}>
        <Typography sx={textOneStyle}>Let's Make Things — Happen</Typography>
        <Typography sx={textTwoStyle}>
          Looking for a partner to help drive your next digital initiative,
          Let’s create something exceptional.
        </Typography>

        <Box sx={movingTextBox}>
          <Typography sx={textTwoStyle}>
            I’m ready to assist you with{" "}
          </Typography>

          <ReactTyped
            style={movingTextStyle}
            strings={["React", "Next JS", "Flutter", "React-Native"]}
            typeSpeed={150}
            backSpeed={180}
            loop
          />
        </Box>

        <Box sx={socialLinkBox}>
          <Box
            component="video"
            src={bgVideo}
            autoPlay
            loop
            muted
            playsInline
            sx={bgVideoBox}
          />

          <Box sx={linksWrapperBox}>
            {contactItems.map((item) => (
              <Link
                key={item.id}
                href={null}
                target="_blank"
                rel="noopener noreferrer"
                sx={eachLinkItem}
              >
                <Box
                  component="img"
                  src={item?.icon}
                  alt="icon"
                  sx={iconsStyle}
                />
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

export default ContactsPage;

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
  gap: "2rem",

  my: {
    lg: "4rem",
    md: "4rem",
    sm: "4rem",
    xs: "4rem",
  },

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

const movingTextBox = {
  display: "flex",

  flexDirection: {
    lg: "row",
    md: "row",
    sm: "row",
    xs: "column",
  },

  alignItems: "center",
  gap: "10px",
};

const socialLinkBox = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
};

const bgVideoBox = {
  width: {
    lg: "30%",
    md: "30%",
    sm: "100%",
    xs: "100%",
  },

  height: "100%",
  position: "absolute",
  objectFit: "cover",
  borderRadius: "12px",
  zIndex: 0,
};

const linksWrapperBox = {
  width: {
    lg: "30%",
    md: "30%",
    sm: "100%",
    xs: "100%",
  },

  display: "flex",

  flexDirection: {
    lg: "row",
    md: "row",
    sm: "row",
    xs: "column",
  },

  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
  p: "2rem",
  position: "relative",
  zIndex: 1,
  borderRadius: "12px",
  bgcolor: "var(--favBg2--)",
};

const eachLinkItem = {
  width: "35px",
  height: "35px",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  p: "4px",
  overflow: "hidden",
  borderRadius: "8px",
  bgcolor: "var(--favBg3--)",
  border: "1px solid var(--lightColor--)",
  transition: "transform 0.2s ease-in-out",

  "&:hover": {
    transform: "scale(1.5)",
  },
};

const iconsStyle = {
  width: "100%",
  height: "auto",
  objectFit: "contain",
};

const arrowBtnBox = {
  py: "1rem",
};

const arrowIconStyle = {
  animation: `${forthAndBack} 1.5s ease-in-out infinite`,
};

//-------| Text Style |-------//
const textOneStyle = {
  fontSize: {
    lg: "var(--fontFor-48px-Lg--)",
    md: "var(--fontFor-48px-Md--)",
    sm: "var(--fontFor-48px-Sm--)",
    xs: "var(--fontFor-48px-Xs--)",
  },

  fontFamily: "var(--fontFamilyOne--)",
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
    lg: "var(--fontFor-26px-Lg--)",
    md: "var(--fontFor-26px-Md--)",
    sm: "var(--fontFor-26px-Sm--)",
    xs: "var(--fontFor-26px-Xs--)",
  },

  fontFamily: "var(--fontFamilyTwo--)",
  fontWeight: "400",
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

const movingTextStyle = {
  fontSize: "28px",
  fontFamily: "var(--fontFamilyTwo--)",
  fontWeight: "600",
  color: "var(--favYellow--)",
};

import React, { useEffect, useRef, useState } from "react";

// Mui
import { Box, IconButton, Button, Fade, Typography } from "@mui/material";
import { styled, useMediaQuery } from "@mui/system";

// Images & Icons
import mouseIcon from "../../assets/images/mouseIcon.svg";
import resumeIcon from "../../assets/images/resumeIcon.svg";
import placeholderImg from "../../assets/images/devBlack.png";
import myDpImg from "../../assets/images/dp.jpg";
import doubleArwIcon from "../../assets/images/doubleArrow.svg";

// Tones Used
import swipeTone from "../../assets/tones/swipe.mp3";

// Components used
import { homeText } from "../../datas/Data";
import {
  backAndForth,
  bounceInRight,
  bounceInUp,
  fadeInLeft,
} from "../../ui-helpers/animations/CustomAnimations";
import MuiSnackToast from "../../ui-helpers/mui-toast/MuiSnackToast";

const HomePage = ({ onNavigate }) => {
  const isSmall = useMediaQuery("(max-width:220px)");
  const audioRef = useRef(new Audio(swipeTone));

  const [openToast, setOpenToast] = useState(false);

  const handleResumeBtn = () => {
    audioRef.current.play().catch((error) => {
      console.error("Error playing sound:", error);
    });

    setOpenToast(true);
  };

  const handleMouseBtn = (menuLink) => {
    audioRef.current.play().catch((error) => {
      console.error("Error playing sound:", error);
    });

    onNavigate("about");
  };

  return (
    <>
      <Fade in={true} timeout={500} id="home">
        <Box sx={parentBox}>
          <Box sx={contentBox}>
            <Box sx={textContainer}>
              {homeText?.map((item) => {
                return (
                  <CustomText
                    key={item.id}
                    colr={item?.colr}
                    weight={item?.weight}
                    delay={item?.delay}
                  >
                    {item?.text ?? "--"}
                  </CustomText>
                );
              })}

              <Box>
                {!isSmall ? (
                  <Button
                    variant="outlined"
                    size="large"
                    sx={resumeBtn}
                    onClick={handleResumeBtn}
                  >
                    Get my resume
                  </Button>
                ) : (
                  <IconButton>
                    <Box
                      component="img"
                      src={resumeIcon}
                      alt="Resume"
                      onClick={handleResumeBtn}
                    />
                  </IconButton>
                )}
              </Box>
            </Box>

            <Box sx={dpBox}>
              <Box component="img" src={placeholderImg} alt="dp" sx={dpStyle} />
            </Box>
          </Box>

          <Box sx={mouseBox}>
            <Box component="img" src={mouseIcon} alt="mouse" />

            <IconButton onClick={handleMouseBtn}>
              <Box
                component="img"
                src={doubleArwIcon}
                alt="arrows"
                sx={arrowAnimation}
              />
            </IconButton>
          </Box>
        </Box>
      </Fade>

      {openToast && (
        <MuiSnackToast
          open={openToast}
          text={"upcoming..."}
          handleClose={() => setOpenToast(false)}
        />
      )}
    </>
  );
};

export default HomePage;

const parentBox = {
  height: {
    lg: "90vh",
    md: "auto",
    sm: "auto",
    xs: "auto",
  },

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
};

const contentBox = {
  display: "flex",

  flexDirection: {
    lg: "row",
    md: "column",
    sm: "column",
    xs: "column",
  },

  gap: "5rem",

  pb: {
    lg: "0",
    md: "2rem",
    sm: "2rem",
    xs: "2rem",
  },
};

const textContainer = {
  flex: 0.6,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const CustomText = styled(Typography)(({ theme, colr, weight, delay }) => ({
  [theme.breakpoints.up("xs")]: {
    fontSize: "var(--fontFor-26px-Xs--)",
  },

  [theme.breakpoints.up("sm")]: {
    fontSize: "var(--fontFor-26px-Sm--)",
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "var(--fontFor-26px-Md--)",
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "var(--fontFor-26px-Lg--)",
  },

  fontWeight: weight || 400,
  color: colr || "#ffffff",
  lineHeight: 1.3,
  animation: `${fadeInLeft} 1s both`,
  animationDelay: `${delay || 0}s`,

  /*-------| Display Scale 125% |-------*/
  "@media all and (min-resolution: 1.1dppx) and (max-resolution: 1.25dppx)": {
    fontSize: "var(--fontFor-26px-Md--)",
  },

  /*-------| Display Scale 150% |-------*/
  "@media all and (min-resolution: 1.26dppx) and (max-resolution: 1.5dppx)": {
    fontSize: "var(--fontFor-20px-Xs--)",
  },
}));

const resumeBtn = {
  p: "1px 10px",

  fontSize: {
    lg: "var(--fontFor-26px-Lg--)",
    md: "var(--fontFor-26px-Md--)",
    sm: "var(--fontFor-26px-Sm--)",
    xs: "var(--fontFor-26px-Xs--)",
  },

  fontWeight: "200",
  color: "var(--fullWhite--)",
  textTransform: "capitalize",
  borderRadius: "5px",
  bgcolor: "transparent",
  border: "1px solid var(--favPink--)",
  animation: `${fadeInLeft} 1s both`,
  animationDelay: "0.75s",

  "&:hover": {
    bgcolor: "var(--btnHoverBg--)",
  },

  /*-------| Display Scale 125% |-------*/
  "@media all and (min-resolution: 1.1dppx) and (max-resolution: 1.25dppx)": {
    fontSize: "var(--fontFor-26px-Md--)",
  },

  /*-------| Display Scale 150% |-------*/
  "@media all and (min-resolution: 1.26dppx) and (max-resolution: 1.5dppx)": {
    fontSize: "var(--fontFor-20px-Xs--)",
  },
};

const dpBox = {
  flex: 0.4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const dpStyle = {
  width: {
    lg: "380px",
    md: "380px",
    sm: "380px",
    xs: "min(300px, 90vw)",
  },

  border: "1px solid var(--favBlue--)",
  borderRadius: "8px",
  boxShadow: "var(--boxShadOne--)",
  animation: `${bounceInRight} 1.5s both`,
  animationDelay: "0.5s",

  /*-------| Display Scale 150% |-------*/
  "@media all and (min-resolution: 1.26dppx) and (max-resolution: 1.5dppx)": {
    width: "300px",
  },
};

const mouseBox = {
  display: {
    lg: "flex",
    md: "none",
    sm: "none",
    xs: "none",
  },

  flexDirection: "column",
  alignItems: "center",
  animation: `${bounceInUp} 1.7s both`,
  animationDelay: "0.18s",
};

const arrowAnimation = {
  animation: `${backAndForth} 1.5s ease-in-out infinite`,
};

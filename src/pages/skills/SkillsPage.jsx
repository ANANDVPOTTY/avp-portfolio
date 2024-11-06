import { useState } from "react";
import { motion } from "framer-motion";

// Mui
import {
  Box,
  ButtonBase,
  createTheme,
  Fade,
  IconButton,
  Rating,
  ThemeProvider,
  Tooltip,
  Typography,
} from "@mui/material";

// Components used
import { skillItems } from "../../datas/Data";
import { fadeInFromLeft } from "../../ui-helpers/animations/CustomAnimations";

const SkillsPage = () => {
  return (
    <Fade in={true} timeout={500} id="skills">
      <Box sx={parentBox}>
        <Box>
          <Typography sx={textOneStyle}>Skills</Typography>
        </Box>

        <Box sx={contentBox}>
          {skillItems?.map((item) => {
            return (
              <Box key={item?.id} sx={skillBox}>
                <Box>
                  <Typography sx={textTwoStyle}>
                    {item?.heading ?? "--"}
                  </Typography>
                </Box>

                <Box sx={itemBox}>
                  {item?.skill.map((subItem, index) => {
                    return (
                      <motion.div
                        key={subItem?.id}
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
                        <ThemeProvider theme={theme}>
                          <Tooltip
                            arrow
                            title={
                              <Rating
                                name="read-only"
                                readOnly
                                precision={0.5}
                                size="large"
                                value={subItem?.rating ?? 0}
                              />
                            }
                          >
                            <ButtonBase sx={eachItemBox}>
                              <Box sx={iconBox}>
                                <Box
                                  component="img"
                                  src={subItem.icon}
                                  sx={iconStyle}
                                  alt="icon"
                                />
                              </Box>

                              <Typography sx={textThreeStyle}>
                                {subItem?.itemName ?? "--"}
                              </Typography>
                            </ButtonBase>
                          </Tooltip>
                        </ThemeProvider>
                      </motion.div>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Fade>
  );
};

export default SkillsPage;

const parentBox = {
  height: {
    lg: "auto",
    md: "auto",
    sm: "auto",
    xs: "auto",
  },

  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  px: "1rem",

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

const contentBox = {
  display: "flex",
  flexDirection: "column",
  gap: "4rem",
};

const skillBox = {
  width: {
    lg: "min(100%, 100%)",
    md: "min(100%, 100%)",
    sm: "auto",
    xs: "min(auto, 100vw)",
  },

  display: "flex",
  flexDirection: "column",

  gap: {
    lg: "1.5rem",
    md: "0",
    sm: "0",
    xs: "0",
  },
};

const itemBox = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "1.5rem",
};

const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "transparent",
          border: "3px solid var(--favBlue--)",
          borderRadius: "6px",
        },
      },
    },
  },
});

const eachItemBox = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  px: "1rem",
  py: "10px",
  borderRadius: "8px",
  border: "1px solid var(--favBlue--)",
  transition: "transform 0.3s ease-in-out",

  "&:hover": {
    transform: "scale(1.1)",
    bgcolor: "var(--btnHoverFavBg--)",
  },
};

const iconBox = {
  width: "35px",
  height: "35px",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  borderRadius: "8px",
  p: "5px",
  bgcolor: "#2b2a2a",
  border: "1px solid var(--lightColor--)",
};

const iconStyle = {
  width: "100%",
  height: "auto",
  objectFit: "contain",
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

  fontWeight: "200",
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
    lg: "var(--fontFor-20px-Lg--)",
    md: "var(--fontFor-20px-Md--)",
    sm: "var(--fontFor-20px-Sm--)",
    xs: "var(--fontFor-20px-Xs--)",
  },

  fontWeight: "300",
  color: "var(--fullWhite--)",
  textAlign: "center",
  lineHeight: 1.3,

  /*-------| Display Scale 125% |-------*/
  "@media all and (min-resolution: 1.1dppx) and (max-resolution: 1.25dppx)": {
    fontSize: "var(--fontFor-20px-Md--)",
  },

  /*-------| Display Scale 150% |-------*/
  "@media all and (min-resolution: 1.26dppx) and (max-resolution: 1.5dppx)": {
    fontSize: "var(--fontFor-20px-Xs--)",
  },
};

// Mui
import { Box, Fade, IconButton, Typography } from "@mui/material";

// Images & Icons
import chartIcon from "../../assets/images/chartIcon.svg";

// Components used
import { skillItems } from "../../datas/Data";
import { useState } from "react";
import SkillChartModal from "./others/SkillChartModal";

const SkillsPage = () => {
  const [chartOpen, setChartOpen] = useState(false);

  const handleOpenChart = () => setChartOpen(true);
  const handleCloseChart = () => setChartOpen(false);

  return (
    <>
      <Fade in={true} timeout={500}>
        <Box sx={parentBox}>
          <Box>
            <Typography sx={textOneStyle}>Skills</Typography>
          </Box>

          <Box sx={contentBox}>
            {skillItems?.map((item) => {
              return (
                <Box sx={skillBox} key={item?.id}>
                  <Box sx={textWithIconBox}>
                    <Typography sx={textTwoStyle}>
                      {item?.heading ?? "--"}
                    </Typography>

                    <IconButton
                      sx={chartIconBtn}
                      title={"Chart"}
                      onClick={handleOpenChart}
                    >
                      <Box component="img" src={chartIcon} alt="icon" />
                    </IconButton>
                  </Box>

                  <Box sx={itemBox}>
                    {item?.skill.map((subItem) => {
                      return (
                        <Box key={subItem?.id} sx={eachItemBox}>
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
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Fade>

      {chartOpen && (
        <SkillChartModal open={chartOpen} handleClose={handleCloseChart} />
      )}
    </>
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

const textWithIconBox = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

const chartIconBtn = {
  transition: "transform 0.2s ease-in-out",

  "&:hover": {
    transform: "scale(1.4)",
    bgcolor: "var(--btnHoverFavBg--)",
  },
};

const itemBox = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "1.5rem",
};

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

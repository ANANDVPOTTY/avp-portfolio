// Mui
import { Box, Fade, Typography } from "@mui/material";

// Components used
import { skillItems } from "../../datas/Data";

const SkillsPage = () => {
  return (
    <Fade in={true} timeout={500}>
      <Box sx={parentBox}>
        <Box>
          <Typography sx={textOneStyle}>Skills</Typography>
        </Box>

        <Box sx={contentBox}>
          {skillItems?.map((item) => {
            return (
              <Box sx={skillBox} key={item?.id}>
                <Typography sx={textTwoStyle}>
                  {item?.heading ?? "--"}
                </Typography>

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
  );
};

export default SkillsPage;

const parentBox = {
  height: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  mb: "2rem",
  px: "1rem",
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
};

import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Mui
import {
  Box,
  AppBar,
  Toolbar,
  ButtonBase,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  CssBaseline,
  Divider,
  List,
  Drawer,
  Button,
  Fade,
} from "@mui/material";

// Images & Icons
import MenuIcon from "@mui/icons-material/Menu";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

// Tones Used
import clickTone from "../../assets/tones/MouseClick.mp3";

// Components used
import { navItems } from "../../datas/Data";
import {
  fadeInDown,
  shimmer,
} from "../../ui-helpers/animations/CustomAnimations";
import ThemeSwitch from "../../ui-helpers/buttons/ThemeSwitch";

const MyNavbar = () => {
  const navigate = useNavigate();
  const drawerWidth = 240;
  const audioRef = useRef(new Audio(clickTone));

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogoClick = () => {
    navigate("/");
    setMobileOpen(false);
  };

  const handleMenuItem = (menuLink) => {
    audioRef.current.play().catch((error) => {
      console.error("Error playing sound:", error);
    });
    navigate(menuLink);
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawerUiContent = (
    <Fade in={true} timeout={500}>
      <Box>
        <ButtonBase sx={{ ...shimmerText, my: 2 }} onClick={handleLogoClick}>
          Anand V Potty
        </ButtonBase>

        <Divider color="var(--darkBlack--)" />

        <List>
          {navItems?.map((item) => (
            <ListItem
              key={item.id}
              disablePadding
              onClick={() => handleMenuItem(item?.link)}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.menu} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={themeAndMuteBtnBoxForSmall}>
          <ThemeSwitch />

          <IconButton>
            <VolumeUpIcon />
          </IconButton>
        </Box>
      </Box>
    </Fade>
  );

  return (
    <Box
      sx={{
        animation: `${fadeInDown} 1s both`,
        animationDelay: "0.18s",
      }}
    >
      <CssBaseline />
      <AppBar sx={appBarBox} elevation={0}>
        <Toolbar sx={contentBox}>
          <ButtonBase sx={shimmerText} onClick={handleLogoClick}>
            Anand V Potty
          </ButtonBase>

          <Box sx={btnConatiner}>
            {navItems?.map((item) => (
              <Box key={item.id} sx={menuBtnContainer}>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleMenuItem(item?.link)}
                  sx={registerBtn}
                >
                  {item.menu}
                </Button>
              </Box>
            ))}

            <Box sx={themeAndMuteBtnBoxForLarge}>
              <ThemeSwitch />

              <IconButton>
                <VolumeUpIcon />
              </IconButton>
            </Box>
          </Box>

          <IconButton onClick={handleDrawerToggle} sx={menuIconStyle}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={drawerStyle(drawerWidth)}
        >
          {drawerUiContent}
        </Drawer>
      </Box>
    </Box>
  );
};

export default MyNavbar;

const appBarBox = {
  height: "65px",
  display: "flex",
  justifyContent: "center",
  position: "static",
  bgcolor: "transparent",

  /*-------| Display Scale 125% |-------*/
  "@media all and (min-resolution: 1.1dppx) and (max-resolution: 1.25dppx)": {
    height: "auto",
    px: "3rem",
  },

  /*-------| Display Scale 150% |-------*/
  "@media all and (min-resolution: 1.26dppx) and (max-resolution: 1.5dppx)": {
    height: "55px",
    px: "2rem",
  },
};

const contentBox = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  p: "0 !important",
};

const shimmerText = {
  fontSize: {
    lg: "var(--fontFor-24px-Lg--)",
    md: "var(--fontFor-24px-Md--)",
    sm: "var(--fontFor-24px-Sm--)",
    xs: "var(--fontFor-24px-Xs--)",
  },

  fontWeight: "600",
  color: "transparent",
  background: "var(--shimmerTextColor--)",
  backgroundSize: "200% 100%",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  animation: `${shimmer} 10s linear`,
  position: "relative",
  overflow: "hidden",
};

const drawerStyle = (drawerWidth) => ({
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    borderRadius: "0 8px 8px 0",
    background: "var(--drawerBg--)",
    textAlign: "center",
  },
});

const btnConatiner = {
  display: {
    lg: "flex",
    md: "flex",
    sm: "none",
    xs: "none",
  },

  alignItems: "center",

  gap: {
    lg: "3.5rem",
    md: "2rem",
    sm: "0",
    xs: "0",
  },
};

const themeAndMuteBtnBoxForSmall = {
  width: "100%",
  height: "5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  position: "absolute",
  bottom: "0",
  bgcolor: "var( --lightColor--)",
};

const themeAndMuteBtnBoxForLarge = {
  display: "flex",
  alignItems: "center",

  gap: {
    lg: "10px",
    md: "5px",
    sm: "0",
    xs: "0",
  },
};

const menuIconStyle = {
  display: {
    lg: "none",
    md: "none",
    sm: "block",
    xs: "block",
  },
};

const menuBtnContainer = {
  padding: "1px",
  background: "var(--btnBorderColor--)",
  borderRadius: "6px",
};

const registerBtn = {
  p: "1px 10px",

  fontSize: {
    lg: "var(--fontFor-16px-Lg--)",
    md: "var(--fontFor-16px-Md--)",
    sm: "var(--fontFor-16px-Sm--)",
    xs: "var(--fontFor-16px-Xs--)",
  },

  fontWeight: "400",
  color: "var(--fullWhite--)",
  textTransform: "capitalize",
  borderRadius: "5px",
  bgcolor: "var(--darkBlack--)",
  border: "none",

  "&:hover": {
    bgcolor: "var(--btnHoverBg--)",
  },

  /*-------| Display Scale 125% |-------*/
  "@media all and (min-resolution: 1.1dppx) and (max-resolution: 1.25dppx)": {
    fontSize: "var(--fontFor-16px-Md--)",
  },

  /*-------| Display Scale 150% |-------*/
  "@media all and (min-resolution: 1.26dppx) and (max-resolution: 1.5dppx)": {
    fontSize: "var(--fontFor-16px-Xs--)",
  },
};

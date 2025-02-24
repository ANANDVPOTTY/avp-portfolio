import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

// Mui
import { Avatar, Box, Typography } from "@mui/material";

// Images & Icons
import avatar from "/assets/images/avatar.jpg";

// Components used
import { insightsData } from "../../datas/Data";

const MyTestimonials = () => {
  const scrollRef = useRef(null);
  const startPosition = useRef(0);
  const scrollLeft = useRef(0);

  const [isDragging, setIsDragging] = useState(false);

  //-------| Horizontal Scrolling using Mouse Pointer |-------//
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startPosition.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startPosition.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const getInitials = (firstName, lastName) => {
    const firstInitial = firstName ? firstName[0].toUpperCase() : "";
    const lastInitial = lastName ? lastName[0].toUpperCase() : "";
    return `${firstInitial}${lastInitial}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.6,
        when: "beforeChildren",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };

  const avatarVariants = {
    hover: {
      scale: 1.1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Box sx={parentBox}>
      <Box>
        <Typography sx={textOneStyle}>Insights</Typography>
      </Box>

      <motion.div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        style={scrollBox}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        whileTap={{ cursor: "grabbing" }}
      >
        {insightsData?.map((item, index) => (
          <motion.div key={item.id} variants={cardVariants}>
            <Box sx={testimonialBox}>
              <Box sx={imageBoxBg}>
                <Box sx={imageBox}>
                  <motion.div variants={avatarVariants} whileHover="hover">
                    <Avatar
                      sx={imageContainer}
                      src={item.imageUrl}
                      component={motion.div}
                    >
                      {!item.imageUrl &&
                        getInitials(item.firstName, item.lastName)}
                    </Avatar>
                  </motion.div>

                  <motion.div
                    variants={textVariants}
                    transition={{ delay: 0.4 }}
                  >
                    <Box sx={nameAndDesignationBox}>
                      <Typography sx={textThreeStyle}>
                        {item.firstName}&nbsp;{item.lastName}
                      </Typography>

                      <Typography sx={textFourStyle}>
                        - {item.designation} -
                      </Typography>
                    </Box>
                  </motion.div>
                </Box>
              </Box>

              <motion.div variants={textVariants} transition={{ delay: 0.6 }}>
                <Box sx={detailsBox}>
                  <Typography sx={textTwoStyle}>{item.userComment}</Typography>
                </Box>
              </motion.div>
            </Box>
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
};

export default MyTestimonials;

const parentBox = {
  width: "100%",

  height: {
    lg: "70vh",
    md: "auto",
    sm: "auto",
    xs: "auto",
  },

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
};

const scrollBox = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexWrap: "nowrap",
  gap: "3rem",
  py: "2rem",
  cursor: "grab",
  overflow: "auto",
  userSelect: "none",

  "&:active": {
    cursor: "grabbing",
  },
};

const testimonialBox = {
  width: "40rem",
  flexShrink: 0,
  bgcolor: "var(--favBg--)",
  border: "1px solid #1e698092",
  borderRadius: "8px",
};

const imageBoxBg = {
  bgcolor: "var(--favBg2--)",
};

const imageBox = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  p: "1rem",
  bgcolor: "var(--favBg--)",
  borderRadius: "6px 6px 0 25px",
};

const imageContainer = {
  width: "6rem",
  height: "6rem",
  bgcolor: "var(--favBg2--)",
  border: "3px solid var(--darkBlack--)",
  outline: "2px solid var(--favPink--)",
};

const nameAndDesignationBox = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const detailsBox = {
  height: "12rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  p: "1rem",
  borderRadius: "0 25px 6px 6px",
  bgcolor: "var(--favBg2--)",
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
  height: "10rem",

  fontSize: {
    lg: "var(--fontFor-18px-Lg--)",
    md: "var(--fontFor-18px-Md--)",
    sm: "var(--fontFor-18px-Sm--)",
    xs: "var(--fontFor-18px-Xs--)",
  },

  fontFamily: "var(--fontFamilyTwo--)",
  fontWeight: "300",
  color: "var(--fullWhite--)",
  textAlign: "center",
  overflow: "auto",

  /*-------| Display Scale 125% |-------*/
  "@media all and (min-resolution: 1.1dppx) and (max-resolution: 1.25dppx)": {
    fontSize: "var(--fontFor-18px-Md--)",
  },

  /*-------| Display Scale 150% |-------*/
  "@media all and (min-resolution: 1.26dppx) and (max-resolution: 1.5dppx)": {
    fontSize: "var(--fontFor-18px-Xs--)",
  },
};

const textThreeStyle = {
  fontSize: {
    lg: "var(--fontFor-16px-Lg--)",
    md: "var(--fontFor-16px-Md--)",
    sm: "var(--fontFor-16px-Sm--)",
    xs: "var(--fontFor-16px-Xs--)",
  },

  fontFamily: "var(--fontFamilyOne--)",
  fontWeight: "300",
  color: "var(--fullWhite--)",
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

const textFourStyle = {
  fontSize: {
    lg: "var(--fontFor-14px-Lg--)",
    md: "var(--fontFor-14px-Md--)",
    sm: "var(--fontFor-14px-Sm--)",
    xs: "var(--fontFor-14px-Xs--)",
  },

  fontFamily: "var(--fontFamilyTwo--)",
  fontWeight: "400",
  color: "var(--favYellow--)",
  textAlign: "center",

  /*-------| Display Scale 125% |-------*/
  "@media all and (min-resolution: 1.1dppx) and (max-resolution: 1.25dppx)": {
    fontSize: "var(--fontFor-14px-Md--)",
  },

  /*-------| Display Scale 150% |-------*/
  "@media all and (min-resolution: 1.26dppx) and (max-resolution: 1.5dppx)": {
    fontSize: "var(--fontFor-14px-Xs--)",
  },
};

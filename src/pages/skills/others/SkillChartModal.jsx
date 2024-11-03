import React from "react";

// Mui
import { Box, Modal, Typography } from "@mui/material";

// Images & Icons
import img from "../../../assets/images/emptyStreet.svg";

export default function SkillChartModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Box
          component="img"
          src={img}
          alt="icon"
          sx={{ width: "500px", opacity: "0.7" }}
        />
        <Typography sx={{ fontSize: "20px", textAlign: "center", my: "2rem" }}>
          Upcoming...
        </Typography>
      </Box>
    </Modal>
  );
}

const modalStyle = {
  width: "600px",
  height: "400px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#1a1a1a",
  borderRadius: "12px",
  border: "1px solid #3a3a3a",
  p: 4,
};

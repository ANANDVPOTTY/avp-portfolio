import React from "react";

// Mui
import { Alert, Snackbar } from "@mui/material";

const MuiSnackToast = ({ open, handleClose, text }) => {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: "100%" }}
      >
        {text}
      </Alert>
    </Snackbar>
  );
};

export default MuiSnackToast;

import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Footer() {
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: "#B8E3E9"
      }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="body2" color="black">
          © {new Date().getFullYear()} Matrix Generator. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

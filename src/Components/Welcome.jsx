import { Box, Typography, Paper } from "@mui/material";

export default function Welcome() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
        padding: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: "2rem",
          maxWidth: 600,
          textAlign: "center",
          backgroundColor: "#93B1B5",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "600", color: "#0B2E33" }}
        >
          Welcome to Matrix Generator
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "20px", color: "#0B2E33" }}>
          Create, view, and work with matrices easily. Enter only positive values.
          Enter your desired rows and columns, and let the magic happen!
        </Typography>
      </Paper>
    </Box>
  );
}

import { AppBar, Toolbar, Typography } from "@mui/material";
import "../Styles/Header.css"; 

export default function Header() {
  return (
    <AppBar position="fixed" className="glass-header">
      <Toolbar>
        <Typography variant="h6" className="header-title">
          Matrix Generator
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

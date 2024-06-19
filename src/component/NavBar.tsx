import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { FC } from "react";
import Link from "next/link";

const NavBar: FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#10178f" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
      <Typography
        variant="h5"
        component="div"
        sx={{
          fontWeight: "bold",
          color: "#FFFFFF",
          fontFamily: "Proxima Nova",
        }}
      >
        PostGuru
      </Typography>
      <Box>
        <Button component={Link} href="/" color="inherit" sx={{ color: "#FFFFFF", textDecoration: "none", "&:hover": { textDecoration: "underline" }, "&:focus": { textDecoration: "underline" } }}>
          <Typography variant="subtitle1" sx={{ color: "#FFFFFF", textDecoration: "none" }}>Home</Typography>
        </Button>
        <Button component={Link} href="/about" color="inherit" sx={{ color: "#FFFFFF", textDecoration: "none", "&:hover": { textDecoration: "underline" }, "&:focus": { textDecoration: "underline" } }}>
          <Typography variant="subtitle1" sx={{ color: "#FFFFFF", textDecoration: "none" }}>About</Typography>
        </Button>
      </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

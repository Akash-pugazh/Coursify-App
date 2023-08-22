import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const AppBar = () => {
  return (
    <nav className="pt-2 px-2 flex justify-between items-center">
      <section className="logo">
        <Typography variant="h1" fontSize="2.2rem" fontWeight={400}>
          Coursify
        </Typography>
      </section>
      <section className="buttons flex gap-2">
        <Link to="signin">
          <Button variant="contained" size="small">
            Sign In
          </Button>
        </Link>
        <Link to="signup">
          <Button variant="contained" size="small">
            Sign Up
          </Button>
        </Link>
      </section>
    </nav>
  );
};

export default AppBar;

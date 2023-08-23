import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const AppBar = () => {
  const { pathname } = useLocation();
  if (pathname === "/") return;
  return (
    <nav className="pt-2 px-2 flex justify-between items-center">
      <section className="logo">
        <Link to="/">
          <Typography
            variant="h1"
            color={"white"}
            fontSize="2.2rem"
            fontWeight={400}
            className="drop-shadow-2xl"
          >
            Coursify
          </Typography>
        </Link>
      </section>
      <section className="buttons flex gap-2">
        {/* <Link to="/login">
          <Button variant="contained" size="small">
            Log In
          </Button>
        </Link>
        <Link to="/signup">
          <Button variant="contained" size="small">
            Sign Up
          </Button>
        </Link> */}
      </section>
    </nav>
  );
};

export default AppBar;

import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const AppBar = () => {
  const { pathname } = useLocation();
  const userState = useSelector(state => state.user);
  if (pathname === "/") return;
  return (
    <nav className="flex items-center justify-between px-2 pt-2">
      <section className="logo">
        <Link to="/">
          <Typography
            variant="h1"
            fontSize="2.2rem"
            fontWeight={400}
            className="drop-shadow-2xl"
          >
            Coursify
          </Typography>
        </Link>
      </section>
      {pathname.split("/").includes("user") ? (
        <section className="flex gap-5 buttons">
          <div className="flex items-center justify-center gap-1 mr-2">
            <div>
              <AiOutlineUser size={"1.5rem"} />
            </div>
            <div>{userState.userName}</div>
          </div>
          <Link to="/signup">
            <Button variant="contained" size="small">
              Log out
            </Button>
          </Link>
        </section>
      ) : (
        false
      )}
    </nav>
  );
};

export default AppBar;

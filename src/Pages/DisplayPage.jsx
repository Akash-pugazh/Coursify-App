import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const DisplayPage = () => {
  return (
    <div className="grid h-full bg-cover place-items-center">
      <div className="text-2xl text-center">
        <div className="p-5 mb-5 font-mono border-2 border-black select-none text-7xl">
          Coursify
        </div>
        <div className="mb-2">Era of Learning and Growing</div>
        <section className="flex items-center justify-center gap-2 py-5">
          <div>
            <Link to="/login">
              <Button variant="outlined">Log In</Button>
            </Link>
          </div>
          <div>
            <Link to="/signup">
              <Button variant="outlined">Sign Up</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DisplayPage;

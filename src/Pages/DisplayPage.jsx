import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import UserContext, { UserUpdateContext } from "../Context/UserContext";

const DisplayPage = () => {
  const { setAsUser, setAsAdmin } = useContext(UserUpdateContext);
  return (
    <div className="h-full grid place-items-center bg-cover">
      <div className="text-center text-2xl">
        <div className="mb-5 text-7xl font-mono border-2 border-black p-5">
          Coursify
        </div>
        <div className="mb-2">Era of Learning and Growing</div>
        <section className="py-5 flex gap-2 items-center justify-center">
          <div>
            <Link to="admin/signup" onClick={setAsAdmin}>
              <Button variant="outlined">Admin</Button>
            </Link>
          </div>
          <div>
            <Link to="user/signup" onClick={setAsUser}>
              <Button variant="outlined">User</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DisplayPage;

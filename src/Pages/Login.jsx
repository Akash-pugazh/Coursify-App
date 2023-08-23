import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
const login = () => {
  const [details, setDetails] = useState({
    userName: "",
    password: "",
  });
  const handleUserNameChange = e => {
    setDetails({ ...details, userName: e.target.value });
  };
  const handlePasswordChange = e => {
    setDetails({ ...details, password: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (details.userName.length <= 3 || details.password.length <= 8) return;
    setDetails({
      userName: "",
      password: "",
    });
  };

  return (
    <div id="sign-in" className="h-full grid place-items-center px-10">
      <Card className="p-10">
        <Typography variant="h5" fontSize={"1.3rem"} className="text-center">
          Welcome Back!
          <span className="block font-semibold text-blue-500">
            Login to your account
          </span>
        </Typography>
        <br />
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={handleUserNameChange}
            value={details.userName}
            fullWidth
            required
            id="outlined-required"
            label="UserName"
            type="text"
            variant="standard"
            margin="normal"
          />
          <TextField
            onChange={handlePasswordChange}
            value={details.password}
            fullWidth
            required
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            margin="normal"
          />
          <br />
          <br />
          <Button type="submit" variant="outlined">
            Log In
          </Button>
          <div className="mt-4 flex items-center">
            <Typography marginRight={".5rem"} fontSize={".9rem"}>
              New to Coursify, Create account here
              <Link to="/signup" className="ml-2 text-blue-500 underline">
                Sign Up
              </Link>
            </Typography>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default login;

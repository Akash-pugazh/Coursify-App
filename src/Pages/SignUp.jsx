import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { UserContext } from "../Context/UserContext";
import endPoint from "../Services/EndPoints";
const SignUp = () => {
  const [details, setDetails] = useState({
    userName: "",
    password: "",
  });
  const adminOrUser = useContext(UserContext);
  const handleUserNameChange = e => {
    setDetails({ ...details, userName: e.target.value });
  };
  const handlePasswordChange = e => {
    setDetails({ ...details, password: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (details.userName.length <= 3 || details.password.length <= 8) return;
    const newUserObj = {
      userName: details.userName,
      password: details.password,
    };
    fetch(`${endPoint}${adminOrUser}/signup`, {
      method: "Post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUserObj),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
    setDetails({
      userName: "",
      password: "",
    });
  };

  return (
    <div id="sign-up" className="h-full grid place-items-center px-10">
      <Card className="p-10">
        <Typography variant="h5" fontSize={"1.3rem"} className="text-center">
          Welcome to Coursify!
          <span className=" block font-semibold text-blue-500">Sign Up</span>
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
            variant="standard"
            margin="normal"
          />
          <br />
          <br />
          <Button type="submit" variant="outlined">
            Sign Up
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;

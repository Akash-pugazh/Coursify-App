import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { UserContext } from "../Context/UserContext";
import endPoint from "../Services/EndPoints";
const SignIn = () => {
  const [details, setDetails] = useState({
    userName: "",
    password: "",
  });
  const adminOrUser = useContext(UserContext);
  console.log(adminOrUser);
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
    fetch(`${endPoint}${adminOrUser}/login`, {
      method: "Post",
      headers: {
        "Content-type": "application/json",
        username: newUserObj.userName,
        password: newUserObj.password,
      },
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
    <div id="sign-in" className="h-full grid place-items-center px-10">
      <Card className="p-10">
        <Typography variant="h5" fontSize={"1.3rem"} className="text-center">
          Welcome Back!
          <span className="block font-semibold text-blue-500">Sign in</span>
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
            Sign In
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default SignIn;

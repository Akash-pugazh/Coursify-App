import React from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
const SignIn = () => {
  return (
    <div id="sign-in" className="h-full grid place-items-center px-10">
      <Card className="p-10">
        <Typography variant="h5" fontSize={"1.3rem"} className="text-center">
          Welcome to Coursify!
          <span className="block font-semibold text-blue-500">Sign in</span>
        </Typography>
        <br />
        <form>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="UserName"
            type="text"
            variant="standard"
            margin="normal"
          />
          <TextField
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
          <Button variant="outlined">Sign In</Button>
        </form>
      </Card>
    </div>
  );
};

export default SignIn;

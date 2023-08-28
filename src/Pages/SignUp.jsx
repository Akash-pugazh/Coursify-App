import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { userSignUp } from "../Services/UserAccountActivities";
import { useSelector, useDispatch } from "react-redux";
import { setUserDetails } from "../Features/User/userSlice";
const SignUp = () => {
  const [details, setDetails] = useState({
    userName: "",
    password: "",
  });
  const userState = useSelector(state => state.user);
  console.log(userState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (success === true) {
      navigate("/user");
    } else if (success === false) {
      setTimeout(() => {
        setSuccess(null);
      }, 2000);
    }
  }, [success]);

  const handleUserNameChange = e => {
    setDetails({ ...details, userName: e.target.value });
  };
  const handlePasswordChange = e => {
    setDetails({ ...details, password: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (details.userName.length <= 3 || details.password.length < 8) return;
    userSignUp(details, setLoading, setSuccess, setError);
    dispatch(setUserDetails(details.userName, details.password));
    setDetails({
      userName: "",
      password: "",
    });
  };

  return (
    <div id="sign-up" className="grid h-full px-10 place-items-center">
      <Card className="p-10">
        <Typography variant="h5" fontSize={"1.3rem"} className="text-center">
          Hey There!
          <span className="block font-semibold text-blue-500 ">
            Create your new account
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
            variant="standard"
            margin="normal"
          />
          <br />
          <br />
          <LoadingButton loading={loading} type="submit" variant="outlined">
            Sign Up
          </LoadingButton>
          <div className="flex items-center mt-4">
            <Typography marginRight={".5rem"} fontSize={".9rem"}>
              Already Registered, Login here
              <Link to="/login" className="ml-2 text-blue-500 underline">
                Log In
              </Link>
            </Typography>
          </div>
          {success === false ? (
            <div className="mt-4 text-center text-red-500 error-message animate-shake">
              {error?.message}
            </div>
          ) : null}
        </form>
      </Card>
    </div>
  );
};

export default SignUp;

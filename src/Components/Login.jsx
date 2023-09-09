import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "./UserStateData.jsx";
import { adminState } from "./AdminAtomData.jsx";
import { FormControlLabel, Switch } from "@mui/material";
import BaseURL from "./BaseUrlData.jsx";

// File is incomplete. You need to add input boxes to take input for users to login.
function Login() {
  const [user, setUser] = useRecoilState(userState);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [isAdmin, setIsAdmin] = useRecoilState(adminState);
  const [admin, setAdmin] = React.useState(isAdmin);

  const navigate = useNavigate();

  async function logIn(e) {
    e.preventDefault();

    // request to fetch token using axios
    try {
      const headers = {
        "Content-Type": "application/json",
        username: email,
        password,
      };
      const url = admin ? `${BaseURL}/admin/login` : `${BaseURL}/users/login`;
      const res = await axios.post(url, {}, { headers });

      console.log("post req success");
      localStorage.setItem("token", res.data.token);

      setUser({
        ...user,
        username: email,
      });

      setIsAdmin(admin);
      navigate("/");
    } catch (err) {
      console.log("post req failed");
      alert("Login failed, retry!!");
    }

    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <div>
        <div className="flex flex-col items-center w-screen h-auto mt-10 text-center justify-baseline">
          <p className="text-4xl font-semibold text-gray-500">Welcome back!</p>
          <p className="text-3xl font-semibold leading-10 text-gray-400 my-7">
            Lets get you signed in
          </p>

          <form
            onSubmit={logIn}
            className="flex flex-col items-center w-1/4 h-auto gap-4 p-4 pt-10 bg-white border border-gray-300 rounded-lg shadow-lg w-100"
          >
            <input
              type="text"
              placeholder="UserName"
              className=" border-2 bg-[#f7f7f9] p-2 rounded-sm shadow-md w-2/3 hover:bg-white focus:bg-white"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-[#f7f7f9] p-2 rounded-sm shadow-md w-2/3 hover:bg-white focus:bg-white"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <FormControlLabel
              control={
                <Switch checked={admin} onChange={() => setAdmin(!admin)} />
              }
              label="Admin Role"
            />

            <button
              className="px-4 py-2 mt-4 font-bold text-white rounded-lg bg-sky-500 hover:bg-sky-700"
              onClick={logIn}
            >
              Sign In
            </button>
            {/* <button onClick = {() => {
                        console.log('')
                    }}></button> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

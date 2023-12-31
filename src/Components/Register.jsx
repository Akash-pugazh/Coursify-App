import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { userState } from "./UserStateData";
import { adminState } from "./AdminAtomData";
import BaseURL from "./BaseUrlData";

import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  const [isAdmin, setIsAdmin] = useRecoilState(adminState);
  const [admin, setAdmin] = React.useState(isAdmin);

  async function signUp() {
    try {
      const adminHeaders = {
        "Content-Type": "application/json",
        username: email,
        password,
      };
      const url = admin ? `${BaseURL}/admin/signup` : `${BaseURL}/users/signup`;
      let res = null;
      if (admin) {
        res = await axios.post(url, {}, { adminHeaders });
      } else {
        res = await axios.post(url, { username: email, password });
      }

      console.log("post req success");
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      setUser({
        ...user,
        username: email,
      });
      setIsAdmin(admin);
      navigate("/");
    } catch (err) {
      console.log("post req failed: " + err);
      alert("Signup failed, retry!! " + err.message);
      return;
    }

    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <div>
        <div className="flex flex-col items-center w-screen h-auto mt-10 text-center justify-baseline">
          <p className="text-4xl font-semibold text-gray-500 my-7">
            Create a new account
          </p>

          <form
            onSubmit={signUp}
            className="flex flex-col items-center w-1/4 h-auto gap-4 p-4 pt-10 bg-white border border-gray-300 rounded-lg shadow-lg w-100"
          >
            <input
              type="text"
              required
              placeholder="username"
              className=" border-2 bg-[#f7f7f9] p-2 rounded-sm shadow-md w-2/3 hover:bg-white focus:bg-white"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              required
              placeholder="Password"
              className="bg-[#f7f7f9] p-2 rounded-sm shadow-md w-2/3 hover:bg-white focus:bg-white"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
            <FormControlLabel
              control={
                <Switch checked={admin} onChange={() => setAdmin(!admin)} />
              }
              label="Admin Role"
            />

            <button
              type="submit"
              className="bg-[#212121] text-white hover:bg-neutral-700 font-bold py-2 px-4 rounded-lg mt-4"
              onClick={signUp}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

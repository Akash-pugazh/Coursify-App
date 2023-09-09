import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

import { userState } from "./UserStateData";
import { adminState } from "./AdminAtomData";
import BaseURL from "./BaseUrlData";

import { CircularProgress } from "@mui/material";
import { FaUser } from "react-icons/fa";

export default function Appbar() {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
  const [isAdmin] = useRecoilState(adminState);
  useEffect(() => {
    try {
      const url = BaseURL + "/admin/me";

      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then(res => res.json())
        .then(data => {
          if (data.username) {
            setUser({
              username: data.username,
              loading: false,
            });
          } else {
            setUser({
              username: null,
              loading: false,
            });
          }
        })
        .catch(err => {
          console.log("/me api fetch request fail: " + err);
          setUser({
            ...user,
            loading: false,
          });
        });
    } catch (err) {
      console.error("/me api fetch request fail: " + err);
      setUser({
        ...user,
        loading: false,
      });
    }
  }, []);

  const logoutHandler = () => {
    localStorage.setItem("token", null);
    setUser({
      ...user,
      username: null,
    });
    navigate("/");
  };

  function addCourseHandler() {
    navigate("/add-course");
  }

  function exploreHandler() {
    navigate("/courses");
  }

  function enrolledCourse() {
    navigate("/enrolled-courses");
  }

  const AdminLogIn = () => (
    <div className="flex items-center gap-2">
      {user.username}
      <button
        className="hover:bg-white bg-[#212121] text-white hover:text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow"
        onClick={exploreHandler}
      >
        Catalog
      </button>
      <button
        className="hover:bg-white bg-[#212121] text-white hover:text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow"
        onClick={addCourseHandler}
      >
        Create
      </button>
      <button
        className="hover:bg-white bg-[#212121] text-white hover:text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );

  const UserLogIn = () => (
    <div className="flex items-center gap-2">
      <div className="mr-2 underline">
        <div className="flex items-center gap-2">
          <div>
            <FaUser />
          </div>
          <div>{user.username}</div>
        </div>
      </div>
      <button
        className="hover:bg-white bg-[#212121] text-white hover:text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow"
        onClick={exploreHandler}
      >
        Catalog
      </button>
      <button
        className="hover:bg-white bg-[#212121] text-white hover:text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow"
        onClick={enrolledCourse}
      >
        Enrolled Courses
      </button>
      <button
        className="hover:bg-white bg-[#212121] text-white hover:text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );

  const LogOut = () => (
    <div className="flex gap-2">
      <Link
        to="/login"
        className="hover:bg-white bg-[#212121] text-white hover:text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="hover:bg-white bg-[#212121] text-white hover:text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow"
      >
        Signup
      </Link>
    </div>
  );

  const logoClickHandler = () => {
    navigate("/");
  };

  return (
    <div>
      <nav className="flex items-center justify-between w-full h-auto p-4 px-8">
        <div
          className="h-10 text-4xl font-semibold cursor-pointer"
          onClick={logoClickHandler}
        >
          Coursify
        </div>
        {user.loading ? (
          <CircularProgress />
        ) : user.username ? (
          isAdmin ? (
            <AdminLogIn />
          ) : (
            <UserLogIn />
          )
        ) : (
          <LogOut />
        )}
      </nav>
    </div>
  );
}

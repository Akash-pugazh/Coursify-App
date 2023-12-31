import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "./UserStateData";
import { useNavigate } from "react-router-dom";
import { adminState } from "./AdminAtomData";
import BaseURL from "./BaseUrlData";

export default function App() {
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
      console.log("/me api fetch request fail: " + err);
      setUser({
        ...user,
        loading: false,
      });
    }
  }, []);

  const logoutHandler = () => {
    localStorage.setItem("token", null);
    // window.location = "/";
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

  const LogIn = () => (
    <div className="flex gap-2 items-center">
      <div>{user.username}</div>
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
    <div className="flex gap-2 items-center">
      <div>{user.username}</div>
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
      <nav className="h-auto w-full items-center flex justify-between p-8">
        <span
          className="text-4xl h-10 cursor-pointer"
          onClick={logoClickHandler}
        >
          Coursify
        </span>
        {user.loading ? (
          <CircularProgress />
        ) : user.username ? (
          isAdmin ? (
            <LogIn />
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

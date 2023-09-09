// ^ Importing Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ^ Importing Recoil
import { RecoilRoot } from "recoil";

// ^ Importing Components
import Login from "./Components/Login";
import Landing from "./Components/Landing";
import AddCourse from "./Components/AddCourse";
import Register from "./Components/Register";
import ShowCourses from "./Components/ShowCourses";
import Appbar from "./Components/ApppBar";
import EditCourse from "./Components/EditCourse";
import Footer from "./Components/Footer";
import EnrolledCourses from "./Components/EnrolledCourses";
import NotFound from "./Components/UrlNotFound";

// ^ Importing Css
import "./App.css";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100vw",
        fontFamily: "Quicksand",
      }}
    >
      <RecoilRoot>
        <Router>
          <Appbar />
          <div
            style={{
              flex: 1,
              overflowX: "hidden",
            }}
          >
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/add-course" element={<AddCourse />} />
              <Route path="/courses" element={<ShowCourses />} />
              <Route path="/courses/:courseId" element={<EditCourse />} />
              <Route path="/enrolled-courses" element={<EnrolledCourses />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </RecoilRoot>
    </div>
  );
}


export default App;
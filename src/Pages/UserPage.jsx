import React, { useEffect, useState } from "react";
import CardCourse from "../Components/CardCourse";
import axios from "axios";
const UserPage = () => {
  const [courses, setCourses] = useState([]);
  async function getCourses() {
    try {
      const res = await axios.get("http://localhost:3000/users/courses");
      const data = res.data
      setCourses(data);
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    getCourses();
  }, []);
  const renderCards =
    courses.length !== 0
      ? courses.map(course => {
          return (
            <div key={course._id}>
              <CardCourse
                courseId={course._id}
                courseName={course.title}
                courseImageLink={course.imageLink}
                courseDescription={course.description}
                coursePrice={course.price}
                courseAuthorName={course.title}
              />
            </div>
          );
        })
      : false;
  // TODO Modify Styling
  return <div className="flex">{renderCards}</div>;
};

export default UserPage;

import React, { useEffect, useState } from "react";
import CardCourse from "../Components/CardCourse";

const UserPage = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users/courses")
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);
  const renderCards =
    courses.length !== 0
      ? courses.map(course => {
          return (
            <div key={course._id}>
              <CardCourse
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

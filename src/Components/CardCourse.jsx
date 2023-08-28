import React from "react";
import pythonCourse from "../Assets/Images/pythonCourse.jpg";
const CardCourse = () => {
  return (
    <div className="card-course shadow-[0px_4px_12px_rgba(0, 0, 0, 0.1)]">
      <img src={pythonCourse} className="w-[15rem]" alt="Course-Image" />
      <h1>Course Name</h1>
      <p>
        Description : Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Odit porro ad incidunt reiciendis corporis molestias natus quibusdam
        ullam iusto.
      </p>
      <button>Buy Now</button>
    </div>
  );
};

export default CardCourse;

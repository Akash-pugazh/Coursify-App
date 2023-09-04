import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { addCourse } from "../Features/User/userSlice";
const CardCourse = ({
  courseId,
  courseName,
  courseDescription,
  coursePrice,
  courseImageLink,
}) => {
  const dispatch = useDispatch();
  async function handleBuyNow(courseId) {
    try {
      const res = await axios.post(
        `http://localhost:3000/users/courses/${courseId}`
      );
      const { status, course } = res.data;
      if (status === "Success") {
        dispatch(addCourse(course));
      }
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  }

  const user = useSelector(state => state.user);
  let userPurchasedCoursesIds = user.purchasedCourses.map(
    course => course !== undefined && course._id
  );
  console.log(userPurchasedCoursesIds);

  console.log(courseId);
  return (
    <div className="flex flex-col gap-2 w-[20rem] shadow-lg p-4  select-none">
      <img
        src={courseImageLink}
        className="w-full h-[10rem] object-cover"
        alt="Course-Image"
      />
      <h1 className="text-2xl flex-nowrap font-bold">{courseName}</h1>

      <p className="leading-4 text-gray-500">{courseDescription}</p>
      <p>
        Price : <span className="font-semibold">${coursePrice}</span>
      </p>

      {!userPurchasedCoursesIds.includes(courseId) ? (
        <button
          type="button"
          className="p-1 text-white transition-all duration-200 ease-linear bg-blue-400 rounded  hover:bg-blue-600"
          onClick={() => handleBuyNow(courseId)}
        >
          Buy Now
        </button>
      ) : (
        <button
          type="button"
          className="p-1 text-white transition-all duration-200 ease-linear bg-blue-400 rounded  hover:bg-blue-600"
        >
          View Course
        </button>
      )}
    </div>
  );
};

export default CardCourse;

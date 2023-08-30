import React from "react";
const CardCourse = ({
  courseName,
  courseDescription,
  coursePrice,
  courseImageLink,
}) => {
  return (
    <div className="flex flex-col gap-2 w-[15rem] shadow-lg p-4  select-none">
      <img src={courseImageLink} className="w-[15rem]" alt="Course-Image" />
      <h1 className="text-2xl font-bold">{courseName}</h1>

      <p className="leading-4 text-gray-500">{courseDescription}</p>
      <p>
        Price : <span className="font-semibold">${coursePrice}</span>
      </p>
      <button
        type="button"
        className="p-1 text-left text-white transition-all duration-1000 ease-in-out bg-blue-400 rounded w-max hover:bg-blue-600"
      >
        Buy Now
      </button>
    </div>
  );
};

export default CardCourse;

import React from "react";

const Button = () => {
  return (
    <div className=" cursor-pointer relative border w-44 border-gray-800 rounded-lg text-white bg-gray-500 shadow-lg left-12">
      <select
        className=" cursor-pointer appearance-none  w-full py-1 px-2 bg-gray-800"
        name="whatever"
        id="frm-whatever"
      >
        <option value="1">All category</option>
        <option value="2"> Action</option>
        <option value="3">Another action</option>
        <option value="4">Somthing else here</option>
      </select>
      <div className="cursor-pointer absolute right-0 top-0 bottom-0 flex items-center px-2 text-white">
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default Button;

import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex px-3 py-[6px] justify-center items-center bg-buttonColor mx-5 whitespace-nowrap  text-white  rounded-[0.25rem]   ${className}`}
    >
      {text}
      <IoMdArrowDropdown size={19.5} />
    </button>
  );
};

export default Button;

import React from "react";
import { IoIosMan } from "react-icons/io";

const Button3 = () => {
  return (
    <button className=" flex gap-2 text-gray-50 text-lg pl-7 hover:text-orange-500 duration-400  cursor-pointer">
      <IoIosMan />
      CART
    </button>
  );
};

export default Button3;

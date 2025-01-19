import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Button2 = () => {
  return (
    <button className=" flex gap-2 text-gray-50 text-lg pl-7 hover:text-orange-500 duration-400  cursor-pointer">
      <FaShoppingCart />
      CART
    </button>
  );
};

export default Button2;

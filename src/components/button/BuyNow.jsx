import React from "react";

const BuyNow = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer flex px-3 py-[6px] absolute top-[570px] left-[680px] w-36 items-center justify-center h-12  bg-buttonColor mx-5 whitespace-nowrap  text-white  rounded-[0.25rem]   ${className}`}
    >
      BUY NOW
    </button>
  );
};

export default BuyNow;

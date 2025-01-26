import React from "react";

const Juwilery = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={` flex px-3 py-[6px] absolute top-[1900px] 
        left-[680px] w-36 items-center justify-center h-12
           mx-5 whitespace-nowrap  text-black 
            rounded-[0.25rem] text-7xl ${className}`}
    >
      jewellery
    </button>
  );
};

export default Juwilery;

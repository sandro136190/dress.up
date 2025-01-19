import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className=" left-10 flex items-center justify-center top-10 px-8 py-2 text-lg w-4/5 ">
      <div className="">
        <input
          type="text"
          className=" rounded-l-md placeholder-gray-600 h-9 w-96 pl-3 "
          placeholder="Search here"
        />
      </div>
      <div className="bg-orange-600 w-10 flex h-9 items-center justify-center rounded-r-md">
        <IoSearchSharp color="white" size={19} />
      </div>
    </div>
  );
};

export default SearchBar;

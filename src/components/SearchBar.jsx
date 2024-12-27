import React from "react";

const SearchBar = () => {
  return (
    <div className=" left-10 flex items-center justify-center top-10 px-8 py-2 text-3xl w-4/5">
      <div className="">
        <input type="text" className="w-full" placeholder="Search here" />
      </div>
    </div>
  );
};

export default SearchBar;

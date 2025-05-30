import React from "react";

const Language = () => {
  return (
    <div className=" cursor-pointer relative border w-44 border-gray-300 text-gray-800 bg-white shadow-lg">
      <select
        className=" cursor-pointer appearance-none  w-full py-1 px-2 bg-white"
        name="whatever"
        id="frm-whatever"
      >
        <option value="1">English</option>
        <option value="2">German</option>
        <option value="3">Russian</option>
        <option value="4">Georgian</option>
        <option value="5">French</option>
        <option value="6">Italian</option>
        <option value="7">Spain</option>
        <option value="8">Portuguse</option>
        <option value="9">Polish</option>
        <option value="10">Japanese</option>
        <option value="11">Arabic </option>
        <option value="12">Mandarin </option>
        <option value="13">Chinese</option>
        <option value="14">Hindi</option>
        <option value="15">Bengali</option>
        <option value="16">Turkish</option>
        <option value="17">Vietnamese</option>
        <option value="18">Persian</option>
        <option value="19">Farsi</option>
        <option value="20">Ukrainian</option>
        <option value="21">Greek</option>
        <option value="22">Romanian</option>
        <option value="23">Filipino</option>
        <option value="24">Dutch</option>
        <option value="25">Urdu</option>
        <option value="26">Swahili</option>
        <option value="27">Thai</option>
        <option value="28">Hebrew</option>
        <option value="29">Kannada</option>
        <option value="30">Serbian</option>
        <option value="31">Indonesian</option>
        <option value="31">Malayalam</option>
      </select>
      <div className="cursor-pointer absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
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

export default Language;

import { headerNavList } from "@/data/data";
import React from "react";

const Header = () => {
  return (
    <div className="relative ">
      <div className="absolute w-full  flex items-center justify-center  ">
        <nav
          className="text-textColor bg-headerColor text-[17px] w-[1110px] h-[63px]  bg-opacity-95 items-center flex justify-center"
          style={{ clipPath: "polygon(0 0, 100% 0, 96% 100%, 3% 100%)" }}
        >
          <ul className="flex gap-[23px] ">
            {headerNavList.map((item, index) => (
              <a
                className="hover:text-red-500 duration-400  cursor-pointer  "
                key={index}
              >
                {item}
              </a>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

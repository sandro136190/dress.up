import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import { GiHamburgerMenu } from "react-icons/gi";

import Image from "next/image";
import Button from "@/components/Button";
import Language from "@/components/Language";
import Button2 from "@/components/Button2";
import Button3 from "@/components/Button3";

export default function Home() {
  return (
    <div className="">
      <Header />

      <div className="  h-screen bg-custom-bg bg-cover bg-center pt-24">
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://html.design/demo/eflyer/images/logo.png"
            alt="Eflyer Logo"
            className=""
          />

          <div className="flex pt-5 justify-between  items-center ">
            <GiHamburgerMenu size={65} color="white" />
            <Button text="All Category" />
            <SearchBar />
            <Language />
            <Button2 />
            <Button3 />
          </div>
        </div>
      </div>
    </div>
  );
}

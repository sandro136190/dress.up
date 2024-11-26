import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import { FaAlignRight } from "react-icons/fa";

import Image from "next/image";

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

          <div className="flex pt-5">
            <FaAlignRight size={40} color="white" />
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
}

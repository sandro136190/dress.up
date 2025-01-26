import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import { GiHamburgerMenu } from "react-icons/gi";

import Image from "next/image";
import Button from "@/components/button/Button";
import Language from "@/components/Language";
import Button2 from "@/components/button/Button2";
import Button3 from "@/components/button/Button3";
import BuyNow from "@/components/button/BuyNow";
import Electrics from "@/components/electronics/Electronics";
import ElectronicsPage from "@/components/electronics/ElectronicsPage";
import Page2 from "@/components/electronics/Page2";
import Page3 from "@/components/electronics/Page3";
import Fasion from "@/components/fasion/Fasion";
import Page1 from "@/components/fasion/Page1.1";
import Page4 from "@/components/fasion/Page2.1";
import Page5 from "@/components/fasion/Page3.1";
import Juwilery from "@/components/juvilery/juvilery";
import Juwilery1 from "@/components/juvilery/jewellery1";
import Juwilery2 from "@/components/juvilery/jewellery2";
import Juwilery3 from "@/components/juvilery/jewellery3";
import Footer from "@/components/footer";

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
            <BuyNow />
            <Electrics />
            <ElectronicsPage />
            <Page2 />
            <Page3 />
            <Fasion />
            <Page1 />
            <Page4 />
            <Page5 />
            <Juwilery />
            <Juwilery1 />
            <Juwilery2 />
            <Juwilery3 />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

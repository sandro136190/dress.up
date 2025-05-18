import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 absolute bottom-0 w-[1540px] right-1  h-80 top-[2400px]">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Eflyer</h1>

        <div className="flex items-center justify-center mb-4">
          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border-b border-white text-white focus:outline-none focus:ring-0 placeholder-gray-400 mr-2"
          />
          <button className="text-orange-500 font-bold">SUBSCRIBE</button>
        </div>

        <nav className="mb-4">
          <ul className="flex justify-center space-x-8">
            <li>
              <a href="#" className="hover:underline">
                Best Sellers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Gift Ideas
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                New Releases
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Today's Deals
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Customer Service
              </a>
            </li>
          </ul>
        </nav>

        <p className="mb-4">Creator's number : +995 555 223 338 6</p>

        <p className="text-sm text-gray-400">
          &copy; 2020 All Rights Reserved. Design by Free HTML Templates
        </p>
      </div>
    </footer>
  );
};

export default Footer;

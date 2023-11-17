import React from "react";
import { cross } from "../assets/icons";
import { navLinks } from "../constants";

const MobileMenu = ({ toggleMenu }) => {
  return (
    <div className="fixed z-20 h-screen w-screen bg-black bg-opacity-30 text-white">
      <div className="absolute z-30 top-0 right-0 w-1/2 h-screen bg-black">
        <div className="flex padding-x py-8 justify-end">
          <img
            src={cross}
            alt="close"
            width={25}
            height={25}
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>
        <ul className="w-full flex flex-col px-3">
          {navLinks.map((navItem) => (
            <li key={navItem.label} className="w-full py-2 text-center">
              <a
                href={navItem.href}
                onClick={toggleMenu}
                className="block py-4 text-lg font-bold font-palanquin cursor-pointer rounded-lg hover:text-slate-gray hover:bg-white"
              >
                {navItem.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;

"use client";

import GeneralNav from "./generalNav";
import SeasonNav from "./seasonNav";
import React, { useState } from "react";
import { Menu } from "lucide-react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleClick} className="p-4 hover:bg-indigo-800">
        <p className={isOpen === true ? `text-orange-300` : `text-white`}>
          <Menu />
        </p>
      </button>
      <nav
        className={
          isOpen === true
            ? `absolute top-14 right-0 left-0 z-99 mx-8 bg-indigo-500`
            : `hidden`
        }
      >
        <SeasonNav />
        <GeneralNav />
      </nav>
    </>
  );
}

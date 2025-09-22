"use client";

import GeneralNav from "./generalNav";
import SeasonNav from "./seasonNav";
import React, { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleClick} className="hover:bg-indigo-800 p-4">
        <p className={isOpen === true ? `text-orange-300` : `text-white`}>
          ham
        </p>
      </button>
      <nav
        className={
          isOpen === true
            ? `absolute z-99 top-14 right-0 left-0 bg-indigo-500 mx-8`
            : `hidden`
        }
      >
        <SeasonNav />
        <GeneralNav />
      </nav>
    </>
  );
}

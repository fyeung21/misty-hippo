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
      <button onClick={handleClick}>
        <p>ham</p>
      </button>
      {isOpen === true ? (
        <nav>
          <SeasonNav />
          <GeneralNav />
        </nav>
      ) : null}
    </>
  );
}

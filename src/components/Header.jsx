"use client";
import React, { useState } from "react";
import Link from "next/link";
// import Searchbar from "./SearchBar";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <header className="h-[10vh] w-full bg-[#040203] text-[#fffffe]">
      <div className="flex h-full px-5 md:px-10 items-center justify-between">
        <Link href="/">
          <div className="logo font-['Press_Start_2P'] hover:text-[#7053ff] text-xl">
            <span className="text-[#7053ff]">A</span>nime
            <span className="text-[#7053ff]">N</span>exus
          </div>
        </Link>
        {/* <div className="searchbar w-[50%]">
          <Searchbar />
        </div> */}
        <div className="navs hidden lg:flex">
          <ul className="flex font-['Press_Start_2P']  text-[14px] lg:text-[12px] items-center gap-20 justify-end">
            <li>
              <Link href="/First/1" className="hover:text-[#7053ff]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/TopAnime" className="hover:text-[#7053ff]">
                Top Anime
              </Link>
            </li>
            <li>
              <Link href="/Suggestions" className="hover:text-[#7053ff]">
                Get Suggestions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#7053ff]">
                Genre
              </Link>
            </li>
          </ul>
        </div>
        <div className="mobile z-10 flex lg:hidden">
          <button
            onClick={handleOpen}
            className="flex flex-col gap-2 items-end justify-center"
          >
            <div className="w-10 h-[2px] bg-white"></div>
            <div className="w-6 h-[2px] bg-white"></div>
          </button>
          <div
            className={`mobile menu  absolute left-0 top-0 bg-white  gap-10 w-full ${
              open ? "flex flex-col" : "hidden"
            }`}
          >
            <div className="w-full flex justify-end p-8 sm:p-10 ">
              <div className="cross w-fit text-right flex items-center">
                <button onClick={handleClose} className="close"></button>
              </div>
            </div>
            <ul className="flex flex-col  font-['Press_Start_2P'] px-10 sm:px-20 pb-20 text-[14px] text-black  gap-10 justify-center h-full items-center">
              <li>
                <Link href="/First/1" className="hover:text-[#7053ff]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/TopAnime" className="hover:text-[#7053ff]">
                  Top Anime
                </Link>
              </li>
              <li>
                <Link href="/Suggestions" className="hover:text-[#7053ff]">
                  Get Suggestions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#7053ff]">
                  Genre
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

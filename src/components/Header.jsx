"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../app/context/AuthContext";
// import Searchbar from "./SearchBar";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);
  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const checkAuth = async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 50);
        setLoading(false);
      });
    };
    checkAuth();
  }, [user]);
  return (
    <header className="h-[10vh] w-full bg-[#040203] text-[#fffffe]">
      <div className="flex h-full px-5 md:px-10 items-center justify-between">
        <Link href="/">
          <div className="logo font-['cfour'] font-bold hover:text-[#7053ff] text-3xl">
            <span className="text-[#7053ff]">A</span>nime
            <span className="text-[#7053ff]">N</span>exus
          </div>
        </Link>
        {/* <div className="searchbar w-[50%]">
          <Searchbar />
        </div> */}
        <div className="navs hidden lg:flex">
          <ul className="flex font-['dark']   font-semibold text-[14px] lg:text-[27px] items-center gap-20 justify-end">
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
              <Link href="/Wishlist" className="hover:text-[#7053ff]">
                Wishlist
              </Link>
            </li>
            <li>
              <Link href="/Suggestions" className="hover:text-[#7053ff]">
                Get Suggestions
              </Link>
            </li>
            {loading? null : !user ? (
                <li onClick={handleSignIn}>
                  <Link href="#" className="hover:text-[#7053ff]">
                    Login
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <p className="hover:text-[#7053ff]">
                      Welcome {user.displayName}
                    </p>
                  </li>
                  <li onClick={handleSignOut}>
                    <p className="hover:text-[#7053ff] cursor-pointer">
                      Sign Out
                    </p>
                  </li>
                </>
              )}
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
            <ul className="flex flex-col  font-['dark'] px-10 sm:px-20 pb-20 text-[14px] text-black  gap-10 justify-center h-full items-center">
              <li>
                <Link
                  onClick={handleClose}
                  href="/First/1"
                  className="hover:text-[#7053ff]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClose}
                  href="/TopAnime"
                  className="hover:text-[#7053ff]"
                >
                  Top Anime
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClose}
                  href="/Suggestions"
                  className="hover:text-[#7053ff]"
                >
                  Get Suggestions
                </Link>
              </li>
              {loading? null : !user ? (
                <li onClick={handleSignIn}>
                  <Link href="#" className="hover:text-[#7053ff]">
                    Login
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <p className="hover:text-[#7053ff]">
                      Welcome {user.displayName}
                    </p>
                  </li>
                  <li onClick={handleSignOut}>
                    <p className="hover:text-[#7053ff] cursor-pointer">
                      Sign Out
                    </p>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

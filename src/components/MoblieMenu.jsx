"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../app/context/AuthContext";
const MoblieMenu = () => {
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
            <ul className="flex flex-col  font-['dark'] px-10 sm:px-20 pb-20 text-[28px] font-semibold text-black  gap-10 justify-center h-full items-center">
              <li>
                <Link
                  onClick={handleClose}
                  href="/"
                  className="hover:text-[#7053ff]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClose}
                  href="/Explore"
                  className="hover:text-[#7053ff]"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClose}
                  href="/Wishlist"
                  className="hover:text-[#7053ff]"
                >
                  Wishlist
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
  )
}

export default MoblieMenu

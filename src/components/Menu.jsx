"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../app/context/AuthContext";
const Menu = () => {
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
    <>
      {loading? null : !user ? (
        <ul className=" items-center justify-center">

       
                <li className='items-center justify-center' onClick={handleSignIn}>
                  <Link href="#" className="hover:text-[#7053ff]">
                    Login
                  </Link>
                </li>
                </ul>
              ) : (
                <>
                 <ul className="">
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
                   </ul>
                </>
              )}
        
    </>
  )
}

export default Menu

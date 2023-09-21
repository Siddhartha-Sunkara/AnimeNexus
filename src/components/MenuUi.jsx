"use client"
import Link from "next/link";
import React, {useState, useEffect} from "react";
import { UserAuth } from "../app/context/AuthContext";
import { menuSlide } from '../components/Animation';
import { motion } from 'framer-motion';
import Menu from "./Menu";
const MenuUi = () => {
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
    <motion.div variants={menuSlide} 
      initial="initial" 
      animate="enter"
      exit="exit"  className="menuui  right-0 z-[10] w-1/3 2xl:w-1/4 text-black bg-white ">
      <div className="items-center justify-center h-full text-[56px] font-['dark'] flex flex-col">
      <Link className='hover:text-[#7053ff] cursor-pointer' href='/'>Home</Link>
      <Link className='hover:text-[#7053ff] cursor-pointer' href='/Explore'>Explore</Link>
      <Link  className='hover:text-[#7053ff] cursor-pointer' href='/Wishlist'>WishList</Link>
      {/* <Link className='hover:text-[#7053ff] cursor-pointer' href='/Suggestions'>Suggestions</Link> */}
      
      {loading? null : !user ? (
        <ul className=" flex text-center flex-col items-center justify-center">

       
                <li className='items-center justify-center' onClick={handleSignIn}>
                  <Link href="#" className="hover:text-[#7053ff]">
                    Login
                  </Link>
                </li>
                </ul>
              ) : (
                <>
                 <ul className=" flex text-center flex-col items-center justify-center">
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
      </div>
      
    </motion.div>
  );
};

export default MenuUi;

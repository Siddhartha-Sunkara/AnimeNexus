"use client"
import React, { useContext } from "react";
import Link from "next/link";
import MenuButton from '../components/MenuButton'
import Menu from "../components/Menu"
import MobileMenu from '../components/MoblieMenu'
import MenuUi from '../components/MenuUi'
import Search from "./Search";
import { WishlistInfo } from "../app/context/WishListContext";
const Header = () => {
    const wishlist = WishlistInfo();
// console.log(wishlist.animeList.length);
  return (
    <header className="h-[10vh] w-full bg-[#040203] text-[#fffffe] ">
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
        <Search />
        <MobileMenu/>
        <MenuButton/>
        
      </div>
    </header>
  );
};

export default Header;

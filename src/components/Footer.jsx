import React from "react";
import Link from "next/link";

const Footer = () => {
  const handleClick=()=>{
    window.scroll(0,0);
  }
  return (
    <div className="h-[50vh] font-['dark'] font-semibold flex flex-col items-center bg-[#7053ff] text-[#040203]">
      <div className="content w-[80%] h-[100%] flex flex-col justify-center">
        <div className="hello text-[14px] md:text-[16px] flex flex-col md:flex-row md:justify-between xl:justify-start xl:text-[20px] text-left gap-5 xl:gap-64 mt-32 xl:mt-0">
          <ul className="flex flex-col gap-5">
            <li className="text-[#cbc9e2] uppercase">Say Hello</li>
            <li>scode4510@gmail.com</li>
          </ul>
          <ul className="flex flex-col gap-5 text-[28px]">
            <Link href='/First/1'><li>Home</li></Link>
            <Link href='/Explore'><li>Explore</li></Link>
            <Link href='/Wishlist'><li>Wishlist</li></Link>

          </ul>
        </div>

        <hr className="bg-[#cdfc6e] my-10" />
        <div className="flex flex-col xl:flex-row  gap-2 md:gap-10 text-[18px] xl:text-[20px] justify-between">
          <p><span className="font-bold font-['cfour']">AnimeNexus</span> developed by <span className="font-bold text-[28px]"><Link href="https://digital-portfolio-next-js.vercel.app/" target="_blank">Siddhartha Sunkara</Link> </span></p>
          
        </div>
        
      </div>
    </div>
  );
};

export default Footer;

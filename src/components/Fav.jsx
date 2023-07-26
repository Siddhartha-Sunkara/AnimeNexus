import React from "react";
import Link from "next/link";
import Image from "next/image";
const Fav = () => {
  return (
    <div className="h-[100vh] w-[100%] flex flex-col justify-center">
      <div className="text-white flex flex-col xl:flex-row items-center font-['Darker Grotesque']  text-[80px] md:text-[136px]  xl:text-[202px] 2xl:text-[232px] ">
        <p className=" xl:w-[60%] fav py-10 xl:p-10 text-center xl:text-left">
          Your <br /> Favourite <br /> Anime
          <span className="text-[#7053ff]">.</span>
        </p>
        <div className=" xl:w-[40%] flex flex-col justify-center items-center gap-10 ">
          <div className="h-56 w-56 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96 rounded-[70px] bg-white overflow-hidden ">
            <Image
              src="/assets/all2.jpeg"
              width={384}
              height={300}
              className=" mt-[-100px]"
            />
          </div>
          <Link href="/TopAnime" className="flex items-center">
            <button className="w-36 h-14 bg-[#7053ff] text-white text-base rounded-[16px]  ">
              Explore more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Fav;

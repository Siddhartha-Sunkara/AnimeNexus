import React from "react";
import Link from "next/link";
import Image from "next/image";
import AddToWishlistButton from "./AddButton";
const AnimeBanner = ({ anime }) => {
  return (
    <>
    <div>

    
      <Link href={`/AnimeDetails/${anime.id}`}>
        <div className="rounded-lg overflow-hidden  h-48 w-36 md:h-64 md:w-48 xl:h-48 xl:w-96 relative ">
          <Image
            src={anime.bannerImage || anime.coverImage.extraLarge}
            alt={anime.id}
            width={1080}
            height={1080}
            className=" det1 object-cover hidden xl:flex md:h-64 md:w-48 xl:h-48 xl:w-96 rounded-lg hover:scale-125"
          />
          <Image
            src={anime.coverImage.extraLarge}
            alt={anime.id}
            width={1080}
            height={1080}
            className=" det1 object-cover flex xl:hidden h-48 w-36 md:h-64 md:w-48 xl:h-48 xl:w-96 rounded-lg hover:scale-125"
          />
          <div className="det1 hidden bg-blue-300 gap-2 xl:flex xl:flex-col justify-between h-48 w-36 md:h-64 md:w-48 xl:h-48 xl:w-96 absolute items-start  p-3 md:p-5 opacity-0   ">
            <p className="font-bold text-md md:text-lg xl:text-[22px]">
              {anime.title.english || anime.title.native || anime.title.romaji}
            </p>
            <div className=" flex w-full flex-wrap items-center justify-between gap-1 xl:gap-10">
              <p className="text-sm xl:text-[18px] font-bold">
                Rating:{" "}
                <span className="font-normal">
                  {anime.averageScore / 10 || "??"}/10{" "}
                </span>
              </p>
              <p className="text-sm xl:text-[18px] ">{anime.duration || "??"} min</p>
              <p className="text-sm xl:text-[18px]">{anime.episodes || "??"} epis</p>
            </div>
            {/* <p className="text-sm xl:text-[18px] hidden lg:flex">{anime.status || "UPCOMING"}</p> */}
            <div className="hidden md:flex flex-wrap gap-1">
              {anime.genres?.slice(0, 4).map((gen, index) => (
                <ul>
                  <li
                    key={index}
                    className=" font-bold h-8 bg-[#7053ff] text-[14px] w-fit rounded-[24px] p-2 flex items-center"
                  >
                    {gen}
                  </li>
                </ul>
              ))}
            </div>
          </div>
          {/* <p className='text-[10px]'>{anime.title.english || anime.title.romaji || anime.title.native}</p> */}
        </div>
      </Link>
      <p className="w-full flex items-center justify-center h-10 text-[14px] font-semibold py-2">{anime.title.english?.length >31 ?anime.title.english.substring(0,31) + "..." : anime.title.english || anime.title.native.substring(0,31) || anime.title.romaji.substring(0,31)}</p>
      {/* <AddToWishlistButton animeId={anime.id} animeTitle={anime.title.english || anime.title.native || anime.title.romaji} imageURL={anime.coverImage.extraLarge }/>   */}
      </div>
    </>
  );
};

export default AnimeBanner;

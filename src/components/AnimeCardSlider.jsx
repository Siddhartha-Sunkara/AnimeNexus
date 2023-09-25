import React from "react";
import Image from "next/image";
import Link from "next/link";
import AddToWishlistButton from "./AddButton";
const AnimeCardSlider = ({ anime }) => {
  // console.log(anime.id)
  return (
    <>
    <div>
        <div className=" rounded-lg overflow-hidden h-48 w-36 md:h-64 md:w-48 xl:h-96 xl:w-64 relative  ">
      <Link href={`/AnimeDetails/${anime.id}`}>
          <Image
            src={anime.coverImage.extraLarge}
            alt={anime.id}
            width={1080}
            height={1080}
            className=" detimage hover:scale-125 rounded-lg object-cover h-48 w-36 md:h-64 md:w-48 xl:h-96 xl:w-64"
          />
          <div className="det1 hidden lg:flex lg:flex-col  gap-2 2xl:gap-5  h-48 w-36 md:h-64 md:w-48 xl:h-96 xl:w-64 justify-between absolute items-start lg:justify-start p-1 md:p-3 2xl:p-5 opacity-0 text-white  ">
          <p className="font-bold text-md md:text-lg xl:text-[28px]">
              {anime.title.english || anime.title.native || anime.title.romaji}
            </p>
            <div className=" flex w-full flex-wrap items-center justify-between gap-1">
              <p className="text-sm xl:text-[18px] font-bold">
                Rating:{" "}
                <span className="font-normal">
                  {anime.averageScore / 10 || "??"}/10{" "}
                </span>
              </p>
            </div>
            <div className="flex justify-between w-full">

              <p className="text-sm xl:text-[18px] ">{anime.duration || "??"} min</p>
              <p className="text-sm xl:text-[18px]">{anime.episodes || "??"} epis</p>
            </div>
            <p className="text-sm xl:text-[18px] hidden lg:flex">{anime.status || "UPCOMING"}</p>
            <p className="text-sm xl:text-[18px] hidden xl:flex"><span className="font-semibold">Aired on: </span>{anime.startDate?.day}/{anime.startDate?.month}/{anime.startDate?.year}</p>
            <div className="flex-wrap hidden lg:flex gap-2">
              {anime.genres?.slice(0,4).map((gen, index) => (

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
       
        </Link>
        </div>
        <p className=" text-white w-full flex items-center justify-center h-10 text-[8px] md:text-[10px] xl:text-[14px] font-semibold py-2">{anime.title.english?.length >31 ?anime.title.english.substring(0,31) + "..." : anime.title.english || anime.title.romaji?.length >15 ?anime.title.romaji.substring(0,31) + "..." : anime.title.romaji || anime.title.native?.length >15 ?anime.title.native.substring(0,31) + "..." : anime.title.native}</p>
      {/* <AddToWishlistButton animeId={anime.id} animeTitle={anime.title.english || anime.title.native || anime.title.romaji} imageURL={anime.coverImage.extraLarge }/>   */}
      

      </div>
      
      {/* <p className='text-[10px]'>{anime.title.english || anime.title.romaji || anime.title.native}</p> */}
    </>
  );
};

export default AnimeCardSlider;

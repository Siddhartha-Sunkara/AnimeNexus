import React from "react";
import Image from "next/image";
import Link from "next/link";
const AnimeCardSlider = ({ anime }) => {
  // console.log(anime.id)
  return (
    <>
      <Link href={`/AnimeDetails/${anime.id}`}>
        <div className=" rounded-lg overflow-hidden h-96 w-64 relative  ">
          <Image
            src={anime.coverImage.extraLarge}
            alt={anime.id}
            width={1080}
            height={1080}
            className=" hover:scale-125 rounded-lg object-cover h-96 w-64"
          />
          <div className="det1 bg-blue-300  h-96 w-64  absolute items-center justify-center flex opacity-0   ">
            Hello
          </div>
        </div>
      </Link>
      {/* <p className='text-[10px]'>{anime.title.english || anime.title.ramoji || anime.title.native}</p> */}
    </>
  );
};

export default AnimeCardSlider;

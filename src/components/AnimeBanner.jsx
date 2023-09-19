import React from "react";
import Link from 'next/link'
import Image from "next/image";
const AnimeBanner = ({ anime }) => {
  return (
    <>
    <Link href={`/AnimeDetails/${anime.id}`}>
    <div className="rounded-lg overflow-hidden h-48 w-96 relative ">

    
      <Image
        src={anime.bannerImage || anime.coverImage.extraLarge}
        alt={anime.id}
        width={1080}
        height={1080}
        className=" det2 object-cover h-48 w-96 rounded-lg hover:scale-125"
      />
     <div className="det2 bg-blue-300  h-48 w-96 absolute items-center justify-center flex opacity-0   ">
           <p> Hello</p>
          </div>
      {/* <p className='text-[10px]'>{anime.title.english || anime.title.ramoji || anime.title.native}</p> */}
      </div>
      </Link>
    </>
  );
};

export default AnimeBanner;

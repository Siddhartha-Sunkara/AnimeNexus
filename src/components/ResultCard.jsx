"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from 'next/navigation'
import AddButton from '../components/AddButton';
// import AddToWishlistButton from "../components/AddButton";
import {auth} from '../app/firebase'
import RemoveAnime from "./RemoveButton";
import { UserAuth } from "../app/context/AuthContext";

const AnimeCard = (datas) => {
  
  // const user = auth.currentUser;


  return (
    <div className="w-56 flex  justify-center  my-10 h-96 bg-[#040203]">
      <div>
        <div className="overflow-hidden h-96">
          <Link href={`/AnimeDetails/${datas?.id}`}>
            <Image
              src={datas?.coverImage?.extraLarge}
              alt={datas.id}
              width={200}
              height={300}
              className="card-image  w-full h-full hover:scale-110 overflow-clip"
            ></Image>
          </Link>
        </div>

        <Link href={`/AnimeDetails/${datas?.id}`}>
          <p className="text-[16px] font-semibold py-1 hover:underline">
            {datas?.title?.english || datas?.title?.romaji || datas?.title?.native ?.substring(0, 25)}
          </p>
        </Link>

        <div className="flex  justify-between gap-5">
          <p className="text-[14px] font-semibold uppercase">{datas?.type}</p>
          <p className="text-[14px] font-semibold uppercase">
            {datas?.episodes || "??"} Epi
          </p>
          <Link href={`/AnimeDetails/${datas?.type}`}>
            <p className="text-[14px] font-semibold uppercase hover:text-[#7053ff]">
              View More
            </p>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default AnimeCard;

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
  const { animeId, animeTitle, imageURL } = datas;
  // const user = auth.currentUser;
  const router = useRouter()
  const { user, isLoading, googleSignIn, logOut } = UserAuth();
  return (
    <div className="h-48 w-36 md:h-64 md:w-48 xl:h-96 xl:w-64 flex  justify-center  my-10  bg-[#040203]">
      <div className="flex flex-col h-fit">
      <Link href={`/AnimeDetails/${animeId}`}>
        <div className=" rounded-lg overflow-hidden h-48 w-36 md:h-64 md:w-48 xl:h-96 xl:w-64 relative  ">
          <Image
            src={imageURL}
            alt={animeId}
            width={1080}
            height={1080}
            className=" detimage hover:scale-125 rounded-lg object-cover h-48 w-36 md:h-64 md:w-48 xl:h-96 xl:w-64"
          />
          
        </div>
      </Link>
      <p className=" text-white w-full flex items-center justify-center h-10 text-[10px] md:text-[12px] xl:text-[14px] font-semibold py-2">{animeTitle?.length >31 ?animeTitle.substring(0,31) + "..." : animeTitle}</p>

        {!isLoading && (
          <RemoveAnime animeId={datas.animeId} />)}
        {/* <AddButton animeId={datas.animeId} animeTitle={datas.animeTitle} imageURL={datas.imageURL}/> */}
        
      </div>
    </div>
  );
};

export default AnimeCard;

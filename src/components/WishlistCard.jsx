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
    <div className="w-56 flex  justify-center  my-10 h-96 bg-[#040203]">
      <div>
        <div className="overflow-hidden h-96">
          <Link href={`/Details/${animeId}`}>
            <Image
              src={datas.imageURL}
              alt=""
              width={200}
              height={300}
              className="card-image  w-full h-full hover:scale-110 overflow-clip"
            ></Image>
          </Link>
        </div>

        <Link href={`/Details/${animeId}`}>
          <p className="text-[16px] font-semibold py-1 hover:underline">
            {datas.animeTitle?.substring(0, 25)}
          </p>
        </Link>

        <div className="flex  justify-between gap-5">
          <p className="text-[14px] font-semibold uppercase">{datas.type}</p>
          <p className="text-[14px] font-semibold uppercase">
            {datas.episodes} Epi
          </p>
          <Link href={`/Details/${animeId}`}>
            <p className="text-[14px] font-semibold uppercase hover:text-[#7053ff]">
              View More
            </p>
          </Link>
        </div>
        <AddButton animeId={datas.animeId} animeTitle={datas.animeTitle} imageURL={datas.imageURL}/>
        {!isLoading && (
          <RemoveAnime animeId={datas.animeId} />)}
        {/* if(user){
          <RemoveAnime animeId={datas.animeId} uid={user.uid}/>
        } */}
      </div>
    </div>
  );
};

export default AnimeCard;

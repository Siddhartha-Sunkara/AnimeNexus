
import React from "react";

import Link from "next/link";
import Image from "next/image";
import PageWrapper from "./PageWrapper";
async function getData() {

  const url = "https://myanimelist.p.rapidapi.com/anime/top/airing";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ffbc9fdadamshc1603e2785ddab1p124e76jsnbf8a6b5e067e",
      "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  const result = await response.json();
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  
  const topairing =  result;
  return topairing;


}

export default async function TopAiring({slice}) {
  const sliceid=slice;
  const topairing= await getData();
  return (
    <>
      <p className="text-lg font-['Press_Start_2P'] xl:text-xl  text-[#faf4fa] font-bold w-full flex py-10 xl:p-5 justify-center">
          Top Airing Anime
        </p>
        
        {Array.isArray(topairing) && topairing.slice(0,sliceid).map((datas,index ) => (
          <PageWrapper>
            <div className="card h-32  bg-[#141414] text-[#faf4fa] p-5 font-semibold flex" key={index}>
              <div className="image">
                <Image
                  src={datas.picture_url}
                  alt=""
                  className="w-16 rounded-[8px]"
                  width={300} height={300}
                />
              </div>

              <div className="flex flex-col justify-between px-3">
                <div className="flex gap-10">
                  <div className="Rank">#{datas.rank}</div>
                  <div className="">{datas.type}</div>
                </div>

                <Link href={datas.myanimelist_url} target="_blank">
                <div className="title text-base hidden 2xl:flex xl:text-xl hover:underline">
                  {datas.title?.substring(0, 40)}
                </div>
                <div className="title text-base flex 2xl:hidden md:text-[18px] xl:text-xl hover:underline">
                  {datas.title?.substring(0, 25)}
                </div>
                </Link>
              </div>
            </div>
            </PageWrapper>
          
        ))}
       
    </>
  )
}



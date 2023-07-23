"use client";
import React from "react";
import { useState } from "react";
import useSWR, { mutate } from "swr";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
const Slider = ({firstPage}) => {
    
    
    
  return (
    <Carousel infiniteLoop showThumbs={false} autoPlay>
      {Array.isArray(firstPage) &&
        firstPage.map((dataset) => (
          <div key={dataset._id} className="flex h-[60vh]">
            <div className="left w-[60%] bg-[#040203] h-full">
              <div className="flex flex-col justify-end h-full gap-4 p-10">
                <div className="name flex flex-wrap text-[#fddb93]">
                  <p className="font-bold text-2xl">
                    #{dataset.ranking} Spotlight
                  </p>
                </div>
                <div className="name flex flex-wrap">
                <Link href={`/Details/${dataset._id}`}><p className="hover:underline font-bold text-4xl text-[#fffffe]">
                    {dataset.title}
                  </p></Link>
                </div>
                <div className="type flex gap-10 text-[#a7a9be]">
                  <div className="type">{dataset.type}</div>
                  <div className="type">{dataset.episodes} Episodes</div>
                </div>
                <div className="synopsis">
                  <div className="type hidden md:block text-left text-[#a7a9be]">
                    {dataset.synopsis.substring(0, 400)}...
                  </div>
                </div>
                <div className="more flex gap-5">
                <Link href={`/Details/${dataset._id}`} >
                  <button className="h-12 w-40 bg-[#7053ff] rounded-[24px]">
                    View More
                  </button>
                  </Link>
                  <button className="h-12 w-40 bg-[#7053ff] rounded-[24px]">
                    <Link href={dataset.link} target="_blank">
                      Go to Main Site
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="right w-[40%] bg-[#040203] flex justify-center items-center ">
              <div className="overflow-hidden">

              <Link href={`Details/${dataset._id}`}>
              <div className="w-[200px] h-[300px]  hover:scale-110">
             
                <Image src={dataset.image} alt="" width={200} height={300} />
              
              </div></Link>
              </div>
            </div>
          </div>
        ))}
    </Carousel>
  );
};

export default Slider;

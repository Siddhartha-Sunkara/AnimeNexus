
import Image from "next/image";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";



const HeroSection = (data) => {
  
  return (
    
            <Carousel infiniteLoop showThumbs={false} autoPlay>
      {
      data.map((datas) => (
        <div key={datas._id} className="flex h-[60vh]">
          <div className="left w-[60%] bg-[#fffffe] h-full">
            <div className="flex flex-col justify-end h-full gap-4 p-10">
              <div className="name flex flex-wrap text-[#fddb93]">
                <p className="font-bold text-2xl">#{datas.ranking} Spotlight</p>
              </div>
              <div className="name flex flex-wrap">
                <p className="font-bold text-4xl">{datas.title}</p>
              </div>
              <div className="type flex gap-10">
                <div className="type">{datas.type}</div>
                <div className="type">{datas.episodes} Episodes</div>
              </div>
              <div className="synopsis">
                <div className="type text-left">{datas.synopsis.substring(0, 400)}...</div>
              </div>
              <div className="more flex gap-5">
                <button className="h-12 w-40 bg-red-400 rounded-[24px]">View More</button>
                <button className="h-12 w-40 bg-red-400 rounded-[24px]">
                  <Link href={datas.link} target="_blank">
                    Go to Main Site
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="right w-[40%] bg-[#0f0e17] flex justify-center items-center">
            <div className="w-[200px] h-[300px]">
            <Image src={datas.image} alt="" width={200} height={300}  />
            </div>
            
          </div>
        </div>
      ))}
      </Carousel>
   
      
    
  );
};

export default HeroSection;

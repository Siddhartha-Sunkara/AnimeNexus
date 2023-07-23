"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../assests/Logo.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Link from "next/link";
import Image from "next/image";
// import './styles.css';

// import required modules
import { Autoplay, Pagination, FreeMode, Navigation, Thumbs } from "swiper/modules";
const SwiperTemp = ({firstPage}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        
        loop={true}
        spaceBetween={10}
        // navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,Pagination, FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {Array.isArray(firstPage) &&
          firstPage.map((dataset) => (
            <>
              <SwiperSlide>
                <div className="flex h-[60vh]" key={dataset._id}>

               
                <div className="left hidden sm:flex w-[60%] bg-[#040203] h-full">
                  <div className="flex flex-col justify-center xl:CEEjustify-end h-full gap-4 p-10">
                    <div className="name flex flex-wrap text-[#fddb93]">
                      <p className="font-bold text-base lg:text-xl xl:text-2xl">
                        #{dataset.ranking} Spotlight
                      </p>
                    </div>
                    <div className="name flex flex-wrap">
                      <Link href={`/Details/${dataset._id}`}>
                        <p className="hover:underline text-left text-2xl font-bold xl:text-4xl text-[#fffffe]">
                          {dataset.title}
                        </p>
                      </Link>
                    </div>
                    <div className="type flex gap-10 text-[#a7a9be]">
                      <div className="text-[12px] xl:text-base type">{dataset.type}</div>
                      <div className="text-[12px] xl:text-base type">{dataset.episodes} Episodes</div>
                    </div>
                    <div className="synopsis">
                      <div className="type text-xs  xl:text-base hidden md:flex xl:hidden  text-left text-[#a7a9be]">
                        {dataset.synopsis.substring(0, 300)}...
                      </div>
                      <div className="type text-xs  xl:text-base  hidden xl:flex  text-left text-[#a7a9be]">
                        {dataset.synopsis.substring(0, 400)}...
                      </div>
                    </div>
                    <div className="more flex flex-wrap gap-5 text-[12px] md:text-sm text-white ">
                      <Link href={`/Details/${dataset._id}`}>
                        <button className="h-12 w-28 md:w-40 bg-[#7053ff] rounded-[24px]">
                          View More
                        </button>
                      </Link>
                      <button className="h-12 w-28 md:w-40 bg-[#7053ff] rounded-[24px]">
                        <Link href={dataset.link} target="_blank">
                          Go to Main Site
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="right w-[100%] sm:w-[40%] bg-[#040203] flex justify-center items-center ">
                  <div className="overflow-hidden">
                    <Link href={`Details/${dataset._id}`}>
                      <div className="w-[200px] h-[300px]  hover:scale-110">
                        <Image
                          src={dataset.image}
                          alt=""
                          width={200}
                          height={300}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                </div>
              </SwiperSlide>
              </>
          ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={20}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper h-40 w-12 m-10"
      >
      {Array.isArray(firstPage) &&
          firstPage.map((dataset) => (<>
          
        <SwiperSlide>
        <Image src={dataset.image} alt="" width={200} height={300} />
         
        </SwiperSlide>
        </>))}
      </Swiper>
      
    </>
  );
};

export default SwiperTemp;

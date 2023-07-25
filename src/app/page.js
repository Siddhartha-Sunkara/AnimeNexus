// import AnimeCard from "../components/AnimeCard";

import React from "react";
import Slider from '../components/Slider'
import Link from "next/link";
import Image from "next/image";
import Footer from '../components/Footer'
import Fav from "../components/Fav"
// import SearchBar from "../components/SearchBar"
import SwiperTemp from "../components/Swiper"
// async function getData(currentPage) {

//   const url = `https://anime-db.p.rapidapi.com/anime?page=${currentPage}&size=10`;
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'cd376e17c3msh4106435b62c3cc5p198fe9jsnb7b4b0796591',
//       'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
//     }
//   };
//   const response = await fetch(url, options);
//   const result = await response.json();
//   if (!response.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }


//   const data = result.data;
//   return data;

//   // const firstPage = await getData(1);
// }
export default async function Main({ params }) {
  // const firstPage = await getData(1);
  return (
    <>
      <div className="bg-[#040203]">
        <div className="h-[90vh] w-[100%]">
          <div className="h-[60%] flex gap-5 overflow-hidden">
          <div className=" h-full slide-track w-[200%]  bg-[#040203] flex gap-10  ">
              <div className="slide w-[384px] bg-blue-300 rounded-t-full overflow-hidden ">
                <video src="/assets/aot.mp4" autoPlay loop muted controls />
              </div>
              <div className="slide w-[576px] flex flex-col  gap-5   bg-[#040203]">
                <div className="upper flex h-[50%]  gap-10   ">
                  <div className="left w-[50%] bg-red-400 overflow-hidden">
                    <Image
                      src="/assets/naruto.webp"
                      alt="naruto"
                      width={200}
                      height={300}
                      placeholder="blur"
                      blurDataURL="/assets/Eye.webp"
                      className="w-full "
                    />
                  </div>
                  <div className="right w-[50%] bg-red-400 overflow-hidden rounded-full ">
                    <Image
                      src="/assets/Naruto1.webp"
                      alt="naruto"
                      width={200}
                      height={300}
                      placeholder="blur"
                      blurDataURL="/assets/Eye.webp"
                      className="w-full mt-[-100px]"
                    />
                  </div>
                </div>
                <div className="lower h-[50%]  bg-red-600">
                  <Image
                    src="/assets/naruto2.webp"
                    alt="naruto"
                    width={200}
                    height={300}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="slide w-[960px] bg-blue-300">
                <video src="/assets/onepiece1.mp4" autoPlay loop muted controls />
                
              </div>
              <div className="slide w-[384px] bg-blue-300 rounded-t-[30%] overflow-hidden ">
                <video src="/assets/jjk.mp4" autoPlay loop muted controls />

              </div>
              <div className=" slide w-[576px] flex flex-col  gap-5    bg-[#040203]">
                <div className="upper h-[50%] bg-red-600 rounded-full overflow-hidden">
                  <Image
                    src="/assets/itachi1.webp"
                    alt="naruto"
                    width={200}
                    height={300}
                    className="w-full "
                  />
                </div>
                <div className="lower flex h-[50%]  gap-10   ">
                  <div className="left w-[50%] bg-red-400 overflow-hidden">
                    {" "}
                    <Image
                      src="/assets/Eye.webp"
                      alt="naruto"
                      width={200}
                      height={300}
                      placeholder="blur"
                      blurDataURL="/assets/Eye.webp"
                      className="w-full  mt-[-100px]"
                    />
                  </div>
                  <div className="right w-[50%] bg-red-400 rounded-s-full overflow-hidden rounded-tr-full">
                    <Image
                      src="/assets/mob.webp"
                      alt="naruto"
                      width={200}
                      height={300}
                      placeholder="blur"
                      blurDataURL="/assets/Eye.webp"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="slide w-[960px] bg-blue-300">
                <video src="/assets/demon1.mp4" autoPlay loop muted controls />
                
              </div>
            </div>
            <div className=" h-full slide-track w-[200%]  bg-[#040203] flex gap-10  ">
              <div className="slide w-[384px] bg-blue-300 rounded-t-full overflow-hidden ">
                <video src="/assets/aot.mp4" autoPlay loop muted controls />
              </div>
              <div className="slide w-[576px] flex flex-col  gap-5   bg-[#040203]">
                <div className="upper flex h-[50%]  gap-10   ">
                  <div className="left w-[50%] bg-red-400 overflow-hidden">
                    <Image
                      src="/assets/naruto.webp"
                      alt="naruto"
                      width={200}
                      height={300}
                      placeholder="blur"
                      blurDataURL="/assets/Eye.webp"
                      className="w-full "
                    />
                  </div>
                  <div className="right w-[50%] bg-red-400 overflow-hidden rounded-full ">
                    <Image
                      src="/assets/Naruto1.webp"
                      alt="naruto"
                      width={200}
                      height={300}
                      placeholder="blur"
                      blurDataURL="/assets/Eye.webp"
                      className="w-full mt-[-100px]"
                    />
                  </div>
                </div>
                <div className="lower h-[50%]  bg-red-600">
                  <Image
                    src="/assets/naruto2.webp"
                    alt="naruto"
                    width={200}
                    height={300}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="slide w-[960px] bg-blue-300">
                <video src="/assets/onepiece1.mp4" autoPlay loop muted controls />
                
              </div>
              <div className="slide w-[384px] bg-blue-300 rounded-t-[30%] overflow-hidden ">
                <video src="/assets/jjk.mp4" autoPlay loop muted controls />

              </div>
              <div className=" slide w-[576px] flex flex-col  gap-5    bg-[#040203]">
                <div className="upper h-[50%] bg-red-600 rounded-full overflow-hidden">
                  <Image
                    src="/assets/itachi1.webp"
                    alt="naruto"
                    width={200}
                    height={300}
                    className="w-full "
                  />
                </div>
                <div className="lower flex h-[50%]  gap-10   ">
                  <div className="left w-[50%] bg-red-400 overflow-hidden">
                    {" "}
                    <Image
                      src="/assets/Eye.webp"
                      alt="naruto"
                      width={200}
                      height={300}
                      placeholder="blur"
                      blurDataURL="/assets/Eye.webp"
                      className="w-full  mt-[-100px]"
                    />
                  </div>
                  <div className="right w-[50%] bg-red-400 rounded-s-full overflow-hidden rounded-tr-full">
                    <Image
                      src="/assets/mob.webp"
                      alt="naruto"
                      width={200}
                      height={300}
                      placeholder="blur"
                      blurDataURL="/assets/Eye.webp"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="slide w-[960px] bg-blue-300">
                <video src="/assets/demon1.mp4" autoPlay loop muted controls />
                
              </div>
            </div>

          </div>
          <div className="text-white font-['Inter'] w-full text-[50px] md:text-[80px] xl:text-[120px] xl:text-[160px] flex item-center justify-center">
            <p className=" font-semibold py-20"><span className="text-[#7053ff]">A</span>nime<span className="text-[#7053ff]">N</span>exus
              <span className="text-[#7053ff]">.</span></p>

          </div>


          {/* <p className="text-9xl absolute z-[100]   text-[#040203]  uppercase font-bold flex items-start justify-center w-full h-full"><span className="para font-['Darker Grotesque']"><span className="text-[#7053ff]">A</span>nime
            <span className="text-[#7053ff]">N</span>exus</span></p>
      <Image src={new3} alt="anime" className="anime  w-[100%]  " placeholder="blur"
      blurDataURL="/assets/Eye.webp"  /> */}
        </div>
        <Fav />

      </div>
      <Footer />
    </>
  );
};

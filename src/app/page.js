// import AnimeCard from "../components/AnimeCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import Slider from '../components/Slider'
import Link from "next/link";
// import SearchBar from "../components/SearchBar"
import SwiperTemp from "../components/Swiper"
async function getData(currentPage) {

  const url = `https://anime-db.p.rapidapi.com/anime?page=${currentPage}&size=10`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cd376e17c3msh4106435b62c3cc5p198fe9jsnb7b4b0796591',
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
  };
  const response = await fetch(url, options);
  const result = await response.json();
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }


  const data = result.data;
  return data;

  // const firstPage = await getData(1);
}
export default async function Main({ params }) {
  const firstPage = await getData(1);
  return (
    <>
      <div className=" h-[90vh] w-[100%]  bg-[#fffffe]">
        <div className="h-[60vh]  bg-[#16161a]">
          {/* <HeroSection key={data._id} {...data} /> */}
          {/* <Slider firstPage={firstPage} /> */}
          <SwiperTemp firstPage={firstPage}/>
        </div>
        <div className="w-full h-[30vh] bg-[#141414] flex flex-col  items-center gap-10 p-48">
          <p className="text-3xl text-[#fffffe] font-semibold">Search for you Favourite Anime</p>
         

          {/* <SearchBar/> */}
          
          
        </div>

      </div>
    </>
  );
};

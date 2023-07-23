import React from 'react'
import AnimeCard from "../../components/AnimeCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import { Carousel } from "react-responsive-carousel";
import Slider from '../../components/Slider'
import Pagination from '../../components/Pagination'
import Link from "next/link";

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
  
  
  }

  export default async function page({ params }) {
  const { id } = params;
  // console.log(params);

  const currentPage = 1;
  const data = await getData(currentPage);
  const firstPage = await getData(1);
  // console.log(firstPage)
  return (
    <>
      <div className=" h-[100vh] w-[100%] bg-[#fffffe]">
        {/* <div className="h-[60vh]  bg-[#16161a]">
          {/* <HeroSection key={data._id} {...data} /> */}
          {/* <Slider firstPage={firstPage} /> */}
        {/* </div> */} 

        <div className="py-40 flex flex-col bg-[#0c0a0b] text-[#faf4fa] gap-5 items-center">
          <p className="text-3xl font-semibold ">
            Recommended for you
          </p>
          <div className="w-full flex justify-center">
            <div className="flex flex-wrap  w-[80vw] gap-10 items-center px-20 justify-between">
              {/* <Searchbar onSearch={handleSearch}/> */}
              {Array.isArray(data) &&
                data.slice(0, 10).map((datas) => (
                  <AnimeCard key={datas._id} {...datas} currentPage={currentPage} />
                ))}
            </div>
          </div>
          <div className=" mt-10">
            {/* <button onClick={handleChange} className="h-12 w-40 bg-[#7053ff] rounded-[12px]">

              View More

            </button> */}
            <Pagination/>

          </div>
        </div>
      </div>
    </>)
}



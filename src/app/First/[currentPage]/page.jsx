
import React from "react";
import AnimeCard from "../../../components/AnimeCard";
import PageWrapper from '../../../components/PageWrapper'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Pagination from "../../../components/Pagination";
// import { Carousel } from "react-responsive-carousel";
import Slider from "../../../components/Slider";
import Link from "next/link";
import Details from "../../../components/Details";

async function getData(currentPage) {
  const url = `https://anime-db.p.rapidapi.com/anime?page=${currentPage}&size=10`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cd376e17c3msh4106435b62c3cc5p198fe9jsnb7b4b0796591",
      "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  const result = await response.json();
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = result.data;
  return data;
}

export default async function page({ params }) {
  const currentPage = params.currentPage;
  console.log(params);
  //   const isBrowser = () => typeof window !== 'undefined';
  //   if (!isBrowser()) return;
  //   window.scrollTo({ top:  0, behavior: 'smooth' });

  const data = await getData(currentPage);
  const firstPage = await getData(1);
  // console.log(firstPage)
  return (
    <>
      
      <div className=" h-[100vh] w-[100%] bg-[#040203]">
          {/* <div className="h-[60vh]  bg-[#16161a]"> */}
          {/* <HeroSection key={data._id} {...data} /> */}
          {/* <Slider firstPage={firstPage} /> */}
          {/* </div> */}

          <div className="py-20 flex flex-col bg-[#040203] text-[#faf4fa] gap-5 items-center">
            <p className="text-[14px] md:text-lg lg:text-2xl text-center xl:text-left  font-['dark'] ">Recommended for you</p>
            <PageWrapper>
            <div className="w-full flex justify-center">
              <div className="flex flex-col md:flex-row flex-wrap  w-[80vw] gap-10 items-center px-0 sm:px-10 xl:px-20 justify-between">
                {/* <Searchbar onSearch={handleSearch}/> */}
                {Array.isArray(data) &&
                  data
                    .slice(0, 10)
                    .map((datas) => <AnimeCard key={datas._id} {...datas} />)}
              </div>
            </div>
            </PageWrapper>
            <div className=" mt-10">
              {/* <button onClick={handleChange} className="h-12 w-40 bg-[#7053ff] rounded-[12px]">

              View More

            </button> */}
              <Pagination
                currentPage={currentPage}
                prevHref={`/First/${Number(currentPage) - 1}`}
                nextHref={`/First/${Number(currentPage) + 1}`}
              />
            </div>
          </div>
        </div>
    
    </>
  );
}

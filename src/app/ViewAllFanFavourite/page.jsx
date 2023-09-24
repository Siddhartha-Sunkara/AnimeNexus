import React from "react";
import {
  getAllFanFavourites,
  getAllTopTrending,
  getTop50,
} from "../../lib/Calls";
import AnimeBanner from "../../components/AnimeBanner";
import AnimeCardSlider from "../../components/AnimeCardSlider";
export default async function FanFavourite() {
  const data = await getAllFanFavourites();
  // console.log(data)
  return (
    <>
      <div className="w-[100%]">
        <div className=" p-5 text-[36px] sm:text-[48px] md:text-[80px] lg:text-[100px] xl:text-[120px] items-center flex flex-col  font-['dark'] text-white ">
          Top Fan Favourite Anime
        </div>

        <div className="w-full flex justify-center text-white">
          <div className="flex  flex-row flex-wrap   gap-10 items-center px-0 sm:px-5 xl:px-10 justify-center">
            {/* <Searchbar onSearch={handleSearch}/> */}
            {Array.isArray(data) &&
              data.map((datas) => 
              <>
              
              <AnimeCardSlider anime={datas} />
        {/* <p className="w-full text-white flex items-center justify-center h-10 text-[14px] font-semibold py-2">{datas.title.english.length >31 ?datas.title.english.substring(0,31) + "..." : datas.title.english || datas.title.native.substring(0,31) || datas.title.romaji.substring(0,31)}</p> */}
        
        </>
        )}
              
          </div>
        </div>
      </div>
    </>
  );
}

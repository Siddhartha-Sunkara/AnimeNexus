import React from 'react'
import { getAllFanFavourites, getAllPopular, getAllTopTrending, getAllUpcoming, getTop50 } from '../../lib/Calls';
import AnimeBanner from '../../components/AnimeBanner';
import AnimeCardSlider from '../../components/AnimeCardSlider';
export default async function TopAllUpcoming() {
    const data= await getAllUpcoming();
    // console.log(data)
  return (
    <>
     <div className='w-[100%]'>
     <div className=" p-5 text-[36px] sm:text-[48px] md:text-[80px] lg:text-[100px] xl:text-[120px] items-center flex flex-col  font-['dark'] text-white ">
      Top Upcoming Anime
      </div>

      <div className="w-full flex justify-center">
              <div className="flex  flex-row flex-wrap   gap-10 items-center px-0 sm:px-5 xl:px-10 justify-center">
                {/* <Searchbar onSearch={handleSearch}/> */}
                {Array.isArray(data) &&
                  data
                    .map((datas) => <AnimeCardSlider anime={datas} />)}
              </div>
            </div>
  
    </div>
    </>
  )
}






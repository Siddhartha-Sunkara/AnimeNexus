import React from 'react'
import AnimeCardSlider from './AnimeCardSlider';
import AnimeBanner from './AnimeBanner';
import { getFavourites, getUpcoming } from '../lib/Calls';
import Link from 'next/link';
  export default async function Upcoming(){

      const data = await getUpcoming();
    //   console.log(data)
    return(
        <div className="flex flex-col gap-2 p-5">
      <div className="text-white flex  font-['dark'] text-2xl md:text-3xl xl:text-4xl items-end justify-between">
        <p>Upcoming Anime</p>
        <Link href="#" className="text-xl xl:text-2xl">View All</Link>
      </div>
      <div className="text-white w-full  flex gap-8 items-center overflow-x-scroll ">
        {Array.isArray(data) &&
          data.map((anime) => (
            <div className="flex flex-col gap-10">
              <AnimeBanner anime={anime} />
            </div>
          ))}
      </div>
    </div>)
}






  
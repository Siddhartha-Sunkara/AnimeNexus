import React from 'react'
import AnimeCardSlider from './AnimeCardSlider';
import AnimeBanner from './AnimeBanner';
import { getTrending } from '../lib/Calls';
import Link from 'next/link';
  export default async function TrendingNow(){
    const data = await getTrending();
    return(
        <div className="flex flex-col gap-2 p-5">
      <div className="text-white flex  font-['dark'] text-2xl md:text-3xl xl:text-4xl items-end justify-between">
        <p>Trending Now</p>
        <Link href="/ViewAllTopTrending" className="text-xl xl:text-2xl">View All</Link>
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






  
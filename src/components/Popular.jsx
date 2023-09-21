import React from 'react'
import AnimeCardSlider from './AnimeCardSlider';
import AnimeBanner from './AnimeBanner';
import { getPopular } from '../lib/Calls';
import Link from 'next/link';
  export default async function TrendingNow(){
    const data = await getPopular();
    return(
        <div className="flex flex-col gap-2 p-5">
      <div className="text-white flex  font-['dark'] text-2xl md:text-3xl xl:text-4xl items-end justify-between">
        <p>Popular</p>
        <Link href="#" className="text-xl xl:text-2xl">View All</Link>
      </div>
      <div className="text-white w-full  flex gap-8 items-center justify-between  overflow-x-scroll">
        {Array.isArray(data) &&
          data.map((anime) => (
            <div className="flex flex-col gap-10">
              <AnimeCardSlider anime={anime} />
            </div>
          ))}
      </div>
    </div>)
}






  
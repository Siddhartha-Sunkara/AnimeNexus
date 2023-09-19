import React from "react";
import AnimeCardSlider from "./AnimeCardSlider";
import { getFavourites } from "../lib/Calls";
import AnimeBanner from './AnimeBanner';
import Link from 'next/link';
export default async function Top10() {
  const data = await getFavourites();
  return (
    <div className="flex flex-col gap-2 p-5">
      <div className="text-white flex  font-['dark'] text-3xl items-end justify-between">
        <p>Fan Favourite</p>
        <Link href="#" className="text-xl">View All</Link>
      </div>
      <div className="text-white w-full  flex gap-8 items-center overflow-x-scroll ">
        {Array.isArray(data) &&
          data.map((anime) => (
            <div className="flex flex-col gap-10">
             <AnimeBanner anime={anime} />
            </div>
          ))}
      </div>
    </div>
  );
}

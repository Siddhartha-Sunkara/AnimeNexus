import React from "react";
import Image from "next/image";
import Top10 from '../../components/Top10'
import TrendingNow from '../../components/TrendingNow'
import Favourites from '../../components/Favourites'
import Popular from '../../components/Popular'
import Upcoming from '../../components/Upcoming'
import Footer from "../../components/Footer";
export default async function page() {
  return (<>
  
    <div className="flex flex-col w-full gap-2 p-5">
      < Top10/>
      <TrendingNow/>
      <Favourites/>
      <Popular/>
      <Upcoming/>
    </div>
      <Footer/>
      </>
  );
}

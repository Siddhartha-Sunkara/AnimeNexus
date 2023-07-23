// "use client";
// import React, {useState} from "react";
// import useSWR, { mutate } from "swr";
import TopPopular from '../../components/TopPopular'
import TopAiring from '../../components/TopAiring'
import Link from "next/link";
import Image from "next/image";
import PageWrapper from '../../components/PageWrapper';
async function getData() {

  const url = "https://myanimelist.p.rapidapi.com/anime/top/all";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ffbc9fdadamshc1603e2785ddab1p124e76jsnbf8a6b5e067e",
      "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  const result = await response.json();
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  
  const topanime =  result;
  return topanime;


}
export default async function TopAnime() {
  const topanime = await getData();
  // console.log(topanime, "topanime")
  // const [data, setData] = useState([]);
  // const url = "https://myanimelist.p.rapidapi.com/anime/top/all";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "ffbc9fdadamshc1603e2785ddab1p124e76jsnbf8a6b5e067e",
  //     "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
  //   },
  // };

  // const fetcher = async () => {
  //   const res = await fetch(url, options);
  //   const incomingData = await res.json();
  //   setData(incomingData);

  //   // console.log(incomingData);
  // };
  // const { data: incomingData, error } = useSWR("https://myanimelist.p.rapidapi.com/anime/top/all", fetcher);
  return (
    <div className="flex flex-col xl:flex-row w-full items-center justify-center xl:justify-between xl:p-20 bg-[#040203]">
      <div className="topanime w-[90%] xl:w-[30%]   flex flex-col gap-5">
        <p className=" text-xl xl:text-xl font-['Press_Start_2P']  text-[#faf4fa]  font-bold w-full flex pt-10 xl:p-5 justify-center">
          Top Anime 
        </p>
        {Array.isArray(topanime) && topanime.slice(0,20).map((datas) => (
          <PageWrapper>
          
            <div className="card bg-[#141414] h-32 text-[#faf4fa] p-5 font-semibold flex" key={datas.myanimelist_id}>
              <div className="image">
                <Image
                  src={datas.picture_url}
                  alt=""
                  className="w-16  rounded-[8px]"
                  width={300} height={300}
                />
              </div>

              <div className="flex flex-col justify-between px-3">
                <div className="flex gap-10">
                  <div className="Rank">#{datas.rank}</div>
                  <div className="">{datas.type}</div>
                </div>
                <Link href={`/TopAnime/${datas.myanimelist_id}`} >
                <div className="title text-base hidden 2xl:flex xl:text-xl hover:underline">
                  {datas.title?.substring(0, 40)}
                </div>
                <div className="title text-base flex 2xl:hidden md:text-[18px] xl:text-xl hover:underline">
                  {datas.title?.substring(0, 25)}
                </div>
                </Link>
              </div>
            </div>
          </PageWrapper>
        ))}
       
      </div>
      <div className="toppopular  w-[90%] xl:w-[30%]   flex flex-col gap-5">
      
        <TopPopular slice={20}/>
       
      
      </div>
      <div className="toppopular  w-[90%] xl:w-[30%]    flex flex-col gap-5">
      <TopAiring slice={20}/>
       
      
      </div>
    </div>
  );
};



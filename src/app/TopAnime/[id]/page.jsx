import Image from "next/image";
import Link from "next/link";
import React from "react";
import TopAiring from '../../../components/TopAiring'
import TopPopular from '../../../components/TopPopular'
import PageWrapper from "../../../components/PageWrapper";

const Page = async ({ params }) => {
  const id = params.id;
  const url = `https://myanimelist.p.rapidapi.com/anime/${id}`;
  const options = {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': '96a4cf7d8fmsh6d80c1d99b13cf7p1bb360jsn4fb1f021fef1',
        'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
      },
  };
  const res = await fetch(url, options);
  const incomingData = await res.json();
  // console.log(incomingData.information?.genres[0].name)
  
  return (
    <PageWrapper>
    <div className="h-[60vh]">
      <div className="hero flex h-full bg-red-400">
      <div className="left w-full 2xl:w-[60%] flex flex-col items-center md:items-start md:flex-row h-full  bg-[#0c0a0b] text-[#faf4fa] ">
          <div className="img w-[200px] h-[300px] m-10">
            <Image
              src={incomingData.picture_url}
              alt={incomingData.title_ov}
              width={200}
              height={300}
            />
          </div>
          <div className="content flex flex-col items-center md:items-start md:justify-start justify-center gap-10 p-5 md:p-10 w-[70%]">
          <div className="div w-full text-[10px] md:text-base flex  items-center md:items-start  justify-center md:justify-start gap-10  ">
              <Link href="/">Home</Link>
              {/* <p>{incomingData.type}</p> */}
              <p>{incomingData.title_ov}</p>
            </div>
            <div className="flex flex-col gap-5 w-full items-center md:items-start justify-center md:justify-start">
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center md:text-left">{incomingData.title_ov}</p>
              <p className="text-xl font-bold">#{incomingData.statistics?.ranked} <span className="text-[#fddb93]">Ranking
                </span></p>
              <div className="flex gap-5">
                <p>{incomingData.information?.episodes} Episodes</p>
                <p>{incomingData.information?.type?.name}</p>
              </div>
            </div>

            <div>
              {/* <button className="h-12 w-40 bg-red-800 rounded-[24px] bg-[#7053ff]"> */}
                {/* <Link href={incomingData.link} target="_blank">
                  Go to Main Site
                </Link> */}
              {/* </button> */}
            </div>
            <div className="synopsis">
                <p className="text-justify flex flex-col gap-1 text-[12px] md:text-[14px] py-10 md:py-0">
                  <span className="font-semibold text-[14px]  md:text-base">Synopsis:</span>
                  {incomingData.synopsis?.substring(0, 500)}...
                </p>
              </div>
          </div>
        </div>
        <div className="right w-[40%] hidden 2xl:flex justify-center bg-[#040203] text-[#faf4fa]">
          <div className="w-[60%] bg-[#0c0a0b] flex items-center justify-center">
            <div className="flex flex-col gap-5">
              <div >
                <p className="text-[18px] font-semibold">More Details</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="status">
                  <span className=" font-semibold">Status:</span>{" "}
                  {incomingData.information?.status}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Alternative Titles :</p>
                {Array.isArray(incomingData.alternative_title?.synonyms?.split(',')) && incomingData.alternative_title.synonyms.split(',').map((alt, index) => (
                  <ul>
                    <li key={index}>{alt}</li>
                    
                  </ul>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Genres:</p>
                <div className="flex flex-wrap gap-3 text-[#040203]">
                  {incomingData.information?.genres?.map((gen, index) => (
                    <ul>
                      <li   
                        key={index}
                        className="  h-8 bg-[#7053ff] w-fit rounded-[24px] p-2 flex items-center"
                      >
                        {gen.name}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>

              {/* <Link href={incomingData.link} target="_blank">
                <p>See this on <span className=""> MyAnimeList</span></p>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 justify-center m-10 ">
        <div>
          <TopAiring slice={10} />
        </div>
        <div className="w-[30%]">
          <TopPopular slice={10} />
        </div>
      </div>
    </div>
    </PageWrapper>
  );
};

export default Page;

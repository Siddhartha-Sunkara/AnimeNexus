import Image from "next/image";
import Link from "next/link";
import React from "react";
import TopAiring from "../../../components/TopAiring";
import TopPopular from "../../../components/TopPopular";
import PageWrapper from "../../../components/PageWrapper";
const Page = async ({ params }) => {
    const slice = 10;
    const id = params.id;
    const url = `https://anime-db.p.rapidapi.com/anime/by-id/${id}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "cd376e17c3msh4106435b62c3cc5p198fe9jsnb7b4b0796591",
        "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
      },
    };
    const res = await fetch(url, options);
    const incomingData = await res.json();
    return (
      <div className="">
         <PageWrapper>
        <div className=" h-[60vh] hero flex h-full bg-red-400">
          <div className="left w-[60%] flex h-full  bg-[#0c0a0b] text-[#faf4fa] ">
            <div className="img w-[200px] h-[300px] m-10">
              <Image
                src={incomingData.image}
                alt={incomingData.title}
                width={200}
                height={300}
              ></Image>
            </div>
            <div className="content flex flex-col gap-10 p-10 w-[70%]">
              <div className="div flex gap-10">
                <Link href="/">Home</Link>
                <p>{incomingData.type}</p>
                <p>{incomingData.title}</p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-4xl font-bold">{incomingData.title}</p>
                <p className="text-xl font-bold">
                  #{incomingData.ranking}{" "}
                  <span className="text-[#fddb93]">Ranking</span>
                </p>
                <div className="flex gap-5">
                  <p>{incomingData.episodes} Episodes</p>
                  <p>{incomingData.type}</p>
                </div>
              </div>
  
              <div>
                <button className="h-12 w-40 bg-red-800 rounded-[24px] bg-[#7053ff]">
                  <Link href={incomingData.link} target="_blank">
                    Go to Main Site
                  </Link>
                </button>
              </div>
              <div className="synopsis">
                <p className="text-justify">
                  {incomingData.synopsis?.substring(0, 500)}...
                </p>
              </div>
            </div>
          </div>
          <div className="right w-[40%] flex justify-center bg-[#040203] text-[#faf4fa]">
            <div className="w-[60%] bg-[#0c0a0b] flex items-center justify-center">
              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-[18px] font-semibold">More Details</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="status">
                    <span className=" font-semibold">Status:</span>{" "}
                    {incomingData.status}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">Alternative Titles :</p>
                  {incomingData.alternativeTitles?.map((alt, index) => (
                    <ul>
                      <li key={index}>{alt}</li>
                    </ul>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">Genres:</p>
                  <div className="flex flex-wrap gap-3 text-[#040203]">
                    {incomingData.genres?.map((gen, index) => (
                      <ul>
                        <li
                          key={index}
                          className="  h-8 bg-[#7053ff] w-fit rounded-[24px] p-2 flex items-center"
                        >
                          {gen}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
  
                <Link href={incomingData.link} target="_blank">
                  <p>
                    See this on <span className=""> MyAnimeList</span>
                  </p>
                </Link>
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
        </PageWrapper>
      </div>
    );
  };
  
  export default Page;
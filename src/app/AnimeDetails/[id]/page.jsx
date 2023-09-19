import React from "react";
import { getAnimebyId } from "../../../lib/Calls";
import Image from "next/image";
import Link from "next/link";
import AddToWishlistButton from "../../../components/AddButton";
const Page = async ({ params }) => {
  const id = params.id;
  console.log(id);
  const data = await getAnimebyId(id);

  console.log(data[0]);

  return (
    <>
    <div className="">
        <div className="banner h-[40vh] w-full relative bg-white">
          <Image src={data[0].bannerImage} alt={data[0].id} fill className="object-cover"/>
        </div>

    </div>
    <div className="text-white">
      <div className=" h-full xl:h-[60vh] hero flex  bg-red-400">
        <div className="left w-full 2xl:w-[60%] flex flex-col items-center md:items-start justify-center md:flex-row h-full  bg-[#0c0a0b] text-[#faf4fa] ">
          <div className="img w-[200px] h-[300px] m-10">
            <Image
              src={data[0].coverImage.extraLarge}
              alt={data[0].id}
              width={200}
              height={300}
            />
          </div>
          <div className="content flex flex-col items-center md:items-start md:justify-start justify-center gap-10 p-5 md:p-10 w-[70%]">
            <div className="div w-full text-[10px] md:text-base flex  items-center md:items-start  justify-center md:justify-start gap-10  ">
              <Link href="/">Home</Link>
              <p>{data[0].type}</p>
              <p>
                {data[0].title.english ||
                  data[0].title.native ||
                  data[0].title.romaji}
              </p>
            </div>
            <div className="flex flex-col gap-5 w-full items-center md:items-start justify-center md:justify-start">
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center md:text-left">
                {data[0].title.english ||
                  data[0].title.native ||
                  data[0].title.romaji}
              </p>
              {/* <p className="text-xl font-bold">
                  #{data.ranking}{" "}
                  <span className="text-[#fddb93]">Ranking</span>
                </p> */}
              <div className="flex gap-5">
                <p>{data[0].type}</p>
                <p>{data[0].episodes} Episodes</p>
                <p>{data[0].duration} min</p>
              </div>
            </div>

            <div>
              <div className="h-12 w-40 text-[#040203] rounded-[24px] bg-[#7053ff] items-center justify-center">
                <AddToWishlistButton
                  animeId={data[0].id}
                  animeTitle={
                    data[0].title.english ||
                    data[0].title.native ||
                    data[0].title.romaji
                  }
                  imageURL={data[0].coverImage.extraLarge}
                />
              </div>
            </div>
            <div className="synopsis">
              <p className="text-justify flex flex-col gap-1 text-[12px] md:text-[14px] py-10 md:py-0">
                <span className="font-semibold text-[14px]  md:text-base">
                  Synopsis:
                </span>
                <p>
                {data[0].description.substring(0,600)}...
                </p>
                {/* <details>
                {data[0].description.substring(550)}
                </details> */}

                
              </p>
            </div>
          </div>
        </div>
        <div className="right w-[40%] hidden  2xl:flex justify-center bg-[#040203] text-[#faf4fa]">
          <div className="w-[60%] bg-[#0c0a0b] p-10 flex items-start justify-center">
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-[18px] font-semibold">More Details</p>
              </div>
              <div className="flex flex-col gap-2">
              <p className="status text-[14px]">
                  <span className=" font-semibold text-base">Rating:</span>{" "}
                  {data[0].averageScore/10}/10
                </p>
                <p className="status text-[14px]">
                  <span className=" font-semibold text-base">Start Date:</span>{" "}
                  {data[0].startDate.day}/{data[0].startDate.month}/
                  {data[0].startDate.year}
                </p>
                <p className="status text-[14px]">
                  <span className=" font-semibold text-base">End Date:</span>{" "}
                  {data[0].endDate.day || "??"}/{data[0].endDate.month || "??"}/
                  {data[0].endDate.year || "??"}
                </p>
                <p className="status text-[14px]">
                  <span className=" font-semibold text-base">Status:</span>{" "}
                  {data[0].status}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-semibold">Genres:</p>
                <div className="flex flex-wrap  gap-3 text-[#040203]">
                  {data[0].genres?.map((gen, index) => (
                    <ul>
                      <li
                        key={index}
                        className="  h-8 bg-[#7053ff] text-[14px] w-fit rounded-[24px] p-2 flex items-center"
                      >
                        {gen}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>

              {/* <Link href={data.link} target="_blank">
                  <p className="text-[14px] hover:underline">
                    See this on <span className=""> MyAnimeList</span>
                  </p>
                </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    </>
  );
};

export default Page;

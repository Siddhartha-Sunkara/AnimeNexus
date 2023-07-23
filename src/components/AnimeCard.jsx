import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimeCard = (datas) => {
  const { _id, title, synopsis, image, type, episodes, ranking } = datas;

  return (
    <div className="w-56 flex  justify-center  my-10 h-96 bg-blue-500">
      <div>
        <div className="overflow-hidden h-96">
          <Link href={`/Details/${_id}`}>
            <Image
              src={datas.image}
              alt=""
              width={200}
              height={300}
              className="card-image  w-full h-full hover:scale-110 overflow-clip"
            ></Image>
          </Link>
        </div>

        <Link href={`/Details/${_id}`}>
          <p className="text-[16px] font-semibold py-1 hover:underline">
            {datas.title.substring(0, 20)}...
          </p>
        </Link>

        <div className="flex  justify-between gap-5">
          <p className="text-[14px] font-semibold uppercase">{datas.type}</p>
          <p className="text-[14px] font-semibold uppercase">
            {datas.episodes} Epi
          </p>
          <Link href={`/Details/${_id}`}>
            <p className="text-[14px] font-semibold uppercase hover:text-[#7053ff]">
              View More
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;

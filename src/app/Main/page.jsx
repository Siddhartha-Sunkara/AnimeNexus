import Image from "next/image";
import React from "react";
import anime from "../../assests/anime.png";

const page = () => {
  return (
    <div className="bg-[#040203]">
    <div className="h-[90vh] w-[100%]">
      <div className="h-[60%] flex gap-5 overflow-hidden">
        <div className=" h-full slide-track w-[200%]  bg-[#040203] flex gap-10  ">
          <div className="slide w-[384px] bg-blue-300 rounded-t-full overflow-hidden ">
            <video src="./assets/aot.mp4" autoPlay loop muted controls />
          </div>
          <div className="slide w-[576px] flex flex-col  gap-5   bg-[#040203]">
            <div className="upper flex h-[50%]  gap-10   ">
              <div className="left w-[50%] bg-red-400 overflow-hidden">
                <Image
                  src="/assets/naruto.jpeg"
                  alt="naruto"
                  width={200}
                  height={300}
                  className="w-full "
                />
              </div>
              <div className="right w-[50%] bg-red-400 overflow-hidden rounded-full ">
                <Image
                  src="/assets/Naruto1.jpeg"
                  alt="naruto"
                  width={200}
                  height={300}
                  className="w-full mt-[-100px]"
                />
              </div>
            </div>
            <div className="lower h-[50%]  bg-red-600">
            <Image
                  src="/assets/naruto2.jpg"
                  alt="naruto"
                  width={200}
                  height={300}
                  className="w-full"
                />
            </div>
          </div>
          <div className="slide w-[960px] bg-blue-300">
            <video src="./assets/onepiece1.mp4" autoPlay loop muted controls />
          </div>
          <div className="slide w-[384px] bg-blue-300 rounded-t-[30%] overflow-hidden ">
            <video src="./assets/jjk.mp4" autoPlay loop muted controls />
          </div>
          <div className=" slide w-[576px] flex flex-col  gap-5    bg-[#040203]">
            <div className="upper h-[50%] bg-red-600 rounded-full overflow-hidden">
            <Image
                  src="/assets/itachi1.jpeg"
                  alt="naruto"
                  width={200}
                  height={300}
                  className="w-full "
                />
            </div>
            <div className="lower flex h-[50%]  gap-10   ">
              <div className="left w-[50%] bg-red-400 overflow-hidden">
                {" "}
                <Image
                  src="/assets/Eye.jpeg"
                  alt="naruto"
                  width={200}
                  height={300}
                  className="w-full  mt-[-100px]"
                />
              </div>
              <div className="right w-[50%] bg-red-400 rounded-s-full overflow-hidden rounded-tr-full">
              <Image
                  src="/assets/mob.jpeg"
                  alt="naruto"
                  width={200}
                  height={300}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div className="slide w-[960px] bg-blue-300">
            <video src="./assets/demon1.mp4" autoPlay loop muted controls />
          </div>
        </div>
        <div className=" h-full slide-track w-[200%]  bg-[#040203] flex gap-10  ">
          <div className="slide w-[384px] bg-blue-300 rounded-t-full overflow-hidden ">
            <video src="./assets/aot.mp4" autoPlay loop muted controls />
          </div>
          <div className="slide w-[576px] flex flex-col  gap-5   bg-[#040203]">
            <div className="upper flex h-[50%]  gap-10   ">
              <div className="left w-[50%] bg-red-400 overflow-hidden">
                <Image
                  src="/assets/naruto.jpeg"
                  alt="naruto"
                  width={200}
                  height={300}
                  className="w-full "
                />
              </div>
              <div className="right w-[50%] bg-red-400 overflow-hidden rounded-full ">
                <Image
                  src="/assets/Naruto1.jpeg"
                  alt="naruto"
                  width={200}
                  height={300}
                  className="w-full mt-[-100px]"
                />
              </div>
            </div>
            <div className="lower h-[50%]  bg-red-600">
            <Image
                  src="/assets/naruto2.jpg"
                  alt="naruto"
                  width={200}
                  height={300}
                  className="w-full"
                />
            </div>
          </div>
          <div className="slide w-[960px] bg-blue-300">
            <video src="./assets/onepiece1.mp4" autoPlay loop muted controls />
          </div>
          <div className="slide w-[384px] bg-blue-300 rounded-t-[30%] overflow-hidden ">
            <video src="./assets/jjk.mp4" autoPlay loop muted controls />
          </div>
          <div className=" slide w-[576px] flex flex-col  gap-5    bg-[#040203]">
            <div className="upper h-[50%] bg-red-600 rounded-full overflow-hidden">
            <Image
                  src="/assets/itachi1.jpeg"
                  alt="naruto"
                  width={200}
                  height={300}
                  className="w-full "
                />
            </div>
            <div className="lower flex h-[50%]  gap-10   ">
              <div className="left w-[50%] bg-red-400 overflow-hidden">
                {" "}
                <Image
                  src="/assets/Eye.jpeg"
                  alt="naruto"
                  width={200}
                  height={300}
                  className="w-full  mt-[-100px]"
                />
              </div>
              <div className="right w-[50%] bg-red-400 rounded-s-full overflow-hidden rounded-tr-full">
              <Image
                  src="/assets/mob.jpeg"
                  alt="naruto"
                  width={200}
                  height={300}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div className="slide w-[960px] bg-blue-300">
            <video src="./assets/demon1.mp4" autoPlay loop muted controls />
          </div>
        </div>
        
      </div>
      <div className="text-white font-['Inter'] w-full text-[50px] md:text-[80px] lg:text-[120px] xl:text-[160px] flex item-center justify-center">
    <p className=" p-20"><span className="text-[#7053ff]">A</span>nime<span className="text-[#7053ff]">N</span>exus
    <span className="text-[#7053ff]">.</span></p>
    
  </div>
      

      {/* <p className="text-9xl absolute z-[100]   text-[#040203]  uppercase font-bold flex items-start justify-center w-full h-full"><span className="para font-['Darker Grotesque']"><span className="text-[#7053ff]">A</span>nime
            <span className="text-[#7053ff]">N</span>exus</span></p>
      <Image src={new3} alt="anime" className="anime  w-[100%]  " placeholder="blur"  /> */}
    </div>
    <div className="text-white font-['Darker Grotesque']  text-[80px] md:text-[156px] xl:text-[222px] 2xl:text-[272px]">
    <p className="fav p-10">Your <br/> Favourite <br/> Anime<span className="text-[#7053ff]">.</span></p>
    
  </div>
  
  </div>
  );
};

export default page;

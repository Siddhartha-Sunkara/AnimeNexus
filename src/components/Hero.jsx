import React from "react";

import Link from "next/link";
import Image from 'next/image'
import PageWrapper from '../components/PageWrapper'
import Fav from "../components/Fav";

const Hero = () => {
  return (
    <div className="bg-[#040203]">
      <div className="h-[90vh] w-[100%]">
        <div className="h-[60%] flex gap-5 overflow-hidden">
          <div className=" h-full slide-track w-[200%]  bg-[#040203] flex gap-10  ">
            <div className="slide w-[384px] rounded-t-full overflow-hidden ">
            <Image
                  
                  src="https://i.pinimg.com/564x/f2/2d/5b/f22d5bcadf0a8d12da2db59ac0b70a5b.jpg"
                  alt="naruto"
                  width={1080}
                  height={1080}
                  priority={true}
                  
                  className="w-full object-cover"
                />
            </div>
            <div className="slide w-[576px] flex flex-col  gap-5   bg-[#040203]">
              <div className="upper flex h-[50%]  gap-10   ">
                <div className="left w-[50%] overflow-hidden">
                  <Image
                  
                    src="https://i.pinimg.com/564x/2d/c0/79/2dc079c2a051eb5e022efbf43fe46178.jpg"
                    alt="naruto"
                    width={1080}
                    height={1080}
                    priority={true}
                    className="w-full object-cover"
                  />
                </div>
                <div className="right w-[50%]  overflow-hidden rounded-full ">
                  <Image
                  
                    src="https://i.pinimg.com/564x/36/75/32/3675321bbbb6049461d67291fc44e1ad.jpg"
                    alt="naruto"
                    width={1080}
                    height={1080}
                    priority={true}
                    className="w-full mt-[-100px] object-cover"
                  />
                </div>
              </div>
              <div className="lower h-[50%]  ">
                <Image
                
                  src="https://c4.wallpaperflare.com/wallpaper/917/245/80/anime-demon-slayer-kimetsu-no-yaiba-tanjirou-kamado-hd-wallpaper-preview.jpg"
                  priority={true}
                  width={1080}
                  height={1080}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="slide w-[960px] ">
              {/* <video src="/assets/op1.mp4" autoPlay loop muted  /> */}
              {/* <iframe src="https://player.vimeo.com/video/855954930?&api=1&background=1&autoplay=1&loop=1&autopause=0&mute=1&playsinline=1&loop=1&title=0&byline=0&portrait=0&showinfo=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"  title="op1"></iframe> */}
            </div>
            <div className="slide w-[384px]  rounded-t-[30%] overflow-hidden ">
            <Image
                priority={true}
                src="https://i.pinimg.com/564x/cf/f6/6b/cff66bcd5361c982066aa65d6d345526.jpg"
                alt="naruto"
                width={1080}
                height={1080}
                className="object-cover "
              />
            </div>
            <div className=" slide w-[576px] flex flex-col  gap-5    bg-[#040203]">
              <div className="upper h-[50%]  rounded-full overflow-hidden">
                <Image
                priority={true}
                  src="https://c4.wallpaperflare.com/wallpaper/693/688/935/uchiha-madara-naruto-shippuuden-wallpaper-preview.jpg"
                  alt="naruto"
                  width={1080}
                  height={1080}
                  className="object-cover "
                />
              </div>
              <div className="lower flex h-[50%]  gap-10   ">
                <div className="left w-[50%] overflow-hidden">
                  {" "}
                  
                  <Image
                  priority={true}
                    src="https://i.pinimg.com/564x/50/f7/d7/50f7d7e462e653d28660f0bdf0563239.jpg"
                    alt="naruto"
                    width={1080}
                    height={1080}
                    
                    className="w-full  mt-[-100px] object-cover"
                  />
                  
                </div>
                <div className="right w-[50%] rounded-s-full overflow-hidden rounded-tr-full">
                  <Image
                  priority={true}
                    src="https://i.pinimg.com/564x/34/6b/5e/346b5e710603122fdc5e38fffef75088.jpg"
                    alt="naruto"
                    width={1080}
                    height={1080}
                    
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="slide w-[960px] h-full ">
              {/* <video src="/assets/demon1.mp4" autoPlay loop muted  /> */}
              
               {/* <iframe src="https://player.vimeo.com/video/855952916?&api=1&background=1&autoplay=1&loop=1&autopause=0&mute=1&playsinline=1&loop=1&title=0&byline=0&portrait=0&showinfo=0&controls=0" frameborder="0"   title="demon1"></iframe> */}
            </div>
          </div>
          <div className=" h-full slide-track w-[200%]  bg-[#040203] flex gap-10  ">
            <div className="slide w-[384px]  rounded-t-full overflow-hidden ">
            <Image
                  priority={true}
                  src="https://i.pinimg.com/564x/f2/2d/5b/f22d5bcadf0a8d12da2db59ac0b70a5b.jpg"
                  alt="naruto"
                  width={1080}
                  height={1080}
                  
                  className="w-full object-cover"
                />
            </div>
            <div className="slide w-[576px] flex flex-col  gap-5   bg-[#040203]">
              <div className="upper flex h-[50%]  gap-10   ">
                <div className="left w-[50%] overflow-hidden">
                  <Image
                  priority={true}
                    src="https://i.pinimg.com/564x/2d/c0/79/2dc079c2a051eb5e022efbf43fe46178.jpg"
                    alt="naruto"
                    width={1080}
                    height={1080}
                    
                    className="w-full object-cover"
                  />
                </div>
                <div className="right w-[50%] overflow-hidden rounded-full ">
                  <Image
                  priority={true}
                    src="https://i.pinimg.com/564x/36/75/32/3675321bbbb6049461d67291fc44e1ad.jpg"
                    alt="naruto"
                    width={1080}
                    height={1080}
                    
                    className="w-full mt-[-100px] object-cover"
                  />
                </div>
              </div>
              <div className="lower h-[50%]  ">
                <Image
                priority={true}
                  src="https://c4.wallpaperflare.com/wallpaper/917/245/80/anime-demon-slayer-kimetsu-no-yaiba-tanjirou-kamado-hd-wallpaper-preview.jpg"
                  alt="naruto"
                  width={1080}
                  height={1080}
                  className=" object-cover"
                />
              </div>
            </div>
            <div className="slide w-[960px] ">
              {/* <video src="/assets/op1.mp4" autoPlay loop muted  /> */}
              {/* <iframe src="https://player.vimeo.com/video/855954930?&api=1&background=1&autoplay=1&loop=1&autopause=0&mute=1&playsinline=1&loop=1&title=0&byline=0&portrait=0&showinfo=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"  title="op1"></iframe> */}

            </div>
            <div className="slide w-[384px]  rounded-t-[30%] overflow-hidden ">
            <Image
                priority={true}
                src="https://i.pinimg.com/564x/cf/f6/6b/cff66bcd5361c982066aa65d6d345526.jpg"
                alt="naruto"
                width={1080}
                height={1080}
                className="object-cover "
              />
            </div>
            <div className=" slide w-[576px] flex flex-col  gap-5    bg-[#040203]">
              <div className="upper h-[50%] rounded-full overflow-hidden">
                <Image
                priority={true}
                  src="https://c4.wallpaperflare.com/wallpaper/693/688/935/uchiha-madara-naruto-shippuuden-wallpaper-preview.jpg"
                  alt="naruto"
                  width={1080}
                  height={1080}
                  className="object-cover "
                />
              </div>
              <div className="lower flex h-[50%]  gap-10   ">
                <div className="left w-[50%]  overflow-hidden">
                  {" "}
                  
                  <Image
                  priority={true}
                    src="https://i.pinimg.com/564x/50/f7/d7/50f7d7e462e653d28660f0bdf0563239.jpg"
                    alt="naruto"
                    width={1080}
                    height={1080}
                    
                    className="w-full  mt-[-100px] object-cover"
                  />
                  
                </div>
                <div className="right w-[50%]  rounded-s-full overflow-hidden rounded-tr-full">
                  <Image
                  priority={true}
                    src="https://i.pinimg.com/564x/34/6b/5e/346b5e710603122fdc5e38fffef75088.jpg"
                    alt="naruto"
                    width={1080}
                    height={1080}
                    
                  />
                </div>
              </div>
            </div>
            <div className="slide w-[960px] ">
              {/* <video src="/assets/demon1.mp4" autoPlay loop muted  /> */}
              {/* <iframe src="https://player.vimeo.com/video/855952916?&api=1&background=1&autoplay=1&loop=1&autopause=0&mute=1&playsinline=1&loop=1&title=0&byline=0&portrait=0&showinfo=0&controls=0" frameborder="0"  title="demon1"></iframe> */}
            </div>
          </div>
        </div>
        <PageWrapper>
        <div className=" h-[40%] text-white font-['cfour'] w-full text-[50px] md:text-[80px] lg:text-[120px] xl:text-[160px] flex items-center justify-center">
          <p className=" font-semibold py-20">
            <span className="text-[#7053ff]">A</span>nime
            <span className="text-[#7053ff]">N</span>exus
            <span className="text-[#7053ff]">.</span>
          </p>
        </div>
        </PageWrapper>

        {/* <p className="text-9xl absolute z-[100]   text-[#040203]  uppercase font-bold flex items-start justify-center w-full h-full"><span className="para font-['Darker Grotesque']"><span className="text-[#7053ff]">A</span>nime
            <span className="text-[#7053ff]">N</span>exus</span></p>
      <Image
       src={new3} alt="anime" className="anime  w-[100%]  " placeholder="blur"
      blurDataURL="/assets/Eye.webp"  /> */}
      </div>
      <Fav />
    </div>
  );
};

export default Hero;

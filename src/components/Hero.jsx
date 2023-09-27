import React from "react";

import Link from "next/link";
import Image from 'next/image'
import PageWrapper from '../components/PageWrapper'
import Fav from "../components/Fav";
import op1 from '../../public/assets/op1.jpeg'
import op2 from '../../public/assets/op2.jpeg'
import aot1 from '../../public/assets/aot1.jpg'
import op4 from '../../public/assets/op4.jpg'
import db1 from '../../public/assets/db1.jpg'
import ds1 from '../../public/assets/ds1.jpg'
import bl1 from '../../public/assets/bl1.jpg'
import na1 from '../../public/assets/na1.jpg'
import jjk1 from '../../public/assets/jjk1.jpg'
import op3 from '../../public/assets/op3.jpg'

const Hero = () => {
  return (
    <div className="bg-[#040203]">
      <div className="h-[90vh] w-[100%]">
        <div className="h-[60%] flex gap-5 overflow-hidden">
          <div className=" h-full slide-track w-[200%]  bg-[#040203] flex gap-10  ">
            <div className="slide w-[384px] rounded-t-full overflow-hidden ">
            <Image
                  placeholder="blur"
                  src={aot1}
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
                  placeholder="blur"
                    src={op4}
                    alt="naruto"
                    width={1080}
                    height={1080}
                    priority={true}
                    className="w-full object-cover"
                  />
                </div>
                <div className="right w-[50%]  overflow-hidden rounded-full ">
                  <Image
                  placeholder="blur"
                    src={db1}
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
                placeholder="blur"
                  src={ds1}
                  priority={true}
                  width={1080}
                  height={1080}
                  alt="naruto"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="slide w-[960px] ">
            <Image
                priority={true}
                src={op1}
                alt="naruto"
                width={1080}
                height={1080}
                className="object-cover "
                placeholder="blur"
              />
              {/* <video src="/assets/op1.mp4" autoPlay loop muted  /> */}
              {/* <iframe src="https://player.vimeo.com/video/855954930?&api=1&background=1&autoplay=1&loop=1&autopause=0&mute=1&playsinline=1&loop=1&title=0&byline=0&portrait=0&showinfo=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"  title="op1"></iframe> */}
            </div>
            <div className="slide w-[384px]  rounded-t-[30%] overflow-hidden ">
            <Image
                priority={true}
                src={bl1}
                alt="naruto"
                width={1080}
                height={1080}
                className="object-cover "
                placeholder="blur"
              />
            </div>
            <div className=" slide w-[576px] flex flex-col  gap-5    bg-[#040203]">
              <div className="upper h-[50%]  rounded-full overflow-hidden">
                <Image
                priority={true}
                  src={na1}
                  alt="naruto"
                  width={1080}
                  height={1080}
                  className="object-cover "
                  placeholder="blur"
                />
              </div>
              <div className="lower flex h-[50%]  gap-10   ">
                <div className="left w-[50%] overflow-hidden">
                  {" "}
                  
                  <Image
                  priority={true}
                    src={jjk1}
                    alt="naruto"
                    width={1080}
                    height={1080}
                    placeholder="blur"
                    className="w-full  mt-[-100px] object-cover"
                  />
                  
                </div>
                <div className="right w-[50%] rounded-s-full overflow-hidden rounded-tr-full">
                  <Image
                  priority={true}
                    src={op3}
                    alt="naruto"
                    width={1080}
                    height={1080}
                    placeholder="blur"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="slide w-[960px] h-full ">
              {/* <video src="/assets/demon1.mp4" autoPlay loop muted  /> */}
              <Image
                priority={true}
                src={op2}
                alt="naruto"
                width={1080}
                height={1080}
                className="object-cover "
                placeholder="blur"
              />
               {/* <iframe src="https://player.vimeo.com/video/855952916?&api=1&background=1&autoplay=1&loop=1&autopause=0&mute=1&playsinline=1&loop=1&title=0&byline=0&portrait=0&showinfo=0&controls=0" frameborder="0"   title="demon1"></iframe> */}
            </div>
          </div>
          <div className=" h-full slide-track w-[200%]  bg-[#040203] flex gap-10  ">
            <div className="slide w-[384px] rounded-t-full overflow-hidden ">
            <Image
                  placeholder="blur"
                  src={aot1}
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
                  placeholder="blur"
                    src={op4}
                    alt="naruto"
                    width={1080}
                    height={1080}
                    priority={true}
                    className="w-full object-cover"
                  />
                </div>
                <div className="right w-[50%]  overflow-hidden rounded-full ">
                  <Image
                  placeholder="blur"
                    src={db1}
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
                placeholder="blur"
                alt="naruto"
                  src={ds1}
                  priority={true}
                  width={1080}
                  height={1080}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="slide w-[960px] ">
            <Image
                priority={true}
                src={op1}
                alt="naruto"
                width={1080}
                height={1080}
                className="object-cover "
                placeholder="blur"
              />
              {/* <video src="/assets/op1.mp4" autoPlay loop muted  /> */}
              {/* <iframe src="https://player.vimeo.com/video/855954930?&api=1&background=1&autoplay=1&loop=1&autopause=0&mute=1&playsinline=1&loop=1&title=0&byline=0&portrait=0&showinfo=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"  title="op1"></iframe> */}
            </div>
            <div className="slide w-[384px]  rounded-t-[30%] overflow-hidden ">
            <Image
                priority={true}
                src={bl1}
                alt="naruto"
                width={1080}
                height={1080}
                className="object-cover "
                placeholder="blur"
              />
            </div>
            <div className=" slide w-[576px] flex flex-col  gap-5    bg-[#040203]">
              <div className="upper h-[50%]  rounded-full overflow-hidden">
                <Image
                priority={true}
                  src={na1}
                  alt="naruto"
                  width={1080}
                  height={1080}
                  className="object-cover "
                  placeholder="blur"
                />
              </div>
              <div className="lower flex h-[50%]  gap-10   ">
                <div className="left w-[50%] overflow-hidden">
                  {" "}
                  
                  <Image
                  priority={true}
                    src={jjk1}
                    alt="naruto"
                    width={1080}
                    height={1080}
                    placeholder="blur"
                    className="w-full  mt-[-100px] object-cover"
                  />
                  
                </div>
                <div className="right w-[50%] rounded-s-full overflow-hidden rounded-tr-full">
                  <Image
                  priority={true}
                    src={op3}
                    alt="naruto"
                    width={1080}
                    height={1080}
                    placeholder="blur"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="slide w-[960px] h-full ">
              {/* <video src="/assets/demon1.mp4" autoPlay loop muted  /> */}
              <Image
                priority={true}
                src={op2}
                alt="naruto"
                width={1080}
                height={1080}
                className="object-cover "
                placeholder="blur"
              />
               {/* <iframe src="https://player.vimeo.com/video/855952916?&api=1&background=1&autoplay=1&loop=1&autopause=0&mute=1&playsinline=1&loop=1&title=0&byline=0&portrait=0&showinfo=0&controls=0" frameborder="0"   title="demon1"></iframe> */}
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

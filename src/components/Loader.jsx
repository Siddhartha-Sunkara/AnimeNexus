import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const Loader = ({ setShowLoader }) => {
  const showLoader = {
    hidden: {
      clipPath: "polygon(0 0,100% 0 , 100% 100% ,0 100%)",

      transition: {
        duration: 1,
      },
    },
    show: {
      clipPath: "polygon(0 0,100% 0,100% 0 ,0 0)",

      transition: {
        delay: 2.6,
        duration: 0.5 ,
        
      },
    },
  };

  const textStaggered = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };
  const textStaggeredChildren = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        ease: "easeIn",
      },
    },
  };
  const imageUp = {
    hidden: {
      clipPath: "polygon(0 0,100% 0 , 100% 0 ,0 0)",
    },
    show: {
      clipPath: "polygon(0 0,100% 0,100% 100% ,0 100%)",
      transition: {
        // delay: 0.8,
        duration: 1,
        // ease: "easeIn",
        delayChildren: 0.3,
        staggerChildren: 0.3,
        
      },
    },
  };
  return (
    <motion.div
      variants={showLoader}
      initial="hidden"
      animate="show"
      onAnimationComplete={() => setShowLoader(false)}
      className="h-[90vh] z-[100] bg-white w-[100%] flex flex-col items-center justify-center "
    >
        <motion.div variants={imageUp}
          initial="hidden"
          animate="show" className="w-[100%] h-[60%]  flex items-center  gap-10 justify-center mt-20 ">
        <img
          src="/assets/main1.webp"
          width={275}
          height={300}
          
          className="h-full"
          
        />
        <img
          src="/assets/main2.webp"
          width={275}
          height={300}
          
          className="hidden md:flex h-full"
          
        />
        <img
          src="/assets/main3.webp"
          width={275}
          height={300}
          
          className=" hidden lg:flex h-full"
          
        />
        <img
          src="/assets/main6.webp"
          width={275}
          height={300}
          
          className=" hidden xl:flex h-full"
          
        />
        {/* <motion.img
          src="/assets/naruto1.webp"
          width={200}
          height={300}
          variants={imageUp}
          initial="hidden"
          animate="show"
          className="h-full"
          
        />

        <motion.img
          src="/assets/naruto1.webp"
          width={200}
          height={300}
          variants={imageUp}
          initial="hidden"
          animate="show"
          className="h-full"
          
        />
        <motion.img
          src="/assets/naruto1.webp"
          width={200}
          height={300}
          variants={imageUp}
          initial="hidden"
          animate="show"
          className="h-full"
          
        /> */}
      </motion.div>
      <motion.h1
        variants={textStaggered}
        initial="hidden"
        animate="show"
        className="text-black  text-6xl    transform h-[40%] items-center justify-center flex   z-50"
      >
        <motion.span
          
          initial="hidden"
          animate="show"
          variants={textStaggeredChildren}
          className=" font-['cfour'] text-[#040203] w-full text-[50px] md:text-[80px] lg:text-[120px] xl:text-[160px] flex items-center justify-center"
        >
          <p className=" font-semibold">
            <span className="text-[#7053ff]">A</span>nime
            <span className="text-[#7053ff]">N</span>exus
            <span className="text-[#7053ff]">.</span>
          </p>
        </motion.span>
        
      </motion.h1>
      
    </motion.div>
  );
};

export default Loader;

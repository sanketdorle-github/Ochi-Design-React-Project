import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.1"
      // border-tl-3 border-tr-3 
      className="w-full h-[55vh]  py-20 rounded-lg bg-[#004D43] pt-10">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap mt-8 ">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 12 }}
          //pt-10 pr-20 mb-[5vw] 
          className='uppercase text-[34vh] leading-none tracking-tighter font-["FoundersGrotesk "] font-bold px-5'
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 12 }}
          className='uppercase text-[34vh] leading-none  tracking-tighter  font-["Founders_Grotesk_X-Condensed "] font-bold  px-5'
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;

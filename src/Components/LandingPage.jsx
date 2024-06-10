import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div
      data-scorll
      data-scroll-speed=".9"
      className=" w-full h-screen bg-zinc-900 pt-32"
    >
      <div className="textStructure mt-20 px-20">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: "0" }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    
                    className="mr-[1vw] w-[8vw] rounded-lg h-[4.6vw] -top-[1.1vw] relative bg-green-500 "
                  >
                   <img className="overflow-hidden rounded-lg " src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                  </motion.div>
                )}
                <h1 className="pt[12vw] -mb[.9vw] uppercase text-[7vw] leading-[1] font-['FoundersGrotesk'] tracking-tighter ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className=" flex items-center border-t-[1px] border-zinc-800 mt-32 mb-32 flex justify-between py-3 px-5">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md  font-light tracking-tighter leading-none rounded hover:bg-gray-100 hover:text-black hover:font-semibold transition-colors duration-300">
            {item}
          </p>
        ))}
        <div className="start  flex justify-center gap-5">
          <div className="px-4 py-2 border-[2px]  hover:bg-gray-100 hover:text-black hover:font-semibold transition-colors duration-300 border-zinc-500 rounded-full font-light text-md uppercase">
            Start the project
          </div>
          <div className="w-10 h-10 border-[2px]  hover:bg-gray-100 hover:text-gray-800 transition-colors duration-300 border-zinc-400 rounded-full flex items-center justify-center">
            <span className=" rotate-45 ">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

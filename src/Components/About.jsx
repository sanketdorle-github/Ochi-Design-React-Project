import { motion } from 'framer-motion'
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";



const About = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="0.01" className='w-full rounded-tr-lg rounded-tl-lg bg-[#CDEA68] p-20'>
            <h1 className=' font-["Founders_Grotesk_X-Condensed "] text-[3.5vw] leading-[3.9vw] tracking-tight text-black font-normal '> Ochi is a strategic partner for fast-growing tech businesses that need to raise   funds, sell products, explain commplex ideas, and hire great people.
            </h1>
            <div className='w-full  mt-12 border-t-[1px] flex  gap-10 items-center  border-[#a1b562]'>
                <div className='w-1/2  h-[60vh] mt-2 '>
                    <h1 className='text-[3.5vw] text-black pt-[3px] font-["Founders_Grotesk_X-Condensed "]  ' > Our approach:</h1>
                    {/* <motion.button className='bg-zinc-900 rounded-full mt-4    py-5 px-9 uppercase flex items-center'>
                        read more
                        <div  className=' w-2 h-2 rounded-full bg-white mx-3  flex items-center justify-center bg-gray-900 text-gray-100 font-bold p-4 group hover:bg-gray-800 hover:text-white transition-colors duration-300'>
                        <span className=" rotate-45 absolute opacity-0 group-hover:opacity-100 ml-2 transition-opacity duration-300">
              <FaArrowUpLong />
            </span>
                        </div>

                    </motion.button>*/}
                    
                    <motion.button className="  relative flex items-center justify-center bg-gray-800 text-white font-bold p-4 rounded-[40px] group hover:bg-gray-800 hover:text-white transition-colors duration-300">
      Read more
      <div className="relative  w-2 h-2 rounded-full bg-white mx-3 flex items-center justify-center transition-all duration-300 group-hover:w-10 group-hover:h-8">
        <span className="rotate-45 absolute opacity-0 group-hover:opacity-100 text-black transition-opacity duration-300">
          <FaArrowUpLong />
        </span>
      </div>
    </motion.button>
                </div> 
                
                <div className='w-1/2  h-60vh] mt-2  bg-gray-400  rounded-lg'>
                            <img className='w-full h-full  rounded-lg' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
                    
                </div>
                
                
            </div>
          

        </div>
    )
}

export default About
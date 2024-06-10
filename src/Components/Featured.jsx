import { motion, useAnimation } from 'framer-motion'
import { space } from 'postcss/lib/list'
import React, { useState } from 'react'

const Featured = () => {
    const cards = [useAnimation(), useAnimation()];
    const handleHover = (index) => {

        cards[index].start({ y: "0" })
        
       
    }
    const handleHoverEnd = (index) => {

        cards[index].start({ y: "100%" })
    }
    return (
        <div data-scroll data-scroll-section className='  w-full py-16'>
            <div className='w-full p-16 border-b-[1px] border-zinc-600   '>
                <h1 className='text-6xl font-["Founders_Grotesk_X-Condensed "] '>Featured projects</h1>
            </div>
            <div className='px-10'>
                <div className='cards  w-full flex gap-10 mt-20'>
                    <motion.div

                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className=' relative cardContainer w-1/2 h-[75vh]   '>
                        <h1 className=' flex absolute top-1/2 left-full z-[9] overflow-hidden -translate-y-1/2  -translate-x-1/2 font-["Founders_Grotesk_X-Condensed "] leading-none tracking-tighter text-white text-8xl ' >
                            {"FYDE".split("").map((item, index) => (
                                <motion.span
                              
                                    initial={{ y: "100" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                                    className=' inline-block '>{item}
                                </motion.span>
                            ))}

                        </h1>
                        <motion.div 
                         whileHover={{ scale: 0.95 }}
                        className='card h-full w-full rounded-lg overflow-hidden'>

                            <img className=' w-full h-full bg-cover '
                             src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                              alt="" />
                        </motion.div>

                    </motion.div>

                    <motion.div 
                    onHoverStart={() => handleHover(1)}
                    onHoverEnd={() => handleHoverEnd(1)}
                    className=' relative cardContainer w-1/2 h-[75vh] '>
                        <h1 className='absolute flex z-[9] overflow-hidden top-1/2 right-full -translate-y-1/2  translate-x-1/2 font-["Founders_Grotesk_X-Condensed "] leading-none tracking-tighter text-white text-8xl ' >
                            {"VISE".split("").map((item, index) => (
                                <motion.span
                                
                                initial={{ y: "100" }}
                                animate={cards[1]}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                                className=' inline-block '>{item}
                            </motion.span>
                            ))}

                        </h1>
                        <motion.div
                        whileHover={{ scale: 0.95 }}
                         className='  card h-full w-full rounded-lg'>
                            <img className='  w-full h-full bg-cover   ' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg
       " alt="" />
                        </motion.div>

                    </motion.div>

                </div>
            </div>

        </div>
    )
}
export default Featured
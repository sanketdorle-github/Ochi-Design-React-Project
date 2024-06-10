import React from 'react'

const Cards = () => {
    return (
        <div className='w-full h-screen  bg-red-900 flex items-center gap-10 px-32'>
            <div className='cardcontainer  w-1/2 h-[50vh]'>
                <div className='card relative bg-gray-900 rounded-xl cards flex w-full h-full justify-center items-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute border-2 rounded-full bg-green border-[#CDEA68] px-5 py-1 left-10 bottom-10 n font-[#CDEA68]'>&copy;2019-2020</button>
                </div>

            </div>

            <div className='cardcontainer flex  gap-5 w-1/2 h-[50vh]'>
                <div className='relative bg-gray-900 rounded-xl cards flex w-1/2  h-full justify-center items-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute border-2 rounded-full bg-green  px-5 py-1 left-[25] bottom-10 '>Rating 5.0 on Clutch</button>
                </div>
                <div className='relative bg-gray-900 rounded-xl cards flex w-1/2 h-full justify-center items-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute border-2 rounded-full bg-green  px-5 py-1 left-10 bottom-10 '>Business Bootcamp Alumni</button>
                </div>
            </div>



        </div>
    )
}

export default Cards
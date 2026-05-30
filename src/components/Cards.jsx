import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen flex gap-5 px-10 items-center'>
      <div className='cardscontainer w-full h-[75vh] flex pt-20 pb-10'>
        <div className='card1 relative w-full h-full rounded-xl overflow-hidden bg-[#004D43] text-[#CDEA68] justify-center items-center flex text-xl'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='rounded-4xl border-[#CDEA68] border-1 text-[#CDEA68] absolute left-8 bottom-8'><p className='flex items-center p-2'>&copy;2019-2025</p></button>

        </div>
      </div>

      <div className='cardscontainer w-full h-[75vh] flex gap-5 pt-20 pb-10'>
        <div className='card2 w-full h-full rounded-xl overflow-hidden bg-[#212121] relative flex justify-center items-center'>
          <img className='bg-cover h-1/5 ' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className='rounded-4xl border-[#F1F1F1] border-1 text-[#F1F1F1] absolute left-8 bottom-8'><p className='flex items-center p-2'>RATING 5.0 ON CLUTCH</p></button>

        </div>

        <div className='card3 w-full h-full rounded-xl overflow-hidden bg-[#212121] relative flex justify-center items-center'>
            <img className='bg-cover h-1/4 w-1/3' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='rounded-4xl border-[#F1F1F1] border-1 text-[#F1F1F1] absolute left-8 bottom-8'><p className='flex items-center p-2'>BUSINESS BOOTCAMP ALUMNI</p></button>

        </div>
      </div>

    </div>
  )
}

export default Cards

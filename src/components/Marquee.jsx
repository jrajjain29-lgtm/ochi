import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1' className='w-full py-25 rounded-t-3xl bg-[#004D43]'>
        <div className='text flex border-t-2 border-b-2 border-zinc-400 whitespace-nowrap overflow-hidden'>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear",duration: 10}} className='text-[20vw] leading-none text-white font-["Founders_Grotesk"] font-semibold pt-10 -mb-[5vw] uppercase tracking-tighter pr-20'>WE ARE OCHI</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear",duration: 10}} className='text-[20vw] leading-none text-white font-["Founders_Grotesk"] font-semibold pt-10 -mb-[5vw] uppercase tracking-tighter pr-20'>WE ARE OCHI</motion.h1>
        </div>
    </div>
  )
}

export default Marquee

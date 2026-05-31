import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa6";

const LandingPage = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.5' className='w-full h-screen bg-white pt-1'>
        <div className='textstructure mt-40 px-20'>
            {["WE CREATE","EYE-OPENING","PRESENTATIONS"].map((item,index)=>{
                return (
                  <div className='masker flex flex-col'>
                      <div className='flex items-end overflow-hidden'>
                          {index === 1 && (
                            <motion.div 
                            initial={{ width: 0 }} 
                            animate={{ width: "10vw" }} 
                            transition={{ ease:[0.76, 0, 0.24, 1], duration: 1, delay: 0.2 }}
                            className='w-[10vw] h-[5.7vw] rounded-md overflow-hidden relative '><img src="/bhbhbh.png" className='' alt="" /></motion.div>)}
                          <h1 className='pt-[2vw] -mb-[1vw] uppercase scale-y-[1.5] leading-[0.9] font-bold text-[6vw] font-["Founders_Grotesk"]'>{item}</h1>
                      </div>
                  </div>
                );
            })}
        </div>

        <div className='border-t-[1px] font-["NeueMontreal"] border-zinc-700 mt-35 flex justify-between items-center py-3 px-20'>
              {["Presentation and storytelling agency",
              "For innovation teams and global brands"
              ].map((item,index) => (
                 <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>
              ))}
      
              <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[2px] border-zinc-400 rounded-full font-light text-md uppercase'>start the project</div>
                <div className='w-10 h-10 border-[1px] border-zinc-400 rounded-full flex items-center justify-center'>
                  <span className='rotate-[45deg]'>
                    <FaArrowUp />
                  </span>
                </div>
              </div>
        </div>
        </div>
    
  )}

export default LandingPage

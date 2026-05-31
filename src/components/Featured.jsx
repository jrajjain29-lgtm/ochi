import { motion, useAnimation } from 'framer-motion'
import { span } from 'framer-motion/client'
import React, { use, useState } from 'react'
import { gsap, Power4 } from "gsap";

const Featured = () => {
    const cards = [useAnimation(),useAnimation()]; 

    const handleHover = (index) => {  
        cards[index].start({y: "0"})
    }  

    const handleHoverEnd = (index) => {  
        cards[index].start({y: "100%"})
    }  


  return (
   

    <div className='w-full py-20 bg-white z-[9] absolute'>
        <div className='w-full px-20 border-b-[1px] border-zinc-600 pb-20'>
            <h1 className='text-6xl tracking-tight'>Featured projects</h1>
        </div>

        <div className='px-20'>
            <div className='cards w-full flex gap-10 mt-10'>
                <motion.div 
                onHoverStart = {() => {handleHover(0)}} 
                onHoverEnd = {() => handleHoverEnd(0)}
                className='cardcontainer w-1/2 h-[75vh] relative'>    
                    
                     <h1 className='absolute flex text-[#CDEA68] right-0 overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 font-bold text-8xl z-9 leading-none tracking-tighter'>
                         {"FYDE".split ("").map((item , index) =>(
                            <motion.span 
                            initial={{ y: "100%" }} 
                            animate={cards[0]} 
                            transition={{ ease:[0.22, 1, 0.36, 1], delay: index * 0.1 }}
                            key={index} className='inline-block'>{item}
                            </motion.span>
                     ))}
                     </h1>
                    

                    <div className='card w-full h-full  rounded-xl overflow-hidden'>
                        <img className='h-full w-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
                    </div>
                </motion.div>
                
                <motion.div 
                onHoverStart = {() => {handleHover(1)}} 
                onHoverEnd = {() => handleHoverEnd(1)}
                className='cardcontainer w-1/2 h-[75vh] relative'>
                    <h1 className='absolute flex text-[#CDEA68] right-full overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 font-bold text-8xl z-9 leading-none tracking-tighter'>
                    
                    {"VISE".split ("").map((item , index) =>(
                         <motion.span 
                            initial={{ y: "100%" }} 
                            animate={cards[1]} 
                            transition={{ ease:[0.22, 1, 0.36, 1], delay: index * 0.1 }}
                            key={index} className='inline-block'>{item}
                        </motion.span>
                    ))}
                    
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                         <img className='h-full w-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png" alt="" />

                    </div>
                </motion.div>
            </div>

        </div>
    
    </div >


  )
}

export default Featured

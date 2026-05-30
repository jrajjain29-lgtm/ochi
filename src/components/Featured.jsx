import { motion } from 'framer-motion'
import { span } from 'framer-motion/client'
import React, { use, useState } from 'react'
import { gsap, Power4 } from "gsap";

const Featured = () => {
    const [ishovering, sethovering] = useState(false);
    
  return (
   

    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-600 pb-20'>
            <h1 className='text-6xl tracking-tight'>Featured projects</h1>
        </div>

        <div className='px-20'>
            <div className='cards w-full flex gap-10 mt-10'>
                <div onMouseEnter={() => sethovering(true)} 
                    onMouseLeave={() => sethovering(false)} 
                    className='cardcontainer w-1/2 h-[75vh] relative'>
                        
                    <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 font-bold text-8xl z-9 leading-none tracking-tighter'>
                    {"FYDE".split ("").map((item , index) =>(
                        <span key={index}>{item}</span>
                    ))}
                    
                    </h1>
                    <div className='card w-full h-full  rounded-xl overflow-hidden'>
                        <img className='h-full w-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
                    </div>
                </div>
                
                <div
                    onMouseEnter={() => sethovering(true)} 
                    onMouseLeave={() => sethovering(false)} className='cardcontainer w-1/2 h-[75vh] relative'>
                    <h1 className='absolute flex text-[#CDEA68] right-full overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 font-bold text-8xl z-9 leading-none tracking-tighter'>
                    {"VISE".split ("").map((item , index) =>(
                        <motion.span 
                        initial={{ y: "100%" }}
                        animate={ ishovering ? ({y: '0'}) : ({y: "100%"} )}
                        transition={{ ease : Power4.easeInOut}}
                        className='inline-block' key={index}>{item}
                        </motion.span>
                    ))}
                    
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                         <img className='h-full w-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png" alt="" />

                    </div>
                </div>
            </div>

        </div>
    
    
    </div >

   
        
    
  )
}

export default Featured

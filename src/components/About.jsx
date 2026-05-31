import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="1" className='w-full min-h-screen bg-[#CDEA68] rounded-t-3xl relative z-20 -mt-90'>
      <p className='py-20 pl-20 pr-40 text-[9vh] font-[Founders_Grotesk] leading-[4vw] tracking-tight '>
        We craft category-defining presentations, brand identities, and digital experiences that <span className='underline underline-offset-8 decoration-2'>drive funding, sales</span>, and <span className='underline underline-offset-8 decoration-2'>market leadership</span>.
      </p>
      <div className='w-full border-t-2 border-[#a0ad6e] flex justify-between'>
            <div className='pl-20'>
                <h1 className='pt-4 text-6xl'>
                    How we can help:
                </h1>

                <button className='roundbutton font-semibold flex items-center px-5 bg-black text-white w-45 h-14 border-2 border-black rounded-full mt-4'>
                    READ MORE <button className='arrow border-5 border-white rounded-full h-2 w-2 ml-8'></button>
                </button>
                
            </div>

            <div className='photu mt-5 mr-15  mb-10 w-[50vw] h-[70vh]'>
                <img className='w-full h-full object-cover  rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            </div>
      </div>

    </div>
  )
}

export default About

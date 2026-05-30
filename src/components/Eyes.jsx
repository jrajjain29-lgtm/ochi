import React, { useEffect,useRef,useState } from 'react'

const Eyes = () => {

    const [Rotate,setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        let deltaX = mouseX - window.innerWidth/2;
        let deltaY = mouseY - window.innerHeight/2;

        var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setRotate(angle-180);
        })
    })
    
  return (
    <div data-scroll data-scroll-speed='.7' className='w-full h-screen'>
        <div className='w-full h-screen relative bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
            <div className='absolute top-1/2 left-1/2 gap-10 -translate-x-[50%] -translate-y-[50%] flex'>
                <div className='Eye-1 w-[15vw] h-[15vw] bg-amber-50 rounded-full flex justify-center items-center'>
                    <div className='w-2/3 h-2/3 bg-black rounded-full relative'>
                        <div style={{transform: `translate(-50%,-50%) rotate(${Rotate}deg)`}} className='line w-full h-9 absolute top-1/2 left-1/2'>
                            <div className='w-10 h-10 bg-amber-50 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='Eye-2 w-[15vw] h-[15vw] bg-amber-50 rounded-full flex justify-center items-center'>
                    <div className='w-2/3 h-2/3 bg-black rounded-full relative'>
                        <div style={{transform: `translate(-50%,-50%) rotate(${Rotate}deg)`}} className='line w-full h-9 absolute top-1/2 left-1/2'>
                            <div className='w-10 h-10 bg-amber-50 rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
 



export default Eyes

import React, { useRef } from 'react'
import { motion,useInView} from "framer-motion";
import arrayDestruct from '../assets/portfolio/arrayDestruct.png'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

function Portfolio() {
    const aboutRef = useRef(null);
    const isInView = useInView(aboutRef, { triggerOnce: true, threshold: 0.2 });
    const portfolios = [
        {
            id: 1,
            src: arrayDestruct
        },
        {
            id: 2,
            src: reactParallax
        },
        {
            id: 3,
            src: navbar
        },
        {
            id: 4,
            src: reactSmooth
        },
        {
            id: 5,
            src: installNode
        },
        {
            id: 6,
            src: reactWeather
        }
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            
        <motion.div
                    ref={aboutRef}
                    initial={{ x: "-100px", opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="pb-8"
                >
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='text-xl py-6'>Here are some of my projects...</p>
            </motion.div>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {portfolios.map(({id, src})=>(
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src= {src} alt=""  className='w-full h-40 rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Demo</button>
                        <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Code</button>
                    </div>
                </div>
            ))}
            
        </div>
                
        </div>
       
    </div>
  )
}

export default Portfolio
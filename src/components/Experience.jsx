import React, { useRef } from 'react'
import { motion,useInView} from "framer-motion";
import django from "../assets/django.svg"
import mysql from "../assets/mysql.svg"
import react from "../assets/react.png"
import laravel from "../assets/laravel.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"

const Experience = () => {
    const aboutRef = useRef(null);
    const isInView = useInView(aboutRef, { triggerOnce: true, threshold: 0.2 });
    const techs = [
        {
            id: 1,
            src: django,
            title: 'Django',
            style: 'shadow-green-500'
        },
        {
            id: 2,
            src: mysql,
            title: 'MySQL',
            style: 'shadow-yellow-500'
        },
        {
            id: 3,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-300'
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: laravel,
            title: 'Laravel',
            style: 'shadow-red-500'
        }
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <motion.div
                ref={aboutRef}
                initial={{ x: "-100px", opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="pb-8">
                    <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Experience</p>
                    <p className='text-xl py-4'>These are the some of the techologies that I've worked with.</p>
            </motion.div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {techs.map(({id, src, title, style})=>(
                    <div
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg min-w-[120px] min-h-[160px] ${style}`}>
                    <img src={src} alt="" className='w-16 h-16 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                    </div>

                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Experience
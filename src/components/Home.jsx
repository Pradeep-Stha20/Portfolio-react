import React, { useRef } from 'react'
import { motion,useInView} from "framer-motion";
import myImage from '../assets/myImage.jpg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll'; 


const Home = () => {
    const aboutRef = useRef(null);
    const isInView = useInView(aboutRef, { triggerOnce: true, threshold: 0.2 });
  return (
<div name="home" className='h-screen w-full bg-gradient-to-b from-black
via-black to-gray-800 '>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <motion.div
                            ref={aboutRef}
                            initial={{ x: "-100px", opacity: 0 }}
                            animate={isInView ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="pb-8">
                                <h2 className='text-3xl sm:text-5xl font-bold text-white '>Software Developer | Problem Solver | Learner</h2>
            <p className='text-gray-500 py-4 max-w-md text-justify'>
            As a passionate software developer, I thrive on taking on new challenges and continuously learning to grow in my craft. With expertise in React.js and Laravel, I build dynamic, efficient applications while always exploring opportunities to expand my skill set.
            </p>

            <div>
                <Link 
                    to="portfolio" 
                    smooth duration={500} 
                    className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>

                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                    </span>
                </Link>
            </div>
            </motion.div>
        </div>
        <div>
            <img src={myImage} alt="my_profile"  className='rounded-2xl mx-auto object-cover md:w-80 md:h-80 '/>
        </div>
    </div>
</div> 

)};

export default Home;
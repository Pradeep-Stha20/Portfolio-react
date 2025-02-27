import React, { useRef } from 'react'
import { motion,useInView} from "framer-motion";


const About = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { triggerOnce: true, threshold: 0.2 });
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <motion.div
              ref={aboutRef}
              initial={{ x: "-100px", opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="pb-8">
                  
              <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
              </div>
          </motion.div>
            <p className='text-xl mt-4 text-justify'>As a software developer, I work with a variety of tools and technologies, including React.js, Laravel, Django, Python, and MySQL. I am continuously expanding my knowledge and strive to improve my skills in both front-end and back-end development. With experience in HTML, JavaScript, PHP, and databases like MongoDB, I'm comfortable building dynamic and scalable applications. I also explore frameworks like Bootstrap and Tailwind to enhance the design and responsiveness of my projects.</p>
            <br />

            <p className='text-xl text-justify'>What drives me is my passion for growth and problem-solving. Although I'm still learning, I approach every project with a mindset focused on improvement, always aiming to deepen my understanding of each technology I use. Whether it's tackling a new framework or refining my code, I believe in continuous learning and take pride in delivering solutions that are both functional and efficient. My goal is to always challenge myself, pushing beyond my current skills to become a better developer with each project.</p>
        </div>
    </div>
  )
}

export default About
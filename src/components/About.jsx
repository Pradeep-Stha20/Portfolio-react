import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>As a software developer, I work with a variety of tools and technologies, including React.js, Laravel, Django, Python, and MySQL. I am continuously expanding my knowledge and strive to improve my skills in both front-end and back-end development. With experience in HTML, JavaScript, PHP, and databases like MongoDB, I'm comfortable building dynamic and scalable applications. I also explore frameworks like Bootstrap and Tailwind to enhance the design and responsiveness of my projects.</p>
            <br />

            <p className='text-xl'>What drives me is my passion for growth and problem-solving. Although I'm still learning, I approach every project with a mindset focused on improvement, always aiming to deepen my understanding of each technology I use. Whether it's tackling a new framework or refining my code, I believe in continuous learning and take pride in delivering solutions that are both functional and efficient. My goal is to always challenge myself, pushing beyond my current skills to become a better developer with each project.</p>
        </div>
    </div>
  )
}

export default About
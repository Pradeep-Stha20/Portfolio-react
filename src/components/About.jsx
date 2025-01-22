import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At adipisci, quos animi provident voluptas qui! Repellendus, ab veritatis deleniti, explicabo aut maxime commodi asperiores quae quisquam nostrum nam. Ea vel possimus exercitationem mollitia aliquam voluptate vero a corporis laborum temporibus culpa consectetur, repellendus facere suscipit obcaecati odit voluptatibus labore et?</p>
            <br />

            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ducimus sunt, quidem, tenetur eligendi provident hic beatae suscipit, ea blanditiis voluptates magni. Ipsum voluptate aspernatur quidem doloribus possimus hic quos, asperiores cum nulla earum, inventore ad quae quasi eaque nisi id nihil sapiente facere tempora quia laborum a repellendus vel.</p>
        </div>
    </div>
  )
}

export default About
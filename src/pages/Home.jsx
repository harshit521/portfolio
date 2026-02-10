import React from 'react'
import pfp from "../imgs/pfp.jpeg"
import js from "../imgs/js.png"
import cpp from "../imgs/icons8-c-48.png"
import java from "../imgs/icons8-java.gif"
import StackIcon from "tech-stack-icons";


const Home = () => {
  return (
    <><div>
    <div className='px-72 items-center justify-center pt-[64px] '>
    <div className='border-2 border-gray-600 rounded-xl shadow-[0_0_20px_rgba(200,200,200,20)]'>
      <div className='flex justify-center items-center gap-8 mt-16'>
        <div>
          <img src={pfp} alt='pfp' className='h-48 w-48 rounded-full object-cover'/>
        </div>
        <div>
        <h1 className='text-4xl font-bold mb-0'>Harshit Kumar Singh</h1>
        <p className='text-green-600 mt-0'>Open to work</p>
        </div>
        
      </div>
      <div className='flex items-center justify-center gap-4 mt-16'>
        <StackIcon name="html5" className='h-12 w-12'/>
        <StackIcon name="css3"  className='h-12 w-12'/>
        <img src={js}/>
        <StackIcon name="nodejs"  className='h-12 w-12'/>
        <StackIcon name="expressjs"  className='h-12 w-12 bg-slate-600'/>
        <StackIcon name="react"  className='h-12 w-12'/>
        <img src={cpp}/>
        <img src={java}/>
        </div>
        <div className='text-xl flex  px-[72px] mt-16 mb-16'>
          <p>I'm Harshit, a developer who enjoys crafting intuitive digital experiences and solving problems    through code.
            I work with modern web technologies to build responsive, scalable, and visually appealing applications.
            Beyond coding, I'm always curious learning new tools, refining my skills, and pushing myself to build better, smarter solutions every day.</p>
        </div>
      </div>
      </div>
      </div>
      </>
  )
}

export default Home
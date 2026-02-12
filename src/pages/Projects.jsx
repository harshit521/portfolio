import React from 'react'
import ProjectCard from "../components/projectCard"
import Cuberto from "../imgs/Cuberto.png"
import Linkly from "../imgs/linkly.png"
import yt from "../imgs/yt.png"
const Projects = () => {
  return (
    <>
    <div>
      <h1 className='text-2xl ml-[50px] pt-[25px] font-inter'>Projects</h1>
    </div>
    <div className='flex flex-col '>
      <ProjectCard name="Link & Shield" desc="Link & Shield is a full-stack web platform that combines a secure URL shortening service with a real-time traffic visualization dashboard. It allows users to generate, manage, and track shortened links with detailed analytics insights."  imgUrl={Linkly} git="https://github.com/harshit521/web-analytics-tool"/>

      <ProjectCard name="StreamCore (YT-Backend)" desc="StreamCore is a robust backend system designed for a video streaming platform similar to YouTube. It handles video uploads, streaming, metadata management, and secure user operations." imgUrl={yt} />

      <ProjectCard name="Cuberto" desc="Cuberto is a visually rich agency website created to present design and development services with immersive animations and professional branding." imgUrl={Cuberto}  />
    </div>
    </>
  )
}

export default Projects
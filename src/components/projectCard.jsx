import React from 'react'
import { RiLiveFill } from '@remixicon/react'
import { RiGithubFill } from '@remixicon/react'

const ProjectCard = ({name,desc, imgUrl,live, git}) => {
  return (
    <div className='flex flex-col items-center justify-center p-[20px] border border-gray-600 mx-[350px] my-[100px] rounded-xl'>
      <div className='w-[600px] h-[400px] mb-[20px] pt-[20px]'>
        <img src={imgUrl} alt={name} className='w-full h-full rounded'/>
      </div>
      <div className='w-[600px]'>
        <h3 className='text-xl mb-[10px] text-gray-200'>{name}</h3>
        <p className="text-gray-400">{desc}</p>
      </div>
      <div className='w-[600px] mt-4 flex gap-4'>
        <button><a href={live}><RiLiveFill /></a></button>
        <button><a href={git}><RiGithubFill /></a></button>
      </div>
    </div>
  )
}

export default ProjectCard
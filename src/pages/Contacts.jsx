import React from 'react'
import { RiTwitterXFill } from '@remixicon/react'
import { RiInstagramFill } from '@remixicon/react'
import { RiLinkedinFill } from '@remixicon/react'
import { RiGithubLine } from '@remixicon/react'
const Contacts = () => {
  return (
    <>
      <div>
        <from className="flex flex-col gap-8 items-center justify-center pt-[200px]">
          <input type='text' placeholder='name' className='rounded-xl pl-[10px] w-[250px]'/>
          <input type='email' placeholder='example@gmail.com' className='rounded-xl pl-[10px] w-[250px]'/>
          <textarea placeholder="Message" className='rounded-xl pl-[10px] w-[250px]'/>
        </from>
      </div>
      <div className='flex flex-col items-center justify-center mt-[75px] gap-2'>
      <h1>Socials</h1>
      <div className='flex flex-row gap-2'>
      {/* twitter, linkedin,insta,github */}
        <button><a href="https://x.com/_harxhitkumar_"><RiTwitterXFill /></a></button>
        <button><a href="https://www.linkedin.com/in/harshit-kumar-singh-42a704323/"><RiLinkedinFill /></a></button>
        <button><a href="https://github.com/harshit521"><RiGithubLine /></a></button>
      </div>
      </div>
    </>
  )
}

export default Contacts
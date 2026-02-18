import React, { useState } from 'react'
import { RiTwitterXFill } from '@remixicon/react'
import { RiLinkedinFill } from '@remixicon/react'
import { RiGithubLine } from '@remixicon/react'
const Contacts = () => {
  const [name, setName] = useState("");
  const [mail,setMail] = useState("");
  const [msg,setMsg] = useState("");

  const handleSend = (e) => {
       e.preventDefault();  // prevents page reload (form submit)
       setName("");          
       setMail("");          
       setMsg("");          
  }
  
  return (
    <div className='flex items-center justify-center '>
    <div className="border  w-[400px] mt-[120px] rounded-2xl">
      <div>
        <form className="flex flex-col gap-8 items-center justify-center pt-[80px]  text-black">

          <input 
          type='text' 
          placeholder='name' 
          className='rounded-lg pl-[10px] w-[250px]' 
          value={name} 
          onChange={(e)=>setName(e.target.value)}/>

          <input type='email' 
          placeholder='example@gmail.com' 
          value={mail} 
          className='rounded-lg pl-[10px] w-[250px]' 
          onChange={(e)=>setMail(e.target.value)}/>

          <textarea 
          placeholder="Message" 
          className='rounded-lg pl-[10px] w-[250px]' 
          value={msg}
          onChange={(e)=>setMsg(e.target.value)}/>

          <button type='submit' onClick={handleSend} className='text-black bg-gray-500 px-4 py-2 rounded-sm'>
            Send
          </button>

        </form>
      </div>
      <div 
      className='flex flex-col items-center justify-center mt-[30px] gap-4'>
      <div className='flex flex-row gap-4 mb-4'>
      {/* twitter, linkedin,insta,github */}
        <button>
          <a href="https://x.com/_harxhitkumar_">
            <RiTwitterXFill />
          </a>
        </button>
        <button>
          <a href="https://www.linkedin.com/in/harshit-kumar-singh-42a704323/">
            <RiLinkedinFill />
          </a>
        </button>
        <button>
          <a href="https://github.com/harshit521">
            <RiGithubLine />
          </a>
        </button>
      </div>
      </div>
      </div>
      </div>
    
  )
}

export default Contacts
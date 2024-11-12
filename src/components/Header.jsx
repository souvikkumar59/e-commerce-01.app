import React from 'react'
import { CiUser } from "react-icons/ci";

function Header() {
  return (
    <div className="flex justify-around h-14 items-center bg-[#198155]  ">
       
        <div className='text-2xl font-semibold text-white'>
        LOGO
        </div>
        <ul className="flex justify-between gap-4 text-white" >
            <li>HOME</li>
            <li>PRODUCTS</li>
            <li>CATEGORIES</li>
            <li>CONTACT US</li>
            <li>OUR PRODUCTS</li>
            <li>BLOG</li>
        </ul>
        <div className='flex justify-center items-center gap-2 '>
          <input type="text" className='rounded-xl px-2 py-1 bg-transparent border border-white ' />
          <CiUser className='h-6 w-6 text-white'/>
        </div>
      
    </div>
  )
}

export default Header

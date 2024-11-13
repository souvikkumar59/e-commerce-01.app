import React from 'react'
import { TfiShoppingCart } from "react-icons/tfi";
import { LuShoppingBag } from "react-icons/lu";
import { FaRegLifeRing } from "react-icons/fa";
import { TfiLoop } from "react-icons/tfi";
const Icon = () => {
  const iconClass="font-semibold text-2xl bg-yellow-300 h-16 p-2  w-16 justify-center text-black-800 rounded-full"
  return (
    <div className='fbg-white py-12 px-8 flex justify-center gap-20'>
        <ul className='font-medium '>
        <TfiShoppingCart className={iconClass} />
Lorem ipsum dolor sit.
        </ul>
        <ul className='font-medium'>
        <LuShoppingBag className={iconClass }/>
            Lorem ipsum dolor sit.
        </ul>
        <ul className='font-medium'>
        <FaRegLifeRing  className={iconClass}/>
            Lorem ipsum dolor sit.
        </ul>
        <ul className='font-medium'>
        <TfiLoop className={iconClass}/>
            Lorem ipsum dolor sit.
        </ul>
      
    </div>
  )
}

export default Icon

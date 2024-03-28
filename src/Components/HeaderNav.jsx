import React from 'react'
import { IoHome, IoPersonCircle } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { BsInfoCircleFill } from "react-icons/bs";

export default function HeaderNav() {
  return (
    <nav className='HeadNav'>
        <span className="NavIcons"><span className='text-4xl italic font-semibold'>PC</span></span>
        <span className="NavIcons"><IoHome className='text-2xl'/></span>
        <span className="NavIcons"><RiTeamFill className='text-2xl'/></span>
        <span className="NavIcons"><BsInfoCircleFill className='text-2xl'/></span>
        <span className="NavIcons"><IoIosMail className='text-3xl'/></span>
        <span className="NavIcons"><IoPersonCircle className='text-5xl'/></span>    
    </nav>
  )
}

import React from 'react'
import { IoHome, IoPersonCircle } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { BsInfoCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function HeaderNav() {
  return (
    <nav className='HeadNav'>
        <span className='text-4xl italic font-semibold'>PC</span>
        <Link to={""} className="NavIcons"><IoHome className='text-2xl'/></Link>
        <Link to={"Placement-Team"} className="NavIcons"><RiTeamFill className='text-2xl'/></Link>
        <Link to={"About"} className="NavIcons"><BsInfoCircleFill className='text-2xl'/></Link>
        <Link to={"Contact"} className="NavIcons"><IoIosMail className='text-3xl'/></Link>
        <Link to={"My-Profile"} className="NavIcons"><IoPersonCircle className='text-5xl'/></Link>    
    </nav>
  )
}

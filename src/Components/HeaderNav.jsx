import React from 'react'
import { IoHome, IoPersonCircle } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { BsInfoCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function HeaderNav() {
  return (

    <div className='HeadNav-Container'>
      <div className='logo'><span className="HeadNavIcons"><span className='text-4xl italic font-semibold'>PC</span></span></div>
      <span className="HeadNavIcons"><Link to="/Home"><IoHome className='text-2xl' /></Link></span>
      <span className="HeadNavIcons"><Link to = "/Placement_Team"><RiTeamFill className='text-2xl' /></Link></span>
      <span className="HeadNavIcons"><Link to = "/Development_Team"><BsInfoCircleFill className='text-2xl' /></Link></span>
      <span className="HeadNavIcons"><Link to = "/Contact_Team"><IoIosMail className='text-3xl' /></Link></span>
      <span className="HeadNavIcons"><IoPersonCircle className='text-5xl' /></span>
    </div>
  )
}

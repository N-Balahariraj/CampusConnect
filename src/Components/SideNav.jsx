import React from 'react'
import { TbWorldSearch } from "react-icons/tb";
import { FaHandHoldingUsd } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { BsFillQuestionDiamondFill } from "react-icons/bs";
import { FaHeadSideVirus } from "react-icons/fa6";

export default function SideNav() {
  return (
    <nav className='SideNav'>
        <img src="/College.png" alt="College Logo" height={5}/>
        <span className="NavIcons"><TbWorldSearch className='text-2xl'/></span>
        <span className="NavIcons"><FaHandHoldingUsd className='text-2xl'/></span>
        <span className="NavIcons"><MdApartment className='text-2xl'/></span>
        <span className="NavIcons"><BsFillQuestionDiamondFill className='text-2xl'/></span>
        <span className="NavIcons"><FaHeadSideVirus className='text-2xl'/></span>     
    </nav>
  )
}

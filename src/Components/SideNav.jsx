import React from 'react'
import { TbWorldSearch } from "react-icons/tb";
import { FaHandHoldingUsd } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { BsFillQuestionDiamondFill } from "react-icons/bs";
import { FaHeadSideVirus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function SideNav() {
  return (
    <nav className='SideNav'>
        <img src="/College.png" alt="College Logo" height={5}/>
        <Link to={"Domains"} className="NavIcons"><TbWorldSearch className='text-2xl'/></Link>
        <Link to={"Students-Placed"} className="NavIcons"><FaHandHoldingUsd className='text-2xl'/></Link>
        <Link to={"Our-Recruiters"} className="NavIcons"><MdApartment className='text-2xl'/></Link>
        <Link to={"Interview-Questions"} className="NavIcons"><BsFillQuestionDiamondFill className='text-2xl'/></Link>
        <Link to={"Skills-in-Trend"} className="NavIcons"><FaHeadSideVirus className='text-2xl'/></Link>     
    </nav>
  )
}

import {useState} from 'react';
import mainLogoW from "../assets/mainLogoW.png";


const NavBar = () => {
  return (
	<nav className='w-full flex py-3 justify-between items-center'>
		<div className='w-[350px] h-[80px] flex items-center'>
			<img src={mainLogoW} alt='Shapers Of Mana' className='h-[60px] ml-6'/>
			<h1 className=' text-white text-[32px] text-center justify-self-center font-neohellenic ml-6 text-shadow-main'>Shapers Of Mana</h1>
		</div>

		<ul className='list-none sm:flex hidden justify-end items-center flex-1 font-neohellenic font-normal text-[24px] text-secondary'>
			<li className='mr-20'><a href=''>Home</a></li>
			<li className='mr-20'><a href=''>Basics</a></li>
			<li className='mr-6'><a href=''>Magic</a></li>
		</ul>
	</nav>
  )
}

export default NavBar;
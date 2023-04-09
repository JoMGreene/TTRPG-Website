import React from 'react'
import GithubLogo from '../assets/github.png'
import TwitterLogo from '../assets/twitter.webp'
import LinkedinLogo from '../assets/linkedin.webp'

const Footer = () => {
  return (
	<div className='z-70 w-full flex flex-col items-center bg-primary'>
		<div className='w-[90%] mt-4 h-0 border-solid border-2 border-slate-800 bg-primary rounded-sm '></div>
		<h1 className=' text-slate-500 text-2xl pt-10 self-start pl-[5%]'>Contact Me: </h1>
		<div className='w-[40%] self-start flex flex-row justify-start pt-3 pl-[5%] h-24 bg-primary gap-1'>
			<a className='outlink-button' href="https://www.linkedin.com/in/joseph-greene-253712215/"><img src={LinkedinLogo}></img></a>
			<a className='outlink-button' href="https://twitter.com/JosephG29455714"><img src={TwitterLogo}></img></a>
			<a className='outlink-button' href="https://github.com/JoMGreene?tab=repositories"><img src={GithubLogo}></img></a>
		</div>
	</div>
  )
}

export default Footer
import React from 'react'
import GithubLogo from '../assets/github.png'
import TwitterLogo from '../assets/twitter.webp'
import LinkedinLogo from '../assets/linkedin.webp'
import {useEffect, useState} from 'react';

const Footer = () => {

	const initTheme = localStorage.getItem('darkMode')
	const [theme, setTheme] = useState((initTheme) ? initTheme : 'dark');
	let root = document.documentElement;
	if(theme === 'light') {
		root.style.setProperty('--outertoggle', '#f0f8ff')
		root.style.setProperty('--innertoggle', '#04050A')
	}

	const toggleTheme = () => {
		if(theme === 'dark') {
			setTheme('light')
			root.style.setProperty('--outertoggle', '#f0f8ff')
			root.style.setProperty('--innertoggle', '#04050A')
			localStorage.setItem('darkMode', 'light')
			
		} else {
			setTheme('dark')
			root.style.setProperty('--outertoggle', '#04050A')
			root.style.setProperty('--innertoggle', '#f0f8ff')
			localStorage.setItem('darkMode', 'dark')
		}
	}

	useEffect(() => {
		document.body.className = theme;
	}, [theme]);
  return (
	<div className='z-70 w-full flex flex-col items-center bg-slate-200 dark:bg-primary relative'>
		<div className='w-[90%] mt-4 h-0 border-solid border-2 border-slate-400 dark:border-slate-800  rounded-sm '></div>
		<h1 className=' text-slate-500 text-2xl pt-10 self-start pl-[5%]'>Contact Me: </h1>
		<div className='w-[40%] self-start flex flex-row justify-start pt-3 pl-[5%] h-24 bg-slate-200 dark:bg-primary gap-1'>
			<a className='outlink-button' href="https://www.linkedin.com/in/joseph-greene-253712215/" aria-label='Link to my LinkedIn profile'><img src={LinkedinLogo} alt='LinkedinLogo'></img></a>
			<a className='outlink-button' href="https://twitter.com/JosephG29455714" aria-label='Link to my Twitter profile'><img src={TwitterLogo} alt='TwitterLogo'></img></a>
			<a className='outlink-button' href="https://github.com/JoMGreene?tab=repositories" aria-label='Link to my Github profile'><img src={GithubLogo} alt='GithubLogo'></img></a>
		</div>
		<label htmlFor="theme-toggle" className='justify-self-end text-white absolute top-[2.25rem] right-6'>
			<div className={`toggle ${theme === 'dark' ? 'dark-mode': 'light-mode'}`}>
				<span className='hidden'>
					{theme === 'dark' ? 'dark-mode': 'light-mode'}
				</span>
				<input id='theme-toggle' type="checkbox" className='' onClick={toggleTheme}/>
			</div>

		</label>
	</div>
  )
}

export default Footer
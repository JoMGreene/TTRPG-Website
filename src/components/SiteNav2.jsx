import React from 'react'
import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react';

const SiteNav2 = () => {

  const initSideBar = localStorage.getItem('sideBar')
  const [isideBar, setisideBar] = useState((initSideBar) ? initSideBar : 'active');



  const sideBar = React.createRef();
  const sideBarRotate = React.createRef();

  let navStatus = ''
  let toggleShow = ''

  if (isideBar === 'active') {
	navStatus = 'nav-active'
	toggleShow = 'toggle-shown'
  }

  const toggleSidebar = () => {
	sideBarRotate.current.classList.toggle('toggle-shown');
	sideBar.current.classList.toggle('nav-active');
	if (isideBar === 'active') {
		setisideBar('inactive')
		localStorage.setItem('sideBar', 'inactive')
		return;
	}
	setisideBar('active')
	localStorage.setItem('sideBar', 'active')

  }
  return (
	<div className=' absolute sm:sticky h-[550px] top-[108px] sm:top-[0px]'>
		<label htmlFor="nav-toggle" className='absolute py-1 px-1 dark:bg-slate-700 bg-slate-300 flex items-center justify-center rounded-br-sm'>
			<div ref={sideBarRotate} className={`sidebar-toggle ${toggleShow}`}>
				<input type='checkbox' id='nav-toggle' onClick={toggleSidebar}/>
				<i className='arrow'></i>
			</div>	

		</label>
		<div ref={sideBar} className={`w-[0px] h-fit shrink-0 mt-[38px] transition-all ease-in-out duration-500 -translate-x-40 bg-slate-400 py-6 flex flex-col items-center justify-start gap-3 font-roboto text-primary  border rounded-r-md ${navStatus}`}>
			<Link to='/intro'>Introduction</Link>
			<Link to='/Basics'>Rules</Link>
			<Link to='/Magic'>Magic</Link>
			<Link to='/Species'>Species</Link>
			<Link to='/Combat'>Combat</Link>
			<Link to='/Social'>Social</Link>
			<Link to='/Equipment'>Equipment</Link>
			<Link to='/Creation'>Creation</Link>
		</div>
	</div>
  )
}

export default SiteNav2
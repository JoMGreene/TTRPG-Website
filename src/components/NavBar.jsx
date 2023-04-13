import mainLogoW from "../assets/mainLogoW.png";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
	<div className='w-full sm:sticky sm:top-0 flex py-6 px-2 justify-between items-center z-[60] bg-primary/60 nav-blur'>
		<div className='w-[350px] h-[60px] flex items-center'>
			<Link to='/'><img src={mainLogoW} alt='Shapers Of Mana' className='h-[60px] ml-6 ss:block hidden'/></Link>
			<Link to='/'><h1 className='text-white text-[32px] text-center justify-self-center font-neohellenic ml-6 text-shadow-main'>Shapers Of Mana</h1></Link>
		</div>
		<input type='checkbox' id='toggle-dropdown' className='toggle-dropdown' />
		<label htmlFor="toggle-dropdown" className='toggle-dropdown-label'>
			<span></span>
		</label>
		<nav className='sm:w-auto w-full sm:bg-transparent bg-primary/90 justify-self-end '>
			<ul className='list-none flex sm:flex-row flex-col justify-end items-center flex-1 font-neohellenic font-normal text-[24px] text-secondary '>
				<li className='sm:mr-20'><Link to='/'>Home</Link></li>
				<li className='sm:mr-20'><Link to='/basics'>Basics</Link></li>
				<li className='sm:mr-6'><Link to='/magic'>Magic</Link></li>
			</ul>
		</nav>
		
	</div>
  )
}

export default NavBar;
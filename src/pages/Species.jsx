import React from 'react'
import {Link} from 'react-router-dom'
import SiteNav2 from '../components/SiteNav2'

const Species = () => {
  return (
  <div className='w-full h-auto flex flex-row bg-gradient-to-b from-white to-red-50 dark:from-primary dark:to-gray-800 font-roboto text-primary dark:text-white pb-10'>
    <SiteNav2/>
    <div className='w-full h-auto flex flex-col justify-center pt-10 items-center'>
      <div className='w-full flex flex-col justify-center items-center mb-10'>
        <div className=' w-[90%] h-2 border-b-2 border-slate-400'></div>
		<div className='w-[89%] flex flex-col justify-center gap-2 bg-amber-800/25 dark:bg-amber-400/25'>
			<h1 className='text-[2.5rem] font-bold w-full flex justify-center items-center py-4 text-shadow-lightTitle dark:text-shadow-drop'>Species</h1>
			<div className='w-full flex flex-row flex-wrap justify-center gap-2 gap-y-9 pb-10'>
				<div className='flex flex-col justify-center gap-2'>
					<Link to='/species/Arbel' className='w-24 h-12 flex justify-center items-center text-lg bg-amber-900/50 dark:bg-amber-900 rounded-md border-[1px] border-primary dark:border-white self-center'>Arbel</Link>
				</div>
				<div className='flex flex-col justify-center gap-2'>
					<Link to='/species/Hanlar' className='w-24 h-12 flex justify-center items-center text-lg bg-amber-900/50 dark:bg-amber-900 rounded-md border-[1px] border-primary dark:border-white self-center'>Hanlar</Link>
				</div>
				<div className='flex flex-col justify-center gap-2'>
					<Link to='/species/Human' className='w-24 h-12 flex justify-center items-center text-lg bg-amber-900/50 dark:bg-amber-900 rounded-md border-[1px] border-primary dark:border-white self-center'>Human</Link>
				</div>
				<div className='flex flex-col justify-center gap-2'>
					<Link to='/species/Sempilio' className='w-24 h-12 flex justify-center items-center text-lg bg-amber-900/50 dark:bg-amber-900 rounded-md border-[1px] border-primary dark:border-white self-center'>Sempilio</Link>
				</div>
				<div className='flex flex-col justify-center gap-2'>
					<Link to='/species/Volarco' className='w-24 h-12 flex justify-center items-center text-lg bg-amber-900/50 dark:bg-amber-900 rounded-md border-[1px] border-primary dark:border-white self-center'>Volarco</Link>
				</div>
			</div>
		</div>
        <div className=' w-[90%] h-2 border-t-2 border-slate-400'></div>
      </div>
      <div className='w-[95%] h-auto flex flex-col  items-center font-roboto'>
        <div className='w-[95%] flex flex-col items-center bg-gradient-to-r from-[#774422]/90 dark:to-[#000000]/90 to-[#cccccc]/90 rounded-[20px] mb-10'>
          <h1 className='w-full h-36 md:text-[48px] text-[36px] flex text-left text-shadow-lightTitle dark:text-shadow-drop font-bold pl-5 items-center'>Playable Species</h1>
        </div>
        <div className='w-[90%] flex flex-col gap-5 text-xl text-left'>
          <h1 className=' text-3xl font-bold text-shadow-lightTitle dark:text-shadow-drop'>Species of Noxstellus</h1>
          <p className='pb-7'>Across Noxstellus, there are five species of humanoids that have developed their own civilizations. These species are the Arbel, Hanlar, Human, Sempilio, and Volarco. Each of the species is visually distinct from the others. Arbel have both feline and arboreal features. Hanlar are a large people with thick fur, menacing horns, and hooved feet. Humans are versatile, able to achieve anything they set their minds to. Sempilio exhibit traits of moths and butterflies. The Volarco are a draconic species, possessed of large wings and scaled limbs. </p>
          <h1 className=' text-3xl font-bold text-shadow-lightTitle dark:text-shadow-drop'></h1>
          <p className='pb-7'></p>
        </div>
      </div>
    </div>	
  </div>
  )
}

export default Species
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import  speciesData  from '../assets/speciesData'
import SiteNav2 from '../components/SiteNav2'

const SpecSpecies = () => {

  const { id } = useParams()
  const speciesArray = ["arbel", "hanlar", "human", "sempilio", "volarco"]
  
  const pageData = speciesData[speciesArray.indexOf(id.toLocaleLowerCase())]

  const parArray = pageData.content.map((data) => (
	((data.slice(0,2) == 'h1') ? React.createElement('h1',{className: pageData.headerClasses, key: pageData.content.indexOf(data)}, data.slice(2, data.length)) : React.createElement('p',{className: 'par-text', key: pageData.content.indexOf(data)}, data))
  ));


  return (
	<div className='w-full h-auto flex min-h-screen flex-row bg-gradient-to-b from-white to-red-50 dark:from-primary dark:to-gray-800 font-roboto text-primary dark:text-white pb-10'>
		<SiteNav2/>
		<div className='w-full h-auto flex flex-col pt-10 justify-start items-center'>
			<div className='w-full flex flex-col justify-center items-center mb-10'>
				<div className=' w-[90%] h-2 border-b-2 border-slate-400'></div>
				<div className='w-[89%] flex flex-col justify-center gap-2 '>
					<Link to='/species' className='text-[2.4rem] font-bold w-fit self-center px-6 flex justify-center items-center py-4 text-shadow-lightTitle dark:text-shadow-drop hover:bg-amber-900/50 hover:dark:bg-amber-900 rounded-lg'>Species</Link>
					<div className='w-full flex flex-row flex-wrap justify-center items-center gap-x-4 gap-y-9 pb-4 text-shadow-lightTitle dark:text-shadow-drop'>
						<Link to='/species/Arbel' className='w-24 h-12 flex justify-center items-center text-xl font-bold hover:bg-amber-900/50 hover:dark:bg-amber-900 rounded-md border-primary dark:border-white self-center'>Arbel</Link>
						<Link to='/species/Hanlar' className='w-24 h-12 flex justify-center items-center text-xl font-bold hover:bg-amber-900/50 hover:dark:bg-amber-900 rounded-md border-primary dark:border-white self-center'>Hanlar</Link>
						<Link to='/species/Human' className='w-24 h-12 flex justify-center items-center text-xl font-bold hover:bg-amber-900/50 hover:dark:bg-amber-900 rounded-md border-primary dark:border-white self-center'>Human</Link>
						<Link to='/species/Sempilio' className='w-24 h-12 flex justify-center items-center text-xl font-bold hover:bg-amber-900/50 hover:dark:bg-amber-900 rounded-md border-primary dark:border-white self-center'>Sempilio</Link>
						<Link to='/species/Volarco' className='w-24 h-12 flex justify-center items-center text-xl font-bold hover:bg-amber-900/50 hover:dark:bg-amber-900 rounded-md border-primary dark:border-white self-center'>Volarco</Link>
					</div>
				</div>
				<div className=' w-[90%] h-2 border-t-2 border-slate-400'></div>
			</div>
			<div className={`w-[95%] min-h-screen  flex flex-col  text-black dark:text-white items-center pb-10`}>
				<div className='w-[95%] flex flex-col items-start mb-10'>
					<h1 className='w-fit h-fit py-4 bg-gradient-to-r from-[#774422]/90 to-transparent rounded-[20px] md:text-[48px] text-[36px] flex text-left text-shadow-lightTitle dark:text-shadow-drop font-bold pl-5 pr-96 items-center'>{pageData.title}</h1>
				</div>
				<div className='w-[90%] flex flex-col gap-5 text-xl text-left'>
					{parArray}
				</div>
			</div>
		</div>
	</div>	
  )
}

export default SpecSpecies
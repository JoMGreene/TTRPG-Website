import React from 'react'
import { Link, useParams } from 'react-router-dom'
import  treeData  from '../assets/treeData'
import SiteNav2 from '../components/SiteNav2'

const MagicTree = () => {

  const { id } = useParams()
  const treeArray = ["world", "body", "soul", "forces", "elements", "light", "darkness", "enhancement", "craftsmanship", "transformation", "comprehension", "command", "illusion", "disruption", "restoration"]
  
  const pageData = treeData[treeArray.indexOf(id)]

  const parArray = pageData.content.map((data) => (
	((data.slice(0,2) == 'h1') ? React.createElement('p',{className: pageData.headerClasses, key: pageData.content.indexOf(data)}, data.slice(2, data.length)) : React.createElement('p',{className: 'par-text', key: pageData.content.indexOf(data)}, data))
  ));


  return (
	<div className='w-full h-auto bg-gradient-to-b from-white to-slate-100 dark:from-primary dark:to-gray-800 flex flex-row font-roboto pb-10 text-primary dark:text-white'>
		<SiteNav2/>
		<div className='w-full h-auto flex flex-col justify-center pt-4 items-center'>
			<div className='w-full flex flex-col justify-center items-center mb-10'>
				<div className=' w-[90%] h-2 border-b-2 border-slate-400'></div>
				<div className='w-[89%] flex flex-col justify-center gap-2 gap-y-1 '>
					<Link to='/magic' className='text-[2.2rem] font-bold w-fit self-center px-6 flex justify-center items-center py-4 text-shadow-lightTitle dark:text-shadow-drop hover:bg-slate-400 hover:dark:bg-slate-600 rounded-lg'>Magic</Link>
					<div className='w-full flex flex-row flex-wrap justify-center gap-2 gap-y-9 pb-6'>
						<div className='flex flex-col justify-center gap-2 gap-y-1'>
							<Link to='/magic/world' className='w-24 h-12 flex justify-center items-center text-2xl font-bold self-center hover:bg-slate-400 hover:dark:bg-slate-600 rounded-md'>World</Link>
							<div className='w-full flex flex-row flex-wrap justify-center items-center pt-3'>
								<Link to='/magic/forces' className='w-[7.5rem] lg:w-[8rem] h-8 flex justify-center items-center hover:bg-slate-400 hover:dark:bg-slate-600 border-x-[1px] sm:border-l-0 border-primary dark:border-white'>Forces</Link>
								<Link to='/magic/elements' className='w-[7.5rem] lg:w-[8rem] h-8 flex justify-center items-center hover:bg-slate-400 hover:dark:bg-slate-600 border-x-[1px] border-primary dark:border-white'>Elements</Link>
								<Link to='/magic/light' className='w-[7.5rem] lg:w-[8rem] h-8 flex justify-center items-center hover:bg-slate-400 hover:dark:bg-slate-600 border-x-[1px] border-primary dark:border-white'>Light</Link>
								<Link to='/magic/darkness' className='w-[7.5rem] lg:w-[8rem] h-8 flex justify-center items-center hover:bg-slate-400 hover:dark:bg-slate-600 border-x-[1px] sm:border-r-0 border-primary dark:border-white'>Darkness</Link>

							</div>
						</div>
						<div className='flex flex-col justify-center gap-2 gap-y-1'>
							<Link to='/magic/body' className='w-24 h-12 flex justify-center items-center text-2xl font-bold self-center hover:bg-slate-400 hover:dark:bg-slate-600 rounded-md'>Body</Link>
							<div className='w-full flex flex-row flex-wrap justify-center items-center pt-3'>
								<Link to='/magic/enhancement' className='w-[7.5rem] lg:w-[9rem] h-8 flex justify-center items-center hover:bg-slate-400 hover:dark:bg-slate-600 border-x-[1px] sm:border-l-0 border-primary dark:border-white'>Enhancement</Link>
								<Link to='/magic/transformation' className='w-[7.5rem] lg:w-[9rem] h-8 flex justify-center items-center hover:bg-slate-400 hover:dark:bg-slate-600 border-x-[1px] border-primary dark:border-white'>Transformation</Link>
								<Link to='/magic/comprehension' className='w-[7.5rem] lg:w-[9rem] h-8 flex justify-center items-center hover:bg-slate-400 hover:dark:bg-slate-600 border-x-[1px] border-primary dark:border-white'>Comprehension</Link>
								<Link to='/magic/craftsmanship' className='w-[7.5rem] lg:w-[9rem] h-8 flex justify-center items-center hover:bg-slate-400 hover:dark:bg-slate-600 border-x-[1px] sm:border-r-0 border-primary dark:border-white'>Craftsmanship</Link>

							</div>
						</div>
						<div className='flex flex-col justify-center gap-2 gap-y-1'>
							<Link to='/magic/soul' className='w-24 h-12 flex justify-center items-center text-2xl font-bold self-center hover:bg-slate-400 hover:dark:bg-slate-600 rounded-md'>Soul</Link>
							<div className='w-full flex flex-row flex-wrap justify-center items-center pt-3'>
								<Link to='/magic/command' className='w-[7.5rem] lg:w-[8rem] h-8 flex justify-center items-center hover:bg-slate-400 hover:dark:bg-slate-600 border-x-[1px] sm:border-l-0 border-primary dark:border-white'>Command</Link>
								<Link to='/magic/illusion' className='w-[7.5rem] lg:w-[8rem] h-8 flex justify-center items-center hover:bg-slate-400 hover:dark:bg-slate-600 border-x-[1px] border-primary dark:border-white'>Illusion</Link>
								<Link to='/magic/disruption' className='w-[7.5rem] lg:w-[8rem] h-8 flex justify-center items-center hover:bg-slate-400 hover:dark:bg-slate-600 border-x-[1px] border-primary dark:border-white'>Disruption</Link>
								<Link to='/magic/restoration' className='w-[7.5rem] lg:w-[8rem] lg:text-sm h-8 flex justify-center items-center hover:bg-slate-400 hover:dark:bg-slate-600 border-x-[1px] sm:border-r-0 border-primary dark:border-white'>Restoration</Link>

							</div>
						</div>
					
				


					</div>
        		</div>
        		<div className=' w-[90%] h-2 border-t-2 border-slate-400'></div>
      		</div>
			<div className={`w-[95%] min-h-screen flex flex-col text-black dark:text-white items-center pb-10`}>
				<div className={`w-[95%] flex flex-col mb-10 items-start`}>
					<h1 className={`w-fit h-fit py-4 md:text-[48px] text-[36px] flex text-left text-shadow-lightTitle dark:text-shadow-drop font-bold pl-5 pr-96 items-center bg-gradient-to-r rounded-[20px] ${pageData.colorClasses}`}>{pageData.title}</h1>
				</div>
				<div className='w-[90%] flex flex-col gap-5 text-xl text-left'>
					{parArray}
				</div>
			</div>
		</div>
	</div>	
  )
}

export default MagicTree
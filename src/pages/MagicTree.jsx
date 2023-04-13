import React from 'react'
import { Link, useParams } from 'react-router-dom'
import  treeData  from '../assets/treeData'

const MagicTree = () => {

  const { id } = useParams()
  const treeArray = ["world", "body", "soul", "forces", "elements", "light", "darkness", "enhancement", "presence", "transformation", "comprehension", "command", "illusion", "suppression", "restoration"]
  
  const pageData = treeData[treeArray.indexOf(id)]

  const parArray = pageData.content.map((data) => (
	React.createElement('p',{className: 'par-text', key: pageData.content.indexOf(data)}, data)
  ));


  return (
	<div className='w-full h-auto bg-bg3 flex flex-col justify-start items-center font-roboto pt-10 pb-10 text-primary dark:text-white'>
		<div className='w-full flex flex-col justify-center items-center mb-10'>
			<div className=' w-[90%] h-2 border-b-2 border-slate-400'></div>
			<div className='w-[89%] flex flex-col justify-center gap-2 bg-slate-400/50'>
				<h1 className='text-[2.5rem] font-bold w-full flex justify-center items-center py-4 text-shadow-lightTitle dark:text-shadow-drop'>Trees</h1>
				<div className='w-full flex flex-row flex-wrap justify-center gap-2 gap-y-9 pb-10'>
					<div className='flex flex-col justify-center gap-2'>
						<Link to='/magic/world' className='w-24 h-12 flex justify-center items-center text-lg bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white self-center'>World</Link>
						<div className='w-full flex flex-row flex-wrap justify-center items-center pt-3'>
							<Link to='/magic/forces' className='w-[7.5rem] h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white   '>Forces</Link>
							<Link to='/magic/elements' className='w-[7.5rem] h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white   '>Elements</Link>
							<Link to='/magic/light' className='w-[7.5rem] h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white   '>Light</Link>
							<Link to='/magic/darkness' className='w-[7.5rem] h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white   '>Darkness</Link>

						</div>
					</div>
					<div className='flex flex-col justify-center gap-2'>
						<Link to='/magic/body' className='w-24 h-12 flex justify-center items-center text-lg bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white   self-center'>Body</Link>
						<div className='w-full flex flex-row flex-wrap justify-center items-center pt-3'>
							<Link to='/magic/enhancement' className='w-[7.5rem] h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white   '>Enhancement</Link>
							<Link to='/magic/presence' className='w-[7.5rem] h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white   '>Presence</Link>
							<Link to='/magic/transformation' className='w-[7.5rem] h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white   '>Transformation</Link>
							<Link to='/magic/comprehension' className='w-[7.5rem] h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white   '>Comprehension</Link>

						</div>
					</div>
					<div className='flex flex-col justify-center gap-2'>
						<Link to='/magic/soul' className='w-24 h-12 flex justify-center items-center text-lg bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white   self-center'>Soul</Link>
						<div className='w-full flex flex-row flex-wrap justify-center items-center pt-3'>
							<Link to='/magic/command' className='w-[7.5rem] h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white   '>Command</Link>
							<Link to='/magic/illusion' className='w-[7.5rem] h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white   '>Illusion</Link>
							<Link to='/magic/suppression' className='w-[7.5rem] h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white   '>Suppression</Link>
							<Link to='/magic/restoration' className='w-[7.5rem] h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white   '>Restoration</Link>

						</div>
					</div>
					
					


				</div>
			</div>
			<div className=' w-[90%] h-2 border-t-2 border-slate-400'></div>
		</div>
		<div className={`w-[95%] h-screen bg-gradient-to-b ${pageData.colorClasses} flex flex-col rounded-[30px] text-black dark:text-white items-center [border-style:outset] border-2 `}>
			<div className='w-full flex flex-col items-center'>
				<h1 className='w-[90%] h-36 md:text-[48px] text-[36px] flex text-left text-shadow-lightTitle dark:text-shadow-drop font-bold p-y-20 items-center'>{pageData.title}</h1>
				<div className='w-full h-1 border-b-2 border-slate-200/25 mb-10'></div>
			</div>
			<div className='w-[90%] flex flex-col gap-5 text-xl text-left'>
				{parArray}
			</div>
		</div>
	</div>	
  )
}

export default MagicTree
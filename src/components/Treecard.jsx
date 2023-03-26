import React from 'react'
import cardData from '../assets/cardData'

const Treecard = (props) => {
  	
  return (
	<div className={`${props.opacity}`}>
		<button className={`absolute z-50 hover:z-50 w-[200px] h-[300px] rounded-2xl grid grid-rows-card-grid gap-5 border-solid border-2 border-[#A4F4F0] bg-gradient-card hover:shadow-around hover:shadow-cyan-200`}>
			<h1 className='text-[24px] text-right font-neohellenic font-bold p-2 px-4'>{cardData[props.set].header}</h1>
			<p className='text-[20px] text-left font-neohellenic px-4 leading-6'>{cardData[props.set].body}</p>
		</button>
		<button className={`absolute z-50 hover:z-50 w-[200px] h-[300px] rounded-2xl grid grid-rows-card-grid gap-5 border-solid border-2 border-[#A4F4F0] bg-gradient-card hover:shadow-around hover:shadow-cyan-200`}>
		<h1 className='text-[24px] text-right font-neohellenic font-bold p-2 px-4'>{cardData[props.set + 1].header}</h1>
			<p className='text-[20px] text-left font-neohellenic px-4 leading-6'>{cardData[props.set + 1].body}</p>
		</button>
		<button className={`absolute z-50 hover:z-50 w-[200px] h-[300px] rounded-2xl grid grid-rows-card-grid gap-5 border-solid border-2 border-[#A4F4F0] bg-gradient-card hover:shadow-around hover:shadow-cyan-200`}>
		<h1 className='text-[24px] text-right font-neohellenic font-bold p-2 px-4'>{cardData[props.set + 2].header}</h1>
			<p className='text-[20px] text-left font-neohellenic px-4 leading-6'>{cardData[props.set + 2].body}</p>
		</button>
		<button className={`absolute z-50 hover:z-50 w-[200px] h-[300px] rounded-2xl grid grid-rows-card-grid gap-5 border-solid border-2 border-[#A4F4F0] bg-gradient-card hover:shadow-around hover:shadow-cyan-200`}>
		<h1 className='text-[24px] text-right font-neohellenic font-bold p-2 px-4'>{cardData[props.set + 3].header}</h1>
			<p className='text-[20px] text-left font-neohellenic px-4 leading-6'>{cardData[props.set + 3].body}</p>
		</button>
	</div>
  )
}

export default Treecard
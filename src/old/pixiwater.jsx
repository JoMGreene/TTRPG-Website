import waterpic from '../assets/martin-sanchez-1.jpg'
import React from 'react';
import WaterWave from 'react-water-wave'
import { Link } from 'react-router-dom';

const Pixiwater = () =>{
  return (
    <WaterWave imageUrl={waterpic} className='h-[100%] min-h-[1000px] bg-cover' resolution={500} perturbance={0.01}>
    {({  }) => (
      <div className="w-full h-full p-10 flex flex-col lg:flex-row justify-around items-center gap-x-[10%] relative z-10">
				<div className='lg:w-[34%] w-full h-full flex flex-col justify-center'></div>
				<div className='lg:w-[40%] w-full h-full flex flex-col lg:justify-center lg:gap-[10%] gap-[5%] justify-around items-center lg:mt-0 mt-20 lg:mb-0 mb-20'>
					<h1 className='w-full font-roboto xl:text-[42px] text-[32px] sm:text-left text-center text-shadow-drop font-bold text-white lg:pb-0 pb-6'>DUAL EXP PROGRESSION</h1>
					<div className='font-roboto md:text-xl text-lg sm:w-[70%] w-[90%] flex flex-col sm:self-start justify-around gap-3 text-shadow-drop text-white' > 
						<p>There are two different forms of experience points that characters can earn, Standard XP and Magic XP. </p>
						<p>Rather than gathering EXP to reach the next level, characters spend the experience points they've earned to directly upgrade their abilities. Standard XP is used to improve characters' Attribute and Skill ratings, while Magic XP is spent on unlocking new spells and magical abilities.</p>
						<p>Click <Link to='/basics' className=' text-blue-300'>Here to learn more about character progression. →</Link></p>
					</div>
				</div>
				
			</div>
      )}
    </WaterWave>
  )
	
};

export default Pixiwater;
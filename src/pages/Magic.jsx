import React from 'react'
import {Link} from 'react-router-dom'
import SiteNav2 from '../components/SiteNav2'

const Magic = () => {
  return (
  <div className='w-full h-auto flex flex-row bg-gradient-to-b from-white to-slate-100 dark:from-primary dark:to-gray-800 font-roboto text-primary dark:text-white pb-10'>
    <SiteNav2/>
    <div className='w-full h-auto flex flex-col justify-center pt-10 items-center'>
      <div className='w-full flex flex-col justify-center items-center mb-10'>
        <div className=' w-[90%] h-2 border-b-2 border-slate-400'></div>
        <div className='w-[89%] flex flex-col justify-center gap-2 bg-slate-400/25 '>
          <h1 className='text-[2.5rem] font-bold w-full flex justify-center items-center py-4 text-shadow-lightTitle dark:text-shadow-drop'>Trees</h1>
          <div className='w-full flex flex-row flex-wrap justify-center gap-2 gap-y-9 pb-10'>
            <div className='flex flex-col justify-center gap-2'>
              <Link to='/magic/world' className='w-24 h-12 flex justify-center items-center text-lg bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white self-center'>World</Link>
              <div className='w-full flex flex-row flex-wrap justify-center items-center pt-3'>
                <Link to='/magic/forces' className='w-[7.5rem] h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white'>Forces</Link>
                <Link to='/magic/elements' className='w-[7.5rem] h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white'>Elements</Link>
                <Link to='/magic/light' className='w-[7.5rem] h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white'>Light</Link>
                <Link to='/magic/darkness' className='w-[7.5rem] h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white'>Darkness</Link>

              </div>
            </div>
            <div className='flex flex-col justify-center gap-2'>
              <Link to='/magic/body' className='w-24 h-12 flex justify-center items-center text-lg bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white self-center'>Body</Link>
              <div className='w-full flex flex-row flex-wrap justify-center items-center pt-3'>
                <Link to='/magic/enhancement' className='w-[7.5rem] h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white'>Enhancement</Link>
                <Link to='/magic/presence' className='w-[7.5rem] h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white'>Presence</Link>
                <Link to='/magic/transformation' className='w-[7.5rem] h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white'>Transformation</Link>
                <Link to='/magic/comprehension' className='w-[7.5rem] h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white'>Comprehension</Link>

              </div>
            </div>
            <div className='flex flex-col justify-center gap-2'>
              <Link to='/magic/soul' className='w-24 h-12 flex justify-center items-center text-lg bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white self-center'>Soul</Link>
              <div className='w-full flex flex-row flex-wrap justify-center items-center pt-3'>
                <Link to='/magic/command' className='w-[7.5rem] h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white'>Command</Link>
                <Link to='/magic/illusion' className='w-[7.5rem] h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white'>Illusion</Link>
                <Link to='/magic/disruption' className='w-[7.5rem] h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white'>Disruption</Link>
                <Link to='/magic/restoration' className='w-[7.5rem] h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-600 rounded-md border-[1px] border-primary dark:border-white'>Restoration</Link>

              </div>
            </div>
          
          


          </div>
        </div>
        <div className=' w-[90%] h-2 border-t-2 border-slate-400'></div>
      </div>
      <div className='w-[95%] h-auto  flex flex-col  items-center [border-style:outset] font-roboto'>
        <div className='w-[95%] flex flex-col items-center mb-10 bg-gradient-to-r dark:from-slate-600 dark:to-primary from-slate-400 to-white rounded-[20px] '>
          <h1 className='w-full h-36 md:text-[48px] text-[36px] flex text-left text-shadow-lightTitle dark:text-shadow-drop font-bold px-5 items-center '>Magic</h1>
        </div>
        <div className='w-[90%] flex flex-col gap-5 text-xl text-left'>
          <h1 className=' text-3xl font-bold text-shadow-lightTitle dark:text-shadow-drop'>Magic in Noxstellus</h1>
          <p className='pb-7'>Magic is something that everyone in Noxtellus has the capability to use. However, the vast majority of people will learn at most a couple of basic spells. This is because magic, in all its forms, is something that must be practiced in order to see results. Just like any other ability, some will be naturally gifted with an affinity for magic, and some will find it difficult to gain much magical proficiency. The Magic Grades are a way of quantifying the general magical strength of an individual, and a person’s Magic Grade is directly tied to the potency of the magic they can use. <br /> Magic flows through the body similarly to how blood flows through a person’s veins. While Mana itself does not have a solid form, there are “channels” that run through the body which conduct the flow of magical energy. Each person has a magical “heart”, commonly referred to as their core, next to their heart. This magic core is the reservoir of magic that is drawn from whenever a person uses magic. Mana is drawn from the core, through the magic channels, to the areas of the body where mana is needed to produce a magical effect. <br /> Another aspect of the Magic is that, unlike physical capability, it does not deteriorate with age. A person’s Magic Grade will never drop, once a Grade is achieved, it remains that way until that person’s death. If not used for a long period of time, a small amount of Magic Power can be lost, but at most it will fall to the baseline amount for a person of their Magic Grade. <br /> For these reasons, most people will learn to use a bit of magic in a field that is relevant or useful to them, but typically don’t have the time or resources to spare to attempt to push themselves into a higher Magic Grade. </p>
          <h1 className=' text-3xl font-bold text-shadow-lightTitle dark:text-shadow-drop'>The Magic Grades</h1>
          <p className='pb-7'>The reason for Magic Grades being the accepted standard for measuring general magical potency is the clear definition between them. When someone breaks through to a new Magic Grade, they experience a massive surge of Magic power, which is also reflected in the strength of their Magical Aura. <br /> There are many factors that contribute towards a person’s overall ability to wield magic, be it in combat or conversation, but raw magic power is consistent across all people. For instance, someone who has been a grade 4 magician for a long time may have more raw magic power than someone who has just reached it, but a grade 4 magician will never have more magic power than a magician of grade 5 or higher. </p>
        </div>
      </div>
    </div>	
  </div>
  )
}

export default Magic
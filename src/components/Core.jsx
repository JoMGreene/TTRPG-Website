import React from 'react'
import SiteNav2 from './SiteNav2'

const Core = () => {
  return (
	<div className='w-full h-auto bg-gradient-to-b from-white to-slate-100 dark:from-primary dark:to-gray-800 flex flex-row font-roboto pb-10 text-primary dark:text-white overflow-x-hidden'>
		<SiteNav2 />
		<div className='w-full h-auto mt-10 flex flex-col rounded-[30px] text-primary dark:text-white items-center font-roboto  '>
			<div className='w-[95%] flex flex-col items-start mb-10 '>
			<h1 className=' w-fit h-fit py-4 md:text-[48px] text-[36px] bg-gradient-to-r dark:from-slate-600 from-slate-400 to-transparent rounded-[20px] flex text-left text-shadow-lightTitle dark:text-shadow-drop font-bold pl-5 pr-96 items-center'>System Basics</h1>
			</div>
			<div className='w-[90%] flex flex-col gap-5 text-lg text-left pb-20'>
				<p>In SoM, each character, npc, and other creature is defined by a set of statistics that represent their capabilites. The three basic groups of statistics are Attributes, Skills, and Magic. Secondary statistics are derived from the basic stats, and cover more specific capabilities. Secondary statistics include things like Defense, which indicates an ability to avoid or repel attacks in a combat encounter, and Mana, the pool of energy within every living creature that fuels the magic they use.</p>
				<h1 className='header-text w-fit text-3xl text-shadow-lightTitle dark:text-shadow-drop bg-gradient-to-r dark:from-slate-600 from-slate-400 to-transparent rounded-[5px] pl-2 pr-48'>Attributes</h1>
				<p>Attributes represent general capabilities, the baseline from which specific knowledge and experience builds upon. There are 8 attributes; Strength, Finesse, Quickness, Fortitude, Charisma, Intelligence, Instinct, and Willpower. </p>
				<p>Strength, Finesse, Quickness, and Fortitude are the Physical Attributes, and represent the base capabilities of a creature's body. Strength indicates the maximum physical force a creature can exert, Finesse covers grace and manual dexterity, Quickness is a measure of a creature's reaction speed, and Fortitude shows capability to endure physical trauma.</p>
				<p>The Mental Attributes are Charisma, Intelligence, Instinct, and Willpower. Charisma is a measure of a creature's force of personality, Intelligence is the processing power of the mind, Insinct indicates sharpness of subconscious thought, and Willpower is the mental resilience of a creature.</p>
				<h1 className='header-text w-fit text-3xl text-shadow-lightTitle dark:text-shadow-drop bg-gradient-to-r dark:from-slate-600 from-slate-400 to-transparent rounded-[5px] pl-2 pr-48'>Skills</h1>
				<p>Beyond the baseline capabilities of Attributes, a character's Skills show particular expertise in more narrow disciplines. Skills are sorted into Skill Groups, each containing 4 Skills. The Skill Groups are Physicality, Control, Perception, Nature, Scholar, Craft, Conversation, Eloquence, and Mysticism. </p>
				<h1 className='header-text w-fit text-3xl text-shadow-lightTitle dark:text-shadow-drop bg-gradient-to-r dark:from-slate-600 from-slate-400 to-transparent rounded-[5px] pl-2 pr-48'>Magic</h1>
				<p>The last of the major groups of stats is Magic. The general magical capability of a creature is indicated by their Magic Grade. Magic Grade can range from 0 to 7, with 0 being the least magically capable and 7 the most. People with a Magic Grade of 0 are typically commoners, those who lack either the resources, ambition, or raw talent to develop their magical abilities. They are still capable of performing basic spells, and will generally at least a couple to make their daily routines easier. On the other end of the scale, those few who manage to reach Magic Grade 7 are capable of wielding immense power. The most powerful Grade 7 mages are capable of influencing an entire nation through their actions. </p>
				<h1 className='header-text w-fit text-3xl text-shadow-lightTitle dark:text-shadow-drop bg-gradient-to-r dark:from-slate-600 from-slate-400 to-transparent rounded-[5px] pl-2 pr-48'>Dice Mechanics</h1>
				<p>The core resolution in SoM is the dice system. Shapers uses a d10 dice pool system. When a character wants to accomplish a non-trivial task, they must roll dice to see whether or not they achieve their objective. In most cases, dice pools are determined by a combination of an Attribute and a Skill that are relevant to the situation. </p>
			</div>
		</div>
	</div>	
  )
}

export default Core
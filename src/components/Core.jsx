import React from 'react'

const Core = () => {
  return (
	<div className='w-full h-auto bg-gradient-to-b from-white to-slate-100 dark:from-primary dark:to-gray-800 flex justify-center pb-10'>
		<div className='w-[95%] h-auto mt-10 bg-primary/10 dark:bg-white/10 flex flex-col rounded-[30px] text-primary dark:text-white items-center [border-style:outset] border-2 border-primary/25 dark:border-white/10 font-roboto shadow-2xl shadow-gray-500'>
			<div className='w-full flex flex-col items-center'>
				<h1 className='w-[90%] h-36 md:text-[48px] text-[36px] flex text-left text-shadow-lightTitle dark:text-shadow-drop font-bold p-y-20 items-center'>System Basics</h1>
				<div className='w-full h-1 border-b-2 border-primary/25 dark:border-slate-200/25 mb-10'></div>
			</div>
			<div className='w-[90%] flex flex-col gap-5 text-lg text-left pb-20'>
				<p>In Shapers, each character, npc, and other creature is defined by a set of statistics that represent their capabilites. The bulk of these statistics are broadly separated into 3 categories, Attributes, Skills, and Magic. From these, secondary statistics are calculated. Secondary statistics include things like a creature's Defense, which indicates their ability to avoid or repel attacks in a combat encounter, or their Mana, the pool of energy within every living creature that fuels the magic they use.</p>
				<h1 className='text-3xl pt-5 text-shadow-lightTitle'>Attributes</h1>
				<p>Attributes represent general capabilities, the baseline from which specific knowledge and experience builds upon. There are 9 attributes, of which 8 are Mundane Attributes and 1 is a Mystical Attributes. The Mundane attributes are Strength, Finesse, Quickness, Fortitude, Charisma, Intelligence, Instict, and Willpower. The single Mystical Attributes is Guidance. </p>
				<p></p>
				<h1 className='text-3xl pt-5 text-shadow-lightTitle'>Skills</h1>
				<p>Beyond the baseline capabilities of Attributes, a character's Skills show particular expertise in more narrow disciplines. Skills are sorted into Skill Groups, each containing 4 Skills. The Skill Groups are Physicality, Control, Perception, Nature, Scholar, Craft, Conversation, Eloquence, and Mysticism. </p>
				<h1 className='text-3xl pt-5 text-shadow-lightTitle'>Magic</h1>
				<p>The last of the major groups of stats is Magic. The general magical capability of a creature is indicated by their Magic Grade. Magic Grade can range from 0 to 7, with 0 being the least magically capable and 7 the most. People with a Magic Grade of 0 are typically commoners, those who lack either the resources, ambition, or raw talent to develop their magical abilities. They are still capable of performing basic spells, and will generally at least a couple to make their daily routines easier. On the other end of the scale, those few who manage to reach Magic Grade 7 are capable of wielding immense power. The most powerful Grade 7 mages are capable of influencing an entire nation through their actions. </p>
				<h1 className='text-3xl pt-5 text-shadow-lightTitle'>Dice Mechanics</h1>
				<p>The core resolution in SoM is the dice system. Shapers uses a d10 dice pool system. When a character wants to accomplish a non-trivial task, they must roll dice to see whether or not they achieve their objective. In most cases, dice pools are determined by a combination of an Attribute and a Skill that are relevant to the situation. </p>
			</div>
		</div>
	</div>	
  )
}

export default Core
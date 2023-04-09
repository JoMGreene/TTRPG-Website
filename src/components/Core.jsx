import React from 'react'

const Core = () => {
  return (
	<div className='w-full h-screen bg-gradient-to-br from-primary to-gray-800 flex justify-center'>
		<div className='w-[95%] h-screen bg-white/10 flex flex-col rounded-[30px] text-white items-center [border-style:outset] border-2 border-white/10 font-roboto'>
			<div className='w-full flex flex-col items-center'>
				<h1 className='w-[90%] h-36 md:text-[48px] text-[36px] flex text-left text-shadow-drop font-bold p-y-20 items-center'>System Basics</h1>
				<div className='w-full h-1 border-b-2 border-slate-200/25 mb-10'></div>
			</div>
			<div className='w-[90%] flex flex-col gap-5 text-xl text-left'>
				<p>In Shapers, each character, npc, and other creature is defined by a set of statistics that represent their capabilites. The bulk of these statistics are broadly separated into 3 categories, Attributes, Skills, and Magic. </p>
				<p>Attributes represent general capabilities, the baseline from which specific knowledge and experience builds upon. There are 9 attributes, of which 8 are Mundane Attributes and 1 is a Mystical Attributes. The Mundane attributes are Strength, Finesse, Quickness, Fortitude, Charisma, Intelligence, Instict, and Willpower. The single Mystical Attributes is Guidance. </p>
				<p>Beyond the baseline capabilities of Attributes, a character's Skills show particular expertise in more narrow disciplines. Skills are sorted into Skill Groups, each containing 4 Skills. The Skill Groups are Physicality, Control, Perception, Nature, Scholar, Craft, Conversation, Eloquence, and Mysticism. </p>
				<p>The last of the major groups of stats is Magic. The general magical capability of a creature is indicated by their Magic Grade. Magic Grade can range from 0 to 7, with 0 being the least magically capable and 7 the most. People with a Magic Grade of 0 are typically commoners, those who lack either the resources, ambition, or raw talent to develop their magical abilities. They are still capable of performing basic spells, and will generally at least a couple to make their daily routines easier. On the other end of the scale, those few who manage to reach Magic Grade 7 are capable of wielding immense power. The most powerful Grade 7 mages are capable of influencing an entire nation through their actions. </p>
				<p>The core of resolving situations in Shapers is the dice system. Shapers uses a d10 dice pool system. When a character wants to accomplish a non-trivial task, they must roll dice to see whether or not they achieve their objective. In most cases, dice pools are determined by a combination of an Attribute and a Skill that are relevant to the situation. </p>
			</div>
		</div>
	</div>	
  )
}

export default Core
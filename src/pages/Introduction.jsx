import React from 'react'
import { SiteNav2 } from '../components'

const Introduction = () => {
  return (
	<div className='w-full h-auto bg-gradient-to-b from-white to-slate-100 dark:from-primary dark:to-gray-800 flex flex-row font-roboto pb-10 text-primary dark:text-white overflow-x-hidden'>
		<SiteNav2 />
		<div className='w-full h-auto mt-10  flex flex-col rounded-[30px] text-primary dark:text-white items-center font-roboto  '>
			<div className='w-[95%] flex flex-col items-start mb-10 '>
			<h1 className=' w-fit h-fit py-4 md:text-[48px] text-[36px] bg-gradient-to-r dark:from-slate-600 from-slate-400 to-transparent rounded-[20px] flex text-left text-shadow-lightTitle dark:text-shadow-drop font-bold pl-5 pr-96 items-center'>Introduction</h1>
			</div>
			<div className='w-[90%] flex flex-col gap-5 text-lg text-left pb-20'>
				<h1 className='header-text w-fit min-w-[200px] text-3xl text-shadow-lightTitle dark:text-shadow-drop bg-gradient-to-r dark:from-slate-600 from-slate-400 to-transparent rounded-[5px] pl-2 pr-6 sm:pr-48'>What is Shapers of Mana?</h1>
				<p>Shapers of Mana is a high fantasy Tabletop Role Playing Game set in the lands of Noxstellus. Noxstellus is a sprawling continent home to many peoples and nations, where Mana flows through all living beings. While the origins and intricacies of Mana remain a mystery, many creatures have learned how to channel and control Mana to affect themselves, others, and the world around them. People capable of directly controlling the Mana within their bodies are known as Mages, and by honing their abilities can become powerful enough to create truly awe-inspiring spells capable of affecting entire cities.
					<br /><br />Throughout Noxstellus there are scattered ruins, traces of a civilization long destroyed of which no records remain. While the ruins have long puzzled magical researchers, the recent invention of Manasteel has reignited interest in the ruins, as the similarities between them and Manasteel constructs are strikingly apparent. 
					<br /><br />In this time of innovation and evolution, players are given an opportunity to experience Noxstellus as a member of the Shapers' Guild. The Shapers' Guild is a multinational organization, having a presence in almost every corner of the continent. Anyone in Noxstellus with a problem, whether they be a peasant, soldier, or king, can request the aid of the Shapers' Guild. When a request is made, guild officials will determine the difficulty of the request and post the job in their guild halls. Members of the Shaper's Guild, commonly called Shapers, grant their aid to complete these jobs in exchange for pay, fame, or increased status within the Guild. Shapers have a unique position, being given the freedom to travel across Noxstellus as they wish with the ability to find work through the Guild no matter where they go. Taking on the role of Shapers, players will have ample opportunity to journey the lands as they wish, or build up reputation and influence by making a single region their home.</p>
		</div>
		</div>
	</div>
  )
}

export default Introduction
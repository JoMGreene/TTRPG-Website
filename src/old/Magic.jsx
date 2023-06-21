import React from 'react'
import {Link} from 'react-router-dom'
import SiteNav2 from '../components/SiteNav2'

const Magic = () => {
  return (
  <div className='w-full h-auto flex flex-row bg-gradient-to-b from-white to-slate-100 dark:from-primary dark:to-gray-800 font-roboto text-primary dark:text-white pb-10'>
    <SiteNav2/>
    <div className='w-full h-auto flex flex-col justify-center pt-4 items-center'>
      <div className='w-full flex flex-col justify-center items-center mb-10'>
        <div className=' w-[90%] h-2 border-b-2 border-slate-400'></div>
        <div className='w-[89%] flex flex-col justify-center gap-2 gap-y-1'>
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
      <div className='w-[95%] h-auto  flex flex-col  items-center [border-style:outset] font-roboto'>
        <div className='w-[95%] flex flex-col items-start mb-10 '>
          <h1 className=' w-fit h-fit py-4 md:text-[48px] text-[36px] bg-gradient-to-r dark:from-slate-600 from-slate-400 to-transparent rounded-[20px] flex text-left text-shadow-lightTitle dark:text-shadow-drop font-bold pl-5 pr-96 items-center'>Magic</h1>
        </div>
        <div className='w-[90%] flex flex-col gap-5 text-xl text-left'>
          <h1 className='header-text w-fit text-3xl text-shadow-lightTitle dark:text-shadow-drop bg-gradient-to-r dark:from-slate-600 from-slate-400 to-transparent rounded-[5px] pl-2 pr-48'>Magic in Noxstellus:</h1>
          <p className='pb-7'>Magic is something that everyone in Noxstellus has the capability to use. However, the vast majority of people will learn at most a couple of basic spells. This is because magic, in all its forms, is something that must be practiced extensively to gain even a basic mastery. Just like any other ability, some will be naturally gifted with an affinity for magic, and some will find it more difficult than most to gain much magical proficiency. Regardless of talent, magic is not something one can learn overnight, it takes years of dedicated training for a novice to become proficient with even a handful of basic spells.  <br /> For the majority of people, commoners just trying to get by, spending years trying to grasp the fundamentals of a magical discipline just isn’t feasible. Not only do they commonly lack the time to dedicate to such an endeavor, but also the resources. Magic is difficult enough to learn even with tomes and tutors to assist, but to learn it on one’s own is nearly impossible. In rare cases, commoners that have particularly fruitful businesses can afford magical training for their children, hoping to give them a successful future. More typically, families will have a ‘family spell’ or two, spells that help them with their basic day to day tasks which can then be passed down through the generations. Examples of some family spells might include a basic Elementalism spell to loosen up dirt, making tilling a field less taxing, or a minor Forces spell that allows a barkeep to levitate cups and mugs around their tavern. <br /> 
          Even for those that do have the resources and time to train their magic (nobles, adventurers, advisors, wealthy merchants, etc) the road is not an easy one. The first steps on the journey to master magic are difficult, with long days spent practicing the same motions and studying the same concepts without seeing any visible improvement in capability. Some give up long before reaching any form of effectiveness with their magic. But those who stick to their practice will learn, and eventually reach Magic Grade 1. </p>
          <h1 className='header-text w-fit text-3xl text-shadow-lightTitle dark:text-shadow-drop bg-gradient-to-r dark:from-slate-600 from-slate-400 to-transparent rounded-[5px] pl-2 pr-48'>Disciplines and Trees:</h1>
          <p className='pb-7'>Magic can be broadly sorted into three disciplines: Body, World, and Soul. The names of the disciplines reflect the way that mana is manipulated to create spells. For Body magic, mana is generally circulated within the body of the caster to amplify or alter their physical characteristics. World magic governs spells where mana is transformed to give it physical properties, then is typically directed out of the body and utilized to produce a worldly effect. Soul magic spells use the mana of the caster to influence the mana of other beings, altering their perceptions or emotions. These three categories serve as the “roots” for most magic, with each category containing multiple magic trees for magicians to learn from. <br /> Magic Trees are subcategories of each discipline, with each discipline containing four magic trees. A magic tree is a collection of spells that share the same base concepts, and as such provide a way for magicians to learn progressively more complex and powerful spells. </p>
          <h1 className='header-text w-fit text-3xl text-shadow-lightTitle dark:text-shadow-drop bg-gradient-to-r dark:from-slate-600 from-slate-400 to-transparent rounded-[5px] pl-2 pr-48'>Biology:</h1>
          <p className='pb-7'>Magic flows through the body similarly to how blood flows through a person’s veins. While Mana itself does not have a solid form, there are “channels” that run through the body which conduct the flow of magical energy. Each person has a magical “heart”, commonly referred to as their core, next to their heart. This magic core is the reservoir of magic that is drawn from whenever a person uses magic. Mana is drawn from the core, through the magic channels, to the areas of the body where mana is needed to produce a magical effect.</p>
          <h1 className='header-text w-fit text-3xl text-shadow-lightTitle dark:text-shadow-drop bg-gradient-to-r dark:from-slate-600 from-slate-400 to-transparent rounded-[5px] pl-2 pr-48'>The Magic Grades:</h1>
          <p className='pb-7'>The Magic Grades are a way of quantifying the general magical strength of an individual, and a person’s Magic Grade is directly tied to the potency of the magic they can use. There are 8 Grades of Magic, numbered 0 through 7. Magic Grades are a simple way to evaluate the general capability of a mage, as the difference between each of them is distinct. By looking at someone's Magic Aura, it is easy to tell which Grade they have achieved simply by the quantity and purity of the Mana that surrounds them. There is variance in the specific aura of magicians within the same Grade, but a magician will never have a stronger aura than someone of a higher Grade. <br />Grade 0 is the level of magic that most people possess, which is to say largely none. Of course, magic does still exist in these people, and mana still flows through them, but they are mostly incapable of controlling it. Those at Grade 0 can still learn minor magic. The family spells mentioned earlier are a good example of such magic. The mana required to perform these minor spells is miniscule compared to that of a proper spell, allowing anyone to learn it without too much difficulty. <br />Above that, Grade 1 is the first breakthrough that those dedicating themselves to magic will achieve. At this stage, the world of magic opens up, as magicians at this Grade can begin to learn spells from the Magic Trees. <br />Grades 2 and 3 are a building of general capability. The quantity of mana that a mage is able to channel at once increases significantly, and the spells they know become more potent. <br />
          Upon reaching Grade 4, every magician gains a deeper understanding of the workings of their own core. By understanding the source of their mana, they learn that they can also use mana on their core itself. The process of empowering one’s own core is named Ascension, and is one of the most powerful tools a magician can possess. Ascension is a temporary state that increases the general capabilities of a magician, at the cost of draining a significant amount of mana. <br />Grades 5 and 6 are a building of the new capabilities unlocked by Ascension, alongside the typical increases in magical potency. Magicians at these grades possess vast quantities of mana, and the spells they cast are on an entirely different level than those of the lower Grades. Even low tier spells cast by these magicians can be devastating, and high tier spells are capable of shaping battlefields on their own. <br />Grade 7 is the pinnacle of magical power. Few ever reach such heights, and those that do are recognized as global powers. A single Grade 7 magician is capable of having a significant influence on a nation simply by announcing their allegiance to it. Only around 100 grade 7 magicians exist across the entirety of Noxstellus, so the importance of gaining the favor of even one cannot be understated.</p>
          <h1 className='header-text w-fit text-3xl text-shadow-lightTitle dark:text-shadow-drop bg-gradient-to-r dark:from-slate-600 from-slate-400 to-transparent rounded-[5px] pl-2 pr-48'>Ascension:</h1>
          <p className='pb-7'>Ascension is an ability unique to those magicians who have reached at least Magic Grade 4. While it can only be used for short amounts of time, the massive increase in ability granted by Ascension elevates those who use it to an entirely new level of magical power. To activate Ascension, a mage controls the mana within their own core. Rather than letting it flow out normally, they use part of the mana within their core to enhance the core itself. As a result, the leftover mana flowing out from the core has greatly increased purity, and as it circulates through the body of the magician, their entire body becomes suffused with the mana, increasing every aspect of their capabilities. <br />Mages reaching mastery in at least one of the magic trees can alter the mana they use to enhance their core, aligning it with a particular kind of magic and granting them additional abilities representative of that tree of magic.  <br />As a magician's Grade rises past 4, the effectiveness of their Ascension increases alongside it. It is the combination of high tier spells alongside Ascension that makes magicians of the highest Grades so incredible. </p>
        </div>
      </div>
    </div>	
  </div>
  )
}

export default Magic
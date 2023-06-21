import React from 'react';
import cardData from '../assets/cardData'
import { Link } from 'react-router-dom'
import fog from '../assets/fog.webp'
import { useInView } from 'react-intersection-observer';

const SlideStick = () => {

	const [magicstate, setMagicstate] = React.useState(true);

	const cardWorld = React.createRef();
	const cardBody = React.createRef();
	const cardSoul = React.createRef();
	const cards = [cardWorld, cardBody, cardSoul]
	const cardRotate = ["-rotate-12", "rotate-0", "rotate-12"];

	const cardContainer = React.createRef();
  
	const magicText = React.createRef();

	const [viewRef1, inView1, entry1] = useInView()
	const [viewRef2, inView2, entry2] = useInView()
	const [viewRef4, inView4, entry4] = useInView()
	const [viewRef5, inView5, entry5] = useInView()

    const expandCard =(cardIndex) => {
		if (magicstate) {
			magicText.current.classList.add('magic-text-hide', 'absolute');
			magicText.current.classList.remove('transition', 'duration-700');
			cards.forEach(crd => crd == cards[cardIndex] ? crd.current.classList.add('selected-card') : crd.current.classList.add('magic-text-hide'));
			cards[cardIndex].current.classList.remove(cardRotate[cardIndex], "hover:-translate-y-6", "hover:z-50");
			cardContainer.current.classList.add('relative', 'transition', 'duration-700');
			cardContainer.current.classList.remove('opacity-0', 'absolute');
	
			for (let i = 0; i < 4; i++) {
				cardContainer.current.children[i].firstChild.innerHTML = cardData[(cardIndex * 4) + i].header;
				let thisClassAdd = cardData[(cardIndex * 4) + i].classes;
				cardContainer.current.children[i].classList.add(...thisClassAdd);
				cardContainer.current.children[i].lastChild.innerHTML = cardData[(cardIndex * 4) + i].body;
			};
	
		} else {
			magicText.current.classList.remove('magic-text-hide', 'absolute');
			magicText.current.classList.add('transition', 'duration-700');
			cards.forEach(crd => crd == cards[cardIndex] ? crd.current.classList.remove('selected-card') : crd.current.classList.remove('magic-text-hide'));
			cards[cardIndex].current.classList.add(cardRotate[cardIndex], "hover:-translate-y-6", "hover:z-50");
			cardContainer.current.classList.add('opacity-0', 'absolute');
			cardContainer.current.classList.remove('relative', 'transition', 'duration-700')
			for (let j = 0; j < 4; j++) {
				let thisClassRemove = cardData[(cardIndex * 4) + j].classes;
				cardContainer.current.children[j].classList.remove(...thisClassRemove);
			}
		}
		setMagicstate(magicstate ? false : true);
	  }


  return (
	<div>
		<div className='sm:sticky sm:top-0 w-full h-screen bg-bg4 bg-cover overflow-x-hidden'>	
			<div className="w-full h-full p-10 flex flex-col lg:flex-row justify-around items-center gap-x-[10%]">
				<div ref={viewRef1} className={`lg:w-[45%] w-full h-full md:ml-24 flex flex-col sm:justify-center justify-start gap-[5%] items-center sm:mb-[15%] lg:mt-0 mt-20 text-white hide-text-left ${inView1 ? 'reveal-text' : ''}`}>
					<h1 className='w-full font-roboto xl:text-[48px] text-[36px] sm:text-left text-center text-shadow-drop font-bold '>WELCOME TO NOXSTELLUS</h1>
					<p className='font-roboto text-xl sm:w-[60%] w-[90%] sm:self-start sm:text-left text-center text-shadow-drop'>Noxstellus is a continent filled with magical wonders, fantastical creatures, and powerful mages. Though the lands are rife with danger, so too are they filled with countless opportunities. </p>
				</div>
				<div className='lg:w-[34%] w-[100%] lg:h-full h-24 flex flex-col justify-center'>
	
				</div>
			</div>

			<img src={fog} alt="fog" className='hidden sm:block select-none absolute fog1 w-[150vw] h-[500px] bottom-0 object-fill'/>
			
			<img src={fog} alt="fog" className='hidden sm:block select-none absolute fog2 w-[150vw] h-[420px] bottom-0 object-fill' />

			<img src={fog} alt="fog" className='hidden sm:block select-none absolute fog3 w-[150vw] h-[450px] bottom-0 object-fill'/>

		</div>
		<div className='sm:sticky sm:top-0 w-full sm:h-screen h-auto bg-bg3 bg-cover shadow-up text-white'>	
			<div className="w-full h-full p-10 grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-2 justify-center items-center gap-x-[20%] lg:mb-0">
				<div className='md:w-[200px] w-[133px] md:h-[300px] h-[200px] relative justify-self-center'>
					<button aria-label='WorldCard' ref={cardWorld} onClick={() => expandCard(0)} className='absolute md:left-[50px] -left-[50px] z-30 hover:z-50 md:w-[200px] w-[133px] md:h-[300px] h-[200px] rounded-2xl grid md:grid-rows-card-grid grid-rows-card-grid-small md:gap-5 gap-2 border-solid border-2 border-[#A4F4F0] bg-gradient-card from-[#65c2c7]/90 to-[#000000]/90 -rotate-12 hover:-translate-y-6 hover:from-[#6ed4da] hover:to-[#111111] transition ease-in-out duration-300 shadow hover:shadow-around hover:shadow-cyan-200'>
						<h1 className='md:text-[24px] text-lg text-right font-neohellenic font-bold p-2 px-4'>World</h1>
						<p className='md:text-[20px] text-sm text-left font-neohellenic px-4 leading-normal'>Use your mana to manipulate the world around you, creating spectacular displays of force.</p>
					</button>
					<button aria-label='BodyCard' ref={cardBody} onClick={() => expandCard(1)} className='absolute md:left-[100px] z-20 hover:z-50 md:w-[200px] w-[133px] md:h-[300px] h-[200px] rounded-2xl grid md:grid-rows-card-grid grid-rows-card-grid-small  md:gap-5 gap-2 border-solid border-2 border-[#A4F4F0] bg-gradient-card from-[#65c2c7]/90 to-[#000000]/90 hover:-translate-y-6 hover:from-[#6ed4da] hover:to-[#111111] transition ease-in-out duration-300 shadow hover:shadow-around hover:shadow-cyan-200'>
						<h1 className='md:text-[24px] text-lg text-right font-neohellenic font-bold p-2 px-4'>Body</h1>
						<p className='md:text-[20px] text-sm text-left font-neohellenic px-4 leading-normal'>Augment or alter your own body, gaining capabilities far beyond your normal limits.</p>
					</button>
					<button aria-label='SoulCard' ref={cardSoul} onClick={() => expandCard(2)} className='absolute md:left-[150px] left-[50px] z-10 hover:z-50 md:w-[200px] w-[133px] md:h-[300px] h-[200px] rounded-2xl grid md:grid-rows-card-grid grid-rows-card-grid-small  md:gap-5 gap-2 border-solid border-2 border-[#A4F4F0] bg-gradient-card from-[#65c2c7]/90 to-[#000000]/90 rotate-12 hover:-translate-y-6 hover:from-[#6ed4da] hover:to-[#111111] transition ease-in-out duration-300 shadow hover:shadow-around hover:shadow-cyan-200'>
						<h1 className='md:text-[24px] text-lg text-right font-neohellenic font-bold p-2 px-4'>Soul</h1>
						<p className='md:text-[20px] text-sm text-left font-neohellenic px-4 leading-normal'>Use your magic to influence the mana of those around you, aiding allies or debilitating foes.</p>
					</button>
				</div>
				<div ref={magicText} className={`w-full h-full sm:mb-12 flex flex-col justify-center gap-[5%] items-center self-end transition duration-700 `}>
					<h1 className={`w-full font-roboto xl:text-[42px] text-[32px] sm:text-left text-center text-shadow-drop font-bold text-white hide-text-right ${inView2 ? 'reveal-text' : ''}`}>MAGIC FLOWS FREE</h1>
					<div ref={viewRef2} className={`font-roboto md:text-xl text-lg sm:w-[70%] w-[90%] flex flex-col sm:self-start justify-around gap-3 text-shadow-drop text-white hide-text-right  ${inView2 ? 'reveal-text' : ''}`}>
						<p>In Shapers of Mana, every character uses some form of magic. Magic is categorized into three disciplines: Body, Soul, and World, each of which contains multiple magic trees to learn from.</p>
						<p>Magic is unrestricted, anyone can learn any type of magic. Specialize into a single tree or expand your options by learning from several.</p>
						<p>Click one of the cards to view the magic trees in that discipline, or click <Link to='/magic' className=' text-blue-300'>Here to learn more about the magic system. →</Link></p>
					</div>
				</div>
				<div ref={cardContainer} className='absolute opacity-0 w-[full] h-full grid grid-cols-2 grid-rows-2 gap-5 justify-items-center items-center'>
					<button aria-label='magicTreeCard1' className={` z-50 md:w-[200px] w-[133px] md:h-[300px] h-[200px] rounded-2xl grid md:grid-rows-card-grid grid-rows-card-grid-small  md:gap-5 gap-2 border-solid border-2 border-[#A4F4F0] bg-gradient-card hover:shadow-around hover:shadow-cyan-200 self-center`}>
						<h1 className='md:text-[24px] text-lg text-left font-neohellenic font-bold p-2 px-4'></h1>
						<p className='md:text-[20px] text-sm text-left font-neohellenic px-4 leading-tight'></p>
					</button>
					<button aria-label='magicTreeCard2' className={`z-50 md:w-[200px] w-[133px] md:h-[300px] h-[200px] rounded-2xl grid md:grid-rows-card-grid grid-rows-card-grid-small  md:gap-5 gap-2 border-solid border-2 border-[#A4F4F0] bg-gradient-card hover:shadow-around hover:shadow-cyan-200`}>
						<h1 className='md:text-[24px] text-lg text-left font-neohellenic font-bold p-2 px-4'></h1>
						<p className='md:text-[20px] text-sm text-left font-neohellenic px-4 leading-tight'></p>
					</button>
					<button aria-label='magicTreeCard3' className={`z-50 md:w-[200px] w-[133px] md:h-[300px] h-[200px] rounded-2xl grid md:grid-rows-card-grid grid-rows-card-grid-small  md:gap-5 gap-2 border-solid border-2 border-[#A4F4F0] bg-gradient-card hover:shadow-around hover:shadow-cyan-200`}>
						<h1 className='md:text-[24px] text-lg text-left font-neohellenic font-bold p-2 px-4'></h1>
						<p className='md:text-[20px] text-sm text-left font-neohellenic px-4 leading-tight'></p>
					</button>
					<button aria-label='magicTreeCard4' className={`z-50 md:w-[200px] w-[133px] md:h-[300px] h-[200px] rounded-2xl grid md:grid-rows-card-grid grid-rows-card-grid-small  md:gap-5 gap-2 border-solid border-2 border-[#A4F4F0] bg-gradient-card hover:shadow-around hover:shadow-cyan-200`}>
						<h1 className='md:text-[24px] text-lg text-left font-neohellenic font-bold p-2 px-4'></h1>
						<p className='md:text-[20px] text-sm text-left font-neohellenic px-4 leading-tight'></p>
					</button>
				</div>
			</div>
		</div>
		<div className='sm:sticky sm:top-0 w-full sm:h-screen h-auto bg-bg1 bg-cover shadow-up text-white'>	
			<div className="w-full h-full p-10 flex flex-col lg:flex-row justify-around items-center gap-x-[10%]">
				<div ref={viewRef4} className={`lg:w-[40%] w-full h-full flex flex-col lg:justify-center lg:gap-[10%] gap-[5%] justify-around items-center lg:mt-0 mt-20 lg:mb-0 mb-20 hide-text-left ${inView4 ? 'reveal-text' : ''}`}>
					<h1 className='w-full font-roboto xl:text-[42px] text-[32px] sm:text-left text-center text-shadow-drop font-bold text-white lg:pb-0 pb-6'>ENGAGING CORE MECHANICS</h1>
					<div className='font-roboto md:text-xl text-lg sm:w-[70%] w-[90%] flex flex-col sm:self-start justify-around gap-3 text-shadow-drop text-white'>
						<p>Characters' capabilities are determined by a combination of their Attributes and Skills, which represent general and specific expertise, respectively.</p>
						<p>Shapers of Mana uses a d10 dice pool system. When attempting to accomplish a task, characters roll pools of dice and count up the number of "successes" they recieve from their dice. If the total successes meets or exceeds the goal for the roll, the character accomplishes their objective. </p>
						<p>Click <Link to='/basics' className=' text-blue-300'>Here to learn more about the core mechanics. →</Link></p>
					</div>
				</div>
				<div className='lg:w-[34%] w-[100%] flex flex-col justify-center'></div>
			</div>
		</div>
		<div className='sm:sticky sm:top-0 w-full sm:h-screen h-auto bg-bg2 bg-cover bg-center shadow-up text-white'>	
			<div className="w-full h-full p-10 flex flex-col lg:flex-row justify-around items-center gap-x-[10%] relative z-10">
				<div className='lg:w-[34%] w-full h-full flex flex-col justify-center'></div>
				<div ref={viewRef5} className={`lg:w-[40%] w-full h-full flex flex-col lg:justify-center lg:gap-[10%] gap-[5%] justify-around items-center lg:mt-0 mt-20 lg:mb-0 mb-20 hide-text-right ${inView5 ? 'reveal-text' : ''}`}>
					<h1 className='w-full font-roboto xl:text-[42px] text-[32px] sm:text-left text-center text-shadow-drop font-bold text-white lg:pb-0 pb-6'>DUAL EXP PROGRESSION</h1>
					<div className='font-roboto md:text-xl text-lg sm:w-[70%] w-[90%] flex flex-col sm:self-start justify-around gap-3 text-shadow-drop text-white' > 
						<p>There are two different forms of experience points that characters can earn, Standard XP and Magic XP. </p>
						<p>Rather than simply collecting enough EXP to reach the next level, characters spend the experience points they've earned to directly upgrade their abilities. Standard XP is used to improve characters' Attribute and Skill ratings, while Magic XP is spent on unlocking new spells and magical abilities.</p>
						<p>Click <Link to='/basics' className=' text-blue-300'>Here to learn more about character progression. →</Link></p>
					</div>
				</div>
				
			</div>
		</div>	
	</div>
  )
}

export default SlideStick
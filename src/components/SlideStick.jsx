import React from 'react';
import tempmap from '../assets/tempmap.jpg';
import cardData from '../assets/cardData'

const SlideStick = () => {

	const [magicstate, setMagicstate] = React.useState(true);

	const cardWorld = React.createRef();
	const cardBody = React.createRef();
	const cardSoul = React.createRef();
	const cards = [cardWorld, cardBody, cardSoul]
	const cardRotate = ["-rotate-12", "rotate-0", "rotate-12"];

	const cardContainer = React.createRef();
  
	const magicText = React.createRef();


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
			magicText.current.classList.remove('magic-text-hide', 'absolute', 'transition', 'duration-700');
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
		<div className='sm:sticky sm:top-0 w-screen sm:h-screen h-[110vh] bg-bg4 bg-cover '>	
			<div className="w-full h-full p-10 flex flex-col lg:flex-row justify-around items-center gap-x-[10%]">
				<div className='lg:w-[45%] w-full h-full md:ml-24 flex flex-col sm:justify-center gap-[5%] justify-around items-center sm:mb-[15%]'>
					<h1 className='w-full font-roboto xl:text-[48px] text-[36px] sm:text-left text-center text-shadow-drop font-bold text-white'>WELCOME TO NOXSTELLUS</h1>
					<p className='font-roboto text-xl pl-3 sm:w-[60%] w-[90%] sm:self-start sm:text-left text-center'>Noxstellus is a continent filled with magical wonders, fantastical creatures, and powerful mages. Though the lands are rife with danger, those willing to face those dangers will find themselves handsomely rewarded. </p>
				</div>
				<div className='lg:w-[34%] w-[100%] h-full flex flex-col justify-center'>
	
				</div>
			</div>
		</div>
		<div className='sm:sticky sm:top-0 w-screen sm:h-screen h-auto bg-bg1 bg-cover shadow-up text-white'>	
			<div className="w-full h-full p-10 grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-2 justify-center items-center gap-x-[20%]">
				<div className='md:w-[200px] w-[133px] md:h-[300px] h-[200px] relative justify-self-center'>
					<button ref={cardWorld} onClick={() => expandCard(0)} className='absolute md:left-[50px] -left-[50px] z-30 hover:z-50 md:w-[200px] w-[133px] md:h-[300px] h-[200px] rounded-2xl grid md:grid-rows-card-grid grid-rows-card-grid-small md:gap-5 gap-2 border-solid border-2 border-[#A4F4F0] bg-gradient-card from-[#539396]/90 to-[#555C5C]/90 -rotate-12 hover:-translate-y-6 hover:from-[#539396] hover:to-[#555C5C] transition ease-in-out duration-300 shadow hover:shadow-around hover:shadow-cyan-200'>
						<h1 className='md:text-[24px] text-lg text-right font-neohellenic font-bold p-2 px-4'>World</h1>
						<p className='md:text-[20px] text-sm text-left font-neohellenic px-4 leading-normal'>Use your mana to manipulate the world around you, creating spectacular displays of force.</p>
					</button>
					<button ref={cardBody} onClick={() => expandCard(1)} className='absolute md:left-[100px] z-20 hover:z-50 md:w-[200px] w-[133px] md:h-[300px] h-[200px] rounded-2xl grid md:grid-rows-card-grid grid-rows-card-grid-small  md:gap-5 gap-2 border-solid border-2 border-[#A4F4F0] bg-gradient-card from-[#539396]/90 to-[#555C5C]/90 hover:-translate-y-6 hover:from-[#539396] hover:to-[#555C5C] transition ease-in-out duration-300 shadow hover:shadow-around hover:shadow-cyan-200'>
						<h1 className='md:text-[24px] text-lg text-right font-neohellenic font-bold p-2 px-4'>Body</h1>
						<p className='md:text-[20px] text-sm text-left font-neohellenic px-4 leading-normal'>Augment or alter your own body, gaining capabilities far beyond your normal limits.</p>
					</button>
					<button ref={cardSoul} onClick={() => expandCard(2)} className='absolute md:left-[150px] left-[50px] z-10 hover:z-50 md:w-[200px] w-[133px] md:h-[300px] h-[200px] rounded-2xl grid md:grid-rows-card-grid grid-rows-card-grid-small  md:gap-5 gap-2 border-solid border-2 border-[#A4F4F0] bg-gradient-card from-[#539396]/90 to-[#555C5C]/90 rotate-12 hover:-translate-y-6 hover:from-[#539396] hover:to-[#555C5C] transition ease-in-out duration-300 shadow hover:shadow-around hover:shadow-cyan-200'>
						<h1 className='md:text-[24px] text-lg text-right font-neohellenic font-bold p-2 px-4'>Soul</h1>
						<p className='md:text-[20px] text-sm text-left font-neohellenic px-4 leading-normal'>Use your magic to influence the mana of those around you, aiding allies or debilitating foes.</p>
					</button>
				</div>
				<div ref={magicText} className='w-full h-full sm:mb-12 flex flex-col justify-center gap-[5%] items-center self-end transition duration-700'>
					<h1 className='w-full font-roboto xl:text-[42px] text-[32px] sm:text-left text-center text-shadow-drop font-bold text-white'>MAGIC FLOWS FREE</h1>
					<div className='font-roboto md:text-xl text-lg sm:w-[70%] w-[90%] flex flex-col sm:self-start justify-around gap-3 text-shadow-drop text-white'>
						<p>In Shapers of Mana, every character uses some form of magic. Magic is categorized into three disciplines: Body, Soul, and World, each of which contains multiple magic trees to learn from.</p>
						<p>Magic is unrestricted, anyone can learn any type of magic. Specialize into a single tree or expand your options by learning from several.</p>
						<p>Click one of the cards to view the magic trees in that discipline, or click <a href="">Here</a> to learn more about the magic system.</p>
					</div>
				</div>
				<div ref={cardContainer} className='absolute opacity-0 w-[full] h-full grid grid-cols-2 grid-rows-2 gap-5 justify-items-center items-center'>
					<button className={` z-50 md:w-[200px] w-[133px] md:h-[300px] h-[200px] rounded-2xl grid md:grid-rows-card-grid grid-rows-card-grid-small  md:gap-5 gap-2 border-solid border-2 border-[#A4F4F0] bg-gradient-card hover:shadow-around hover:shadow-cyan-200 self-center`}>
						<h1 className='md:text-[24px] text-lg text-left font-neohellenic font-bold p-2 px-4'></h1>
						<p className='md:text-[20px] text-sm text-left font-neohellenic px-4 leading-normal'></p>
					</button>
					<button className={`z-50 md:w-[200px] w-[133px] md:h-[300px] h-[200px] rounded-2xl grid md:grid-rows-card-grid grid-rows-card-grid-small  md:gap-5 gap-2 border-solid border-2 border-[#A4F4F0] bg-gradient-card hover:shadow-around hover:shadow-cyan-200`}>
						<h1 className='md:text-[24px] text-lg text-left font-neohellenic font-bold p-2 px-4'></h1>
						<p className='md:text-[20px] text-sm text-left font-neohellenic px-4 leading-normal'></p>
					</button>
					<button className={`z-50 md:w-[200px] w-[133px] md:h-[300px] h-[200px] rounded-2xl grid md:grid-rows-card-grid grid-rows-card-grid-small  md:gap-5 gap-2 border-solid border-2 border-[#A4F4F0] bg-gradient-card hover:shadow-around hover:shadow-cyan-200`}>
						<h1 className='md:text-[24px] text-lg text-left font-neohellenic font-bold p-2 px-4'></h1>
						<p className='md:text-[20px] text-sm text-left font-neohellenic px-4 leading-normal'></p>
					</button>
					<button className={`z-50 md:w-[200px] w-[133px] md:h-[300px] h-[200px] rounded-2xl grid md:grid-rows-card-grid grid-rows-card-grid-small  md:gap-5 gap-2 border-solid border-2 border-[#A4F4F0] bg-gradient-card hover:shadow-around hover:shadow-cyan-200`}>
						<h1 className='md:text-[24px] text-lg text-left font-neohellenic font-bold p-2 px-4'></h1>
						<p className='md:text-[20px] text-sm text-left font-neohellenic px-4 leading-normal'></p>
					</button>
				</div>
			</div>
		</div>
		<div className='sm:sticky sm:top-0 w-screen sm:h-screen h-[130vh] bg-primary text-white'>	
			<div className="w-full h-full p-10 flex flex-col lg:flex-row justify-around items-center gap-x-[10%]">
				<div className='xl:w-[40%] w-full h-full mb-36 flex flex-col lg:justify-center lg:gap-[10%] justify-around items-center'>
					<h1 className='xl:w-[36rem] w-[24rem] p-3 pr-10 relative xl:-left-14 font-roboto xl:text-[36px] text-[24px] text-right text-shadow-drop font-bold bg-[#3E9994]'>DICE POOLS</h1>
					<div className='font-roboto text-lg w-[70%] flex flex-col items-center justify-around gap-3'>
						<p>Shapers' core dice system is a d10 dice pool system. When a character wants to accomplish a task, they roll a number of d10s determined by the relevant attribute and skill for the task.</p>
						<p>Any dice showing a 7 or higher each count as a success, and if the total number of successes on a roll exceeds the difficulty Threshold for the test, the character completes the task successfully.</p>
						<p>Click <a>Here</a> to learn more about the core mechanics of Shapers.</p>
					</div>
				</div>
				<div className='lg:w-[34%] w-[100%] h-full flex flex-col justify-center'></div>
			</div>
		</div>
		<div className='sm:sticky sm:top-0 w-screen sm:h-screen h-[130vh] bg-primary text-white'>	
			<div className="w-full h-full p-10 flex flex-col lg:flex-row justify-around items-center gap-x-[10%]">
				<div className='lg:w-[34%] w-[100%] h-full flex flex-col justify-center'></div>
				<div className='xl:w-[40%] w-full h-full mb-36 flex flex-col lg:justify-center lg:gap-[10%] justify-around items-center'>
					<h1 className='xl:w-[36rem] w-[24rem] p-3 pr-10 relative xl:-left-14 font-roboto xl:text-[36px] text-[24px] text-right text-shadow-drop font-bold bg-[#3E9994]'>DUAL EXP PROGRESSION</h1>
					<div className='font-roboto text-lg w-[70%] flex flex-col items-center justify-around gap-3'> 
						<p>In Shapers, there are two different forms of experience points that characters can earn, Standard XP and Magic XP. </p>
						<p> Rather than gathering EXP to reach the next level, characters spend the experience points they've earned to directly upgrade their stats or abilities. Standard XP is used to improve characters' attribute and skill ratings, while Magic XP is spent on unlocking new spells and magical abilities.</p>
						<p>Click <a href="">Here</a> to learn more about character progression.</p>
					</div>
				</div>
				
			</div>
		</div>	
	</div>
  )
}

export default SlideStick
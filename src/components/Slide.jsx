import React from 'react'
import tempmap from '../assets/tempmap.jpg'
import parchmentbg from '../assets/parchmentbg.jpg'
import Treecard from "./Treecard.jsx"
import cardData from '../assets/cardData'

const Slide = () => {


  const [index, setIndex] = React.useState(0);
  const [magicstate, setMagicstate] = React.useState(true);

  const slide0 = React.createRef();
  const slide1 = React.createRef();
  const slide2 = React.createRef();
  const slide3 = React.createRef();
  const slides = [slide0, slide1, slide2, slide3];

  const cardContainer = React.createRef();

  const currentCards = [cardData[0], cardData[1], cardData[2], cardData[3]]


  const cardWorld = React.createRef();
  const cardBody = React.createRef();
  const cardSoul = React.createRef();
  const cards = [cardWorld, cardBody, cardSoul]
  const cardRotate = ["-rotate-12", "rotate-0", "rotate-12"];


  const magicText = React.createRef();

  

  /* Functions for left and right buttons. Button press increases or decreases transform on the main div to move left/right, and hides all sections of the slide except for the current one.*/
  function prevSlide() {
	let nextIndex = (index == 0 ? 3 : index - 1);
	slides[nextIndex].current.classList.add('slide-active');
	slides[index].current.classList.remove('slide-active');
	setIndex(index == 0 ? 3 : index - 1);


  }

  function nextSlide() {
	let nextIndex = (index == 3 ? 0 : index + 1);
	slides[nextIndex].current.classList.add('slide-active');
	slides[index].current.classList.remove('slide-active');
	setIndex(index == 3 ? 0 : index + 1);


  }

  /* Function to show 4 magic tree cards when a discipline card is clicked. Hides the text, grabs the right data for the 4 cards from the cardData file, and reveals the cards.  Could use toggle on the magicText class additions/removals to make it look cleaner. Could also possibly use function to render sub-component for a single slide when button push, and delete old one?*/
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
		magicText.current.classList.remove('magic-text-hide', 'absolute', 'transition', 'duration-7000');
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
		<div className='sm:flex hidden w-full py-3 justify-between items-center h-[90vh]'>
			<button onClick={prevSlide} className='h-[80px] w-[80px] bg-arrow-icon bg-cover bg-primary mx-10 z-10 rounded-full boder-solid border-[#fff5d1] border-[1px] transition ease-in-out duration-300 hover:bg-[#353535] hover:scale-110 shadow hover:shadow-around-lg hover:shadow-red-200'></button>
			<div className='flex-1 w-[80vw] lg:h-[70vh] h-full relative mx-10 py-6 border-solid border-[1px] border-[#E8D698]'>
				<div className='slide-parent w-full h-full flex absolute top-0 text-white' style = {{'transform': `translateX(-${100 * index}%)`}}>
					<div ref={slide0} className="slide w-full h-auto p-10 pr-20 flex flex-col lg:flex-row justify-around items-center gap-x-[10%] min-w-full opacity-0 slide-active ">
						<div className='xl:w-[40%] w-full h-full mb-36 flex flex-col lg:justify-center lg:gap-[10%] justify-around items-center'>
							<h1 className='xl:w-[36rem] w-[24rem] p-3 pr-10 relative xl:-left-28 font-roboto xl:text-[36px] text-[24px] text-right text-shadow-drop font-bold bg-[#3E9994]'>WELCOME TO NOXSTELLUS</h1>
							<p className='font-roboto text-lg w-[70%]'>Noxstellus is a continent filled with magical wonders, fantastical creatures, and powerful mages. Though the lands are rife with danger, those willing to face those dangers will find themselves handsomely rewarded. </p>
						</div>
						<div className='xl:w-[34%] w-[100%] h-full flex flex-col justify-center'>
							<img src={tempmap} className='border-solid border-2 border-[#E8D698] w-full h-auto max-w-[592px] min-w-[200px] max-h-full'></img>	
						</div>
					</div>
					<div ref={slide1} className="slide w-full h-auto p-10 pr-20 grid grid-cols-2 justify-center items-center gap-x-[10%] min-w-full opacity-0 ">
						<div className='w-[60%] h-[50%] relative justify-self-center'>
							<button ref={cardWorld} onClick={() => expandCard(0)} className='absolute left-[50px] z-30 hover:z-50 w-[200px] h-[300px] rounded-2xl grid grid-rows-card-grid gap-5 border-solid border-2 border-[#A4F4F0] bg-gradient-card from-[#539396]/90 to-[#555C5C]/90 -rotate-12 hover:-translate-y-6 hover:from-[#539396] hover:to-[#555C5C] transition ease-in-out duration-300 shadow hover:shadow-around hover:shadow-cyan-200'>
								<h1 className='text-[24px] text-right font-neohellenic font-bold p-2 px-4'>World</h1>
								<p className='text-[20px] text-left font-neohellenic px-4 leading-6'>Use your mana to manipulate the world around you, creating spectacular displays of force.</p>
							</button>
							<button ref={cardBody} onClick={() => expandCard(1)} className='absolute left-[100px] z-20 hover:z-50 w-[200px] h-[300px] rounded-2xl grid grid-rows-card-grid gap-5 border-solid border-2 border-[#A4F4F0] bg-gradient-card from-[#539396]/90 to-[#555C5C]/90 hover:-translate-y-6 hover:from-[#539396] hover:to-[#555C5C] transition ease-in-out duration-300 shadow hover:shadow-around hover:shadow-cyan-200'>
								<h1 className='text-[24px] text-right font-neohellenic font-bold p-2 px-4'>Body</h1>
								<p className='text-[20px] text-left font-neohellenic px-4 leading-6'>Augment or alter your own body, gaining capabilities far beyond your normal limits.</p>
							</button>
							<button ref={cardSoul} onClick={() => expandCard(2)} className='absolute left-[150px] z-10 hover:z-50 w-[200px] h-[300px] rounded-2xl grid grid-rows-card-grid gap-5 border-solid border-2 border-[#A4F4F0] bg-gradient-card from-[#539396]/90 to-[#555C5C]/90 rotate-12 hover:-translate-y-6 hover:from-[#539396] hover:to-[#555C5C] transition ease-in-out duration-300 shadow hover:shadow-around hover:shadow-cyan-200'>
								<h1 className='text-[24px] text-right font-neohellenic font-bold p-2 px-4'>Soul</h1>
								<p className='text-[20px] text-left font-neohellenic px-4 leading-6'>Use your magic to influence the mana of those around you, aiding allies or debilitating foes.</p>
							</button>
						</div>
						<div ref={magicText} className='w-full h-full mb-12 flex flex-col lg:justify-center lg:gap-[10%] justify-around items-center self-end transition duration-700'>
							<h1 className='xl:w-[33rem] w-[24rem] p-3 pl-10 relative font-roboto xl:text-[36px] text-[24px] text-left text-shadow-drop font-bold bg-[#3E9994]'>MAGIC FLOWS FREE</h1>
							<div className='font-roboto text-lg w-[70%] flex flex-col items-center justify-around gap-3'>
								<p>In Shapers of Mana, every character uses some form of magic. Magic is categorized into three disciplines: Body, Soul, and World, each of which contains multiple magic trees to learn from.</p>
								<p>Magic is unrestricted, anyone can learn any type of magic. Specialize into a single tree or expand your options by learning from several.</p>
								<p>Click one of the cards to view the magic trees in that discipline, or click <a href="">Here</a> to learn more about the magic system.</p>
							</div>
						</div>
						<div ref={cardContainer} className='absolute -left-[20%] opacity-0 w-full h-full grid grid-cols-2 grid-rows-2 gap-5'>
							<button className={` z-50 w-full h-full rounded-2xl grid grid-rows-card-grid gap-5 border-solid border-2 border-[#A4F4F0] bg-gradient-card hover:shadow-around hover:shadow-cyan-200`}>
								<h1 className='text-[24px] text-left font-neohellenic font-bold p-2 px-4'></h1>
								<p className='text-[20px] text-left font-neohellenic px-4 leading-6'></p>
							</button>
							<button className={`z-50 w-full h-full rounded-2xl grid grid-rows-card-grid gap-5 border-solid border-2 border-[#A4F4F0] bg-gradient-card hover:shadow-around hover:shadow-cyan-200`}>
								<h1 className='text-[24px] text-left font-neohellenic font-bold p-2 px-4'></h1>
								<p className='text-[20px] text-left font-neohellenic px-4 leading-6'></p>
							</button>
							<button className={`z-50 w-full h-full rounded-2xl grid grid-rows-card-grid gap-5 border-solid border-2 border-[#A4F4F0] bg-gradient-card hover:shadow-around hover:shadow-cyan-200`}>
								<h1 className='text-[24px] text-left font-neohellenic font-bold p-2 px-4'></h1>
								<p className='text-[20px] text-left font-neohellenic px-4 leading-6'></p>
							</button>
							<button className={`z-50 w-full h-full rounded-2xl grid grid-rows-card-grid gap-5 border-solid border-2 border-[#A4F4F0] bg-gradient-card hover:shadow-around hover:shadow-cyan-200`}>
								<h1 className='text-[24px] text-left font-neohellenic font-bold p-2 px-4'></h1>
								<p className='text-[20px] text-left font-neohellenic px-4 leading-6'></p>
							</button>
						</div>
					</div>
					<div ref={slide2} className='slide w-full min-w-full opacity-0'>
						<div className='xl:w-[40%] w-full h-full mb-36 flex flex-col lg:justify-center lg:gap-[10%] justify-around items-center'>
							<h1 className='xl:w-[36rem] w-[24rem] p-3 pr-10 relative xl:-left-14 font-roboto xl:text-[36px] text-[24px] text-right text-shadow-drop font-bold bg-[#3E9994]'>DICE POOLS</h1>
							<div className='font-roboto text-lg w-[70%] flex flex-col items-center justify-around gap-3'>
								<p>Shapers' core dice system is a d10 dice pool system. When a character wants to accomplish a task, they roll a number of d10s determined by the relevant attribute and skill for the task.</p>
								<p>Any dice showing a 7 or higher each count as a success, and if the total number of successes on a roll exceeds the difficulty Threshold for the test, the character completes the task successfully.</p>
								<p>Click <a>Here</a> to learn more about the core mechanics of Shapers.</p>
							</div>
						</div>
					</div>
					<div ref={slide3} className='slide w-full min-w-full opacity-0'>
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
			<button onClick={nextSlide} className='h-[80px] w-[80px] bg-arrow-icon bg-cover bg-primary mx-10 rotate-180 z-10 rounded-full boder-solid border-[#fff5d1] border-[1px] transition ease-in-out duration-300 hover:bg-[#353535] hover:scale-110 shadow hover:shadow-around-lg hover:shadow-red-200'></button>

		</div>
		<div className='sm:hidden flex flex-col w-full py-3 justify-between items-center text-white fade-in bg-gray-600/50 rounded-xl'>
			<div className='h-screen flex flex-col items-center justify-start gap-[10%]'>
				<div className='w-full mt-16 flex flex-col justify-around items-center'>
					<h1 className='w-[80%] p-3 mb-10 relative font-roboto text-[28px] text-shadow-drop font-bold bg-[#3E9994]'>WELCOME TO NOXSTELLUS</h1>
					<p className='font-roboto text-lg w-[70%]'>Noxstellus is a continent filled with magical wonders, fantastical creatures, and powerful mages. Though the lands are rife with danger, those willing to face those dangers will find themselves handsomely rewarded. </p>
				</div>
				<div className='px-6 w-[80%]'>
					<img src={tempmap} className='border-solid border-2 border-[#E8D698] self-center h-auto max-h-full transition-opacity duration-500 ease-in-out'></img>
				</div>
			</div>
			<div className='h-[900px] flex flex-col items-center justify-between'>
				<div className='w-full flex flex-col justify-around items-center'>
					<h1 className='w-[80%] p-3 relative font-roboto ] text-[28px] text-left text-shadow-drop font-bold bg-[#3E9994]'>MAGIC FLOWS FREE</h1>
					<div className='font-roboto text-lg w-[70%] flex flex-col items-center justify-around gap-3'>
						<p>In Shapers of Mana, every character uses some form of magic. Magic is categorized into three disciplines: Body, Soul, and World, each of which contains multiple magic trees to learn from.</p>
						<p>Magic is unrestricted, anyone can learn any type of magic. Specialize into a single tree or expand your options by learning from several.</p>
						<p>Click one of a card to learn more about the magic trees in that discipline.</p>
					</div>
				</div>
				<div className='w-[200px] self-center h-96 relative'>
					<div className='absolute -left-[50px] z-30 hover:z-50 w-[200px] h-[300px] rounded-2xl grid grid-rows-card-grid gap-5 border-solid border-2 border-[#A4F4F0] bg-gradient-card from-[#539396]/90 to-[#555C5C]/90 -rotate-12 hover:-translate-y-6 hover:from-[#539396] hover:to-[#555C5C] transition ease-in-out duration-300 shadow hover:shadow-around hover:shadow-cyan-200'>
						<h1 className='text-[24px] text-right font-neohellenic font-bold p-2 px-4'>World</h1>
						<p className='text-[20px] text-left font-neohellenic px-4 leading-6'>Use your mana to manipulate the world around you, creating spectacular displays of force.</p>
					</div>
					<div className='absolute z-20 hover:z-50 w-[200px] h-[300px] rounded-2xl grid grid-rows-card-grid gap-5 border-solid border-2 border-[#A4F4F0] bg-gradient-card from-[#539396]/90 to-[#555C5C]/90 hover:-translate-y-6 hover:from-[#539396] hover:to-[#555C5C] transition ease-in-out duration-300 shadow hover:shadow-around hover:shadow-cyan-200'>
						<h1 className='text-[24px] text-right font-neohellenic font-bold p-2 px-4'>Body</h1>
						<p className='text-[20px] text-left font-neohellenic px-4 leading-6'>Augment or alter your own body, gaining capabilities far beyond your normal limits.</p>
					</div>
					<div className='absolute left-[50px] z-10 hover:z-50 w-[200px] h-[300px] rounded-2xl grid grid-rows-card-grid gap-5 border-solid border-2 border-[#A4F4F0] bg-gradient-card from-[#539396]/90 to-[#555C5C]/90 rotate-12 hover:-translate-y-6 hover:from-[#539396] hover:to-[#555C5C] transition ease-in-out duration-300 shadow hover:shadow-around hover:shadow-cyan-200'>
						<h1 className='text-[24px] text-right font-neohellenic font-bold p-2 px-4'>Soul</h1>
						<p className='text-[20px] text-left font-neohellenic px-4 leading-6'>Use your magic to influence the mana of those around you, aiding allies or debilitating foes.</p>
					</div>
				</div>
			</div>
			<div className='h-screen'></div>
		</div>
	</div>
  )
}

export default Slide
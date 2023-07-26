import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { initializeApp } from 'firebase/app';

const HoverableLink = (props) => {
	const title = props.name
  return (
	<Link className="text-blue-300" to={'/maneuvers/double strike'} onMouseOver={props.handleMouseOver} onMouseOut={props.handleMouseOut}>{title}</Link>
  )
}
  
const HoverText = (props) => {
	const [pageContent, setPageContent] = useState({})
	const [parArray, setParArray] = useState('')
	const [itemName, setItemName] = useState('')
	const firebaseConfig = {
		apiKey: "AIzaSyCyciG9gfO-TSOzPZsv4Bl98BhJTeE3IgM",
		authDomain: "ttrpg-site.firebaseapp.com",
		projectId: "ttrpg-site",
		storageBucket: "ttrpg-site.appspot.com",
		messagingSenderId: "666572433097",
		appId: "1:666572433097:web:b6008aefd4348ba9a08f18",
		measurementId: "G-G9Q4ZPD0ZR"
		};


  	const app = initializeApp(firebaseConfig);
  	const db = getFirestore(app);
	useEffect(() => {
		async function getPageData() {
			const q = doc(db, "ContentItems", props.name)
			const querySnapshot = await getDoc(q);
			const docData = querySnapshot.data();
			setPageContent(docData)
			const tparArray = docData.Content.map((data) => 
			{
				var strArr = data.split('<>')
				if (strArr.length > 1) {
					var el = []
					for (let i = 0; i < strArr.length; i++) {
						switch(strArr[i].slice(0, 2)) {
							case "/h":
								el.push(<p className= {`header-text bg-gradient-to-r ${colorData[props.mainColor]} to-transparent border-[#000000]/10 max-w-[400px] flex items-center h-[40px] dark:text-shadow-drop`} key={i}> {strArr[i].slice(2)}</p>)
								break;
							case "/d":
								el.push(<HoverDiv className={'par-text inline'} key={i} name={strArr[i].slice(2)}>{strArr[i].slice(2)}</HoverDiv>)
								break;
							case "/b":
								el.push(<p className= {`par-text inline font-bold`} key={i}> {strArr[i].slice(2)}</p>)
								break;
							case "/p":
								el.push(<p className= {`par-text inline`} key={i}> {strArr[i].slice(2)}</p>)
								break;
						}
						console.log()
					}
					
					var divWrap = <div key={docData.Content.indexOf(data)} className='inline'>{el}</div>
					return divWrap;
				}
				switch(data.slice(0, 2)) {
					case "/h":
						el = <p className= {`header-text bg-gradient-to-r ${colorData[props.mainColor]} to-transparent border-[#000000]/10 max-w-[400px] flex items-center h-[40px] dark:text-shadow-drop`} key= {docData.Content.indexOf(data)}> {data.slice(2)}</p>
						break;
					case "/d":
						el = <HoverDiv className={'par-text inline'} key= {docData.Content.indexOf(data)} name={data.slice(2)}>{data.slice(2)}</HoverDiv>
						break;
					case "/b":
						el = <p className= {`par-text inline font-bold`} key= {docData.Content.indexOf(data)}> {data.slice(2)}</p>
						break;
					case "/p":
						el = <p className= {`par-text inline`} key= {docData.Content.indexOf(data)}> {data.slice(2)}</p>
						break;
				}
				return (el)
			}
		  );
		  setParArray(tparArray)
	}
	getPageData();
	},[]);
	return (
	  <div className='absolute w-[500px] h-fit max-h-[350px] overflow-hidden bg-slate-700 border border-yellow-500 text-sm flex flex-col gap-2'>
		<h1 className='text-lg w-full p-2 bg-amber-800'>{props.name}</h1>
		<div className='flex flex-col p-2 gap-1'>
		{parArray}
		</div>
	  </div>
	);
  };
  
const HoverDiv = (props) => {
	const [isHovering, setIsHovering] = useState(false);
	const handleMouseOver = () => {
	  setIsHovering(true);
	};
  
	const handleMouseOut = () => {
	  setIsHovering(false);
	};
  
	return (
	  <div>
		{/* Hover over this div to hide/show <HoverText /> */}
		<HoverableLink
		  handleMouseOver={handleMouseOver}
		  handleMouseOut={handleMouseOut}
		  name={props.name}
		/>
		{isHovering && <HoverText name={props.name}/>}
	  </div>
	);
  };

  export default HoverDiv
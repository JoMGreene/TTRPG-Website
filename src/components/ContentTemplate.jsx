import React from 'react'
import { Link, useParams } from 'react-router-dom'
import SiteNav2 from '../components/SiteNav2'
import { doc, getDoc, getFirestore, collection, query, where } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { useState, useEffect } from 'react';
import colorData from '../assets/colorData';

const ContentTemplate = (props) => {

  const [pageContent, setPageContent] = useState({})
  const [parArray, setParArray] = useState('')
  const [liArray, setLiArray] = useState('')
  const [topLink, setTopLink] = useState('')
  console.log(props.link)
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
		const q = doc(db, "ContentPages", props.link)
  		const querySnapshot = await getDoc(q);
		console.log()
  		const docData = querySnapshot.data();
		setPageContent(docData)

		const tparArray = docData.Content.map(data => 
			((data.slice(0,2) == 'h1') ? React.createElement('p',{className: 'header-text bg-gradient-to-r ' + colorData[props.mainColor] + ' to-transparent border-[#000000]/10 max-w-[400px] flex items-center h-[40px] dark:text-shadow-drop', key: docData.Content.indexOf(data)}, data.slice(2, data.length)) : React.createElement('p',{className: 'par-text', key: docData.Content.indexOf(data)}, data))
		  );
		if (docData.sublinks) {
		const linkArray = docData.sublinks.map(data =>
			(React.createElement(Link, {to: docData.url + '/' + data, className: 'w-fit px-3 h-12 flex justify-center items-center text-2xl font-bold self-center hover:bg-slate-400 hover:dark:bg-slate-600 rounded-md', key: docData.sublinks.indexOf(data)}, docData.sublinksNames[docData.sublinks.indexOf(data)] )))
		setLiArray(linkArray)
		}
		const tLink = <Link to= {docData.mainlinkurl} className='text-[2.2rem] font-bold w-fit self-center px-6 flex justify-center items-center py-4 text-shadow-lightTitle dark:text-shadow-drop hover:bg-slate-400 hover:dark:bg-slate-600 rounded-lg'>{docData.mainlink}</Link>
		setParArray(tparArray)
	
		setTopLink(tLink)
		
	}

	getPageData();
	}, [props.link])

  


  return (
	<div className='w-full h-auto bg-gradient-to-b from-white to-slate-100 dark:from-primary dark:to-gray-800 flex flex-row font-roboto pb-10 text-primary dark:text-white'>
		<SiteNav2/>
		<div className='w-full h-auto flex flex-col justify-center pt-4 items-center'>
			<div className='w-full flex flex-col justify-center items-center mb-10'>
				<div className=' w-[90%] h-2 border-b-2 border-slate-400'></div>
				<div className='w-[89%] flex flex-col justify-center gap-2 gap-y-1 '>
					{topLink}
					<div className='w-full flex flex-row flex-wrap justify-center gap-2 gap-y-9 pb-6'>
						{liArray}
					</div>
        		</div>
        		<div className=' w-[90%] h-2 border-t-2 border-slate-400'></div>
      		</div>
			<div className='w-[95%] min-h-screen flex flex-col text-black dark:text-white items-center pb-10'>
				<div className='w-[95%] flex flex-col mb-10 items-start bg-transparent'>
					<h1 className={`w-fit h-fit py-4 md:text-[48px] text-[36px] flex text-left text-shadow-lightTitle dark:text-shadow-drop font-bold pl-5 pr-96 items-center rounded-[20px] bg-gradient-to-r to-transparent ${colorData[props.mainColor]}`}>{pageContent.title}</h1>
				</div>
				<div className='w-[90%] flex flex-col gap-5 text-xl text-left'>
					{parArray}
				</div>
			</div>
		</div>
	</div>	
  )
}

export default ContentTemplate;
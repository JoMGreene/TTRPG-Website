import React from 'react'
import { Link, useParams } from 'react-router-dom'
import SiteNav2 from '../components/SiteNav2'
import { doc, getDoc, getFirestore, collection, query, where } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { useState, useEffect } from 'react';
import colorData from '../assets/colorData';
import HoverDiv from './HoverDiv';
import Table from './Table';

const ContentTemplate = (props) => {

  const [pageContent, setPageContent] = useState({})
  const [parArray, setParArray] = useState('')
  const [liArray, setLiArray] = useState('')
  const [topLink, setTopLink] = useState('')
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
							case "/t":
								el.push(<Table key={i} tableData={docData[strArr[i].slice(2)]} headerColor={props.mainColor}></Table>)
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
					case "/t":
						el = <Table key={docData.Content.indexOf(data)} tableData={docData[data.slice(2)]} headerColor={props.mainColor}></Table>
						break;
				}
				return (el)
			}
		  );
		if (docData.sublinks) {
		const linkArray = docData.sublinks.map(data =>
			(React.createElement(Link, {to: docData.url + '/' + data, className: 'w-fit px-2 py-1 h-fit flex justify-center items-center text-xl font-bold self-center hover:bg-slate-400 hover:dark:bg-slate-600 rounded-md', key: docData.sublinks.indexOf(data)}, docData.sublinksNames[docData.sublinks.indexOf(data)] )))
		setLiArray(linkArray)
		}
		const tLink = <Link to= {docData.mainlinkurl} className='text-[1.8rem] font-bold w-fit self-center px-4 flex flex-wrap justify-center items-center py-3 text-shadow-lightTitle dark:text-shadow-drop hover:bg-slate-400 hover:dark:bg-slate-600 rounded-lg'>{docData.mainlink}</Link>
		setParArray(tparArray)
	
		setTopLink(tLink)
		
	}

	getPageData();
	}, [props.link])

  


  return (
	<div className='w-full h-auto bg-gradient-to-b from-white to-slate-100 dark:from-primary dark:to-gray-800 flex flex-row font-roboto pb-10 text-primary dark:text-white overflow-x-hidden'>
		<SiteNav2/>
		<div className='w-full h-auto flex flex-col justify-center pt-3 items-center'>
			<div className='w-full flex flex-col justify-center items-center mb-10'>
				<div className=' w-[90%] h-2 border-b-2 border-slate-400'></div>
				<div className='w-[89%] flex flex-col justify-center gap-2 gap-y-1 '>
					{topLink}
					<div className='w-full flex flex-row flex-wrap justify-center gap-4 gap-y-9 pb-4'>
						{liArray}
					</div>
        		</div>
        		<div className=' w-[90%] h-2 border-t-2 border-slate-400'></div>
      		</div>
			<div className='w-full sm:w-[95%] min-h-screen flex flex-col text-black dark:text-white items-center pb-10'>
				<div className='w-full sm:w-[95%] flex flex-col mb-10 items-start bg-transparent'>
					<h1 className={`w-fit h-fit py-3 text-[36px] flex text-left text-shadow-lightTitle dark:text-shadow-drop font-bold pl-5 pr-96 items-center rounded-[20px] bg-gradient-to-r to-transparent ${colorData[props.mainColor]}`}>{pageContent.title}</h1>
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
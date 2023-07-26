import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Table = (props) => {
	const [theTable, setTheTable] = useState([])


	const tableData = props.tableData
	useEffect(() => {
		var headers = tableData[0].split("|")
		let formatHeaders = headers.map((name) => (
		<td key={name}>
			{name}
		</td>
		))
		let headerContainer = <thead className={` bg-red-400 dark:bg-amber-800`}key={"tableHeaderKey"}><tr>{formatHeaders}</tr></thead>;
		let bodyContainer = [];
		let keycounter = 0;
		for (let i = 1; i < tableData.length; i++) {
			var tableRowData = tableData[i].split("|")
			var tableRow = tableRowData.map((name) => {
				let el = <td key={keycounter}>{name}</td>
				keycounter += 1
				return(el)
			})
			var fullRow = <tr key={"fullRow" + i}>{tableRow}</tr>
			bodyContainer.push(fullRow)

		}
		let finalBodyContainer = <tbody key={"tableBodyKey"}>{bodyContainer}</tbody>
		setTheTable([headerContainer, finalBodyContainer])


	}, []);
	

	

	
	
	


  return (
	<table className='standard-table'>{theTable}</table>
  )
}

export default Table
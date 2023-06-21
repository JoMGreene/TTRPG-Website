import React from 'react'
import ContentTemplate from '../components/ContentTemplate'
import { Routes, useParams, Route } from 'react-router-dom'
import MagicDisc from './MagicDisc'

const MagicTree = () =>{
	const { id } = useParams()
	console.log(id)
	return(
	<Routes>
		<Route path=":id" element={<ContentTemplate link={"Magic" + id} mainColor="teal"/>} />
	</Routes>

)}

export default MagicTree
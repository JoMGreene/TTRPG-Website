import React from 'react'
import ContentTemplate from '../components/ContentTemplate'
import { useParams } from 'react-router-dom'

const MagicDisc = () =>{
	const { id } = useParams()
	console.log(id)
	return(
	<ContentTemplate link={"Magic" + id} mainColor='teal'/>

)}

export default MagicDisc
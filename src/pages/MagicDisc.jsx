import React from 'react'
import ContentTemplate from '../components/ContentTemplate'
import { useParams } from 'react-router-dom'

const MagicDisc = (props) =>{
	const { id } = useParams()
	return(
	<ContentTemplate link={"Magic" + id} mainColor='teal' dataB={props.data}/>

)}

export default MagicDisc
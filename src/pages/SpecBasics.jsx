import React from 'react'
import ContentTemplate from '../components/ContentTemplate'
import { useParams } from 'react-router-dom'

const SpecBasics = () => {
	const { id } = useParams()
  	return (
		<ContentTemplate link={"Basics" + id} mainColor='gray'/>
  )
}

export default SpecBasics
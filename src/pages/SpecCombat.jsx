import React from 'react'
import ContentTemplate from '../components/ContentTemplate'
import { useParams } from 'react-router-dom'

const SpecCombat = () => {
	const { id } = useParams()
  	return (
		<ContentTemplate link={"Combat" + id} mainColor='red'/>
  )
}

export default SpecCombat
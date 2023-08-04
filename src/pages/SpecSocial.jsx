import React from 'react'
import ContentTemplate from '../components/ContentTemplate'
import { useParams } from 'react-router-dom'

const SpecSocial = () => {
	const { id } = useParams()
  	return (
		<ContentTemplate link={"Social" + id} mainColor='teal'/>
  )
}

export default SpecSocial
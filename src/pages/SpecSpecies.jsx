import React from 'react'
import { Link, useParams } from 'react-router-dom'
import  speciesData  from '../assets/speciesData'
import ContentTemplate from '../components/ContentTemplate'

const SpecSpecies = () => {

  const { id } = useParams()
  return (
	<ContentTemplate link={"Species" + id} mainColor='burgandy'/>
  )
}

export default SpecSpecies
import React from 'react'
import PixiTest from './PixiTest'
import { Stage } from '@pixi/react'

const PixiTestOut = () => {
  return (
	<Stage width={500} height={500} options={{ backgroundColor: 0xeef1f5 }}>
    	<PixiTest />
  	</Stage>
  )
}

export default PixiTestOut
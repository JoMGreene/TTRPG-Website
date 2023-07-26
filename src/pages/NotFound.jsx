import React from 'react'

const NotFound = () => {
  return (
	<div className='w-full h-full flex flex-col items-center text-black dark:text-white bg-white dark:bg-primary py-64'>
		<h1 className='self-center text-9xl'>
			404
		</h1>
		<p className='text-3xl'>Page Not Found</p>
	</div>	
  )
}

export default NotFound
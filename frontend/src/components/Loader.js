import React from 'react'
import loaderImg from '../loader.svg'
const Loader = () => {
  return (
    <div className='absolute w-screen h-screen flex justify-center items-center text-gray-600 dark:text-gray-400 dark:bg-gray-900'>
        <img src={loaderImg}/>
    </div>
  )
}

export default Loader
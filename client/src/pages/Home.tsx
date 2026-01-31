import React from 'react'
import TypingWindow from '../components/TypingWindow'

const Home = () => {
  return (
    <div className=' min-h-screen bg-neutral-900 '>
      <div className='text-white text-center p-8'>
        <h1 className="text-3xl font-bold">Test your typing skills</h1>
        <h2 className='text-2xl'>Get a quick typing speed check</h2>
      </div>
      <TypingWindow />
    </div>
  )
}

export default Home

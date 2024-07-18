import React from 'react'
import LeftSide from '../Components/Home/LeftSide'
import RightSide from '../Components/Home/RightSide'

function Home() {
  return (
    <div className='bg-primary text-text flex-col lg:overflow-y-hidden lg:flex-row flex lg:h-screen lg:max-h-screen w-full pt-16'>
      <LeftSide />
      <RightSide />
    </div>
  )
}

export default Home

import React, { useState } from 'react'
import LeftSide from '../Components/Home/LeftSide'
import RightSide from '../Components/Home/RightSide'
import { useCommentSection } from '../Store/store';

function Home() {

  return (
    <div className='bg-primary flex-col overflow-y-scroll lg:overflow-y-hidden lg:flex-row flex lg:h-full lg:w-full '>
      <LeftSide />
      <RightSide />
    </div>
  )
}

export default Home

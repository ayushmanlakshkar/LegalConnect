import React from 'react'
import LeftSide from '../Components/Qna/LeftSide'
import RightSide from '../Components/Qna/RightSide'

function Qna() {
  return (
    <div className='bg-primary text-text overflow-y-hidden flex-row flex h-full w-full'>
      <LeftSide/>
      <RightSide/>
    </div>
  )
}

export default Qna

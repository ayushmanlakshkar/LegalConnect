import React from 'react'
import Left from '../Components/Messages/Left'
import Right from '../Components/Messages/Right'

function Messages() {
  return (
    <div className='bg-primary text-text flex-row overflow-y-hidden flex h-full w-full'>
      <Left/>
      <Right/>
    </div>
  )
}

export default Messages

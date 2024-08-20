import React from 'react'
import LawyersList from '../Components/Messages/LawyersList'
import LawyerChat from '../Components/Messages/LawyerChat'

function Messages() {
  return (
    <div className='bg-primary text-text flex-row overflow-y-hidden flex h-full w-full'>
      <LawyersList/>
      <LawyerChat/>
    </div>
  )
}

export default Messages

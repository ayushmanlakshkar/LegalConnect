import React from 'react'
import QuestionsSection from '../Components/Qna/QuestionsSection'
import AskQuestion from '../Components/Qna/AskQuestion'

function Qna() {
  return (
    <div className='bg-primary text-text overflow-y-hidden flex-row flex h-full w-full'>
      <QuestionsSection/>
      <AskQuestion/>
    </div>
  )
}

export default Qna

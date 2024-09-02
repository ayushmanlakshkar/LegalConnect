import React, { useEffect } from 'react'
import QuestionsSection from '../Components/Qna/QuestionsSection'
import AskQuestion from '../Components/Qna/AskQuestion'
import QuestionModal from '../Components/Qna/QuestionModal';
import { useQuestionModal } from '../Store/store';

function Qna() {
  const { isQuestionModalOpen,setOpenQuestionModal } = useQuestionModal();
  useEffect(()=>{
    setOpenQuestionModal(false)
  },[])
  return (
    <div className='relative bg-primary text-text overflow-y-hidden flex-row flex h-full w-full'>
      <QuestionsSection/>
      <AskQuestion/>
      {isQuestionModalOpen && <QuestionModal />}

    </div>
  )
}

export default Qna

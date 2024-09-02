import React from 'react'
import { useQuestionModal } from '../../Store/store' 

function QuestionModal() {
    const {setOpenQuestionModal} = useQuestionModal()
    
  return (
    <div className='absolute top-0 left-0 w-full h-full bg-primary z-50'>
       <button onClick={()=>setOpenQuestionModal(false)}>hello</button>
    </div>
  )
}

export default QuestionModal

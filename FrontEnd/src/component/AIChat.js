import React, { useState } from 'react'
import send from './images/send.png';
import axios from 'axios'
export default function AIChat() {
  const [question,setQuestion]=useState('')
  const [content,setContent]=useState('')
    let myStyle={
        borderRadius:'10px',
        backgroundColor:'rgba(54,56,88,0.75)',
        marginTop:'10px'
      }
      let myStyle1={
        borderRadius:'10px',
        width:'470px',
        height:'100px'
      }
      let myStyle3={
        borderRadius:'40px',
        width:'380px',
        height:'40px',
        marginLeft:'5px'
      }
      let img={
        with:'40px',
        height:'35px',
        borderRadius:'5px',
        marginLeft:'10px',
        padding:'5px'
      }

      const generateContent = async() =>{
    setContent("Solution is shown here .....")
      }

  return (
    <div style={myStyle} className='container'> 
        <br/><p className='text-center text-light'>Chat with AI</p>
        <div style={myStyle1} className='container bg-light'> 
{content}
        </div><br/>
        <textarea style={{borderRadius:'20px',marginLeft:'10px'}} rows="2" cols="45" placeholder='     Write your promp here..........' value={question} onChange={(e)=>setQuestion(e.target.vale)}></textarea>
        <button onClick={()=>{generateContent()}}>Generate prompt</button>
    </div> 
  )
}

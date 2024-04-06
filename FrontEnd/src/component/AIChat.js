import React from 'react'
import send from './images/send.png';
export default function AIChat() {
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
  return (
    <div style={myStyle} className='container'> 
        <br/><p className='text-center text-light'>Chat with AI</p>
        <div style={myStyle1} className='container bg-light'> 

        </div><br/>
        <textarea style={{borderRadius:'20px',marginLeft:'10px'}} rows="1" cols="45" placeholder='     Write your promp here..........'></textarea>
        <img src={send} style={img} className='bg-light'/><br/><br/>
    </div> 
  )
}

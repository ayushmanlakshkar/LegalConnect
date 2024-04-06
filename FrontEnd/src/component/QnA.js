import React from 'react'
import Post from './Post';
import WriteQus from './WriteQus';
import AIChat from './AIChat';
import AskQus from './AskQus';
import Comment from './Comment';
export default function QnA() {
  let myStyle={
    marginTop:'60px',
    borderRadius:'10px',
    backgroundColor:'#FDFBEB',
    position:'relative'
  }
  return (
    <>
      <div class="container " >
        <div class="row">
        <div class="col-md-7" style={myStyle}>
                <WriteQus/>
            </div>
            <div class="col-md-5" style={myStyle}>
                <AIChat/>
                <AskQus/>
            </div>
            
        </div>
    </div>
     {/* <Comment/>  */}

    </>
  )
}

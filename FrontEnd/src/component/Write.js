import React from 'react'
export default function Write() {
    let myStyle={
        backgroundColor:'#D9D9D9',
        borderRadius:'10px',
        marginTop:'50px'
      }
      let myStyle2={
        borderRadius:'10px',
        backgroundColor:'#D9D9D9',
        marginTop:'10px'
      }
  return (
    <>
    <div style={myStyle} className='container'>
      <br/><textarea rows="2" cols="30" placeholder='Write a Post hare'></textarea><br/>
      Like,Share,Comment<br/><br/>
    </div>
    <div style={myStyle2} className='container'>
        <br/>Recommanded Laywers<br/><br/>
      <textarea rows="2" cols="40" placeholder='Write a Post hare'></textarea><br/>
      <textarea rows="2" cols="40" placeholder='Write a Post hare'></textarea><br/>
      <textarea rows="2" cols="40" placeholder='Write a Post hare'></textarea><br/>
    </div>
    </>
  )
}

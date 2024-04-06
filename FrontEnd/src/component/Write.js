import React from 'react'
import Lawyer from './Lawyer'
import tele from './images/tele.png';
import insta from './images/insta.png';
import pin from './images/pin.png';
export default function Write() {
  let myStyle={
    borderRadius:'10px',
    backgroundColor:'rgba(54,56,88,0.75)',
    marginTop:'10px'
  }
      let myStyle2={
        borderRadius:'15px',
        backgroundColor:'rgba(54,56,88,0.75)',
        marginTop:'10px',
       

      }
      let img={
        with:'40px',
        height:'35px',
        borderRadius:'5px',
        marginLeft:'10px',
        padding:'5px'
      }
  return (
    <>
    <div style={myStyle} className='container'>
      <br/><textarea style={{borderRadius:'20px'}} rows="1" cols="30" placeholder='     Write a Post..........'></textarea>
      <img src={tele} style={img} className='bg-light'/>
      <img src={insta} style={img} className='bg-light'/>
      <img src={pin} style={img} className='bg-light'/>
      <br/><br/>
    </div>
    <div style={myStyle2} className='container text-light'>
        <br/><p className='d-flex justify-content-center'><b>Recommanded Laywer</b></p>
          <Lawyer/>
          <Lawyer/>
        <br/><br/>
    </div>
    </>
  )
}

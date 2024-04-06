import React from 'react'
import pp from './images/pp.png';
import star from './images/star.png';
export default function Lawyer() {
    let myStyle3={
        borderRadius:'5px',
        backgroundColor:'#A9A9A9',
        padding:'10px',
        marginTop:'10px'
       
      }
  return (
    <div style={myStyle3} className='container text-light'>
    <div className='row'>
      <div className='col-md-8 text-light'>
        <img src={pp}  width="35" height="35"/><b> Lawyer1</b><img src={star}  width="15" height="15"/>(4.5)
      </div>
      <div className='col-md-4'>
        <button>View</button>
      </div>
    </div>
  </div>
  )
}

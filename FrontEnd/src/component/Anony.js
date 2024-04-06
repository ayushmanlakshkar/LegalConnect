import React from 'react'
import pp2 from './images/pp2.png';
import star from './images/star.png';
import Comment from './Comment';
export default function Anony() {
    let myStyle3={
        borderRadius:'5px',
        padding:'10px',
        marginTop:'10px',
      }
      let myStyle={
        borderRadius:'5px',
        padding:'10px',
        marginTop:'10px',
        backgroundColor:'#A9A9A9',
      }
      let img={
        with:'35px',
        height:'35px',
        borderRadius:'10px',
        padding:'5px',
        backgroundColor:'#A9A9A9',
      }

      function handleClick() {
        alert('Button clicked!');
      }
  return (
    <div style={myStyle3} className='container text-dark bg-light'>
        <img src={pp2} style={img} /><b> Anonymous</b>
        <div style={myStyle} className='container text-dark'>
            I’m facing a property dispute with my neighbor. What steps should I take to resolve this issue legally?
        </div><br/>
        <button onClick={handleClick}>Comment for answer</button>  <button>view Comment</button>       2comments
  </div>
  )
}

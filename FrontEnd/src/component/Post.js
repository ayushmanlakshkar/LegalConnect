import React from 'react'
import pp from './images/pp.png';
import share from './images/share.png';
import comment from './images/comment.png';
import star from './images/star.png';
import like from './images/like.png';
export default function Post() {
    
    let myStyle={
        backgroundColor:'rgba(54,56,88,0.75)',
        marginTop:'15px',
        borderRadius:'10px',
      }
      let myStyle2={
        borderRadius:'10px',
      }
      let img={
        with:'40px',
        height:'35px',
        borderRadius:'5px',
        margin:'10px',
        padding:'5px'
      }
  return (
    <div style={myStyle} className='container'>
     <br/><p className='text-light'><img src={pp}  width="50" height="50"/><b>  Lawyer1</b><img src={star}  width="15" height="15"/> (4.5)</p>
      <div style={myStyle2} className='container bg-light'> 
        <div className='row'>
          <div className='col-md-8'><br/>
          Here, Folks according to new fundamental right Article 415 under section 12, it illegal to download any movies which is not on telegram.<br></br>

          Here are some key features:<br/>
          <ul>
            <li>
            Only Netfxian channel subscription with fix rate of 69 rs only.
            </li>
            <li>
            No often channel should be allowed to post movies and is prohibited to do so.
            </li>
          </ul>
          </div>
          <div className='col-md-4'>

          </div>
        </div>
      </div>
      <img src={like} style={img} className='bg-light'/> <img src={share}  className='bg-light' style={img}/> <img src={comment}  className='bg-light' style={img}/>
    <br/></div>
  )
}

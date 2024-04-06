import React from 'react';
import pp2 from './images/pp2.png';
export default function Comment() {
    let mystyle = {
        height: '100vh',
        width: '100vw',
        backgroundColor: '',
        display: 'flex',
        paddingTop:'7%' ,
        justifyContent: 'center', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        zIndex: 999 ,
        backgroundColor:'rgba(54,56,88,0.75)',
    

    };

    let commentbox = {
        height: '80vh',
        border:'2px solid black',
        width: '50vw',
        borderRadius:'20px',
        padding:'10px',
    };

    let myStyle3={
      borderRadius:'5px',
      padding:'10px',
      marginTop:'10px',
      border:'1px solid black'
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
      backgroundColor:'#A9A9A9'
    }
    return (
      <div style={mystyle}>
          <div style={commentbox} className='container bg-light'>
              <h3 className='text-center text-dark'>Showing Comment</h3>
              <div style={myStyle3} className='container text-dark bg-light'>
                  <img src={pp2} style={img} /><b> Anonymous</b>
                  <div style={myStyle} className='container text-dark'>
                      I’m facing a property dispute with my neighbor. What steps should I take to resolve this issue legally?
                  </div><br/>
              </div>
            </div>
        </div>
    );
}

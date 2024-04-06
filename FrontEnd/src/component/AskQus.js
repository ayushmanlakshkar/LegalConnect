import React from 'react';

export default function AskQus() {
  let myStyle = {
    borderRadius: '10px',
    backgroundColor: 'rgba(54,56,88,0.75)',
    marginTop: '10px',
    height: '300px',
    position: 'relative',
    height: 'calc(100vh - 100px)'
  };

  return (
    <div style={myStyle} className='container' >
      <br />
      <p className='text-center text-light'>Recently asked QnA</p>
      
      <div className='text-dark bg-light' style={{ borderRadius: '5px' }}>
        Q) I’m facing a property dispute with my neighbor. What steps should I take to resolve this issue legally?
      </div>
      <br />
      <div className='text-dark bg-light' style={{ borderRadius: '5px' }}>
        Q) I’m facing a property dispute with my neighbor. What steps should I take to resolve this issue legally?
      </div>
      <br />
      <div className='text-dark bg-light' style={{ borderRadius: '5px' }}>
        Q) I’m facing a property dispute with my neighbor. What steps should I take to resolve this issue legally?
      </div>
      <br />
    </div>
  );
}

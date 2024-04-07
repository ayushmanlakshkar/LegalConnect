import React, { useState } from 'react'
import Lawyer from './Lawyer'
import tele from './images/tele.png';
import insta from './images/insta.png';
import pin from './images/pin.png';
import axios from 'axios'
import { useToast, useUser } from '../store';
import { BASE_URL_BACKEND } from '../service/Api';


export default function Write() {
  const [content, setContent] = useState()
  const{username}=useUser()
  const { setToast } = useToast()
  let myStyle = {
    borderRadius: '10px',
    backgroundColor: 'rgba(54,56,88,0.75)',
    marginTop: '10px'
  }
  let myStyle2 = {
    borderRadius: '15px',
    backgroundColor: 'rgba(54,56,88,0.75)',
    marginTop: '10px',


  }
  let img = {
    with: '40px',
    height: '35px',
    borderRadius: '5px',
    marginLeft: '10px',
    padding: '5px'
  }


  const postExperience = async () => {
    console.log("ekhbkf")
    await axios.post(`${BASE_URL_BACKEND}post/create`, { username: username, content: content, postType: 'experience' }).then((res) => {
      setToast({ message: "post created", type: true })
    }).catch((err) => {
      setToast({ message: err.response.data, type: false })
    })
  }

  return (
    <>
      <div style={myStyle} className='container'>
        <br /><textarea style={{ borderRadius: '20px' }} value={content} onChange={(e) => setContent(e.target.value)} rows="4" cols="30" placeholder='     Write a Post..........'></textarea>
        <button onClick={postExperience}>Post</button> 
          <br /><br />
      </div>
      <div style={myStyle2} className='container text-light'>
        <br /><p className='d-flex justify-content-center'><b>Recommanded Laywer</b></p>
        <Lawyer />
        <Lawyer />
        <br /><br />
      </div>
    </>
  )
}

import React, { useEffect, useState } from 'react'
import tele from './images/tele.png';
import insta from './images/insta.png';
import pin from './images/pin.png';
import Anony from './Anony';
import axios from 'axios'
import { usePosts, useUser } from '../store';
import pp2 from './images/pp2.png';
import { BASE_URL_BACKEND } from '../service/Api';
import { useToast } from '../store';
import Comment from './Comment';

export default function WriteQus() {
  const [content, setContent] = useState()
  const { posts, setPosts } = usePosts()
  const { setToast } = useToast()
  const { username, setUsername } = useUser()
  const [anony, setAnon] = useState(false)
const [open,setOpen] = useState(false)



  let myStylea = {
    borderRadius: '5px',
    padding: '10px',
    marginTop: '10px',
  }
  let myStyleb = {
    borderRadius: '5px',
    padding: '10px',
    marginTop: '10px',
    backgroundColor: '#A9A9A9',
  }
  let img2 = {
    with: '35px',
    height: '35px',
    borderRadius: '10px',
    padding: '5px',
    backgroundColor: '#A9A9A9',
  }
  let myStyle = {
    borderRadius: '10px',
    backgroundColor: 'rgba(54,56,88,0.75)',
    marginTop: '10px'
  }
  let myStyle2 = {
    borderRadius: '15px',
    backgroundColor: 'rgba(54,56,88,0.75)',
    marginTop: '10px',
    padding: '0px 30px',
    height: '31rem',
    overflow: 'scroll'

  }
  let img = {
    with: '40px',
    height: '35px',
    borderRadius: '5px',
    marginLeft: '10px',
    padding: '5px'
  }
console.log(anony)
  const loadQuestions = async () => {
    await axios.post(`${BASE_URL_BACKEND}post/posts`, { role: 'question' }).then((res) => {
      setPosts(res.data)
      console.log(res)
    }).catch((err) => {
      setToast({ message: err.response.data, type: false })
    })
  }
  const postQuestion = async () => {
    console.log(username)
    await axios.post(`${BASE_URL_BACKEND}post/create`, { username: username, content: content, postType: 'question', anonymous: anony }).then((res)=>{
      setToast({ message: "post created", type: true })
    }).catch((err) => {
      setToast({ message: err.response.data, type: false })
    })
  }


  useEffect(() => {
    loadQuestions()
  }, [])


  return (
    <>
      <div style={myStyle} className='container'>
        <br /><textarea style={{ borderRadius: '20px' }} rows="1" cols="50" placeholder='     Write a Question..........' value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        {/* <img src={tele} style={img} className='bg-light' onClick={postQuestion} /><br /> */}
        <button onClick={postQuestion}>Post</button>
        <input type="checkbox" id="anonymous" name="anonymous"  value={anony} onClick={()=>setAnon(!anony)} />
        <label for="vehicle1" style={{ color: 'white' }}> Anonymous</label><br></br>
        <br /><br />
      </div>
      <div style={myStyle2} className='container text-light'>
        <br />
        {
          posts.map((post) => {
            return <div style={myStylea} className='container text-dark bg-light'>
              <img src={pp2} style={img2} /><b> Anonymous</b>
              <div style={myStyleb} className='container text-dark'>
                {post.content}
              </div><br />
              <button onClick={()=>setOpen(!open)}>Comment for answer</button>  <button>view Comment</button>       2comments
            </div>
          })
        }

        <br />
        <br />
      </div>
{open?<Comment toggle={setOpen}/>:<></>}
      
    </>
  )
}

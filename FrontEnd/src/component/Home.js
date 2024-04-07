import React, { useEffect, useState } from 'react';
import Post from './Post';
import Write from './Write';
import { usePosts } from '../store';
import axios from 'axios';
import { useToast } from '../store';
import { BASE_URL_BACKEND } from '../service/Api';
import pp from './images/pp.png';
import share from './images/share.png';
import comment from './images/comment.png';
import star from './images/star.png';
import like from './images/like.png';
import Comment from './Comment';

export default function Home() {
  const { posts, setPosts } = usePosts();
  const { setToast } = useToast();
  const [open, setOpen] = useState(false);
  const [summarizedPosts, setSummarizedPosts] = useState({}); // State to store summarized content for each post
  const [loading,setLoading]=useState(false)

  let myStyle0 = {
    marginTop: '68px',
    paddingTop: '0px',
    borderRadius: '10px',
    backgroundColor: '#FDFBEB'
  }

  let myStyle = {
    backgroundColor: 'rgba(54,56,88,0.75)',
    marginTop: '15px',
    borderRadius: '10px',
    width: '65vw'
  }
  let myStyle2 = {
    borderRadius: '10px',
  }
  let img = {
    with: '40px',
    height: '35px',
    borderRadius: '5px',
    margin: '10px',
    padding: '5px'
  }

  const renderPosts = async () => {
    await axios.post(`${BASE_URL_BACKEND}post/posts`, { role: 'experience' }).then((res) => {
      setPosts(res.data)
      console.log(res)
    }).catch((err) => {
      setToast({ message: err.response.data, type: false })
    })
  }

  const summarize = async (post) => {
    console.log(post._id)
    let summarized_data
    let data = JSON.stringify({
      "contents": [
        {
          "parts": [
            {
              "text": post.content
            }
          ]
        }
      ]
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCs8brk8HJO3lXd1P6DWbLMLR-5ipcoeF0',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    setLoading(true);
    await axios.request(config)
    .then((response) => {
      summarized_data=response.data.candidates[0].content.parts[0].text
      setLoading(false);
      console.log(summarized_data);
    })
    .catch((error) => {
      console.log(error);
    });
    
    setSummarizedPosts(prevState => ({
      ...prevState,
      [post._id]: summarized_data // Assuming post.id is unique identifier for posts
    }));
  }
const unsummarize=async(post)=>{
  setSummarizedPosts(prevState => ({
    ...prevState,
    [post._id]: "" // Assuming post.id is unique identifier for posts
  }));
}
  useEffect(() => {
    renderPosts()
  }, [])

  useEffect(() => {console.log(loading)},[loading])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3" style={{ marginTop: 100 }}>
            <Write />
          </div>
          <div className="col-md-9 scrollable" style={myStyle0}>
            {posts.map((post) => {
              return (
                <div style={myStyle} className="container" key={post._id}>
                  <br />
                  <p className="text-light"><img src={pp} width="50" height="50" /><b>{post.anonymous_name ? "Anonymous" : post.ref_user}</b><img src={star} width="15" height="15" /> (4.5)</p>
                  <button onClick={() => summarize(post)}>Summarize</button>
                  <button onClick={()=>unsummarize(post)}>unsummarize</button>
                  <div style={myStyle2} className="container bg-light">
                    <div className="row">
                      <br />
                      <h4 className="col-md-8" style={{ fontWeight: 'bold' }}>{post.title}</h4>
                      <br />
                      <div style={{ fontSize: 22, fontWeight: 'light' }}>
                        {summarizedPosts[post._id] || post.content} {/* Display summarized content if available */}
                      </div>
                    </div>
                  </div>
                  <img src={like} style={img} className="bg-light" />
                  <img src={share} className="bg-light" style={img} />
                  <img src={comment} className="bg-light" style={img} onClick={() => { setOpen(!open) }} />
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {open ? <Comment toggle={setOpen} /> : <></>}
    </>
  )
}

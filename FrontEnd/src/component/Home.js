import React, { useEffect,useState } from 'react'
import Post from './Post';
import Write from './Write';
import { usePosts } from '../store';
import  axios  from 'axios';
import { useToast } from '../store';
import { BASE_URL_BACKEND } from '../service/Api';
import pp from './images/pp.png';
import share from './images/share.png';
import comment from './images/comment.png';
import star from './images/star.png';
import like from './images/like.png';
import Comment from './Comment';

export default function Home() {
  const {posts,setPosts}=usePosts();
const {setToast}=useToast();
const [open,setOpen]=useState(false)
  let myStyle0={
    marginTop:'68px',
    paddingTop: '0px',
    borderRadius:'10px',
    backgroundColor:'#FDFBEB'
  }

  let myStyle={
    backgroundColor:'rgba(54,56,88,0.75)',
    marginTop:'15px',
    borderRadius:'10px',
    width:'65vw'
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
  const renderPosts = async ()=>{
      await axios.post(`${BASE_URL_BACKEND}post/posts`,{role:'experience'}).then((res)=>{
        setPosts(res.data)
        console.log(res)
      }).catch((err)=>{
        setToast({ message: err.response.data, type: false })
      })
  }
  const summarize=()=>{

    
  }
  useEffect(()=>{
    renderPosts()
  },[])
  return (
    <>
      <div class="container" >
        <div class="row">
        <div class="col-md-3" style={{marginTop:100}}>
                <Write/>
            </div>

            <div class="col-md-9 scrollable" style={myStyle0}>
              
                 {
                  posts.map((post)=>{
                    return <div style={myStyle} className='container'>
                    <br/> <p className='text-light'><img src={pp}  width="50" height="50"/><b>{post.anonymous_name?"Anonymous":post.ref_user}</b><img src={star}  width="15" height="15"/> (4.5)</p>
                     <button onClick={summarize}>summarize</button>
                     <div style={myStyle2} className='container bg-light'> 
                       <div className='row'>
                        <br></br>
                         <h4 className='col-md-8' style={{fontWeight:'bold'}}>
                          {post.title}
                         </h4>
                         <br></br>
                         <div style={{fontSize:22, fontWeight:'light'}}>
                          {post.content}
                         </div>
                         
                       </div>
                     </div>
                     <img src={like} style={img} className='bg-light'/> 
                     <img src={share}  className='bg-light' style={img}/> 
                     <img src={comment}  className='bg-light' style={img} onClick={()=>{setOpen(!open)}}/>
                   <br/>
                   </div>
                  })
                 }
                
            </div>
            
        </div>
    </div>
    {
      open? <Comment toggle={setOpen}/>:<></>
    }
   
    </>
  )
}

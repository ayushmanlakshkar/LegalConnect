import React from 'react'
import Post from './Post';
import Write from './Write';
import Navbar from './Navbar';
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user,isAuthenticated,isLoading)
 console.log("hello")
  let myStyle={
    marginTop:'100px',
    borderRadius:'10px',
   
  }
  return (
    <>
  
    <Navbar/>

    <div class="container " >
        <div class="row">
        <div class="col-md-4" style={myStyle}>
                <Write/>
             
            </div>
            <div class="col-md-8" style={myStyle}>
                <Post/>
             
            </div>
            
        </div>
    </div>
    </>
  )
}

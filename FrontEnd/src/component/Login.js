
// Login.js

// import React,{useEffect} from 'react';
// import { useAuth0 } from '@auth0/auth0-react';

// function Login() {
//   const { loginWithRedirect } = useAuth0();

//   // Call the loginWithRedirect function when the component mounts
// useEffect(() => {
//     loginWithRedirect(); // Redirect to Auth0 login page
//   });

//   return (
//     <div>
//       {/* You can add loading indicator or any other content while redirecting */}
//       <p>Redirecting to login...</p>
//     </div>
//   );
// }

// export default Login;



import React,{useState} from 'react'
import { BASE_URL_BACKEND } from '../service/Api'
import { Navigate } from 'react-router-dom';
import axios from 'axios'
import { useToast, useUser } from '../store'
import { useLogin } from '../store';



export default function Login() {
  const { setToast } = useToast()
  const {status,toggleLogin} = useLogin()
  const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [redirect, setRedirect] = useState(false);
    const {username,setUsername}=useUser();


  const handleLogin =async ()=>{
    await axios.post(`${BASE_URL_BACKEND}auth/loginUser`, {username:name,password}).then((response) => {
      setToast({ message: response.data.message,type:true })
      toggleLogin()
      setUsername(username)
      setRedirect(true); // Set redirect to true after successful login

  }).catch(err => {
      setToast({ message: err.response.data, type: false })
  })
  }
  if (redirect) {
    return <Navigate to="/home" />;
  }
  return (
    <div className="center-center">
    <div className="form">
      <p className="form-title">Sign in to your account</p>
      <div className="input-container">
        <input placeholder="Enter Username" value={name} onChange={(e) => { setName(e.target.value) }} type="text"/>
      </div>
      <div className="input-container">
      <input placeholder="Enter password" value={password} onChange={(e) => { setPassword(e.target.value) }} type="password"/>
      </div>
      
      <button onClick={handleLogin} className="submit-signin">
        Sign in
      </button>
    </div>
  </div>
  )
}

import React,{useState} from 'react'
import axios from 'axios'
import { BASE_URL_BACKEND } from '../service/Api'
import { useToast } from '../store'

export default function Registration() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [confirmpassword, setConfirmPassword] = useState()
    const [email, setEmail] = useState()
    const { setToast } = useToast()


    const handleSignup = async () => {
        await axios.post(`${BASE_URL_BACKEND}auth/registerUser`, { username,email, password, confirmpassword }).then((response) => {
            setToast({ message: response.data.message, type: true })
        }).catch(err => {
            setToast({ message: err.response.data, type: false })
        })
    }

  return (
    <div className="center-center">
    
            {/* {!otp_status? */}
            <div className="form">
                <p className="form-title">Create an Account</p>
                <div className="input-container">
                    <input placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" />
                </div>
                <div className="input-container">
                    <input placeholder="Username" value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" />
                </div>
                <div className="input-container">
                    <input placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" />
                </div>
                <div className="input-container">
                    <input placeholder="Confirm password" value={confirmpassword} onChange={(e) => { setConfirmPassword(e.target.value) }} type="password" />
                </div>
                <button className="submit-signin"
                    // onClick={()=>toggleOTP()}
                    onClick={handleSignup}
                >
                    Sign up
                </button>
                
            </div>
            {/*  :<Otp/>}  */}
        </div>
        )}
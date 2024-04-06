import React from 'react'
import { Link } from "react-router-dom";
import logo from './images/logo.png';
import me from './images/me.png';
import { useLogin } from '../store';

const Navbar = () => {
  const { status, toggleLogin } = useLogin()

  let myStyle = {
    backgroundColor: 'rgba(54,56,88,0.75)'
  }
  return (
    <nav style={myStyle} className="navbar fixed-top navbar-expand-lg navbar-dark ">
      <div className="container"><img src={logo} width="50" height="50" />
        <Link className="navbar-brand" to="/"><b>Legal Connect</b></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {
              status ? <><li className="nav-item">
                <Link className="navbar-brand a" aria-current="page" to="/Home">Home</Link>
              </li>
                <li className="nav-item">
                  <Link className="navbar-brand a" aria-current="page" to="/QnA">QnA</Link>
                </li>
                <li className="nav-item">
                  <Link className="navbar-brand a" aria-current="page" to="/Messaging">Messaging</Link>
                </li>
                <li className="nav-item">
                  <Link className="navbar-brand a" aria-current="page" to="/Verify"><img src={me} width="50" height="50" /></Link>
                </li></> : <><li className="nav-item">
                  <Link className="navbar-brand a" aria-current="page" to="/Login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="navbar-brand a" aria-current="page" to="/registration">Registration</Link>
                </li></>
            }



          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

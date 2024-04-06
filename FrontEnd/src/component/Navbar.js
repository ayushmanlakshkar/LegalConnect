import React from 'react'
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar fixed-top bg-navbar navbar-expand-lg" >
      <div className="container">
        <Link className="navbar-brand" to="/"><b>Legal101</b></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="navbar-brand a" aria-current="page" to="/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand a" aria-current="page" to="/QnA">QnA</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand a" aria-current="page" to="/Messaging">Messaging</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand a" aria-current="page" to="/Me">Me</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="navbar-brand a" aria-current="page" to="/Login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand a" aria-current="page" to="/Ragistration">Ragistration</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

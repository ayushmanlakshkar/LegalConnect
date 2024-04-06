import './App.css';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Ragistration from './component/Ragistration';
import Home from './component/Home';
import React, {Component} from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route  exact path="/" element={ <Home/> }/>
            <Route  exact path="/login" element={<Login/>}/>
          </Routes>
      </Router>
      
    </>
  );
}

export default App;

import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Verify from './component/Verify'
import QnA from './component/QnA';
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
      <Navbar/>
        <Routes>
            <Route  exact path="/Home" element={ <Home/> }/>
            <Route   exact path="/QnA" element={ <QnA/> }/>
            <Route   exact path="/Verify" element={ <Verify/> }/>
          </Routes>
      </Router>
      
    </>
  );
}

export default App;

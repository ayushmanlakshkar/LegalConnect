import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Verify from './component/Verify'
import QnA from './component/QnA';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Hello from './component/Hello';
import Registration from './component/Registration';
import Login from './component/Login';


function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
            <Route  exact path="/Home" element={ <Home/> }/>
            <Route  exact path="/" element={<Hello/> }/>
            <Route  exact path="/registration" element={<Registration/> }/>
            <Route  exact path="/login" element={<Login/> }/>
            
            <Route   exact path="/QnA" element={ <QnA/> }/>
            <Route   exact path="/Verify" element={ <Verify/> }/>
          </Routes>
      </Router>
      
    </>
  );
}

export default App;

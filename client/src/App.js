import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Utils/Navbar';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path='/' Component={LandingPage}  />
      <Route path='/home' Component={Home} />
      <Route path='/qna' />
    </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Utils/Navbar';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import { useCommentSection } from './Store/store';
import CommentSection from './Components/Home/CommentSection';
import { useEffect } from 'react';
import Qna from './Pages/Qna';
import Messages from './Pages/Messages';

function App() {
  const { openCommentSection } = useCommentSection();

  useEffect(() => {
    // Toggle body overflow based on the comment section's open state
    document.body.style.overflow = openCommentSection ? 'hidden' : 'auto';

    // Cleanup function to reset overflow when the component unmounts or state changes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openCommentSection]);



  return (
    <div className='text-text flex flex-col h-screen w-screen relative'>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/qna' element={<Qna/>} />
        <Route path='/messages' element={<Messages/>} />
      </Routes>
      {openCommentSection && <CommentSection />}
    </div>
  );
}

export default App;

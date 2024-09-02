import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Utils/Navbar';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import { useCommentSection, useQuestionModal } from './Store/store';
import CommentSection from './Components/Home/CommentSection';

import Qna from './Pages/Qna';
import Messages from './Pages/Messages';

function App() {
  const { isCommentSectionOpen } = useCommentSection();



  return (
    <div className='text-text flex flex-col h-screen w-screen relative'>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/qna' element={<Qna />} />
        <Route path='/messages' element={<Messages />} />
      </Routes>
      {isCommentSectionOpen && <CommentSection />}
    </div>
  );
}

export default App;

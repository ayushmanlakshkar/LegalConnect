import React, { useState } from 'react'
import RecommendLawyers from '../Components/Home/RecommendLawyers'
import PostsSection from '../Components/Home/PostsSection'
import { useCommentSection } from '../Store/store';

function Home() {

  return (
    <div className='bg-primary flex-col overflow-y-scroll lg:overflow-y-hidden lg:flex-row flex lg:h-full lg:w-full '>
      <RecommendLawyers />
      <PostsSection />
    </div>
  )
}

export default Home

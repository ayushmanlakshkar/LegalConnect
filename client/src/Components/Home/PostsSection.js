import React, { useEffect, useState } from 'react'

import 'react-slideshow-image/dist/styles.css';
import CommentSection from './CommentSection';
import { useCommentSection } from '../../Store/store';
import Post from './PostSection/Post';



function PostsSection() {
  const [data, setData] = useState([])

  

  useEffect(() => {
    const dd = [
      {
        "id": 1,
        "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
        "username": "john_doe",
        "education": "University of Chicago Law School, Chicago, Illinois, USA",
        "ratings": 4.5,
        "description": "Drafting a comprehensive legal brief for an upcoming case. Precision and attention to detail are key in ensuring all arguments are solidly presented.",
        "images": [
          "https://picsum.photos/seed/1/600/400",
          "https://picsum.photos/seed/2/600/400"
        ]
      },  {
        "id": 2,
        "avatar": "https://randomuser.me/api/portraits/women/2.jpg",
        "username": "jane_doe",
        "education": "Harvard Law School, Cambridge, Massachusetts, USA",
        "ratings": 4.0,
        "description": "Researching case law to strengthen arguments in a complex legal dispute. The library is my second home as I dive deep into past precedents.",
        "images": [
          "https://picsum.photos/seed/3/600/400",
          "https://picsum.photos/seed/4/600/400"
        ]
      },
      {
        "id": 3,
        "avatar": "https://randomuser.me/api/portraits/men/3.jpg",
        "username": "alex_smith",
        "education": "Stanford Law School, Stanford, California, USA",
        "ratings": 4.8,
        "description": "Preparing for a trial with meticulous attention to detail. Every fact and piece of evidence is critical in building a compelling case.",
        "images": [
          "https://picsum.photos/seed/5/600/400",
          "https://picsum.photos/seed/6/600/400"
        ]
      },
      {
        "id": 4,
        "avatar": "https://randomuser.me/api/portraits/women/4.jpg",
        "username": "lisa_jones",
        "education": "University of Chicago Law School, Chicago, Illinois, USA",
        "ratings": 3.9,
        "description": "Navigating through corporate contracts to ensure all terms are favorable. The devil is in the details, and I leave no stone unturned.",
        "images": [
          "https://picsum.photos/seed/7/600/400",
          "https://picsum.photos/seed/8/600/400"
        ]
      },
      {
        "id": 5,
        "avatar": "https://randomuser.me/api/portraits/men/5.jpg",
        "username": "mike_brown",
        "education": "Corporate Counsel at Google, Mountain View, CA, USA",
        "ratings": 4.7,
        "description": "Advising on complex intellectual property issues to protect the company's innovative technologies. Legal expertise meets cutting-edge tech.",
        "images": [
          "https://picsum.photos/seed/9/600/400",
          "https://picsum.photos/seed/10/600/400"
        ]
      }
    ];
    
    setData([...dd])
  }, [])


  return (
    <div className='flex w-full lg:w-8/12 lg:h-full text-text z-20'>
      <div className='px-0 sm:px-6 w-full lg:min-h-full space-y-3 overflow-y-hidden lg:overflow-y-auto py-3'>
        {data.map((post) => {
          return (
            <Post post={post}/>
          )
        })}
      </div >
    </div >

  )
}

export default PostsSection

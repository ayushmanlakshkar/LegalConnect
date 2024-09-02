import React, { useEffect, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FaStar } from "react-icons/fa6";
import { Slide } from 'react-slideshow-image';
import { useCommentSection } from '../../../Store/store';

function Post({post}) {
    const [expanded, setExpanded] = useState(); 
  const [isLikedPost, setIsLikedPost] = useState(); 
  const { setOpenCommentSection, setIsCommentSectionOf } = useCommentSection();

 useEffect(()=>{
    setIsLikedPost(false);
    setExpanded(false);
 },[])

  const handleCopyLinkClick = (e, postID) => {
    const button = e.currentTarget;
    const tooltip = button.nextElementSibling; // Assume the tooltip is the next sibling
    navigator.clipboard.writeText(postID);
    if (tooltip) {
      tooltip.textContent = 'Link Copied!';

      setTimeout(() => {
        tooltip.textContent = 'Click to copy Link';
      }, 1000); // Adjust delay as needed
    }
  };

  const handleCommentButton = (postID) => {
    setOpenCommentSection(true);
    setIsCommentSectionOf(postID);
  }

const indicators = () => (<div className="indicator rounded-lg bg-gray-600 h-2 aspect-square mr-3 "></div>);

  return (
    <div className='md:rounded-lg border-[1px] border-text border-opacity-10  bg-secondary flex flex-col gap-5 pt-3 pb-2' >
              <div className='PostUserDetails px-4 md:px-6 flex justify-between items-center'>
                <div className='flex flex-row items-center gap-3 sm:gap-6'>
                  <div className='w-14 lg:w-16 aspect-square '>
                    <img src={post.avatar} alt='avatar' className='w-full aspect-square  rounded-full' />
                  </div>
                  <div className='flex flex-col'>
                    <div className='flex gap-2'>
                      <div className='PostUsername font-extrabold text-lg lg:text-xl'>
                        {post.username}
                      </div>
                      <div className='PostRatings text-gray-500 text-sm lg:text-base flex items-center'>
                        <div className='text-yellow-500'>
                          <FaStar />
                        </div>
                        ({post.ratings})
                      </div>
                    </div>
                    <div className='overflow-ellipsis w-56  sm:w-full text-sm  text-gray-500 whitespace-nowrap overflow-hidden truncate'>
                      {post.education}
                    </div>
                    <div>
                    </div>
                  </div>
                </div>
                <div className='flex'>
                  <div className='text-2xl'>
                    <MoreVertIcon color='inherit' fontSize='inherit' />
                  </div>
                </div>
              </div>

              <div className='PostDescription text-sm  sm:text-base px-4 md:px-6 text-justify'>
                {post.description.length > 300 ? (
                  <>
                    {expanded
                      ? post.description
                      : post.description.slice(0, 300)}
                    <span
                      className='text-blue-500 cursor-pointer max-w-full'
                      onClick={() => setExpanded(expanded ? null : post.id)}
                    >
                      {expanded ?' ...Less' : ' ...More'}
                    </span>
                  </>
                ) : (
                  post.description
                )}
              </div>
              <div className='PostImages w-full md:w-10/12 self-center'>
                <Slide canSwipe transitionDuration={500} indicators={indicators} autoplay={false}>
                  {post.images.map((image, index) => {
                    return (
                      <div key={index} className='flex justify-center bg-slate-700  bg-opacity-5 border-[1px] border-text border-opacity-10'>
                        <img src={image} alt='post' className='' />
                      </div>
                    )
                  })}
                </Slide>

              </div>
              <div className='UserInteractions  w-full'>
                <div className='flex px-5 gap-7 sm:gap-14  md:px-14'>
                  <div>
                    <button 
                    onClick={() => setIsLikedPost(!isLikedPost)} 
                    className='w-8 lg:w-11 aspect-square md:hover:scale-110 duration-200'>
                      {
                        isLikedPost?
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#3B82F6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.2694 16.265L20.9749 12.1852C21.1511 11.1662 20.3675 10.2342 19.3345 10.2342H14.1534C13.6399 10.2342 13.2489 9.77328 13.332 9.26598L13.9947 5.22142C14.1024 4.56435 14.0716 3.892 13.9044 3.24752C13.7659 2.71364 13.354 2.28495 12.8123 2.11093L12.6673 2.06435C12.3399 1.95918 11.9826 1.98365 11.6739 2.13239C11.3342 2.29611 11.0856 2.59473 10.9935 2.94989L10.5178 4.78374C10.3664 5.36723 10.146 5.93045 9.8617 6.46262C9.44634 7.24017 8.80416 7.86246 8.13663 8.43769L6.69789 9.67749C6.29223 10.0271 6.07919 10.5506 6.12535 11.0844L6.93752 20.4771C7.01201 21.3386 7.73231 22 8.59609 22H13.2447C16.726 22 19.697 19.5744 20.2694 16.265Z" fill="#3B82F6"></path> <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M2.96767 9.48508C3.36893 9.46777 3.71261 9.76963 3.74721 10.1698L4.71881 21.4063C4.78122 22.1281 4.21268 22.7502 3.48671 22.7502C2.80289 22.7502 2.25 22.1954 2.25 21.5129V10.2344C2.25 9.83275 2.5664 9.5024 2.96767 9.48508Z" fill="#3B82F6"></path> </g></svg>
                          :
                          <div class="group">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition-colors duration-300">
                              <path class="fill-current text-text group-hover:text-blue-500" fill-rule="evenodd" clip-rule="evenodd" d="M12.4382 2.77841C12.2931 2.73181 12.1345 2.74311 11.9998 2.80804C11.8523 2.87913 11.7548 3.0032 11.7197 3.13821L11.244 4.97206C11.0777 5.61339 10.8354 6.23198 10.5235 6.81599C10.0392 7.72267 9.30632 8.42 8.62647 9.00585L7.18773 10.2456C6.96475 10.4378 6.8474 10.7258 6.87282 11.0198L7.68498 20.4125C7.72601 20.887 8.12244 21.25 8.59635 21.25H13.245C16.3813 21.25 19.0238 19.0677 19.5306 16.1371L20.2361 12.0574C20.3332 11.4959 19.9014 10.9842 19.3348 10.9842H14.1537C13.1766 10.9842 12.4344 10.1076 12.5921 9.14471L13.2548 5.10015C13.3456 4.54613 13.3197 3.97923 13.1787 3.43584C13.1072 3.16009 12.8896 2.92342 12.5832 2.82498L12.4382 2.77841L12.6676 2.06435L12.4382 2.77841ZM11.3486 1.45674C11.8312 1.2242 12.3873 1.18654 12.897 1.35029L13.042 1.39686L12.8126 2.11092L13.042 1.39686C13.819 1.64648 14.4252 2.26719 14.6307 3.0592C14.8241 3.80477 14.8596 4.58256 14.7351 5.34268L14.0724 9.38724C14.0639 9.439 14.1038 9.4842 14.1537 9.4842H19.3348C20.8341 9.4842 21.9695 10.8365 21.7142 12.313L21.0087 16.3928C20.3708 20.081 17.0712 22.75 13.245 22.75H8.59635C7.3427 22.75 6.29852 21.7902 6.19056 20.5417L5.3784 11.149C5.31149 10.3753 5.62022 9.61631 6.20855 9.10933L7.64729 7.86954C8.3025 7.30492 8.85404 6.75767 9.20042 6.10924C9.45699 5.62892 9.65573 5.12107 9.79208 4.59542L10.2678 2.76157C10.417 2.18627 10.8166 1.71309 11.3486 1.45674ZM2.96767 9.4849C3.36893 9.46758 3.71261 9.76945 3.74721 10.1696L4.71881 21.4061C4.78122 22.1279 4.21268 22.75 3.48671 22.75C2.80289 22.75 2.25 22.1953 2.25 21.5127V10.2342C2.25 9.83256 2.5664 9.50221 2.96767 9.4849Z" fill="currentColor"></path>
                            </svg>
                          </div>

                      }
                    </button>
                  </div>
                  <div>
                    <button 
                    onClick={() => handleCommentButton(post.id)}
                    >
                      <svg
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke="currentColor"
                        stroke-width="2"
                        viewBox="0 0 24 24"


                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 lg:w-11 aspect-square md:hover:scale-110 duration-200 hover:stroke-blue-500"
                        fill="none"
                      >
                        <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
                        <path d="M8 9h8"></path>
                        <path d="M8 13h6"></path>
                        <path
                          d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="group ml-auto relative inline-block">
                    <button 
                    onClick={(e) => handleCopyLinkClick(e, post.id)}
                     className=" w-7 aspect-square focus:outline-none">
                      <svg className='w-full h-full' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <g> <path className="st0" d="M512,255.995L277.045,65.394v103.574c-17.255,0-36.408,0-57.542,0c-208.59,0-249.35,153.44-201.394,266.128 c9.586-103.098,142.053-100.701,237.358-100.701c7.247,0,14.446,0,21.578,0v112.211L512,255.995z"></path> </g> </g></svg>

                    </button>
                    <span
                      className="absolute w-36 text-xs lg:text-base  lg:w-44 flex justify-center border-[1px] border-primary -right-3/4 top-0 transform -translate-x-1/2 z-20 px-4 py-2 font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100"
                    >
                      Click to copy Link
                    </span>
                  </div>

                </div >
              </div >
    </div >
  )
}

export default Post

import React from 'react'
import { TextField } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FaStar } from "react-icons/fa6";
import SocialIcons from '../../Utils/SocialIcons';


function RecommendLawyers() {
    return (
        <div className='w-full min-h-40 sm:min-h-28 md:min-h-40 lg:w-4/12 lg:h-full flex flex-col p-5 py-8 gap-5 overflow-y-auto scrollbar-none'>
            <div className='w-full  flex flex-col lg:flex-col sm:flex-row'>
                <div className='flex w-full '>
                    <div className='mr-3 w-full my-auto'>
                        <TextField multiline placeholder='Write a Post...' size='small' maxRows={15} className='text-white bg-white rounded-md min-h-9 flex multi w-full  mr-3' InputProps={{
                            classes: {
                                notchedOutline: 'custom-outline',
                            },
                        }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        border: 'none', // Remove default border
                                    },
                                    '&:hover fieldset': {
                                        border: 'none', // Remove border on hover
                                    },
                                    '&.Mui-focused fieldset': {
                                        border: 'none', // Remove border on focus
                                    },
                                },
                            }} />
                    </div>
                    <div className='my-auto'>
                        <button className="sendbutton ml-auto">
                            <svg id='sendIcon'
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 495.003 495.003"
                                xmlSpace="preserve"
                                stroke="#0095F6"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    <g id="XMLID_51_">
                                        <path
                                            id="XMLID_53_"
                                            d="M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616 l-67.6-32.22V456.687z"
                                        />
                                        <path
                                            id="XMLID_52_"
                                            d="M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422 c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414 l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956 L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='flex flex-row my-3 mx-4 gap-4'>
                    <button className="linkButton ">
                        <svg id='linkIcon' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7281 3.88396C17.1624 2.44407 19.2604 2.41383 20.4219 3.57981C21.5856 4.74798 21.5542 6.85922 20.1189 8.30009L17.6951 10.7333C17.4028 11.0268 17.4037 11.5017 17.6971 11.794C17.9906 12.0863 18.4655 12.0854 18.7578 11.7919L21.1816 9.35869C23.0929 7.43998 23.3329 4.37665 21.4846 2.5212C19.6342 0.663551 16.5776 0.905664 14.6653 2.82536L9.81768 7.69182C7.90639 9.61053 7.66643 12.6739 9.5147 14.5293C9.80702 14.8228 10.2819 14.8237 10.5754 14.5314C10.8688 14.2391 10.8697 13.7642 10.5774 13.4707C9.41376 12.3026 9.4451 10.1913 10.8804 8.75042L15.7281 3.88396Z" ></path>
                            <path opacity="0.5" d="M14.4846 9.4707C14.1923 9.17724 13.7174 9.17632 13.4239 9.46864C13.1305 9.76097 13.1296 10.2358 13.4219 10.5293C14.5856 11.6975 14.5542 13.8087 13.1189 15.2496L8.27129 20.1161C6.83696 21.556 4.73889 21.5862 3.57742 20.4202C2.41376 19.2521 2.4451 17.1408 3.8804 15.6999L6.30424 13.2666C6.59657 12.9732 6.59565 12.4983 6.30219 12.206C6.00873 11.9137 5.53386 11.9146 5.24153 12.208L2.81769 14.6413C0.906387 16.56 0.666428 19.6234 2.5147 21.4788C4.36518 23.3365 7.42173 23.0944 9.334 21.1747L14.1816 16.3082C16.0929 14.3895 16.3329 11.3262 14.4846 9.4707Z" ></path>
                        </svg>
                    </button>
                    <button className='galleryButton '>
                        <svg id='galleryIcon'
                            xmlns="http://www.w3.org/2000/svg"
                            xmlSpace="preserve"

                            viewBox="0 0 512 512"
                        >
                            <path
                                d="M463.592 44.548H48.407c-22.097 0-40.011 17.913-40.011 40.011v342.883c0 22.097 17.913 40.011 40.011 40.011h415.185c22.097 0 40.011-17.913 40.011-40.011V84.558c.001-22.097-17.913-40.01-40.011-40.01z"
                                style={{
                                    fill: "#b4bbcc",
                                }}
                            />
                            <path
                                d="M465.963 234.027V107.646c0-14.06-11.398-25.458-25.458-25.458H71.494c-14.06 0-25.458 11.398-25.458 25.458v232.141l48.362 44.018 371.565-149.778z"
                                style={{
                                    fill: "#a6e7ff",
                                }}
                            />
                            <path
                                d="M46.029 161.99a52.85 52.85 0 0 1 32.824-11.362c23.464 0 43.359 15.23 50.373 36.338a56.98 56.98 0 0 1 28.904-7.835c29.269 0 53.392 21.963 56.83 50.303 24.927 2.678 44.496 23.256 45.583 48.626l-61.879 60.487-152.626 1.239-.009-177.796z"
                                style={{
                                    fill: "#fff",
                                }}
                            />
                            <path
                                d="M161.193 308.769s-66.479-25.056-115.157 31.018v64.567c0 14.06 11.398 25.458 25.458 25.458l101.224-76.577-11.525-44.466z"
                                style={{
                                    fill: "#6c994e",
                                }}
                            />
                            <path
                                d="M46.037 373.373c48.679-56.074 115.157-31.018 115.157-31.018l4.247 16.386 7.278-5.506-11.525-44.466s-66.479-25.056-115.157 31.018v33.586z"
                                style={{
                                    opacity: 0.1,
                                    enableBackground: "new",
                                }}
                            />
                            <path
                                d="M71.494 429.812c33.779-89.67 139.695-195.445 227.837-135.727l-29.294 94.185-74.548 41.542H71.494z"
                                style={{
                                    fill: "#7eb35b",
                                }}
                            />
                            <path
                                d="m296.303 303.822 3.028-9.736c-88.143-59.718-194.058 46.057-227.837 135.727h32.167c37.082-74.969 117.995-150.706 192.642-125.991z"
                                style={{
                                    opacity: 0.1,
                                    enableBackground: "new",
                                }}
                            />
                            <path
                                d="M465.963 404.354V234.027c-169.54-16.857-270.475 195.785-270.475 195.785h245.017c14.06 0 25.458-11.398 25.458-25.458z"
                                style={{
                                    fill: "#a5eb78",
                                }}
                            />
                            <path
                                d="M465.963 255.501v-21.475c-169.54-16.857-270.475 195.785-270.475 195.785h34.482c29.72-51.114 112.988-172.171 235.993-174.31z"
                                style={{
                                    opacity: 0.1,
                                    enableBackground: "new",
                                }}
                            />
                            <circle
                                cx={340.635}
                                cy={176.648}
                                r={35.936}
                                style={{
                                    fill: "#ffe97a",
                                }}
                            />
                            <path
                                d="M315.904 187.844c0-19.845 16.087-35.932 35.932-35.932 7.055 0 13.63 2.042 19.182 5.555-6.368-10.063-17.588-16.75-30.377-16.75-19.845 0-35.932 16.087-35.932 35.932 0 12.789 6.687 24.009 16.75 30.377a35.748 35.748 0 0 1-5.555-19.182z"
                                style={{
                                    opacity: 0.1,
                                    enableBackground: "new",
                                }}
                            />
                            <path d="M48.407 475.849H345.09c4.638 0 8.396-3.759 8.396-8.396s-3.758-8.396-8.396-8.396H48.407c-17.432 0-31.614-14.182-31.614-31.615V84.558c0-17.433 14.182-31.615 31.614-31.615h56.611c4.638 0 8.396-3.759 8.396-8.396s-3.758-8.396-8.396-8.396H48.407C21.715 36.151 0 57.867 0 84.558v342.883c0 26.692 21.715 48.408 48.407 48.408zM136.026 52.944h327.568c17.432 0 31.614 14.182 31.614 31.615v342.883c0 17.433-14.182 31.615-31.614 31.615h-84.919c-4.638 0-8.396 3.759-8.396 8.396s3.758 8.396 8.396 8.396h84.919c26.691 0 48.407-21.715 48.407-48.408V84.558c0-26.691-21.715-48.408-48.407-48.408H136.026c-4.638 0-8.396 3.759-8.396 8.396s3.757 8.398 8.396 8.398z" />
                            <path d="M474.36 404.354V107.646c0-18.668-15.186-33.854-33.853-33.854H71.494c-18.668 0-33.854 15.186-33.854 33.854v54.07c-.003.113-.001.225 0 .338v242.3c0 18.629 15.124 33.788 33.738 33.852.038 0 .077.006.116.006l.029-.002h123.925l.036.002.027-.002h244.996c18.665-.002 33.853-15.188 33.853-33.856zM54.433 107.646c0-9.407 7.654-17.061 17.061-17.061h369.011c9.407 0 17.06 7.654 17.06 17.061v117.35c-15.437-.819-30.873.12-46.017 2.858-16.708 3.022-33.44 8.272-49.733 15.604-14.707 6.617-29.385 15.082-43.627 25.158-6.557 4.638-13.093 9.676-19.561 15.062-9.688-5.821-19.853-9.989-30.359-12.504-3.764-24.083-22.254-43.79-46.051-49.046-6.573-29.706-33.082-51.391-64.09-51.391a65.67 65.67 0 0 0-24.627 4.796 61.379 61.379 0 0 0-54.648-33.299c-8.55 0-16.797 1.718-24.42 5.028v-39.615h.001zm0 58.634c7.25-4.757 15.615-7.254 24.42-7.254a44.618 44.618 0 0 1 42.405 30.59 8.39 8.39 0 0 0 5.011 5.21 8.404 8.404 0 0 0 7.203-.613 48.806 48.806 0 0 1 24.657-6.684c24.677 0 45.526 18.451 48.494 42.918a8.396 8.396 0 0 0 7.439 7.337c17.43 1.873 31.739 14.426 36.464 30.746-13.721-.844-27.871.978-42.19 5.526-16.911 5.371-33.281 14.218-48.647 25.42-6.81-1.968-20.807-5.183-38.094-4.616-18.445.606-43.672 5.774-67.161 25.052V166.28h-.001zm11.694 254.258c-6.784-2.257-11.694-8.653-11.694-16.184v-61.325c18.11-19.773 40.655-30.34 67.087-31.365 8.115-.316 15.441.357 21.383 1.3-33.983 29.925-61.541 70.478-76.776 107.574zm167.587-54.463a8.399 8.399 0 0 0-11.535 2.82c-3.482 5.736-7.27 11.558-10.933 17.188-7.342 11.285-14.898 22.911-21.052 35.334H83.971c29.733-68.724 86.451-117.7 129.446-131.356 25.683-8.157 49.799-6.355 71.844 5.335a374.538 374.538 0 0 0-4.814 4.518c-10.743 10.274-21.354 21.656-31.538 33.832a475.655 475.655 0 0 0-3.456 4.18 8.397 8.397 0 0 0 1.19 11.814c3.482 2.845 8.905 2.372 11.815-1.19a436.243 436.243 0 0 1 3.331-4.029c9.787-11.701 19.969-22.625 30.264-32.469 11.674-11.164 23.73-21.164 35.833-29.726 13.364-9.453 27.097-17.377 40.82-23.553 15.048-6.771 30.469-11.614 45.832-14.392 14.154-2.56 28.595-3.411 43.027-2.575v162.55c0 9.407-7.653 17.061-17.06 17.061h-231.33c4.955-8.942 10.609-17.663 16.148-26.175 3.732-5.738 7.593-11.671 11.212-17.63a8.401 8.401 0 0 0-2.821-11.537z" />
                            <path d="M340.64 220.977c24.442 0 44.328-19.886 44.328-44.328s-19.886-44.328-44.328-44.328c-24.442 0-44.328 19.886-44.328 44.328s19.886 44.328 44.328 44.328zm0-71.863c15.184 0 27.536 12.352 27.536 27.536 0 15.183-12.352 27.536-27.536 27.536-15.184 0-27.536-12.353-27.536-27.536.002-15.185 12.353-27.536 27.536-27.536z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='hidden  lg:flex rounded-xl bg-secondary flex-col items-center px-5 py-3  border-[1px] border-text border-opacity-10'>
                <div className='font-extrabold text-xl my-4'>
                    Recommended Lawyers
                </div>
                <div className='w-full flex flex-col text-lg gap-3'>

                    {/* <div className='flex items-center flex-wrap justify-between w-full '>
                        <div className='flex gap-2 items-center'>
                            <div className='text-6xl'>

                                <AccountCircleIcon fontSize='inherit' />
                            </div>
                            <div className='lawyerName'>
                                Lawyer 1
                            </div>
                            <div className='ratings flex items-center'>
                                <FaStar className='text-yellow-500' />
                                (3.5)
                            </div>
                        </div>
                        <div className='flex flex-1  justify-center'>
                            <button className="Viewbtn rounded-full text-base">View</button>
                        </div>

                    </div>
                    <div className='flex items-center flex-wrap justify-between w-full '>
                        <div className='flex gap-2 items-center'>
                            <div className='text-6xl'>

                                <AccountCircleIcon fontSize='inherit' />
                            </div>
                            <div className='lawyerName'>
                                Lawyer 1
                            </div>
                            <div className='ratings flex items-center'>
                                <FaStar className='text-yellow-500' />
                                (3.5)
                            </div>
                        </div>
                        <div className='flex flex-1  justify-center'>
                            <button className="Connectbtn rounded-full text-base">Connect</button>
                        </div>

                    </div> */}
                    <div className='flex items-center flex-wrap justify-between w-full '>
                        <div className='flex gap-2 items-center'>
                            <div className='text-6xl'>

                                <AccountCircleIcon fontSize='inherit' />
                            </div>
                            <div className='lawyerName'>
                                Lawyer 1
                            </div>
                            <div className='ratings flex items-center'>
                                <FaStar className='text-yellow-500' />
                                (3.5)
                            </div>
                        </div>
                        <div className='flex flex-1  justify-center'>
                            <button className="Connectbtn rounded-full text-base">Connect</button>
                        </div>

                    </div>
                    <div className='flex items-center flex-wrap justify-between w-full '>
                        <div className='flex gap-2 items-center'>
                            <div className='text-6xl'>
                                <AccountCircleIcon fontSize='inherit' />
                            </div>
                            <div className='lawyerName'>
                                Lawyer 1
                            </div>
                            <div className='ratings flex items-center'>
                                <FaStar className='text-yellow-500' />
                                (3.5)
                            </div>
                        </div>
                        <div className='flex flex-1  justify-center'>
                            <button className="Viewbtn rounded-full text-base">View</button>
                        </div>

                    </div>
                    <div className='flex items-center flex-wrap justify-between w-full '>
                        <div className='flex gap-2 items-center'>
                            <div className='text-6xl'>

                                <AccountCircleIcon fontSize='inherit' />
                            </div>
                            <div className='lawyerName'>
                                Lawyer 1
                            </div>
                            <div className='ratings flex items-center'>
                                <FaStar className='text-yellow-500' />
                                (3.5)
                            </div>
                        </div>
                        <div className='flex flex-1  justify-center'>
                            <button className="Viewbtn rounded-full text-base">View</button>
                        </div>

                    </div>
                    <div className='flex items-center flex-wrap justify-between w-full '>
                        <div className='flex gap-2 items-center'>
                            <div className='text-6xl'>

                                <AccountCircleIcon fontSize='inherit' />
                            </div>
                            <div className='lawyerName'>
                                Lawyer 1
                            </div>
                            <div className='ratings flex items-center'>
                                <FaStar className='text-yellow-500' />
                                (3.5)
                            </div>
                        </div>
                        <div className='flex flex-1  justify-center'>
                            <button className="Viewbtn rounded-full text-base">View</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className='md:flex  -my-3 hidden'>
                <SocialIcons top  />
            </div>
        </div>
    )
}

export default RecommendLawyers

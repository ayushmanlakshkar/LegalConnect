import { Avatar, TextField } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { formatDateTime } from '../../../Services/formatDateTime'
import { useQuestionModal } from '../../../Store/store';

function Question({question,color}) {
    const {setOpenQuestionModal}=useQuestionModal();

    return (
        <div className='flex flex-col gap-1 pt-7 mb-7'>
            <div className='Details flex justify-between '>
                <div className='flex items-center gap-3'>
                    <div className='w-11  aspect-square'>
                        <Avatar sx={{ width: '100%', height: '100%', bgcolor: color }}>A</Avatar>
                    </div>
                    <div className='UserName text-lg'>
                        Anonymous
                    </div>
                    <div className='bg-gray-500 h-1 aspect-square rounded-full'>
                    </div>
                    <div className='text-sm text-gray-500'>
                        {formatDateTime(question.timePosted)}
                    </div>

                </div>
                <div className='text-2xl'>
                    <MoreVertIcon fontSize='inherit' />
                </div>

            </div>
            <div className='Question pl-10 hover:cursor-pointer hover:underline hover:text-blue-500' onClick={()=>setOpenQuestionModal(true)}>
                {question.question}
            </div>
            <div className='Interactions flex items-center justify-between'>
                <div className='flex gap-3 pl-10 py-3'>
                    <div className='w-9 h-9 hover:cursor-pointer'>
                        <svg version="1.1" id="_x32_" viewBox="0 0 512 512" className='fill-white hover:fill-blue-500'>
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <style type="text/css"></style>
                                <g>
                                    <path class="st0" d="M184.025,259.35h26.422c6.953,0,12.609,5.652,12.609,12.605v75.034c0,8.708,7.082,15.792,15.788,15.792h34.314 c8.706,0,15.786-7.084,15.786-15.792v-75.034c0-6.952,5.658-12.605,12.611-12.605h26.422c4.412,0,7.584-1.494,8.93-4.208 c1.347-2.71,0.619-6.141-2.046-9.658l-69.012-90.966c-2.591-3.412-6.089-5.295-9.85-5.295c-3.76,0-7.258,1.883-9.849,5.295 l-69.012,90.966c-2.667,3.517-3.393,6.949-2.046,9.658C176.439,257.856,179.613,259.35,184.025,259.35z"></path>
                                    <path class="st0" d="M256,0C114.842,0,0.002,114.84,0.002,256S114.842,512,256,512c141.158,0,255.998-114.84,255.998-256 S397.158,0,256,0z M256,66.785c104.334,0,189.216,84.879,189.216,189.215S360.334,445.215,256,445.215S66.783,360.336,66.783,256 S151.667,66.785,256,66.785z"></path>
                                </g>
                            </g>
                        </svg>

                    </div>
                    <div className='rotate-180 w-9 h-9 hover:cursor-pointer'>
                        <svg version="1.1" id="_x32_" viewBox="0 0 512 512" className='fill-white hover:fill-blue-500'>
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <style type="text/css"></style>
                                <g>
                                    <path class="st0" d="M184.025,259.35h26.422c6.953,0,12.609,5.652,12.609,12.605v75.034c0,8.708,7.082,15.792,15.788,15.792h34.314 c8.706,0,15.786-7.084,15.786-15.792v-75.034c0-6.952,5.658-12.605,12.611-12.605h26.422c4.412,0,7.584-1.494,8.93-4.208 c1.347-2.71,0.619-6.141-2.046-9.658l-69.012-90.966c-2.591-3.412-6.089-5.295-9.85-5.295c-3.76,0-7.258,1.883-9.849,5.295 l-69.012,90.966c-2.667,3.517-3.393,6.949-2.046,9.658C176.439,257.856,179.613,259.35,184.025,259.35z"></path>
                                    <path class="st0" d="M256,0C114.842,0,0.002,114.84,0.002,256S114.842,512,256,512c141.158,0,255.998-114.84,255.998-256 S397.158,0,256,0z M256,66.785c104.334,0,189.216,84.879,189.216,189.215S360.334,445.215,256,445.215S66.783,360.336,66.783,256 S151.667,66.785,256,66.785z"></path>
                                </g>
                            </g>
                        </svg>

                    </div>
                </div>
                <div className='text-gray-500 font-thin text-xs mx-4'>
                    200 upvotes
                    <br />
                    300 downvotes
                </div>
            </div>
        </div>
    )
}

export default Question

import React from 'react'
import { TextField } from '@mui/material'
import ChatBotBg from '../../assets/images/ChatBotBg.png'


function ChatBot() {
    return (
        <div id='ChatBot' className='flex flex-col w-full h-full text-text bg-secondary border-[1px] border-text border-opacity-10 px-4 py-4 gap-3 rounded-lg'>
            <div className='flex justify-center text-lg font-bold'>
                Chat with AI
            </div>
            <div className='relative flex-1 flex rounded-lg'>
                <div className='absolute inset-0 bg-primary/50 border-[1px] border-text border-opacity-10 rounded-lg' />
                <div
                    className='flex-1 rounded-lg bg-no-repeat  bg-center focus:outline-dotted'
                    style={{
                        backgroundImage: `url(${ChatBotBg})`,
                    }}
                >
                    
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <input
                    placeholder='Write your prompt here..........'
                    className='focus:outline-none  rounded-md border-[1px] border-text border-opacity-10 focus:border-opacity-10 min-h-9 flex multi w-full text-text bg-transparent px-2'
                />
                <button className=' py-1 px-3 bg-blue-500 hover:bg-green-600 flex rounded-lg'>Send</button>
            </div>
        </div>
    )
}

export default ChatBot

import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import { formatMessageTime } from '../../Services/formatDateTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import bg from '../../assets/chatroombg.jpg';
function Right() {
  const contact = {
    id: '1',
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    username: 'John Doe',
  }
  const messages = [
    {
      id: 1,
      username: "John Doe",
      timeDelivered: new Date("2024-08-20T14:00:00Z"),
      status: "delivered",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      message: "Hey, how's it going?"
    },
    {
      id: 2,
      username: "JaneSmith",
      timeDelivered: new Date("2024-08-20T14:05:00Z"),
      status: "seen",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      message: "All good here! What about you?"
    },
    // {
    //   id: 3,
    //   username: "MarkLee",
    //   timeDelivered: new Date("2024-08-20T14:10:00Z"),
    //   status: "delivered",
    //   avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    //   message: "Don't forget about the meeting tomorrow."
    // },
    // {
    //   id: 4,
    //   username: "EmilyJones",
    //   timeDelivered: new Date("2024-08-20T14:15:00Z"),
    //   status: "seen",
    //   avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    //   message: "I'll be there on time!"
    // },
    // {
    //   id: 5,
    //   username: "MichaelBrown",
    //   timeDelivered: new Date("2024-08-20T14:20:00Z"),
    //   status: "delivered",
    //   avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    //   message: "Can someone send me the report?"
    // }
  ];

  return (
    <div className='flex flex-1 flex-col'>
      <div className='h-20 w-full flex items-center px-7 border-b-[1px] border-text border-opacity-10'>
        <div className='flex text-2xl items-center gap-4'>
          <div className='w-14 h-14'>
            <img src={contact.avatar} alt='avatar' className='w-full h-full object-cover rounded-full' />
          </div>
          <div>
            {contact.username}
          </div>
        </div>
        <div className='ml-auto'>
          <button className='bg-primary text-text px-4 py-2 rounded-lg'>
            <div className='text-2xl'>
              <MoreVertIcon color='inherit' fontSize='inherit' />
            </div>
          </button>
        </div>
      </div>
      <div className='relative flex flex-1 flex-col '>
        {/* <div className='absolute top-0 bottom-0 h-full w-full -z-0'>
          <img src={bg} alt='background' className='w-full h-full object-cover blur-xl'/>
        </div> */}
        {
          messages.map((message) => {
            return (
              <div key={message.id} class={`flex items-start gap-2.5 my-2 ${contact.username == message.username ? null : "flex-row-reverse"} `}>
                {contact.username != message.username ? null : <img class="w-8 h-8 rounded-full z-10" src={message.avatar} alt="Jese image" />}
                <div class="flex flex-col gap-1 w-full max-w-[320px]">
                  <div class="flex items-center space-x-2 rtl:space-x-reverse">
                  </div>
                  <div class={`relative flex mt-2 flex-col leading-1.5 px-4 py-2 border-gray-200 bg-gray-100 ${contact.username != message.username ? "rounded-tl-xl" : "rounded-t-xl"} rounded-b-xl dark:bg-gray-700`}>
                    <div className={`absolute top-0 select-none h-4 w-10 ${contact.username == message.username ? "left-0 skew-x-[40deg] rotate-12" : "right-0 -skew-x-[40deg] -rotate-12"} bg-gray-700`}></div>
                    {contact.username == message.username ? <span class="text-base font-semibold mb-1 text-pink-500 z-10 ">{message.username}</span> : null}

                    <p class="text-sm font-normal text-gray-900 dark:text-white"> That's awesome. I think our users will really appreciate the improvements.</p>
                  </div>
                  <div className='flex gap-2 items-center justify-end mr-5'>
                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">{formatMessageTime(message.timeDelivered)}</span>
                    {contact.username == message.username ? null : <>
                      <div className='w-1 h-1 bg-gray-500 rounded-full'></div>
                      {message.status == "delivered" ? <div className='text-gray-500 text-xs' >
                        <CheckCircleOutlineIcon />
                      </div> :
                        <div className='text-green-500 text-xs'>
                          <CheckCircleIcon />
                        </div>}

                    </>}
                  </div>
                </div>
              </div>
            )
          })
        }

        {/* <div class="flex items-start gap-2.5">
          <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image" />
          <div class="flex flex-col gap-1 w-full max-w-[320px]">
            <div class="flex items-center space-x-2 rtl:space-x-reverse">
              <span class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
            </div>
            <div class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
              <p class="text-sm font-normal text-gray-900 dark:text-white"> That's awesome. I think our users will really appreciate the improvements.</p>
            </div>
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
          </div>
          <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600" type="button">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
              <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>
          </button>
          <div id="dropdownDots" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reply</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Forward</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Copy</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a>
              </li>
            </ul>
          </div>
        </div> */}

      </div>
      <div className='h-16 w-full border-t-[1px] border-text border-opacity-10 flex items-center justify-center'>
        <div className="relative text-tertiary w-11/12">
          <input
            autoComplete='off'
            name="message"
            placeholder="Message ... "
            className="w-full bg-tertiary text-text h-10 px-5 pr-10 rounded-xl border-[1px] border-text border-opacity-10 focus:border-opacity-10 text-sm focus:outline-none"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className='text-text'>
              <SendIcon className='w-full h-full' />
            </div>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Right

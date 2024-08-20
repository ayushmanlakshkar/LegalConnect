import React from 'react'
import { formatDateTime } from '../../Services/formatDateTime';

function LawyersList() {
  const contacts = [
    {
      id: '1',
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      username: 'John Doe',
      lastMessage: 'Hello',
      time: new Date(Date.now()).toISOString(), // Now
      unread: 2
    },
    {
      id: '2',
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      username: 'Jane Smith',
      lastMessage: 'How are you?',
      time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
      unread: 0
    },
    {
      id: '3',
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      username: 'Michael Brown',
      lastMessage: 'See you soon!',
      time: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
      unread: 1
    },
    {
      id: '4',
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      username: 'Emily Davis',
      lastMessage: 'Thanks!',
      time: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago
      unread: 3
    },
    {
      id: '5',
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      username: 'Chris Wilson',
      lastMessage: 'Good morning!',
      time: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(), // 10 hours ago
      unread: 5
    },
    {
      id: '6',
      avatar: "https://randomuser.me/api/portraits/women/6.jpg",
      username: 'Olivia Johnson',
      lastMessage: 'Catch you later!',
      time: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
      unread: 0
    },
    {
      id: '7',
      avatar: "https://randomuser.me/api/portraits/men/7.jpg",
      username: 'James Miller',
      lastMessage: 'Yes, absolutely!',
      time: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week ago
      unread: 2
    },
    {
      id: '8',
      avatar: "https://randomuser.me/api/portraits/women/8.jpg",
      username: 'Sophia Garcia',
      lastMessage: 'Got it.',
      time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
      unread: 1
    },
    {
      id: '9',
      avatar: "https://randomuser.me/api/portraits/men/9.jpg",
      username: 'David Martinez',
      lastMessage: 'On my way.',
      time: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(), // 6 days ago
      unread: 0
    },
    {
      id: '10',
      avatar: "https://randomuser.me/api/portraits/women/10.jpg",
      username: 'Mia Robinson',
      lastMessage: 'What’s up?',
      time: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
      unread: 3
    },
    {
      id: '11',
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      username: 'Lucas Anderson',
      lastMessage: 'No worries!',
      time: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days ago
      unread: 2
    },
    {
      id: '12',
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      username: 'Amelia Thompson',
      lastMessage: 'Can we reschedule?',
      time: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
      unread: 4
    },
    {
      id: '13',
      avatar: "https://randomuser.me/api/portraits/men/13.jpg",
      username: 'Ethan Martinez',
      lastMessage: 'Let’s do it.',
      time: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
      unread: 0
    },
    {
      id: '14',
      avatar: "https://randomuser.me/api/portraits/women/14.jpg",
      username: 'Ava Lee',
      lastMessage: 'I’m in a meeting.',
      time: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days ago
      unread: 2
    },
    {
      id: '15',
      avatar: "https://randomuser.me/api/portraits/men/15.jpg",
      username: 'Mason Perez',
      lastMessage: 'Sounds good!',
      time: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(), // 8 days ago
      unread: 1
    },
    {
      id: '16',
      avatar: "https://randomuser.me/api/portraits/women/16.jpg",
      username: 'Isabella Turner',
      lastMessage: 'Thanks a lot!',
      time: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago
      unread: 0
    },
    {
      id: '17',
      avatar: "https://randomuser.me/api/portraits/men/17.jpg",
      username: 'Elijah Taylor',
      lastMessage: 'Let me know.',
      time: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago
      unread: 3
    },
    {
      id: '18',
      avatar: "https://randomuser.me/api/portraits/women/18.jpg",
      username: 'Emily Harris',
      lastMessage: 'Sure thing.',
      time: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago
      unread: 2
    },
    {
      id: '19',
      avatar: "https://randomuser.me/api/portraits/men/19.jpg",
      username: 'Benjamin White',
      lastMessage: 'Talk soon!',
      time: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago
      unread: 1
    },
    {
      id: '20',
      avatar: "https://randomuser.me/api/portraits/women/20.jpg",
      username: 'Ella Clark',
      lastMessage: 'I’ll call you later.',
      time: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago
      unread: 0
    }
  ];


  return (
    <div className='w-4/12 flex flex-col h-full bg-primary border-r-[1px] border-text border-opacity-10 '>
      <div className='w-full px-8 flex items-center min-h-20 border-b-[1px] border-text border-opacity-10 '>
        <div className="relative text-tertiary w-full">
          <input
            autoComplete='off'
            name="search"
            placeholder="Search"
            className="w-full bg-tertiary text-text h-10 px-5 pr-10 rounded-full border-[1px] border-text border-opacity-10 focus:border-opacity-10 text-sm focus:outline-none"
          />
          <button className="absolute right-0 top-0 mt-3 mr-4">
            <svg
              className="h-4 w-4 fill-text"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </div>
      <div className='overflow-y-auto h-full w-full '>
        {contacts.map(contact => (
          <div className='w-full bg-white bg-opacity-0  hover:bg-opacity-5 cursor-pointer'>
            <div key={contact.id} className='flex items-center  gap-4 py-4 mx-4 '>
              <div className='w-14 h-14'>
                <img src={contact.avatar} alt='avatar' className='w-full h-full object-cover rounded-full' />
              </div>
              <div className='flex flex-col'>
                <div className='text-text font-bold'>{contact.username}</div>
                <div className='text-text text-opacity-50'>{contact.lastMessage}</div>
              </div>

              <div className=' text-text text-opacity-50 flex flex-col h-14 gap-1 min-w-16 items-end justify-items-start ml-auto '>
                <div className='flex '>
                  {formatDateTime(contact.time)}
                </div>
                {contact.unread > 0 && (
                  <div className='bg-green-600 text-white text-sm  w-6 h-6 flex items-center justify-center rounded-full'>
                    {contact.unread}
                  </div>
                )}
              </div>
            </div>
            <div className='w-11/12 h-[1px] bg-text bg-opacity-10 mx-auto'></div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default LawyersList

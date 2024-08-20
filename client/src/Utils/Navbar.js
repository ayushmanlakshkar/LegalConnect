import React, { useEffect, useState } from 'react';
import { useUserDetails } from '../Store/store';
import logo from '../assets/logo.png';
import { useTheme } from '../Providers/ThemeProvider';
import { Transition } from '@headlessui/react'; // Import Transition from headless UI
import { useLocation, useNavigate } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import { TextField } from '@mui/material';

function Navbar() {
    const {isUserLoggedIn } = useUserDetails();
    const {toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const [transparent, setTransparent] = useState(true);
    const [isMessagesRoute,setIsMessagesRoute ] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setMenuOpen(false);
    }, [])

    useEffect(() => {
        location.pathname === '/' ? setTransparent(true) : setTransparent(false);
        location.pathname === '/messages' ? setIsMessagesRoute(true) : setIsMessagesRoute(false);
    }, [location.pathname])



    return (
        <div className={`w-full text-text bg-secondary shadow-sm shadow-shadow flex justify-between items-center px-4 py-3 z-50 gap-3 ${transparent ? 'bg-opacity-10' : ''}`}>
            <div className='flex w-full md:w-auto gap-5'>
                <div className='bg-black w-10 p-0 rounded-full hover:cursor-pointer' onClick={() => navigate('/')}>
                    <img src={logo} className='h-10 w-10' alt='Logo' />
                </div>
                <div className='text-xl md:w-96 flex flex-1'>
                    <div class={`${isMessagesRoute?"hidden":"relative"} text-tertiary w-full`}>
                        <input
                        autoComplete='off'
                            // type="search"
                            name="search"
                            placeholder="Search"
                            class="w-full bg-tertiary text-text h-10 px-5 pr-10 rounded-full border-[1px] border-text border-opacity-10 focus:border-opacity-10 text-sm focus:outline-none"
                        />
                        <button
                            class="absolute right-0 top-0 mt-3 mr-4"
                        >
                            <svg
                                class="h-4 w-4 fill-text"
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
            </div>
            {/* Dropdown menu for LG and below screens */}

            <div className='hidden lg:flex text-text gap-24 justify-center font-extrabold text-lg'>
                {isUserLoggedIn ? <>
                    <div onClick={() => navigate('/home')} className='cursor-pointer hover:text-blue-500 hover:underline'>Home</div>
                    <div onClick={() => navigate('/qna')} className='cursor-pointer hover:text-blue-500 hover:underline'>QnA</div>
                    <div onClick={() => navigate('/messages')} className='cursor-pointer hover:text-blue-500 hover:underline'>Messages</div>
                </> :
                    <>
                        <div onClick={() => navigate('/login')} className='cursor-pointer hover:text-blue-500 hover:underline'>Log In</div>
                        <div onClick={() => navigate('/signup')} className='cursor-pointer hover:text-blue-500 hover:underline'>Sign Up</div>
                    </>
                }
            </div>
            <div className='flex flex-row justify-center gap-2 items-center'>
                <div className='toggle-switch hidden lg:block'>
                    <label className='switch-label'>
                        <input type='checkbox' onChange={toggleTheme} className='checkbox' />
                        <span className='slider'></span>
                    </label>
                </div>
                {/* <div className='md:block hidden'>
                    <SocialIcons />
                </div> */}
            </div>
            <div className='lg:hidden relative'>

                <input onChange={() => setMenuOpen(!menuOpen)} id="Menucheckbox" type="checkbox" />
                <label className="Menutoggle" for="Menucheckbox">
                    <div id="Menubar1" className="Menubars"></div>
                    <div id="Menubar2" className="Menubars"></div>
                    <div id="Menubar3" className="Menubars"></div>
                </label>


                <Transition
                    show={menuOpen}
                    enter='transition duration-300 transform'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='transition ease-in duration-75 transform'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                >
                    {(ref) => (
                        <div
                            ref={ref}
                            className='origin-top-right absolute py-4 px-4 text-lg left-0 mt-8 border-2 border-secondary min-w-56 rounded-md bg-opacity-100 shadow-lg bg-primary text-text ring-1 ring-black ring-opacity-5 focus:outline-none'
                            role='menu'
                            aria-orientation='vertical'
                            aria-labelledby='menu-button'
                        >
                            <div className='flex gap-3 flex-col' role='none'>
                                {isUserLoggedIn ? <>
                                    <div
                                        onClick={() => navigate('/home')}
                                        className='block  cursor-pointer hover:text-blue-500 hover:underline'
                                        role='menuitem'
                                    >
                                        Home
                                    </div>
                                    <div
                                        onClick={() => navigate('/qna')}
                                        className='block  cursor-pointer hover:text-blue-500 hover:underline'
                                        role='menuitem'
                                    >
                                        QnA
                                    </div>
                                    <div
                                        onClick={() => navigate('/messages')}
                                        className='block cursor-pointer hover:text-blue-500 hover:underline'
                                        role='menuitem'
                                    >
                                        Messages
                                    </div>
                                </> : <>
                                    <div
                                        onClick={() => navigate('/login')}
                                        className='block cursor-pointer hover:text-blue-500 hover:underline'
                                        role='menuitem'
                                    >
                                        Log In
                                    </div>
                                    <div
                                        onClick={() => navigate('/signup')}
                                        className='block cursor-pointer hover:text-blue-500 hover:underline'
                                        role='menuitem'
                                    >
                                        Sign Up
                                    </div>
                                </>}


                                <div className='toggle-switch mx-auto'>
                                    <label className='switch-label'>
                                        <input type='checkbox' onChange={toggleTheme} className='checkbox' />
                                        <span className='slider'></span>
                                    </label>
                                </div>
                                <div className='md:hidden'>
                                    <SocialIcons />
                                </div>

                            </div>
                        </div>
                    )}
                </Transition>
            </div>

            {/* Toggle switch for dark/light mode */}


        </div>
    );
}

export default Navbar;

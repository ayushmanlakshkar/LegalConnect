import React, { useEffect, useState } from 'react';
import { useUserDetails } from '../Store/store';
import logo from '../assets/logo.png';
import { useTheme } from '../Providers/ThemeProvider';
import { Transition } from '@headlessui/react'; // Import Transition from headless UI
import { useNavigate } from 'react-router-dom';
import SocialIcons from './SocialIcons';

function Navbar() {
    const { isUserLoggedIn } = useUserDetails();
    const { theme, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        setMenuOpen(false);
    },[])


    return (
        <div className='w-full text-text bg-primary shadow-sm shadow-shadow flex justify-between items-center px-9 py-3 z-10 gap-8 absolute top-0 bg-opacity-20'>
            <div className='lg:hidden relative'>

                <input onChange={() => setMenuOpen(!menuOpen)} id="Menucheckbox" type="checkbox" />
                <label class="Menutoggle" for="Menucheckbox">
                    <div id="Menubar1" class="Menubars"></div>
                    <div id="Menubar2" class="Menubars"></div>
                    <div id="Menubar3" class="Menubars"></div>
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
                                    <a
                                        href='/home'
                                        className='block  cursor-pointer hover:text-blue-500 hover:underline'
                                        role='menuitem'
                                    >
                                        Home
                                    </a>
                                    <a
                                        href='#'
                                        className='block  cursor-pointer hover:text-blue-500 hover:underline'
                                        role='menuitem'
                                    >
                                        QnA
                                    </a>
                                    <a
                                        href='#'
                                        className='block cursor-pointer hover:text-blue-500 hover:underline'
                                        role='menuitem'
                                    >
                                        Messages
                                    </a>
                                </> : <>
                                    <a
                                        href='#'
                                        className='block cursor-pointer hover:text-blue-500 hover:underline'
                                        role='menuitem'
                                    >
                                        Log In
                                    </a><a
                                        href='#'
                                        className='block cursor-pointer hover:text-blue-500 hover:underline'
                                        role='menuitem'
                                    >
                                        Sign Up
                                    </a>
                                </>}


                                <div className='toggle-switch mx-auto'>
                                    <label className='switch-label'>
                                        <input type='checkbox' onChange={toggleTheme} className='checkbox' />
                                        <span className='slider'></span>
                                    </label>
                                </div>
                                <div className='md:hidden'>
                                <SocialIcons/>
                                </div>
                                
                            </div>
                        </div>
                    )}
                </Transition>
            </div>
            <div className='flex gap-3 items-center'>
                <div className='bg-black w-10 p-0 rounded-full'>
                    <img src={logo} className='h-10 w-10' alt='Logo' />
                </div>
                <div className='font-extrabold text-xl'>
                    Legal Connect
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
                <div className='md:block hidden'>
                    <SocialIcons />
                </div>
            </div>

            {/* Toggle switch for dark/light mode */}


        </div>
    );
}

export default Navbar;

import React from 'react'
import bgCourt from '../assets/images/bgCourt.png'
import lawyer from '../assets/images/lawyer.png'
import { FaStar } from "react-icons/fa6";


function LandingPage() {
    return (
        <div className="absolute top-0 left-0 w-full min-h-screen  ">
            <div className='relative w-full h-screen text-text flex flex-col'>

            
            <img
                className="absolute inset-0 w-full h-screen filter contrast-50 blur-sm"
                src={bgCourt}
            ></img>
            {/* Overlay Content */}
            <div className="relative flex flex-col flex-1 bg-primary bg-opacity-30">
                <div className='mt-16 flex flex-col flex-1 '>
                    <div className='  flex flex-1 items-center justify-center flex-col gap-4 md:items-end md:text-right mx-10' style={{ fontFamily: "Maname" }}>
                        <div className='font-bold text-center text-4xl sm:text-5xl md:text-[85px] tracking-wider'>Legal Connect</div>
                        <div className='font-normal text-center text-3xl sm:text-5xl tracking-normal'>Legal Solutions & Advice</div>
                        <div className='text-lg font-bold md:w-3/5 mt-3'>Welcome to Legal Connect, where confidentiality meets legal expertise. Connect with seasoned lawyers, exchange advice, and resolve queries in a fully encrypted, private community designed for legal professionals and clients.</div>
                    </div>
                    <div className='w-full flex sm:flex-row items-center sm:gap-4 flex-col-reverse'>
                        <img src={lawyer} className=" w-3/12" alt="Lawyer" />
                        <div className='sm:text-3xl flex flex-col gap-3 items-center mb-3 sm:mb-8' style={{ fontFamily: "Kite One" }}>
                            <div className='font-bold'>
                                Connecting Clients with Legal Expertise
                            </div>
                            <div className='font-extrabold' style={{ fontFamily: "Libre Bodoni" }}>
                                Advocate Sagar Shah
                            </div>
                            <div className='text-yellow-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>
                        </div>
                    </div>

                </div>

            </div>
            </div>
        </div>
    )
}

export default LandingPage

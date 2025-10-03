"use client"
import React, { useState, useEffect, useRef } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import Lottie_Beef from './Lottie_Beef'


const Navbar = () => {
    const { data: session } = useSession()
    const [showDropdown, setShowDropdown] = useState(false)
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    // useEffect(() => {
    //     function handleClickOutside(event) {
    //         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    //             setShowDropdown(false);
    //         }
    //     }

    //     document.addEventListener("click", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("click", handleClickOutside);
    //     };
    // }, []);

    return (
        <nav className='text-lg text-white bg-blue-900 h-16 flex justify-between'>
            <div className='flex'>
                <Link className='flex sm:gap-3 items-center ml-3 justify-center' href={"/"}><span className='w-10 pb-3.5 sm:w-12 sm:ml-6 sm:pb-2'>
                    <Lottie_Beef />
                </span><p className='text-xl sm:text-3xl'>Buy Me A Burger</p></Link>
            </div>
            <div className='flex justify-center items-center relative'>
                {session ? <>
                    <div ref={dropdownRef}>
                        <button id="dropdownInformationButton" onBlur={()=>{setTimeout(() => {setShowDropdown(false)}, 200);}} onClick={() => setShowDropdown(!showDropdown)} data-dropdown-toggle="dropdownInformation" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email.split("@")[0]}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                        </button>
                        <div id="dropdownInformation" className={`z-10 ${showDropdown ? "" : "hidden"} absolute top-[45px] left-[49px]  bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                <div className="font-medium truncate">{session.user.email}</div>
                            </div>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                                <li>
                                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                </li>
                                <li>
                                    <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
                                </li>
                            </ul>
                            <div className="py-2">
                                <Link href="#" onClick={() => signOut()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
                            </div>
                        </div>
                    </div>

                    <button onClick={() => signOut()} className="ml-5 relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover: dark: focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="text-white lg:text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                            Logout
                        </span>
                    </button>
                </> : <Link href="/login">
                    <button className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover: dark: focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="text-white lg:text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                            Login
                        </span>
                    </button>
                </Link>}

            </div>
        </nav>
    )
}

export default Navbar

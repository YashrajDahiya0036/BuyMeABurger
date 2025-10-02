"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Dashboard = () => {
    const { data: session } = useSession()
    const router = useRouter()
    useEffect(() => {
        if (!session) {
            router.push('/login')
        }
    }, [router, session])
    return (
        <>
            <div className='flex flex-col gap-4 mt-10 justify-center items-center text-white'>
            <div className=''>
                <Image
                    src="/user.svg"
                    width={100}
                    height={100}
                    alt="User"
                    priority
                />
            </div>
                <h1 className='text-3xl font-bold'>Welcome, {session?.user?.name}</h1>
                <button onClick={() => signOut()} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>Sign Out</button>
                <div className='mt-10 text-xl mx-5 bg-slate-800 w-[90vw] p-4 border border-gray-300 rounded-lg shadow-md lg:w-[50vw]'>
                    <h2 className='text-xl font-bold mb-4'>Your Profile</h2>
                    <p><span className='font-bold'>Name:</span> {session?.user?.name}</p>
                    <p><span className='font-bold'>Email:</span> {session?.user?.email}</p>
                </div>
            </div>

            {/* <div className='flex flex-col lg:flex-row gap-5 justify-center items-center mt-10 mb-10'>
                <div className='w-[80vw] h-[400px] bg-slate-900 flex flex-col rounded gap-3 items-center p-5 lg:h-[400px] xl:h-[300px] overflow-y-scroll'>
                    <h2 className='font-bold italic text-2xl mb-5'>Recent Donations</h2>
                    <ul className='flex flex-col gap-3'>
                        <li className='flex justify-center gap -1'><Image
                            className='object-contain'
                            src="/user.svg"
                            alt="User"
                            height={15}
                            width={20}
                            priority
                        /><span className='font-bold italic xl:text-xl'> Shubham </span>doanted <span className='font-bold italic'> 1010</span> saying&quot;&quot;</li>
                        <li className='flex justify-center gap-1'><Image
                            className='object-contain'
                            src="/user.svg"
                            alt="User"
                            height={15}
                            width={20}
                            priority
                        /><span className='font-bold italic xl:text-xl'> Shubham </span>doanted <span className='font-bold italic'> 1010</span> saying&quot;&quot;</li>
                        <li className='flex justify-center gap-1'><Image
                            className='object-contain'
                            src="/user.svg"
                            alt="User"
                            height={15}
                            width={20}
                            priority
                        /><span className='font-bold italic xl:text-xl'> Shubham </span>doanted <span className='font-bold italic'> 1010</span> saying&quot;&quot;</li>
                    </ul>
                </div>
            </div> */}
        </>
    )
}

export default Dashboard

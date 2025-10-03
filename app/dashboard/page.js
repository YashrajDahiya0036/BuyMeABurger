"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Dashboard = () => {
    const { data: session } = useSession()
    const router = useRouter()

    const [isEditable, setIsEditable] = useState(false);
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [razor_id, setRazor_id] = useState("")
    const [razor_secret, setRazor_secret] = useState("")

    const handleEdit = () => {
        setIsEditable(!isEditable)
    }

    const handleUpdate = () => {
        setIsEditable(false)
    }

    useEffect(() => {
        if (!session) {
            router.push('/login')
        }
    }, [router, session])
    if (!session) {
        return <div className='flex justify-center items-center h-screen text-2xl text-white'>Loading...</div>
    }
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
                <h1 className='text-3xl font-bold'>Welcome, {session.user.name}</h1>
                <button onClick={() => signOut()} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>Sign Out</button>
                <div className='mt-10 text-xl mx-5 bg-slate-800 w-[70vw] p-4 border border-gray-300 rounded-lg shadow-md lg:w-[50vw]'>
                    <div className='flex justify-between'>
                        <h2 className='text-xl font-bold mb-4'>Your Profile</h2>
                        <img onClick={handleEdit} src="/edit.svg" alt="edit" />
                    </div>
                    <p className='break-all'><span className='font-bold'>Name:</span> {session.user.name}</p>
                    <p className='break-all'><span className='font-bold'>Email:</span> {session.user.email}</p>
                    <p className='break-all'><span className='font-bold'>Username:</span> {session.user.username}</p>
                </div>

            </div>

            <div className={`flex ${isEditable ? "" : "hidden"} flex-col lg:flex-col sm:flex-row gap-5 justify-center items-center mt-10 mb-10`}>
                <div className='w-[80vw] text-white bg-slate-900 flex flex-col rounded gap-5 items-center p-5 overflow-y-scroll'>
                    <h2 className='font-bold italic text-2xl mb-5'>Your Information</h2>
                    <div className='w-[90%] flex flex-col sm:flex-row gap-1 justify-between items-center xl:text-xl'>
                        <label htmlFor="user">Enter Username:</label>
                        <input value={user} onChange={(e)=>setUser(e.target.value)} autoComplete='true' name='user' id='user' className='w-full sm:w-2/3 p-2 rounded bg-slate-800 text-white' type="text" placeholder='Username' />
                    </div>
                    <div className='w-[90%] flex flex-col sm:flex-row gap-1 justify-between xl:text-xl'>
                        <label htmlFor="email">Your Email:</label>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete='true' name='email' id='email' className='w-full sm:w-2/3 p-2 rounded bg-slate-800 text-white' type="text" placeholder='Email' />
                    </div>
                    <div className='w-[90%] flex flex-col sm:flex-row gap-1 justify-between xl:text-xl'>
                        <label htmlFor="razor_id">Enter Razorpay id:</label>
                        <input value={razor_id} onChange={(e)=>setRazor_id(e.target.value)} autoComplete='true' name='razor_id' id='razor_id' className='w-full sm:w-2/3 p-2 rounded bg-slate-800 text-white' type="text" placeholder='Razorpay ID' />
                    </div>
                    <div className='w-[90%] flex flex-col sm:flex-row gap-1 justify-between xl:text-xl'>
                        <label htmlFor="razor_secret">Enter Razorpay secret:</label>
                        <input value={razor_secret} onChange={(e)=>setRazor_secret(e.target.value)} autoComplete='true' name='razor_secret' id='razor_secret' className='w-full sm:w-2/3 p-2 rounded bg-slate-800 text-white' type="text" placeholder='Razorpay Secret' />
                    </div>
                    <button onClick={handleUpdate} className='bg-blue-500 text-xl font-bold mt-5 text-white px-8 py-4 rounded hover:bg-blue-600 transition'>Update</button>
                </div>
            </div>
        </>
    )
}

export default Dashboard

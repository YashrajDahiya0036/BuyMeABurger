"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import PaymentPage from '@/components/PaymentPage'


const Username = ({ params }) => {

    const { data: session } = useSession()
    const unwrappedParams = React.use(params);


    if (!session) {
        return <div className='flex justify-center items-center h-screen text-2xl text-white'>Loading...</div>
    }
    else {
        return (
            <>
                <div className='w-full h-[265px] relative'>
                    <Image
                        className='object-contain'
                        src="/cover.png"
                        alt="User"
                        fill
                        priority
                    />
                    <div className='absolute bottom-[50px] left-1/2 -translate-x-1/2 sm:left-1/2 sm:bottom-[30px]'>
                        <Image
                            className='object-contain rounded-lg'
                            src={session?.user?.profilePic || "/user.svg"}
                            alt="User"
                            height={75}
                            width={75}
                            priority
                        />
                    </div>
                </div>
                <div className='text-white flex flex-col items-center gap-8'>
                    <div className='text-4xl sm:text-6xl lg:text-8xl'>{unwrappedParams.username}</div>
                    <div className='text-xl sm:text-2xl lg:text-4xl text-center'> Making video essays on modern and classic boomer shooters!</div>
                    <div className='text-lg sm:text-xl lg:text-2xl'>38 members | 176 posts | $93.36/month</div>

                    <button type="button" className="focus:outline-none text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 font-medium rounded-lg text-xl px-32 md:px-50 md:text-2xl py-4 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700">Join Us</button>
                    <button type="button" className="focus:outline-none text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 font-medium rounded-lg text-xl px-12 md:px-25 md:text-2xl py-4 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700">See Membership Options</button>

                </div>
                <PaymentPage username={unwrappedParams.username} />
            </>
        )
    }
}

export default Username

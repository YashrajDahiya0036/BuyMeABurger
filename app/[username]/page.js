import React from 'react'
import Image from 'next/image'

const Username = ({ params }) => {
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
                        src="/small_cover.png"
                        alt="User"
                        height={75}
                        width={75}
                        priority
                    />
                </div>
            </div>
            <div className='text-white flex flex-col items-center gap-8'>
                <div className='text-4xl sm:text-6xl lg:text-8xl'>{params.username}</div>
                <div className='text-xl sm:text-2xl lg:text-4xl text-center'> Making video essays on modern and classic boomer shooters!</div>
                <div className='text-lg sm:text-xl lg:text-2xl'>38 members | 176 posts | $93.36/month</div>

                <button type="button" className="focus:outline-none text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 font-medium rounded-lg text-xl px-32 md:px-50 md:text-2xl py-4 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700">Join Us</button>
                <button type="button" className="focus:outline-none text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 font-medium rounded-lg text-xl px-12 md:px-25 md:text-2xl py-4 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700">See Membership Options</button>

            </div>
            <div className='flex flex-col gap-3 mx-5 text-white justify-center items-center my-10 lg:flex-row'>
                <div className='w-[80vw] h-[400px] overflow-auto bg-slate-900 rounded flex flex-col items-center justify-center gap-3 p-5 lg:h[300px] xl:h-[300px]'>
                    <h2 className='font-bold italic text-2xl xl:text-4xl'>Supporters</h2>
                    <ul className='flex flex-col gap-2 pl-6 justify-center items-center'>
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
                <div className='w-[80vw] h-[400px] bg-slate-900 flex flex-col rounded gap-3 items-center p-5 lg:h-[400px] xl:h-[300px]'>
                    <h2 className='font-bold italic text-2xl mb-5'>Support</h2>
                    <div className='flex flex-col text-center xl:flex xl:flex-row xl:w-full gap-3'>
                        <input className='bg-slate-800 w-full rounded-lg border border-black py-3 px-12' placeholder='Enter Name' type="text" />
                        <input className='bg-slate-800 w-full rounded-lg border border-black py-3 px-12' placeholder='Enter amount' type="text" />
                    </div>
                    <div className='flex mx-2 gap-3 w-full justify-center'>
                    <input className='bg-slate-800 rounded-lg border border-black py-3 px-12 xl:w-full' placeholder='Enter message' type="text" />
                    </div>
                    <div className="choose-amount-to-pay">
                        <div className='flex gap-3 flex-wrap justify-center'>
                            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 xl:mt-5 xl:px-10 xl:py-3 xl:text-xl">$5</button>
                            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 xl:mt-5 xl:px-10 xl:py-3 xl:text-xl">$10</button>
                            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 xl:mt-5 xl:px-10 xl:py-3 xl:text-xl">$20</button>
                        </div>
                    </div>
                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-10 py-2.5 text-center me-2 mb-2 xl:mt-5 xl:text-2xl xl:py-2.5 xl:px-15">Pay</button>
                </div>
            </div>
        </>
    )
}

export default Username

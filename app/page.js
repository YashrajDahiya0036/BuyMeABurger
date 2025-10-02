import Lottie_Beef from "@/components/Lottie_Beef";
import Working_lottie from "@/components/Working_lottie";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="flex flex-col text-white justify-center items-center h-[40vh] lg:h-[50vh]">
                <Link href="/" className="text-4xl sm:text-6xl sm:pt-5">Get me a burger </Link><span className="w-20 mb-5 lg:w-40 "><Lottie_Beef /></span>
                <p className="text-2xl sm:text-3xl text-center mb-3 px-5">Fund your projects.Your fans can help to fund your projects</p>
                <div className="mt-4 lg:mt-8  ">
                    <button className=" relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover: dark: focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="text-white lg:text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                            Start Here
                        </span>
                    </button>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover: dark: focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="text-white lg:text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                            Read More
                        </span>
                    </button>
                </div>
            </div>
            <div className="border border-gray-400 mx-5 opacity-60"></div>
            <div className="flex flex-col text-white mb-7">
                <h2 className="text-2xl font-bold mb-7 text-center mt-10">Your fans can buy you a burger</h2>
                <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-around">
                    <div className="flex flex-col justify-center items-center">
                        <span className="w-40 mt-5 bg-gray-400 rounded-full p-5 pt-3 opacity-90"><Working_lottie /></span>
                        <h1></h1>
                        <p className="mt-3 text-xl font-bold">Fund Yourself</p>
                        <p>Your fans are there to help.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className="w-40 mt-5 bg-gray-400 rounded-full p-5 pt-3 opacity-90"><Working_lottie /></span>
                        <h1></h1>
                        <p className="mt-3 text-xl font-bold">Fund Yourself</p>
                        <p>Your fans are there to help.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className="w-40 mt-5 bg-gray-400 rounded-full p-5 pt-3 opacity-90"><Working_lottie /></span>
                        <h1></h1>
                        <p className="mt-3 text-xl font-bold">Fund Yourself</p>
                        <p>Your fans are there to help.</p>
                    </div>
                </div>
                <div className="border border-gray-400 mx-5 mt-10 opacity-60"></div>
                <h2 className="text-2xl font-bold mb-7 text-center mt-10">Learn more about us</h2>
                <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-around">
                    <div className="flex flex-col justify-center items-center">
                        <span className="w-40 mt-5 bg-gray-400 rounded-full p-5 pt-3 opacity-90"><Working_lottie /></span>
                        <h1></h1>
                        <p className="mt-3 text-xl font-bold">Fund Yourself</p>
                        <p>Your fans are there to help.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className="w-40 mt-5 bg-gray-400 rounded-full p-5 pt-3 opacity-90"><Working_lottie /></span>
                        <h1></h1>
                        <p className="mt-3 text-xl font-bold">Fund Yourself</p>
                        <p>Your fans are there to help.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className="w-40 mt-5 bg-gray-400 rounded-full p-5 pt-3 opacity-90"><Working_lottie /></span>
                        <h1></h1>
                        <p className="mt-3 text-xl font-bold">Fund Yourself</p>
                        <p>Your fans are there to help.</p>
                    </div>
                </div>
            </div>
            <div className="border border-gray-400 mx-5 mb-10 opacity-60"></div>


        </>
    );
}

"use client"
import React from 'react'
import Lottie from "lottie-react"
import Working from '../public/Working.json'
const Working_lottie = () => {
    return (
        <>
            <Lottie
                animationData={Working}
                loop={true}
                autoplay={true}
            />
        </>
    )
}

export default Working_lottie

"use client"
import React from 'react'
import Lottie from "lottie-react"
import Burger from '../public/BeefBurger.json'


const Lottie_Beef = () => {
    return (
        <>
            <Lottie
                animationData={Burger}
                loop={true}
                autoplay={true}
            />
        </>
    )
}

export default Lottie_Beef

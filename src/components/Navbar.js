'use client'
import React from 'react'
import HireMeButton from './HireMeButton'
import Menubar from './Menubar'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className="w-full fixed top-0 left-0 z-50">
            <div className="flex justify-between items-center w-[85vw] mx-auto my-3
                  backdrop-blur-md bg-white/10 border border-white/20 
                  shadow-md rounded-xl px-6 py-3">
                <div><Image src="/logo.svg" width={50} height={50} alt="Logo" /></div>
                <div><Menubar /></div>
                <div><HireMeButton size='md' /></div>
            </div>
        </div>
    )
}

export default Navbar
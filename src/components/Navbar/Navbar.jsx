'use client'
import React, { useState } from 'react'
import HireMeButton from './HireMeButton'
import Menubar from './Menubar'
import Image from 'next/image'
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <div className="w-full fixed top-0 left-0 z-50">
                {/* Desktop & Tablet Navbar */}
                <div className="hidden md:flex justify-between items-center w-[85vw] mx-auto my-3
                      backdrop-blur-md bg-white/10 border border-white/20 
                      shadow-md rounded-xl px-6 py-3">
                    <div>
                        <Image src="/logo.svg" width={50} height={50} alt="Logo" />
                    </div>
                    <div className="hidden lg:block">
                        <Menubar />
                    </div>
                    <div>
                        <HireMeButton size="md" />
                    </div>
                </div>

                {/* Mobile Navbar */}
                <div className="md:hidden flex justify-between items-center w-[95vw] mx-auto my-3
                      backdrop-blur-md bg-white/10 border border-white/20 
                      shadow-md rounded-xl px-4 py-3">
                    <div>
                        <Image src="/logo.svg" width={40} height={40} alt="Logo" />
                    </div>
                    <div className="flex items-center space-x-3">
                        <HireMeButton size="sm" />
                        {/* <button
                            onClick={toggleMobileMenu}
                            className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
                        </button> */}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
                    <div className="fixed top-20 right-4 w-72 bg-black/90 backdrop-blur-md border border-white/20 rounded-xl shadow-xl">
                        <Menubar isMobile={true} onItemClick={closeMobileMenu} />
                    </div>
                </div>
            )}

            {/* Tablet-specific bottom navigation (optional) */}
            <div className="lg:hidden md:block fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-4 py-2">
                    <Menubar />
                </div>
            </div>
        </>
    );
};

export default Navbar;
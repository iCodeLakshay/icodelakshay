'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SocialIconsBar from './SocialLinks';

const Footer = () => {
    const navLinks = [
        { name: 'Home', to: '#home' },
        { name: 'Projects', to: '#projects' },
        { name: 'About', to: '#about' },
        { name: 'Experience', to: '#experience' },
        { name: 'Timeline', to: '#timeline' }
    ];

    return (
        <footer className="w-full py-8" style={{ background: "radial-gradient(ellipse at top, #2b1055 0%, #000000 100%)" }}>
            <div className="w-[85vw] mx-auto backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-8 py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <Image src="/logo.svg" width={50} height={50} alt="Logo" />
                        <p className="text-gray-300 text-sm max-w-xs">
                            Full Stack Developer passionate about creating beautiful and functional web applications.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-[Bricolage_Grotesque] text-white text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        href={link.to}
                                        offset={-70}
                                        className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-[Bricolage_Grotesque] text-center text-xl text-white font-semibold">Connect</h3>
                        <SocialIconsBar />
                    </div>
                </div>

                {/* Copyright */}
                <div className="font-[Bricolage_Grotesque] border-t border-white/10 mt-8 pt-4 text-center">
                    <p className="text-gray-300 text-sm">
                        © {new Date().getFullYear()} Lakshay Saxena. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
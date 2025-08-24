'use client'
import React from 'react';
import BlurText from './BlurText/BlurText';
import Earth from './Globe/Globe';
import { IoDocumentOutline } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';

const HeroContent = () => {
    return (
        <div id='home' className='grid grid-cols-1 lg:grid-cols-2 min-h-screen'>
            <div className="flex flex-col justify-center mt-25 lg:mt-0 px-8 lg:ml-auto lg:px-8">
                <div className="max-w-lg">
                    <h3 className='font-[Bricolage_Grotesque] text-2xl lg:text-3xl text-gray-300 font-semibold'>Hello <span className='bg-[#6826ce] px-1 py-1 rounded-lg'>Folks,</span> this is</h3>
                    <h1 className=" mt-2 font-bold text-white mb-2 leading-tight">
                        <BlurText
                            text="Lakshay Saxena"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="text-5xl lg:text-6xl"
                        />
                    </h1>

                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Full-stack developer in his 20s, building scalable, innovative solutions with a strategist’s mind. Passionate about coding, chess, books, philosophy, and awakening.
                    </p>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <Link target='_blank' href="https://x.com/intent/follow?screen_name=icodelakshay" className="inline-flex items-center justify-center px-5 py-2 bg-[#6826ce] text-white rounded-lg hover:bg-[#5a1fba] transition-colors duration-300">
                            Connect on <span className='ml-2'><Image src="/logos/twitter.svg" alt="Twitter Logo" width={12} height={12} /></span>
                        </Link>
                        <Link href="/CV [Lakshay].pdf" target='_blank' className="inline-flex items-center justify-center px-5 py-2 bg-[#6826ce] text-white rounded-lg hover:bg-[#5a1fba] transition-colors duration-300">
                            Get my CV <span className='ml-2'><IoDocumentOutline className='text-black' /></span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center p-8">
                <Earth />
            </div>
        </div>
    );
};

export default HeroContent;
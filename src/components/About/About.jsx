'use client'
import React from 'react'
import TechStackMarquee from './TechStackMarquee'

const About = () => {
    return (
        <div className="w-full h-full py-16 sm:py-20" style={{ background: "radial-gradient(ellipse at bottom, #2b1055 0%, #000000 100%)" }}>
            <div className='relative z-10'>
                <h2 className="font-[Bricolage_Grotesque] text-2xl sm:text-3xl w-fit mx-auto font-bold text-white px-4 py-2 rounded-2xl mb-4 bg-[#6826ce]">
                    About Me
                </h2>
                <div className='max-w-4xl mx-auto'>
                    <p className="text-base sm:text-lg text-gray-300 text-center leading-relaxed px-4 lg:p-0">
                        Hello! I'm Lakshay, a passionate Full Stack Java Developer and BCA graduate (2025). I love creating elegant
                        solutions to complex problems and building applications that provide exceptional user experiences. My
                        approach combines technical expertise with creative problem-solving to deliver high-quality, scalable
                        software.
                    </p>
                </div>
            </div>
            <div className='py-6 sm:py-8 relative z-10'>
                <TechStackMarquee />
            </div>
        </div>
    )
}
export default About
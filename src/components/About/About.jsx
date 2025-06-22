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
                <div className='max-w-4xl mx-auto flex-wrap mt-8'>
                    <p data-aos="fade-up" className="text-base sm:text-lg text-gray-300 text-center leading-relaxed px-4 lg:p-0">
                        Hello! I'm Lakshay, a dedicated Full Stack Web Developer and BCA graduate (2025). I&#39;ve built and optimized <span className='bg-[#6826ce] px-1 py-1 rounded-lg'> 5+ real-world projects</span>, including full-stack applications like <span className='bg-[#6826ce] px-1 py-1 rounded-lg'>LMS platforms</span> and <span className='bg-[#6826ce] px-1 py-1 rounded-lg'>admin dashboards.</span> I focus on enhancing UI/UX, improving performance, and <span className='bg-[#6826ce] px-1 py-1 rounded-lg'>delivering scalable, high-quality solutions</span> through a blend of technical skills and practical experience.
                    </p>
                </div>
            </div>
            <div data-aos="fade-up" className='py-6 sm:py-8 relative z-10'>
                <TechStackMarquee />
            </div>
        </div>
    )
}
export default About
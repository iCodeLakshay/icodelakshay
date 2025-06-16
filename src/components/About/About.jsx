import React from 'react'
import TechStackMarquee from './TechStackMarquee'

const About = () => {
    return (
        <div className='my-20'>
            <div>
                <h2 className="font-[Bricolage_Grotesque] text-3xl w-fit mx-auto font-bold text-white tracking-tighter px-4 py-2 bg-black rounded-2xl mb-4">About Me</h2>
                <div className='w-4xl mx-auto'>
                <p className="text-lg text-muted-foreground text-gray-300 text-center">Hello! I'm Lakshay, a passionate Full Stack Java Developer and BCA graduate (2025). I love creating elegant
                    solutions to complex problems and building applications that provide exceptional user experiences. My
                    approach combines technical expertise with creative problem-solving to deliver high-quality, scalable
                    software.</p>
                </div>
            </div>
            <div> <TechStackMarquee /></div>
        </div>
    )
}

export default About
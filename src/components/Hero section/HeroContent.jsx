'use client'
import React from 'react';
import BlurText from './BlurText/BlurText';
import RotatingText from './Text Animation/TextAnimate';
import Earth from './Globe/Globe';

const HeroContent = () => {
    return (
        <div id='home' className='grid grid-cols-1 lg:grid-cols-2 min-h-screen'>
            <div className="flex flex-col justify-center mt-25 lg:mt-0 px-8 lg:ml-auto lg:px-8">
                <div className="max-w-lg">
                    <h3 className='font-[Bricolage_Grotesque] text-2xl lg:text-3xl text-gray-300 font-semibold'>Hello <span className='bg-[#6826ce] px-1 py-1 rounded-lg'>Folks,</span> this is</h3>
                    <h1 className="font-[Bricolage_Grotesque] mt-2 font-bold text-white mb-2 leading-tight">
                        <BlurText
                            text="Lakshay Saxena"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="text-5xl lg:text-6xl"
                        />
                    </h1>

                    <h2 className="font-[Bricolage_Grotesque] flex gap-3 text-lg lg:text-3xl text-gray-300 mb-2 font-semibold">
                        <RotatingText
                            texts={['Java Full Stack Developer', 'MERN Full Stack Developer']}
                            mainClassName="sm:px-2 md:px-3 [background-image:radial-gradient(circle,_transparent)] text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={3000}
                        />
                    </h2>

                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Specializing in MERN Stack and Java development,
                        crafting scalable digital solutions with precision and innovation.
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-center p-8">
                <Earth />
            </div>
        </div>
    );
};

export default HeroContent;
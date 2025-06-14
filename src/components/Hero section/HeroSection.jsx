import React from 'react'
import HeroSectionBG from './HeroSectionBG'
import HeroContent from './HeroContent'

const HeroSection = () => {
  return (
    <div className='relative min-h-screen w-full'>
      <HeroSectionBG />
      <div className='relative z-10'>
        <HeroContent />
      </div>
    </div>
  )
}

export default HeroSection
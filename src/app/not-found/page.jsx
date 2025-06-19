'use client'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center py-16 sm:py-20" 
         style={{ background: "radial-gradient(ellipse at bottom, #2b1055 0%, #000000 100%)" }}>
      <div className='relative z-10 text-center px-4'>
        <h1 className="font-[Bricolage_Grotesque] text-6xl sm:text-8xl font-bold text-white mb-4">
          4<span className="text-[#6826ce]">0</span>4
        </h1>
        
        <h2 className="font-[Bricolage_Grotesque] text-2xl sm:text-3xl font-bold text-white px-4 py-2 rounded-2xl mb-6 bg-[#6826ce] inline-block">
          Page Not Found
        </h2>
        
        <p data-aos="fade-up" className="text-base sm:text-lg text-gray-300 max-w-md mx-auto mb-8 leading-relaxed">
          Oops! Looks like you&#39;ve ventured into unknown territory. Let&#39;s get you back to familiar ground.
        </p>

        <Link 
          href="/" 
          className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-xl 
                   text-white font-medium transition-all duration-300 hover:bg-[#6826ce] hover:border-[#6826ce] 
                   focus:ring-2 focus:ring-[#6826ce] focus:ring-offset-2 focus:ring-offset-[#2b1055] focus:outline-none"
        >
          Back to Homepage
        </Link>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#6826ce] rounded-full opacity-20 blur-3xl -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500 rounded-full opacity-20 blur-3xl -z-10 animate-pulse"></div>
      </div>
    </div>
  )
}
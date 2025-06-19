"use client"

import React from 'react';
import { Timeline } from 'primereact/timeline';
import SpotlightCard from '../Experience/SpotlightCard';

export default function JourneyTimeline() {
  const events = [
    {
      status: 'Secondary Education Completed',
      date: '2018 - 2022',
      icon: 'pi pi-book',
      color: '#10B981',
      subtitle: 'PCM',
      description: 'Successfully completed my secondary education with a focus on science subjects...',
    },
    {
      status: 'Bachelor of Computer Applications',
      date: '2022 - 2025',
      icon: 'pi pi-briefcase',
      color: '#3B82F6',
      subtitle: 'BCA Degree',
      description: 'Pursued comprehensive education in computer science fundamentals...',
    },
    {
      status: 'Web Developer',
      date: '2025',
      icon: 'pi pi-code',
      color: '#8B5CF6',
      subtitle: 'Jee Vijay Technologies',
      description: 'Started my career as a web developer, working on real-world projects...',
    },
    {
      status: 'Future Goals',
      date: 'Beyond 2025',
      icon: 'pi pi-star',
      color: '#F59E0B',
      subtitle: 'Expanding Horizons',
      description: 'Committed to continuous learning and contributing to meaningful innovations...',
    }
  ];

  const customizedMarker = (item) => (
    <span
      className="flex w-6 h-6 md:w-8 md:h-8 items-center justify-center text-white rounded-full shadow"
      style={{ backgroundColor: item.color }}
    >
      <i className={`${item.icon} text-xs md:text-sm`}></i>
    </span>
  );

  const customizedContent = (item) => (
    <SpotlightCard className="custom-spotlight-card text-start" spotlightColor="rgba(0, 229, 255, 0.2)">
      <div className="text-lg md:text-2xl font-semibold text-white mb-2">{item.status}</div>
      <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center mb-3'>
        <div className='text-gray-100 w-fit px-2 py-1 md:px-3 md:py-1 rounded-2xl bg-[#6826ce] text-xs md:text-sm'>
          {item.subtitle}
        </div>
        <h4 className='text-gray-100 px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm rounded-2xl bg-[#4ace26]'>
          {item.date}
        </h4>
      </div>
      <p className='text-gray-300 text-sm md:text-base leading-relaxed'>{item.description}</p>
</SpotlightCard>
  );

  return (
    <section id="timeline" className="w-full py-12 md:py-20 px-4" style={{ background: "radial-gradient(ellipse at bottom, #2b1055 0%, #000000 100%)" }}>
      <div className="text-center mb-8 md:mb-16">
        <h2 className="font-[Bricolage_Grotesque] text-2xl md:text-3xl font-bold text-white tracking-tighter px-3 py-2 md:px-4 md:py-2 bg-[#6826ce] rounded-2xl inline-block">
          My Journey
        </h2>
        <p data-aos="fade-up" className="text-base md:text-lg text-gray-300 mt-4 px-4">
          From education to professional growth - here's my roadmap
        </p>
      </div>

      <div data-aos="fade-up" className="card mx-auto bg-transparent max-w-6xl">
        <Timeline
          value={events}
          align="alternate"
          className="customized-timeline"
          marker={customizedMarker}
          content={customizedContent}
        />
      </div>

      <style jsx global>{`
        /* Mobile-first responsive styles */
        @media (max-width: 768px) {
          /* Force left alignment for all timeline events on mobile */
          .customized-timeline .p-timeline-event {
            flex-direction: row !important;
            text-align: left !important;
          }

          .customized-timeline{
            gap: 12px;
          }
          
          /* Hide the opposite content (empty space) on mobile */
          .customized-timeline .p-timeline-event-opposite {
            display: none !important;
          }
          
          /* Position all content to the right of the separator */
          .customized-timeline .p-timeline-event-content {
            width: 100% !important;
            margin-left: 1rem !important;
            margin-right: 0 !important;
            flex: 1 !important;
          }
          
          /* Ensure separator (marker + connector) stays on the left */
          .customized-timeline .p-timeline-event-separator {
            order: 0 !important;
            flex-shrink: 0 !important;
          }
          
          /* Position content after separator */
          .customized-timeline .p-timeline-event-content {
            order: 1 !important;
          }
          
          .customized-timeline .p-timeline-event {
            min-height: auto !important;
          }
          
          .customized-timeline {
            padding: 0 1rem !important;
          }
        }

        /* Tablet styles */
        @media (min-width: 769px) and (max-width: 1024px) {
          .customized-timeline .p-timeline-event-content {
            max-width: 320px !important;
          }
          
          .customized-timeline {
            padding: 0 2rem !important;
          }
        }

        /* General timeline styles */
        .customized-timeline .p-timeline-event-connector {
          background: linear-gradient(to bottom, #6826ce, #9333ea) !important;
          width: 2px !important;
        }

        .customized-timeline .p-timeline-event-content {
          border-radius: 12px !important;
        }

        /* Hover effects for larger screens */
        @media (min-width: 1025px) {
          .customized-timeline .p-timeline-event-content:hover {
            transform: translateY(-2px);
            transition: transform 0.2s ease;
          }
        }
      `}</style>
    </section>
  );
}
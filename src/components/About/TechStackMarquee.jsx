'use client'
import React from 'react';

const programmingLanguages = [
  {
    name: "Html5",
    logo: "/logos/html5.svg",
    alt: "Html5 Logo"
  },
  {
    name: "Css3",
    logo: "/logos/css3.svg",
    alt: "Css3 Logo"
  },
  {
    name: "JavaScript",
    logo: "/logos/javascript.svg",
    alt: "JavaScript Logo"
  },
  {
    name: "MongoDB",
    logo: "/logos/mongodb.svg",
    alt: "MongoDB Logo"
  },
  {
    name: "React",
    logo: "/logos/reactjs.svg",
    alt: "React Logo"
  },
  {
    name: "Node.js",
    logo: "/logos/nodejs.svg",
    alt: "Node.js Logo"
  },
  {
    name: "Express",
    logo: "/logos/express.svg",
    alt: "Express Logo"
  },
  {
    name: "MySQL",
    logo: "/logos/mysql.svg",
    alt: "MySQL Logo"
  },
  {
    name: "Java",
    logo: "/logos/java.svg",
    alt: "Java Logo"
  },
  {
    name: "Maven",
    logo: "/logos/maven.svg",
    alt: "Maven Logo"
  },
  {
    name: "Git",
    logo: "/logos/git.svg",
    alt: "Git Logo"
  },
  {
    name: "NextJS",
    logo: "/logos/nextjs.svg",
    alt: "NextJS Logo"
  },
  {
    name: "Postgresql",
    logo: "/logos/postgresql.svg",
    alt: "Postgresql Logo"
  },
  {
    name: "Spring Boot",
    logo: "/logos/springboot.svg",
    alt: "Spring Boot Logo"
  },
  {
    name: "Eclipse",
    logo: "/logos/eclipse.svg",
    alt: "Eclipse Logo"
  },
  {
    name: "VS Code",
    logo: "/logos/vs-code.svg",
    alt: "VS Code Logo"
  },
  {
    name: "IntelliJIdea",
    logo: "/logos/intellijIdea.svg",
    alt: "IntelliJIdea Logo"
  },
  {
    name: "Github",
    logo: "/logos/github.svg",
    alt: "Github Logo"
  },
  {
    name: "Windows",
    logo: "/logos/windows.svg",
    alt: "Windows Logo"
  },
  {
    name: "Linux",
    logo: "/logos/linux.svg",
    alt: "Linux Logo"
  }
];

const CONFIG = {
  animationDuration: '30s', // Speed of the marquee
  cardSize: 'size-27 lg:size-32', // Size of each tech card
  logoSize: 'size-12 lg:size-20', // Size of the logo inside each card
  gap: 'gap-4', // Space between cards
  backgroundColor: 'bg-transparent', // Background color
  fadeWidth: 'w-1/9' // Width of the fade effect on sides
};

const firstRow = programmingLanguages.slice(0, Math.ceil(programmingLanguages.length / 2));
const secondRow = programmingLanguages.slice(Math.ceil(programmingLanguages.length / 2));

const LanguageCard = ({ logo, name, alt }) => {
  return (
    <div className={`flex-shrink-0 ${CONFIG.cardSize} cursor-pointer overflow-hidden rounded-xl border p-4 mx-4
      bg-gray-500/10 border-gray-400 hover:bg-gray-600/40
      dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]
      transition-colors duration-200`}>
      <div className="flex flex-col items-center justify-center h-full">
        <div className={`relative ${CONFIG.logoSize}`}>
          <img
            src={logo}
            alt={alt}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-sm font-medium text-white text-center mt-2">
          {name}
        </div>
      </div>
    </div>
  );
};

const MarqueeRow = ({ items, reverse = false }) => {
  return (
    <div className="flex overflow-hidden">
      <div 
        className={`flex ${CONFIG.gap}`}
        style={{
          animation: `${reverse ? 'marquee-reverse' : 'marquee'} ${CONFIG.animationDuration} linear infinite`,
          '&:hover': {
            animationPlayState: 'paused'
          }
        }}
      >
        {[...Array(3)].map((_, i) => (
          <React.Fragment key={i}>
            {items.map((lang) => (
              <LanguageCard key={`${i}-${lang.name}`} {...lang} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default function TechStackMarquee() {
  return (
    <div className={`relative flex w-full flex-col items-center justify-center overflow-hidden gap-8 py-8 ${CONFIG.backgroundColor}`}>
            <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }
        
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.333333%); }
          100% { transform: translateX(0); }
        }

        .flex:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* First row - left to right */}
      <MarqueeRow items={firstRow} />
      
      {/* Second row - right to left */}
      <MarqueeRow items={secondRow} reverse />

      {/* Fade effects on sides */}
      <div className={`pointer-events-none absolute inset-y-0 left-0 ${CONFIG.fadeWidth} bg-gradient-to-r from-black/40 to-transparent dark:from-gray-950`}></div>
      <div className={`pointer-events-none absolute inset-y-0 right-0 ${CONFIG.fadeWidth} bg-gradient-to-l from-black/40 to-transparent dark:from-gray-950`}></div>
    </div>
  );
}
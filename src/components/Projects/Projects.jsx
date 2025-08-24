"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { HiArrowUpRight } from "react-icons/hi2"
import { FaGithub } from "react-icons/fa"

const projects = {
  "personal": [
    {
      title: "FitTracker",
      description: "AI-powered fitness tracking app with real-time analytics enriched with personalized insights",
      image: "/Project_Images/FitTracker.png",
      tags: ["NextJS", "MongoDB", "Gemini"],
      demoLink: "https://fit.icodelakshay.tech",
      githubLink: "https://github.com/iCodeLakshay/fit-tracker-frontend",
    },
    {
      title: "Samvaad",
      description: "Real-time chat application with group chats and direct messaging",
      image: "/Project_Images/samvaad.png",
      tags: ["JWT", "Socket.io", "Zustand"],
      demoLink: "https://samvaad-frontend.onrender.com",
      githubLink: "https://github.com/iCodeLakshay/samvaad-frontend",
    },
    {
      title: "Crypto Flux",
      description: "Cryptocurrency tracking platform with real-time price updates",
      image: "/Project_Images/cryptoflux.png",
      tags: ["Next.js", "Zustand", "Coingecko"],
      demoLink: "https://crypto-flux-lime.vercel.app/",
      githubLink: "#",
    },
    {
      title: "Movie Recommendation",
      description: "Movie recommendation site with personalized suggestions",
      image: "/Project_Images/movieSS.png",
      tags: ["React.js", "TMDB API"],
      demoLink: "https://movie-site-react-one.vercel.app/",
      githubLink: "#",
    },
  ],
  featured: [
    {
      title: "JeeVijay Technologies",
      description: "An Indian tech company delivering scalable software, mobile apps, websites, and digital solutions. With a 35+ member team, we build automation dashboards and industry-specific tools that drive digital growth, efficiency, and innovation for startups, enterprises, and institutions.",
      image: "/Project_Images/jeevijay.png",
      tags: ["GSAP", "Swiper", "WowJS"],
      demoLink: "https://parivarsaathi.com/",
      // githubLink: "#"
    },
    {
      title: "Like minded",
      description: "Like Minded – A collective that unites musicians from all walks of life, including politicians, social servants, and professionals, through Indian classical music. It celebrates diversity by bringing together different perspectives into one soulful harmony. A platform where passion for music transcends boundaries.",
      image: "/Project_Images/likeMinded.png",
      tags: ["NextJs", "Tailwind CSS"],
      demoLink: "https://parivarsaathi.com/",
      // githubLink: "#"
    },
    {
      title: "Parivaar Sathi",
      description: "A community-first web platform built for Morskap Healthcare LLP to support families navigating fertility challenges. The platform provides trusted resources, emotional guidance, and easy access to experienced fertility professionals across India.",
      image: "/Project_Images/parivarsathi.png",
      tags: ["NextJS", "MongoDB", "ExpressJS"],
      demoLink: "https://parivarsaathi.com/",
      // githubLink:"#"
    },
    {
      title: "Tax Bar Kota - TBA",
      description: "Tax Bar Kota (TBA) – Established in 1952 under the leadership of Shri M. H. Ansari, TBA was founded by 13 eminent taxation professionals to create a common platform for tax practitioners. The association fosters knowledge-sharing, professional growth, and collaboration in the field of taxation law.",
      image: "/Project_Images/taxbarkota.png",
      tags: ["NextJS", "MongoDB", "ExpressJS"],
      demoLink: "https://tax-bar-kota.vercel.app/",
      // githubLink:"#"
    },
    {
      title: "Annapurna Public School - APS",
      description: "Annapurna Public School (APS) – A co-educational English medium school founded by Shree Annapurna Educational & Research Society in memory of Smt. Annapurna. Guided by Dr. B.V. Rao, an eminent scientist and educator, APS is committed to excellence in learning. The school nurtures creativity, expression, and global readiness through a balanced, quality education.",
      image: "/Project_Images/aps.png",
      tags: ["NextJS", "MongoDB", "ExpressJS"],
      demoLink: "https://aps-ashen.vercel.app/",
      // githubLink:"#"
    },
    {
      title: "Shree Ummed Club - Kota",
      description: "Shree Ummed Club Kota – Established in 1898, this historic club is a prestigious landmark blending heritage and modernity. Spread across 5 acres, it features a grand building, a rare library collection, and timeless architecture. Today, it combines tradition with amenities like synthetic tennis courts and a heritage-style billiard room, preserving its legacy of elegance.",
      image: "/Project_Images/ummedClub.png",
      tags: ["NextJS", "MongoDB", "ExpressJS"],
      demoLink: "https://www.ummedclubkota.com/",
      // githubLink:"#"
    },
  ],
  upcoming: [
    {
      title: "Eazydocs",
      description: "A multi user blogging website to simplify the messy documentation for my fellow developers",
      image: "/Project_Images/placeholder.svg",
      tags: ["NextJS", "Supabase", "ExpressJS"],
      // demoLink: "#",
      // githubLink: "#",
    },
  ],
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("personal")

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const handleTabClick = (e) => {
    const value = e.target.getAttribute('data-value')
    if (value) {
      setActiveTab(value)
    }
  }

  return (
    <section id="projects" className="w-full h-full py-20" style={{ background: "radial-gradient(ellipse at top, #2b1055 0%, #000000 100%)" }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-8"
        >
          <h2 className="font-[Bricolage_Grotesque] text-3xl w-fit mx-auto font-bold text-white tracking-tighter px-4 py-2 bg-[#6826ce] rounded-2xl mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground text-gray-300">Explore my work across different domains and technologies</p>
        </motion.div>

        <div className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-black h-10 items-center justify-center rounded-md bg-muted p-2 text-muted-foreground grid-cols-2 md:grid-cols-4" onClick={handleTabClick}>
              <button 
                className={`inline-flex text-gray-300 items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${activeTab === 'personal' ? 'bg-[#6826ce] text-black shadow-sm' : ''}`}
                data-value="personal"
              >
                Personal
              </button>
              <button 
                className={`inline-flex text-gray-300 items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${activeTab === 'featured' ? 'bg-[#6826ce] text-black shadow-sm' : ''}`}
                data-value="featured"
              >
                Featured
              </button>
              <button 
                className={`inline-flex text-gray-300 items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${activeTab === 'upcoming' ? 'bg-[#6826ce] text-black shadow-sm' : ''}`}
                data-value="upcoming"
              >
                Upcoming
              </button>
            </div>
          </div>

          {Object.keys(projects).map((category) => (
            activeTab === category && (
              <motion.div
                key={category}
                variants={container}
                initial="hidden"
                animate="show"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects[category].map((project, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="project-card group w-xs mx-auto lg:w-auto relative overflow-hidden rounded-lg border shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-70 transition-opacity z-10" />
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-fill transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.upcoming && (
                    <div className="absolute top-2 right-2 bg-[#6826ce] text-white text-xs font-medium px-2 py-1 rounded-full z-20">
                      Coming Soon
                    </div>
                  )}
                </div>

                <div className="p-6 h-auto bg-white/10 backdrop-blur-md border border-white/20">
                  <h3 className="font-[Bricolage_Grotesque] text-xl text-gray-50 font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300  text-sm mb-4 leading-relaxed line-clamp-2">{project.description}</p>

                  <div className="flex  flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <div key={tag} className="text-xs bg-[#6826ce] px-2 py-1 rounded-2xl text-gray-100">
                        {tag}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 text-gray-50">
                    {project.demoLink && (<Link href={project.demoLink} target="_blank" className="inline-flex items-center justify-center rounded-md text-sm font-medium py-1 px-2 border border-gray-50">
                      Demo 
                      <HiArrowUpRight className="ml-1 h-3 w-3" /> 
                    </Link>)}
                    {project.githubLink && (<Link href={project.githubLink} className="inline-flex items-center justify-center rounded-md text-sm font-medium py-1 px-2 border border-gray-50">
                      <FaGithub className="mr-1 h-3 w-3" />
                      Code
                    </Link>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
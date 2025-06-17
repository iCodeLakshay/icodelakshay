"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { HiArrowUpRight } from "react-icons/hi2"
import { FaGithub } from "react-icons/fa"

const projects = {
  "full-stack": [
    {
      title: "Samvaad",
      description: "Real-time chat application with group chats and direct messaging",
      image: "/samvaad.png",
      tags: ["MERN", "Socket.io", "Zustand"],
      demoLink: "https://samvaad-frontend.onrender.com",
      githubLink: "#",
    },
  ],
  frontend: [
    {
      title: "Crypto Flux",
      description: "Cryptocurrency tracking platform with real-time price updates",
      image: "/cryptoflux.png",
      tags: ["Next.js", "Radix UI", "Zustand", "Coingecko API"],
      demoLink: "https://crypto-flux-lime.vercel.app/",
      githubLink: "#",
    },
    {
      title: "Movie Recommendation",
      description: "Movie recommendation site with personalized suggestions",
      image: "/movieSS.png",
      tags: ["React.js", "TMDB API"],
      demoLink: "https://movie-site-react-one.vercel.app/",
      githubLink: "#",
    },
  ],
  backend: [
    {
      title: "API Gateway",
      description: "Centralized API gateway for microservices architecture",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Java", "Spring Boot", "JWT"],
      demoLink: "#",
      githubLink: "#",
    },
  ],
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("full-stack")

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
          <h2 className="font-[Bricolage_Grotesque] text-3xl w-fit mx-auto font-bold text-white tracking-tighter px-4 py-2 bg-black rounded-2xl mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground text-gray-300">Explore my work across different domains and technologies</p>
        </motion.div>

        <div className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-black h-10 items-center justify-center rounded-md bg-muted p-2 text-muted-foreground grid-cols-2 md:grid-cols-4" onClick={handleTabClick}>
              <button 
                className={`inline-flex text-gray-300 items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${activeTab === 'full-stack' ? 'bg-[#6826ce] text-black shadow-sm' : ''}`}
                data-value="full-stack"
              >
                Full-Stack
              </button>
              <button 
                className={`inline-flex text-gray-300 items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${activeTab === 'frontend' ? 'bg-[#6826ce] text-black shadow-sm' : ''}`}
                data-value="frontend"
              >
                Frontend
              </button>
              <button 
                className={`inline-flex text-gray-300 items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${activeTab === 'backend' ? 'bg-[#6826ce] text-black shadow-sm' : ''}`}
                data-value="backend"
              >
                Backend
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
                  <p className="text-gray-300  text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex  flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <div key={tag} className="text-xs bg-[#6826ce] px-2 py-1 rounded-2xl text-gray-100">
                        {tag}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 text-gray-50">
                    <Link href={project.demoLink} target="_blank" className="inline-flex items-center justify-center rounded-md text-sm font-medium py-1 px-2 border border-gray-50">
                      Demo 
                      <HiArrowUpRight className="ml-1 h-3 w-3" /> 
                    </Link>
                    <Link href={project.githubLink} className="inline-flex items-center justify-center rounded-md text-sm font-medium py-1 px-2 border border-gray-50">
                      <FaGithub className="mr-1 h-3 w-3" />
                      Code
                    </Link>
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
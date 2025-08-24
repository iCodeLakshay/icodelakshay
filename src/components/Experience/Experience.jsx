"use client"

import { motion } from "framer-motion"
import { HiMapPin, HiCalendar } from "react-icons/hi2"
import SpotlightCard from "./SpotlightCard"

const experiences = [
  {
    company: "Jee Vijay Technologies",
    position: "Web Developer", 
    location: "Kota, Rajasthan",
    duration: "Feb 2025 - Present",
    description: "Working on developing scalable web applications and contributing to various client projects using modern web technologies.",
    technologies: ["React.js", "Node.js", "JavaScript"], 
    type: "Full-time", 
  },
]

export default function Experience() {
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

  return (
    <section id="experience" className="w-full h-full py-20" style={{ background: "radial-gradient(ellipse at top, #2b1055 0%, #000000 100%)" }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-8"
        >
          <h2 className="font-[Bricolage_Grotesque] text-3xl w-fit mx-auto font-bold text-white tracking-tighter px-4 py-2 bg-[#6826ce] rounded-2xl mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground text-gray-300">My professional journey and work experience</p>
        </motion.div>

        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {experiences.map((experience, index) => (
                
              <motion.div
                key={index}
                variants={item}
                className="group relative overflow-hidden rounded-lg border shadow-md hover:shadow-lg transition-all duration-300"
              >
                <SpotlightCard key={index} className="custom-spotlight-card" spotlightColor="rgba(255, 255, 255, 0.15)">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-[Bricolage_Grotesque] text-xl text-gray-50 font-semibold mb-1">
                        {experience.position}
                      </h3>
                      <h4 className="font-[Bricolage_Grotesque] text-lg text-[#6826ce] font-medium mb-2">
                        {experience.company}
                      </h4>
                    </div>
                    <div className="flex flex-col md:items-end space-y-1">
                      <div className="inline-flex items-center text-gray-300 text-sm">
                        <HiCalendar className="mr-1 h-4 w-4" />
                        {experience.duration}
                      </div>
                      <div className="inline-flex items-center text-gray-300 text-sm">
                        <HiMapPin className="mr-1 h-4 w-4" />
                        {experience.location}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs bg-[#6826ce] px-2 py-1 rounded-2xl text-gray-100">
                      {experience.type}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <div key={tech} className="text-xs bg-black/30 border border-gray-500 px-2 py-1 rounded-2xl text-gray-200">
                        {tech}
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
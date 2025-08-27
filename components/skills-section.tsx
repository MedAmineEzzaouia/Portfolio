"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Brain, Workflow, LineChart, Bot } from "lucide-react"
import Image from "next/image"

// Dynamically import anime.js to ensure it only runs on the client
const AnimePromise = import("animejs").then((mod) => mod.default || mod)

// Simplified skills list
const skills = [
  {
    name: "FinTech Development",
    icon: <Brain className="w-8 h-8 text-primary" />,
    description: "Building innovative financial technology solutions and platforms",
  },
  {
    name: "AI & Risk Management",
    icon: <Workflow className="w-8 h-8 text-secondary" />,
    description: "Implementing AI solutions for financial risk analysis and management",
  },
  {
    name: "Data Analysis & BI",
    icon: <LineChart className="w-8 h-8 text-accent" />,
    description: "Financial modeling, data analysis, and business intelligence solutions",
  },
  {
    name: "Software Engineering",
    icon: <Bot className="w-8 h-8 text-primary" />,
    description: "Full-stack development with Java, Python, and modern frameworks",
  },
]

// Tech stack with Mohamed Amine's actual skills
const techStack = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Programming" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Programming" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Programming" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", category: "Framework" },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", category: "Framework" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", category: "Framework" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Database" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "DevOps" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", category: "DevOps" },
  { name: "Power BI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", category: "Analytics" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", category: "Tools" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Tools" },
  { name: "Version Control", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Development" },
  { 
    name: "Communication", 
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
      "https://www.svgrepo.com/show/376334/mattermost-logo.svg"
    ], 
    category: "Communication" 
  },
  { 
    name: "Documentation", 
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg"
    ], 
    category: "Documentation" 
  },
]

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const controls = useAnimation()
  const skillsRef = useRef<HTMLDivElement>(null)
  const [animeLoaded, setAnimeLoaded] = useState(false)

  useEffect(() => {
    if (isInView && animeLoaded) {
      controls.start("visible")

      // Animate skill cards with anime.js
      if (skillsRef.current) {
        AnimePromise.then((anime) => {
          anime({
            targets: skillsRef.current!.querySelectorAll(".skill-card"),
            scale: [0.9, 1],
            opacity: [0, 1],
            delay: anime.stagger(100),
            easing: "easeOutExpo",
            duration: 800,
            complete: () => {
              const elements = skillsRef.current?.querySelectorAll(".skill-card")
              if (elements) {
                elements.forEach((el) => {
                  ;(el as HTMLElement).style.opacity = "1"
                  ;(el as HTMLElement).style.transform = "scale(1)"
                })
              }
            },
          })
        }).catch((error) => {
          console.error("Error with anime.js animation:", error)
        })
      }
    }
  }, [isInView, controls, animeLoaded])

  useEffect(() => {
    // Load anime.js and set the flag
    AnimePromise.then(() => {
      setAnimeLoaded(true)
    }).catch((error) => {
      console.error("Error loading anime.js:", error)
    })
  }, [])

  useEffect(() => {
    controls.start("visible")
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="skills" className="py-20 md:py-32 relative bg-gradient-to-b from-background to-card/50">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-12"
          style={{ opacity: 1 }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-heading font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4"
          ></motion.div>
        </motion.div>

        {/* Core Skills - Simplified for mobile */}
        <div ref={skillsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass card-hover p-4 flex flex-col items-center text-center skill-card relative overflow-hidden group"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.2 },
              }}
              style={{ opacity: 1 }}
            >
              <div className="mb-3 p-2 rounded-full bg-card/50 relative z-10">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-primary/30 border-t-primary/80"
                ></motion.div>
                {skill.icon}
              </div>

              <h3 className="text-lg font-heading font-bold mb-1 relative z-10">{skill.name}</h3>
              <p className="text-gray-400 text-xs md:text-sm relative z-10 line-clamp-2">{skill.description}</p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Section - Grid layout for better mobile display */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ opacity: 1 }}
        >
          <h3 className="text-xl font-heading font-bold mb-6 text-center">
            Tech <span className="text-gradient">Stack</span>
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {techStack.map((tech, idx) => (
              <motion.div
                key={tech.name}
                className="glass p-3 rounded-xl flex flex-col items-center justify-center group hover:bg-card/30 transition-all duration-300"
                whileHover={{ y: -3, scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.05 }}
                style={{ opacity: 1 }}
              >
                <div className="w-8 h-8 mb-2 flex items-center justify-center">
                  {tech.icons ? (
                    // Multiple icons for categories with multiple tools
                    <div className="flex gap-1">
                      {tech.icons.map((iconUrl, iconIdx) => (
                        <Image
                          key={iconIdx}
                          src={iconUrl || "/placeholder.svg"}
                          alt={`${tech.name} ${iconIdx + 1}`}
                          width={24}
                          height={24}
                          className="w-6 h-6 object-contain filter group-hover:brightness-110 transition-all duration-300"
                        />
                      ))}
                    </div>
                  ) : (
                    // Single icon for regular categories
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                  )}
                </div>
                <span className="text-xs font-medium text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

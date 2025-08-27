"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"

// Dynamically import anime.js to ensure it only runs on the client
const AnimePromise = import("animejs").then((mod) => mod.default || mod)

const experiences = [
  {
    company: "Vermeg for Banking and Insurance Software",
    position: "Quantitative AI Engineer – Options Pricing Platform",
    period: "Dec 2024 - Aug 2025",
    description:
      "Built an end-to-end options pricing system using deep learning, hybrid AI models, and real-time financial data for production systems.",
    achievements: [
      "Built an end-to-end options pricing system using deep learning, hybrid AI models, and real-time financial data",
      "Designed and tuned advanced neural network architectures to accurately price both standard and complex derivative products",
      "Combined AI models with quantitative methods to handle challenging cases such as Bermudan and barrier options",
      "Created a high-speed infrastructure enabling real-time pricing, model execution, and market data integration",
      "Developed interactive dashboards to visualize volatility surfaces, Greeks, and live option chains",
      "Implemented resilient, always-on data pipelines to support continuous market data streaming and analytics",
    ],
    technologies: ["Python", "Deep Learning", "Monte Carlo", "InfluxDB", "React.js", "Kafka", "TimescaleDB"],
  },
  {
    company: "Vermeg for Banking and Insurance Software",
    position: "AI and Software Engineer",
    period: "June 2024 - August 2024",
    description:
      "Built an AI system to compare SWIFT files using NLP models to detect changes and developed integrated solutions with modern tech stack.",
    achievements: [
      "Implemented Python-based AI model with Flask for document comparison",
      "Integrated AI solution with Spring Boot backend architecture",
      "Developed Angular user interface for SWIFT file upload and results display",
      "Extracted and preprocessed text from PDFs for analyzable SWIFT files",
    ],
    technologies: ["Python", "Flask", "Spring Boot", "Angular", "NLP", "AI/ML"],
  },
  {
    company: "Vermeg for Banking and Insurance Software",
    position: "Software Developer - Web App 'Mega Go Live'",
    period: "July 2023 - August 2023",
    description:
      "Led the 'Mega Go Live' project to improve EAR file comparison, SQL script transformation, and simulation systems.",
    achievements: [
      "Coordinated team efforts ensuring clear communication and on-time delivery",
      "Automated SQL transformations improving system scalability and reliability",
      "Enhanced EAR file comparison processes and simulation capabilities",
    ],
    technologies: ["Java", "SQL", "System Integration", "Team Leadership"],
  },
  {
    company: "BIAT (Banque Internationale Arabe de Tunisie)",
    position: "Software Developer - HR Management Systems",
    period: "July 2021 - August 2021",
    description:
      "Developed a web app to automate leave and attendance tracking, improving HR efficiency and aligning technical solutions with business goals.",
    achievements: [
      "Built automated leave and attendance tracking system for HR department",
      "Worked closely with HR team to gather requirements and understand business needs",
      "Delivered web application that significantly improved HR operational efficiency",
    ],
    technologies: ["Web Development", "Database Design", "HR Systems", "Business Analysis"],
  },
  {
    company: "CRNE (National Register of Enterprises Center)",
    position: "Data Analyst",
    period: "May 2021 - July 2021",
    description:
      "Focused on the extraction and archiving of company registration data from the RNE. Gained hands-on experience in handling sensitive information and ensuring secure, reliable storage.",
    achievements: [
      "Extracted company registration data with high accuracy",
      "Secured sensitive information through proper storage and controlled access",
      "Built and maintained structured archives for long-term data retrieval",
      "Applied strict data-handling protocols to ensure compliance and reliability",
      "Strengthened practical skills in data management and organizational processes",
    ],
    technologies: ["SQL", "Python", "Excel", "File systems", "Document management systems"],
  },
]

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  // Changed once to false and reduced threshold to ensure better triggering
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const controls = useAnimation()
  const timelineRef = useRef<HTMLDivElement>(null)
  const [animeLoaded, setAnimeLoaded] = useState(false)
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)

  // Load anime.js
  useEffect(() => {
    AnimePromise.then(() => {
      setAnimeLoaded(true)
    }).catch((error) => {
      console.error("Error loading anime.js:", error)
    })
  }, [])

  // Ensure animations run when component mounts
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  useEffect(() => {
    if (isInView && animeLoaded) {
      controls.start("visible")

      // Animate timeline elements
      if (timelineRef.current) {
        AnimePromise.then((anime) => {
          anime({
            targets: timelineRef.current!.querySelectorAll(".timeline-dot"),
            scale: [0, 1],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 800,
            delay: anime.stagger(300),
            // Added complete callback to ensure final state
            complete: function() {
              // Set final state to ensure visibility
              const elements = timelineRef.current?.querySelectorAll(".timeline-dot");
              if (elements) {
                elements.forEach(el => {
                  (el as HTMLElement).style.opacity = "1";
                  (el as HTMLElement).style.transform = "scale(1)";
                });
              }
            }
          })

          anime({
            targets: timelineRef.current!.querySelectorAll(".timeline-line"),
            scaleY: [0, 1],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: 300,
            // Added complete callback to ensure final state
            complete: function() {
              // Set final state to ensure visibility
              const elements = timelineRef.current?.querySelectorAll(".timeline-line");
              if (elements) {
                elements.forEach(el => {
                  (el as HTMLElement).style.opacity = "1";
                  (el as HTMLElement).style.transform = "scaleY(1)";
                });
              }
            }
          })

          anime({
            targets: timelineRef.current!.querySelectorAll(".experience-card"),
            translateX: [40, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 800,
            delay: anime.stagger(300),
            // Added complete callback to ensure final state
            complete: function() {
              // Set final state to ensure visibility
              const elements = timelineRef.current?.querySelectorAll(".experience-card");
              if (elements) {
                elements.forEach(el => {
                  (el as HTMLElement).style.opacity = "1";
                  (el as HTMLElement).style.transform = "translateX(0)";
                });
              }
            }
          })
        }).catch((error) => {
          console.error("Error with anime.js animation:", error)
        })
      }
    }
  }, [isInView, controls, animeLoaded])

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
    <section id="experience" className="py-20 md:py-32 relative bg-gradient-to-b from-card/50 to-background">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
          style={{ opacity: 1 }} // Fallback opacity
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-2xl mx-auto">
            Transforming financial systems through intelligent automation and innovation
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4"
          ></motion.div>
        </motion.div>

        <div className="max-w-5xl mx-auto" ref={timelineRef}>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2 timeline-line origin-top"></div>

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative mb-12 md:mb-24 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 ml-12" : "md:pl-12 ml-12 md:ml-auto"
                }`}
                style={{
                  width: "100%",
                  maxWidth: "45%",
                  opacity: 1, // Fallback opacity
                }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-0 ${
                    index % 2 === 0 ? "left-0 md:right-0 md:left-auto" : "left-0"
                  } w-4 h-4 rounded-full bg-primary transform translate-x-[-8px] md:translate-x-[-50%] timeline-dot z-10`}
                  style={{ opacity: 1 }} // Fallback opacity
                ></div>

                {/* Content */}
                <motion.div
                  className="glass p-6 md:p-8 experience-card"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                    transition: { duration: 0.2 },
                  }}
                  style={{ opacity: 1 }} // Fallback opacity
                >
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/20 text-primary mb-4">
                    {exp.period}
                  </span>
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-2">{exp.position}</h3>
                  <h4 className="text-lg text-gray-300 mb-4">{exp.company}</h4>
                  <p className="text-gray-400 mb-4">{exp.description}</p>

                  {/* Read More button */}
                  <button
                    onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium mb-4"
                  >
                    {expandedExperience === index ? 'Read Less' : 'Read More'}
                    <ChevronRight className={`w-4 h-4 transition-transform ${expandedExperience === index ? 'rotate-90' : ''}`} />
                  </button>

                  {/* Key achievements - with AnimatePresence */}
                  <AnimatePresence>
                    {expandedExperience === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-white/10"
                      >
                        <h5 className="text-sm font-medium mb-2 text-secondary">Key Achievements</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-400">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-2"></span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Technologies */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-xs rounded-full bg-card/50 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Resume download button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          style={{ opacity: 1 }} // Fallback opacity
        >
          <motion.a
            href="/CV_Mohamed_Amine.pdf"
            download="CV_Mohamed_Amine.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass bg-primary/10 hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(252, 82, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Full Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, useAnimation, type PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight, TrendingUp, BarChart3, CreditCard, Gamepad2, Home, FileCode, Banknote } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "VaR Estimation System",
    description:
      "Advanced Value at Risk (VaR) estimation system for financial risk management using Monte Carlo simulation.",
    longDescription:
      "Developed a comprehensive VaR estimation system that calculates portfolio risk using Monte Carlo methods and historical simulation. The system provides accurate risk metrics for investment portfolios, enabling better risk management decisions in financial markets.",
    tags: ["FinTech", "Risk Management", "Monte Carlo", "Python"],
    image: "/images/projects/var-system.png",
    links: {
      demo: "#",
      github: "https://github.com/mohamedamine-ezzaouia/var-estimation",
    },
    features: ["Monte Carlo Simulation", "Historical VaR", "Portfolio Analysis", "Risk Metrics"],
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Market Trading Simulator",
    description:
      "Real-time market trading simulation platform with advanced charting and portfolio management capabilities.",
    longDescription:
      "Built a comprehensive trading simulator that allows users to practice trading strategies without financial risk. Features real-time market data integration, advanced technical analysis tools, portfolio tracking, and performance analytics to help users learn trading concepts.",
    tags: ["Trading", "Simulation", "Angular", "Spring Boot"],
    image: "/images/projects/trading-simulator.png",
    links: {
      demo: "#",
      github: "https://github.com/mohamedamine-ezzaouia/trading-simulator",
    },
    features: ["Real-time Data", "Technical Analysis", "Portfolio Management", "Performance Analytics"],
    color: "from-green-500/20 to-blue-500/20",
  },
  {
    title: "Nanocash Platform",
    description:
      "Innovative fintech platform for digital payments and financial services with modern web architecture.",
    longDescription:
      "Designed and developed Nanocash, a modern fintech platform that enables secure digital payments and financial services. The platform features user-friendly interfaces, secure transaction processing, and comprehensive financial management tools built with cutting-edge web technologies.",
    tags: ["FinTech", "Payments", "Web Development", "Security"],
    image: "/images/projects/nanocash.png",
    links: {
      demo: "#",
      github: "https://github.com/mohamedamine-ezzaouia/nanocash",
    },
    features: ["Digital Payments", "Security Features", "User Management", "Transaction Processing"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "GORENT",
    description:
      "Student-focused app that helps users find both a compatible roommate and the right place to live—all in one platform.",
    longDescription:
      "GORENT is a student-focused app that makes it easy to find both a compatible roommate and the right place to live on one platform. After filling out a short questionnaire about lifestyle, budget, and housing needs, students are matched with like-minded roommates and shown rental options tailored to their preferences. They can chat directly in the app, apply smart filters, explore 360° virtual tours, check landlord ratings, and handle payments securely. Whether looking to share a place or simply live nearby, GORENT removes the stress from finding the right match.",
    tags: ["Mobile App", "Roommate Matching", "Real Estate", "React Native"],
    image: "/images/projects/gorent.png",
    links: {
      demo: "#",
      github: "#",
    },
    features: ["Roommate Matching Algorithm", "Smart Property Filters", "360° Virtual Tours", "Secure Payment Processing", "In-app Chat System", "Landlord Rating System"],
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    title: "The Last Shade",
    description:
      "A 3-level game inspired by The 100, built in C as a way to practice and improve programming skills.",
    longDescription:
      "The Last Shade is a 3-level game inspired by The 100. It was built in C as a way to practice and improve programming skills. The project aims to tell a story with earthly characters in a galaxy-themed world, serve as a reference for learners exploring C, and share the creativity of Lords of Absurd with anyone ready for the adventure.",
    tags: ["C Programming", "Game Development", "Educational", "Storytelling"],
    image: "/images/projects/last-shade.png",
    links: {
      demo: "#",
      github: "#",
    },
    features: ["3-Level Gameplay", "Galaxy-themed World", "Educational Reference", "C Programming Practice"],
    color: "from-red-500/20 to-orange-500/20",
  },
]

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const controls = useAnimation()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const projectsRef = useRef<HTMLDivElement>(null)
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 })

  useEffect(() => {
    controls.start("visible")
  }, [controls])

  const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.1,
        },
      },
    },
    cardVariants = {
      hidden: { y: 30, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      },
    },
    itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      },
    }

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 50
    if (info.offset.x > threshold) {
      prevProject()
    } else if (info.offset.x < -threshold) {
      nextProject()
    }
  }

  const getProjectIcon = (index: number) => {
    const icons = [
      <Home key="gorent" className="w-5 h-5 text-white" />,
      <TrendingUp key="var" className="w-5 h-5 text-white" />,
      <BarChart3 key="trading" className="w-5 h-5 text-white" />,
      <CreditCard key="nanocash" className="w-5 h-5 text-white" />,
      <Gamepad2 key="lastshade" className="w-5 h-5 text-white" />,
    ]
    return icons[index] || <TrendingUp className="w-5 h-5 text-white" />
  }

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(var(--primary),0.1),transparent_40%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
          style={{ opacity: 1 }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          {/* <motion.p variants={itemVariants} className="text-gray-300 max-w-2xl mx-auto">
            Showcasing my expertise in FinTech development, risk management systems, and financial technology solutions
          </motion.p> */}
          <motion.div
            variants={itemVariants}
            className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4"
          ></motion.div>
        </motion.div>

        <div className="relative" ref={projectsRef}>
          {/* Desktop Navigation Arrows */}
          <div className="hidden lg:flex absolute top-1/2 -left-12 transform -translate-y-1/2 z-20">
            <motion.button
              onClick={prevProject}
              className="p-3 rounded-full glass hover:bg-card/50 transition-colors"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </motion.button>
          </div>

          <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
            <motion.button
              onClick={nextProject}
              className="p-3 rounded-full glass hover:bg-card/50 transition-colors"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Project Content with Swipe Support */}
          <div className="overflow-hidden">
            <motion.div
              key={activeIndex}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="grid md:grid-cols-2 gap-8 items-center project-card"
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              whileDrag={{ scale: 0.95 }}
            >
              <div className="order-2 md:order-1">
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                  style={{ opacity: 1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                      {getProjectIcon(activeIndex)}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold">{projects[activeIndex].title}</h3>
                  </div>

                  <motion.p
                    className="text-gray-300"
                    initial={{ height: "auto" }}
                    animate={{ height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    {isExpanded ? projects[activeIndex].longDescription : projects[activeIndex].description}
                  </motion.p>

                  <motion.button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-sm text-primary hover:text-secondary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {isExpanded ? "Show less" : "Read more"}
                  </motion.button>

                  <div className="flex flex-wrap gap-2">
                    {projects[activeIndex].tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full glass border border-primary/20"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <h4 className="text-lg font-medium">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {projects[activeIndex].features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-300"
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          style={{ opacity: 1 }}
                        >
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>

              <div className="order-1 md:order-2">
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  className="gradient-border p-1 rounded-2xl overflow-hidden"
                  style={{ opacity: 1 }}
                >
                  <div className={`rounded-xl overflow-hidden bg-gradient-to-br ${projects[activeIndex].color} p-4`}>
                    <motion.div
                      whileHover={{ scale: 1.03, rotate: 1 }}
                      transition={{ duration: 0.3 }}
                      className="neomorphic overflow-hidden rounded-lg"
                    >
                      <Image
                        src={projects[activeIndex].image || "/placeholder.svg"}
                        alt={projects[activeIndex].title}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-primary w-6" : "bg-gray-600 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Swipe Hint */}
          <div className="lg:hidden text-center mt-4">
            <p className="text-sm text-gray-400">Swipe left or right to navigate projects</p>
          </div>
        </div>

        {/* Mobile Navigation Buttons - Positioned Higher */}
        <div className="lg:hidden flex justify-center mt-6 gap-4">
          <motion.button
            onClick={prevProject}
            className="p-3 rounded-full glass hover:bg-card/50 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous project"
          >
            <ChevronLeft size={20} />
          </motion.button>
          <motion.button
            onClick={nextProject}
            className="p-3 rounded-full glass hover:bg-card/50 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next project"
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>

        {/* Additional projects preview */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {projects
            .filter((_, idx) => idx !== activeIndex)
            .slice(0, 3)
            .map((project, idx) => (
              <motion.div
                key={idx}
                className="glass p-5 rounded-xl hover:bg-card/30 transition-all cursor-pointer project-card"
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => setActiveIndex(projects.findIndex((p) => p.title === project.title))}
              >
                <div className="h-40 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                <p className="text-sm text-gray-400 line-clamp-2 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-primary/10 border border-primary/20">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-gray-700">+{project.tags.length - 2}</span>
                  )}
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  )
}

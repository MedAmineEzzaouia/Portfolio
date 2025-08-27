"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Users, Award, Calendar, MapPin, Target, Star, TrendingUp, Heart, Zap, Globe, ArrowRight, CheckCircle } from "lucide-react"

const organizations = [
  {
    id: "ieee",
    name: "IEEE ESPRIT Student Branch",
    logo: "https://ias-am.ieee.tn/images/logos/ieee-esprit.png",
    localLogo: "/images/projects/ieeelogo.png",
    color: "from-blue-500 to-indigo-500",
    icon: <Zap className="w-6 h-6" />,
    totalImpact: "700+ students",
    period: "2021 - 2024",
    experiences: [
      {
        year: "2023",
        title: "Robotics & Automation Leadership",
        position: "Vice President of RAS Chapter",
        milestone: "Technical Chapter Leadership", 
        description: "Elevated to VP of Robotics and Automation Society Chapter, focusing on technical workshops and competitions.",
        achievements: ["Organized 15+ technical workshops", "Led robotics competitions", "Mentored 25+ new members"],
        customLogo: "/images/projects/tech.jpg"
      },
      {
        year: "2022",
        title: "IEEE Brand Ambassadorship",
        position: "Brand Ambassador",
        milestone: "IEEE Brand Ambassador",
        description: "Elevated to IEEE Brand Ambassador role, strengthening student engagement and visibility across multiple chapters.",
        achievements: ["Increased student engagement by 40%", "Coordinated inter-chapter initiatives", "Organized major IEEE events"],
        customLogo: "/images/projects/IEEEamb.jpg"
      },
      {
        year: "2021",
        title: "Media & Communication Foundation",
        position: "Media Manager & Member",
        milestone: "First Leadership Role",
        description: "Started as a media manager, learning the foundations of technical communication and event organization.",
        achievements: ["Managed social media presence", "Created event promotional content", "Built technical communication skills"],
        customLogo: "/images/projects/1SScard.png"
      }
    ]
  },
  {
    id: "lions",
    name: "Lions Club Tunis Esprit",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Lions_Clubs_International_logo.svg/1200px-Lions_Clubs_International_logo.svg.png",
    localLogo: "/images/projects/lionslogo.png",
    color: "from-yellow-500 to-orange-500",
    icon: <Globe className="w-6 h-6" />,
    totalImpact: "300+ children supported",
    period: "2023",
    experiences: [
      {
        year: "2023",
        title: "Back-to-School Action",
        position: "Community Service Volunteer",
        milestone: "Educational Support Initiative",
        description: "Organized a comprehensive back-to-school solidarity initiative to support families and children in Kasserine region with essential school supplies.",
        achievements: [
          "Prepared and distributed 300 fully equipped backpacks",
          "Reached 3 primary schools in Kasserine: Mghira, Chkhalteya, Sidi Salem",
          "Collaborated with RAC Gasserine, Tunisian Scouts, and Jabr El Khawatir 2",
          "Organized fun activities and entertainment for children",
          "Created meaningful team building experiences among volunteers"
        ],
        customLogo: "/images/projects/action.jpg"
      }
    ]
  },
  {
    id: "rotaract",
    name: "Rotaract Clubs",
    logo: "https://e7.pngegg.com/pngimages/704/279/png-clipart-rotaract-logo-rotary-international-association-brand-southwestern-college-mathematics-text-logo.png",
    localLogo: "/images/projects/rotaractlogo.png",
    color: "from-primary to-primary/80",
    icon: <Heart className="w-6 h-6" />,
    totalImpact: "1,000+ community members",
    period: "2022 - 2024",
    experiences: [
      {
        year: "2024",
        title: "Humanitarian Impact & Legacy",
        position: "Senior Project Manager", 
        milestone: "Community Impact Leader",
        description: "Culminated leadership journey with lasting impact through sustainable community programs and massive outreach initiatives.",
        achievements: ["Delivered 14,000+ meals during Ramadan", "Raised $3,000+ for charitable causes", "Mentored 25+ new members"],
        customLogo: "/images/projects/3Scard.png"
      },
      {
        year: "2023",
        title: "Educational Infrastructure Development",
        position: "Project Manager",
        milestone: "Large-Scale Community Projects",
        description: "Managed large-scale community initiatives focusing on food security, health, education, and environmental awareness.",
        achievements: ["Head of project to rebuild and enhance infrastructure of 2 schools in Tunisian countryside", "Led environmental awareness campaigns", "Coordinated tree planting initiatives"],
        customLogo: "/images/projects/madrsa.jpg"
      },
      {
        year: "2022",
        title: "Media & Event Coordination",
        position: "Media Manager",
        milestone: "Media & Events Manager",
        description: "Joined Rotaract as Media Manager, organizing events and workshops while managing media outreach for community service and social impact projects.",
        achievements: ["Organized many events and workshops", "Managed media presence and communications", "Built event coordination skills"],
        customLogo: "/images/projects/2Scard.png"
      }
    ]
  }
]

const impactMetrics = [
  { label: "Total People Impacted", value: "1,800+", icon: <Users className="w-5 h-5" /> },
  { label: "Technical Events", value: "15+", icon: <Zap className="w-5 h-5" /> },
  { label: "Community Projects", value: "30+", icon: <Heart className="w-5 h-5" /> },
  { label: "Leadership Years", value: "4", icon: <Award className="w-5 h-5" /> }
]

export default function AssociativeExperienceJourney() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const controls = useAnimation()
  const [activeExperience, setActiveExperience] = useState(0)

  // Flatten all experiences into one continuous timeline
  const allExperiences = [
    ...organizations[0].experiences.map(exp => ({ ...exp, org: organizations[0] })),
    ...organizations[1].experiences.map(exp => ({ ...exp, org: organizations[1] })),
    ...organizations[2].experiences.map(exp => ({ ...exp, org: organizations[2] }))
  ]

  const currentExperience = allExperiences[activeExperience]

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveExperience((prev) => (prev + 1) % allExperiences.length)
    }, 90000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="associative" className="py-20 md:py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: "2s"}}></div>
        
        {/* Animated connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
          <motion.path
            d="M100,200 Q500,100 900,300 Q500,500 100,700"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(var(--primary))" stopOpacity="0.5" />
              <stop offset="50%" stopColor="rgb(var(--secondary))" stopOpacity="0.8" />
              <stop offset="100%" stopColor="rgb(var(--accent))" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Leadership <span className="text-gradient">Journey</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-3xl mx-auto mb-8">
            A progressive journey through leadership roles, community impact, and technical innovation - building skills, creating connections, and driving positive change.
          </motion.p>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          variants={containerVariants}
        >
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={itemVariants}
              className="glass p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="text-primary mb-2 flex justify-center">
                {metric.icon}
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
              <div className="text-xs text-gray-400">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Journey */}
        <div className="max-w-6xl mx-auto">
          {/* Continuous Experience Timeline */}
          {currentExperience && (
            <>
              {/* Current Organization Overview */}
              <motion.div
                key={`${currentExperience.org.id}-${activeExperience}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 text-center"
              >
                <div className="flex justify-center mb-4">
                  <img 
                    src={currentExperience.org.localLogo} 
                    alt={currentExperience.org.name}
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <div className="flex justify-center items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {currentExperience.org.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <Target className="w-4 h-4" />
                    {currentExperience.org.totalImpact}
                  </span>
                </div>
              </motion.div>

              {/* Experience Steps Navigation */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-2 glass p-2 rounded-full">
                  {currentExperience.org.experiences.map((exp, index) => {
                    // Calculate the actual index in allExperiences array
                    let orgStartIndex = 0;
                    if (currentExperience.org.id === 'lions') orgStartIndex = 3;
                    else if (currentExperience.org.id === 'rotaract') orgStartIndex = 4;
                    
                    const actualIndex = orgStartIndex + index;
                    
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveExperience(actualIndex)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                          activeExperience === actualIndex 
                            ? `bg-gradient-to-r ${currentExperience.org.color} text-white shadow-md` 
                            : "text-gray-400 hover:text-gray-200"
                        }`}
                      >
                        {exp.year}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Experience Content */}
              <motion.div
                key={activeExperience}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="glass rounded-3xl overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${currentExperience.org.color} p-1`}>
                  <div className="bg-card/95 rounded-3xl p-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      
                      {/* Content */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-3 rounded-full bg-gradient-to-r ${currentExperience.org.color} bg-opacity-20`}>
                            <div className="text-white">
                              {currentExperience.org.icon}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-primary font-semibold">{currentExperience.year}</div>
                            <div className="text-lg font-bold">{currentExperience.milestone}</div>
                          </div>
                        </div>

                        <h4 className="text-2xl font-heading font-bold mb-2">
                          {currentExperience.title}
                        </h4>
                        
                        <div className="text-secondary font-medium mb-1">
                          {currentExperience.org.name}
                        </div>
                        <div className="text-primary text-sm mb-4">
                          {currentExperience.position}
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed mb-6">
                          {currentExperience.description}
                        </p>

                        {/* Achievements */}
                        <div>
                          <h5 className="text-sm font-semibold text-secondary flex items-center gap-2 mb-3">
                            <CheckCircle className="w-4 h-4" />
                            Key Achievements
                          </h5>
                          <div className="space-y-2">
                            {currentExperience.achievements.map((achievement, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-3 text-sm text-gray-300"
                              >
                                <div className="w-2 h-2 rounded-full bg-accent"></div>
                                {achievement}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Visual Element */}
                      <div className="relative">
                        <motion.div
                          className={`w-full h-64 rounded-2xl ${currentExperience.customLogo ? 'bg-gray-800' : `bg-gradient-to-br ${currentExperience.org.color}`} p-1`}
                          whileHover={{ scale: 1.02 }}
                        >
                          {currentExperience.customLogo ? (
                            <div className="relative w-full h-full">
                              {/* Rotating border for custom images */}
                              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                <div className="absolute inset-0 animate-rotate-border">
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-75" 
                                       style={{
                                         background: `conic-gradient(from 0deg, transparent, rgb(var(--primary)), rgb(var(--secondary)), rgb(var(--accent)), transparent)`
                                       }}>
                                  </div>
                                </div>
                                <div className="absolute inset-[3px] rounded-2xl overflow-hidden">
                                  <div 
                                    className="w-full h-full bg-cover bg-center bg-no-repeat flex items-end justify-center pb-6"
                                    style={{
                                      backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${currentExperience.customLogo})`
                                    }}
                                  >
                                    <div className="text-center">
                                      <div className="text-white font-semibold text-lg">
                                        {currentExperience.year}
                                      </div>
                                      <div className="text-white/90 text-sm">
                                        {currentExperience.milestone}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="w-full h-full rounded-2xl bg-card/20 backdrop-blur-sm flex items-center justify-center">
                              <div className="text-center">
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 p-4">
                                  <img 
                                    src={currentExperience.org.logo} 
                                    alt={currentExperience.org.name}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                                <div className="text-white font-semibold text-lg">
                                  {currentExperience.year}
                                </div>
                                <div className="text-white/70 text-sm">
                                  {currentExperience.milestone}
                                </div>
                              </div>
                            </div>
                          )}
                        </motion.div>

                        {/* Floating progress indicator */}
                        <div className="absolute -top-4 -right-4 glass p-3 rounded-full">
                          <div className="text-primary text-sm font-bold">
                            {activeExperience + 1}/{allExperiences.length}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Experience Navigation Controls */}
              <div className="flex justify-center mt-8 gap-4">
                <button
                  onClick={() => setActiveExperience((prev) => (prev - 1 + allExperiences.length) % allExperiences.length)}
                  className="glass p-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </button>
                <button
                  onClick={() => setActiveExperience((prev) => (prev + 1) % allExperiences.length)}
                  className="glass p-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Mini Timeline */}
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2">
                  {allExperiences.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveExperience(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeExperience ? "bg-primary w-8" : "bg-gray-600 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <div className="glass p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-xl font-heading font-bold mb-4">
              Continue the <span className="text-gradient">Journey Together</span>
            </h3>
            <p className="text-gray-300 mb-6 text-sm">
              Interested in collaborating or learning more about leadership and community impact? Let's connect!
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

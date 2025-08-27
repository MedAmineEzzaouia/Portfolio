"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Users, Award, Calendar, MapPin, Target, Star, TrendingUp, Heart, Zap, Globe, ChevronRight, BarChart } from "lucide-react"

const associativeExperiences = [
  {
    organization: "IEEE ESPRIT Student Branch",
    position: "IEEE Brand Ambassador, Vice President of RAS Chapter, Media Manager",
    period: "2021 - 2024",
    location: "ESPRIT, Tunis",
    category: "Technical Leadership",
    description: "Held leadership and ambassador roles in IEEE, driving technical, professional, and community growth through events, media, and chapter development.",
    keyMetrics: {
      events: "15+",
      growth: "40%",
      reach: "500+",
      competitions: "Multiple"
    },
    achievements: [
      "Organized 15+ technical workshops and seminars on emerging technologies",
      "Led teams in major IEEE events and competitions",
      "Coordinated with industry professionals for guest lectures",
      "Managed student participation in international IEEE competitions",
      "Contributed to increasing student membership by 40% during tenure",
      "Served as IEEE Brand Ambassador, strengthening student engagement"
    ],
    skills: ["Leadership", "Event Management", "Team Coordination", "Technical Communication", "Public Speaking", "Media & Content Creation"],
    impact: "Reached 500+ students from different Student Branches through various initiatives",
    logo: "https://ias-am.ieee.tn/images/logos/ieee-esprit.png",
    color: "from-blue-500/20 to-indigo-500/20",
    primaryColor: "blue",
    icon: <Zap className="w-6 h-6" />
  },
  {
    organization: "Rotaract Clubs",
    position: "Vice President & Project Manager",
    period: "2022 - 2024", 
    location: "ESPRIT, Tunis",
    category: "Community Impact",
    description: "Led community service and social impact projects while managing media outreach. Built leadership, project management, and communication skills.",
    keyMetrics: {
      projects: "10+",
      donations: "200+",
      meals: "35,000+",
      fundraised: "$3,000+"
    },
    achievements: [
      "Managed 10+ community service projects benefiting local communities",
      "Organized blood donation campaigns collecting 200+ units annually",
      "Led environmental awareness campaigns and tree planting initiatives",
      "Coordinated fundraising activities raising $3000+ for charitable causes",
      "Mentored 25+ new members in service leadership",
      "Delivered 35,000+ meals during Ramadan campaigns"
    ],
    skills: ["Project Management", "Community Service", "Fundraising", "Social Impact", "Social Media Management"],
    impact: "Impacted 1000+ community members through service projects",
    logo: "https://e7.pngegg.com/pngimages/704/279/png-clipart-rotaract-logo-rotary-international-association-brand-southwestern-college-mathematics-text-logo.png",
    color: "from-red-500/20 to-yellow-500/20",
    primaryColor: "red",
    icon: <Heart className="w-6 h-6" />
  },
]

const impactStats = [
  { label: "Years of Leadership", value: "4+", icon: <Calendar className="w-5 h-5" />, color: "text-primary" },
  { label: "Projects Managed", value: "25+", icon: <Target className="w-5 h-5" />, color: "text-secondary" },
  { label: "People Impacted", value: "1,500+", icon: <Users className="w-5 h-5" />, color: "text-accent" },
  { label: "Events Organized", value: "15+", icon: <Star className="w-5 h-5" />, color: "text-blue-400" },
]

export default function AssociativeExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const controls = useAnimation()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

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

  const categories = ["all", "Technical Leadership", "Community Impact"]

  return (
    <section id="associative" className="py-20 md:py-32 relative">
      {/* Modern Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-secondary/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/2 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Leadership & <span className="text-gradient">Community Impact</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-2xl mx-auto mb-8">
            Driving positive change through technical leadership, community service, and impactful initiatives that create lasting value for society.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"
          ></motion.div>
        </motion.div>

        {/* Impact Stats Dashboard */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          variants={containerVariants}
        >
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="glass p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${stat.color === 'text-primary' ? 'from-primary/20 to-primary/10' : stat.color === 'text-secondary' ? 'from-secondary/20 to-secondary/10' : stat.color === 'text-accent' ? 'from-accent/20 to-accent/10' : 'from-blue-400/20 to-blue-400/10'} mb-4`}>
                <div className={stat.color}>
                  {stat.icon}
                </div>
              </div>
              <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex justify-center mb-12"
          variants={itemVariants}
        >
          <div className="glass p-2 rounded-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                }`}
              >
                {category === "all" ? "All Experience" : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Experience Cards */}
        <motion.div 
          className="max-w-7xl mx-auto space-y-8"
          variants={containerVariants}
        >
          {associativeExperiences
            .filter(exp => selectedCategory === "all" || exp.category === selectedCategory)
            .map((exp, index) => (
              <motion.div
                key={exp.organization}
                variants={itemVariants}
                className="glass rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -8 }}
              >
                <div className={`bg-gradient-to-r ${exp.color} p-1`}>
                  <div className="bg-card/95 rounded-3xl p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      
                      {/* Organization Info & Logo */}
                      <div className="lg:col-span-1">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
                            <img 
                              src={exp.logo} 
                              alt={exp.organization}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <div className={`text-${exp.primaryColor}-400`}>
                                {exp.icon}
                              </div>
                              <span className={`text-xs px-2 py-1 rounded-full bg-${exp.primaryColor}-500/10 text-${exp.primaryColor}-400 border border-${exp.primaryColor}-500/20`}>
                                {exp.category}
                              </span>
                            </div>
                            <h3 className="text-xl font-heading font-bold mb-1">{exp.organization}</h3>
                            <p className="text-primary font-medium text-sm mb-3">{exp.position}</p>
                            
                            <div className="space-y-2 text-sm text-gray-400">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Key Metrics */}
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-secondary flex items-center gap-2">
                            <BarChart className="w-4 h-4" />
                            Key Metrics
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            {Object.entries(exp.keyMetrics).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-lg font-bold text-accent">{value}</div>
                                <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Content & Achievements */}
                      <div className="lg:col-span-2">
                        <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                        {/* Impact Statement */}
                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-4 mb-6">
                          <div className="flex items-center gap-2 mb-2">
                            <Globe className="w-5 h-5 text-primary" />
                            <span className="text-sm font-semibold text-primary">Impact</span>
                          </div>
                          <p className="text-gray-300 text-sm">{exp.impact}</p>
                        </div>

                        {/* Achievements Grid */}
                        <div className="mb-6">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-sm font-semibold text-secondary flex items-center gap-2">
                              <Award className="w-4 h-4" />
                              Key Achievements
                            </h4>
                            <button
                              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                              className="text-primary hover:text-secondary transition-colors flex items-center gap-1 text-sm"
                            >
                              {expandedCard === index ? 'Show Less' : 'Show All'}
                              <ChevronRight className={`w-4 h-4 transition-transform ${expandedCard === index ? 'rotate-90' : ''}`} />
                            </button>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {exp.achievements.slice(0, expandedCard === index ? undefined : 4).map((achievement, idx) => (
                              <motion.div 
                                key={idx} 
                                className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-gray-300">{achievement}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Skills Tags */}
                        <div>
                          <h4 className="text-sm font-semibold text-secondary flex items-center gap-2 mb-3">
                            <Star className="w-4 h-4" />
                            Skills Developed
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, idx) => (
                              <motion.span 
                                key={idx} 
                                className="px-3 py-1.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <div className="glass p-8 rounded-3xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Ready to Create <span className="text-gradient">Impact Together?</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Let's collaborate on projects that drive positive change and create meaningful impact in our communities.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
              <ChevronRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

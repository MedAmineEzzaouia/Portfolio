"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Users, Award, Calendar, MapPin, Target, Star } from "lucide-react"

const associativeExperiences = [
  {
    organization: "IEEE ESPRIT Student Branch",
    position: "IEEE Brand Ambassador, Vice President of RAS Chapter, Media Manager (multiple chapters)",
    period: "2021 - 2024",
    location: "ESPRIT, Tunis",
    description: "Held leadership and ambassador roles in IEEE, driving technical, professional, and community growth through events, media, and chapter development.",
    achievements: [
      "Organized 15+ technical workshops and seminars on emerging technologies",
    "Led teams in major IEEE events and competitions",
    "Coordinated with industry professionals for guest lectures and career guidance",
    "Managed student participation in international IEEE competitions",
    "Contributed to increasing student membership by 40% during tenure",
    "Served as IEEE Brand Ambassador, strengthening student engagement and visibility",
    "Vice President of RAS Chapter: developed robotics and automation initiatives",
    "Media Manager: produced event coverage, digital campaigns, and chapter promotion",
    "Participated in multiple hackathons, workshops, and conferences",
    "Won several challenges and competitions at national and international levels",
    ],
    skills: ["Leadership", "Event Management", "Team Coordination", "Technical Communication", "Public Speaking", "Media & Content Creation"],
    impact: "Reached 500+ students from diffrent SB's through various initiatives",
    logo: "https://ias-am.ieee.tn/images/logos/ieee-esprit.png",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    organization: "Rotaract Clubs",
    position: "Vice President & Project Manager",
    period: "2022 - 2024", 
    location: "ESPRIT, Tunis",
    description: "Led community service and social impact projects while also managing media outreach. Built leadership, project management, and communication skills.",
    achievements: [
      "Managed 10+ community service projects benefiting local communities",
      "Organized blood donation campaigns collecting 200+ units annually",
      "Led environmental awareness campaigns and tree planting initiatives",
      "Coordinated fundraising activities raising $3000+ for charitable causes",
      "Mentored 25+ new members in service leadership and project execution",
      "Delivered 35,000+ meals during Ramadan campaigns",
      "Produced digital content that grew Rotaract’s local visibility and engagement",
    ],
    skills: ["Project Management", "Community Service", "Fundraising", "Social Impact", "Social Media Management"],
    impact: "Impacted 1000+ community members through service projects",
    logo: "https://e7.pngegg.com/pngimages/704/279/png-clipart-rotaract-logo-rotary-international-association-brand-southwestern-college-mathematics-text-logo.png",
    color: "from-red-500/20 to-yellow-500/20",
  },
]

export default function AssociativeExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const controls = useAnimation()
  const experiencesRef = useRef<HTMLDivElement>(null)
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
    <section id="associative" className="py-20 md:py-32 relative bg-gradient-to-b from-card/50 to-background">
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
          style={{ opacity: 1 }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Associative <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-2xl mx-auto">
            Leadership roles and community service initiatives demonstrating commitment to social impact and professional development
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4"
          ></motion.div>
        </motion.div>

        <div ref={experiencesRef} className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {associativeExperiences.map((exp, index) => (
              <motion.div
                key={exp.organization}
                className={`glass p-8 rounded-2xl experience-card relative overflow-hidden ${
                  index % 2 === 0 ? "" : "md:ml-8"
                }`}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
                  transition: { duration: 0.2 },
                }}
                style={{ opacity: 1 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-50 -z-10`}></div>

                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Organization Logo & Info */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center p-2">
                        <img 
                          src={exp.logo} 
                          alt={exp.organization}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold">{exp.organization}</h3>
                        <p className="text-primary font-medium">{exp.position}</p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        <span className="text-primary font-medium">{exp.impact}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-2/3">
                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-3 text-secondary flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Key Achievements
                      </h4>
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-400">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-2"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-sm font-medium mb-3 text-secondary flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Skills Developed
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            ))}
          </div>

          {/* Summary Stats */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="glass p-6 text-center rounded-2xl">
              <div className="text-2xl font-bold text-primary mb-2">4+</div>
              <div className="text-sm text-gray-400">Years of Leadership</div>
            </div>
            <div className="glass p-6 text-center rounded-2xl">
              <div className="text-2xl font-bold text-secondary mb-2">25+</div>
              <div className="text-sm text-gray-400">Projects Managed</div>
            </div>
            <div className="glass p-6 text-center rounded-2xl">
              <div className="text-2xl font-bold text-accent mb-2">1500+</div>
              <div className="text-sm text-gray-400">People Impacted</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

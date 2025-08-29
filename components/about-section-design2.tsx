"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { TrendingUp, Building, Coins, BarChart, User, Briefcase, Award, Quote } from "lucide-react"

export default function AboutSectionDesign2() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1, fallback: true })
  const [activeTab, setActiveTab] = useState("overview")

  const tabs = [
    { id: "overview", label: "Overview", icon: User },
    { id: "expertise", label: "AI Expertise", icon: Briefcase },
    { id: "impact", label: "Impact", icon: Award }
  ]

  const aiExpertise = [
    {
      icon: TrendingUp,
      title: "Smarter Decisions",
      description: "AI-driven systems process massive financial datasets in real time",
      benefits: ["Real-time data processing", "Data-backed insights", "Better investment strategies", "Risk assessment"]
    },
    {
      icon: Building,
      title: "Operational Excellence",
      description: "Automation that transforms financial workflows",
      benefits: ["Reduced manual tasks", "Faster transactions", "Improved accuracy", "Compliance automation"]
    },
    {
      icon: Coins,
      title: "Risk Management",
      description: "AI-powered security and regulatory compliance",
      benefits: ["Anomaly detection", "Fraud prevention", "Regulatory alignment", "Cost reduction"]
    },
    {
      icon: BarChart,
      title: "Scalable Growth",
      description: "Intelligent systems that adapt to market conditions",
      benefits: ["Market adaptability", "Institutional growth", "Cost efficiency", "Performance optimization"]
    }
  ]

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
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(var(--primary),0.1),transparent_40%)]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto" ref={ref}>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-heading font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"
            ></motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Panel - Enhanced Profile */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="glass p-8 rounded-3xl h-full">
                {/* Profile Card */}
                <div className="text-center mb-8">
                  <div className="relative inline-block mb-6">
                    <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 mx-auto">
                      <Image
                        src="/images/Amine-avatar.png"
                        alt="Mohamed Amine"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background"></div>
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold mb-2">Mohamed Amine Ezzaouia</h3>
                  <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <p className="text-primary font-medium text-sm">FinTech Engineer & AI Specialist</p>
                  </div>
                  <p className="text-gray-400 text-sm">ESPRIT Graduate</p>
                </div>

                {/* Key Skills */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg mb-4">Core Expertise</h4>
                  {["FinTech Engineering", "AI Automation", "Data-Driven Systems", "Software Architecture"].map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">5+</div>
                    <div className="text-xs text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-1">50+</div>
                    <div className="text-xs text-gray-400">Projects Delivered</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Panel - Tabbed Content */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Tab Navigation */}
              <div className="flex mb-8 p-1 bg-card/30 rounded-2xl backdrop-blur-sm">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-primary text-white shadow-lg'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Icon size={16} />
                      <span className="text-sm font-medium">{tab.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Tab Content */}
              <div className="glass p-8 rounded-3xl min-h-[400px]">
                {activeTab === "overview" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h4 className="text-2xl font-bold mb-6">Who I Am</h4>
                    <div className="space-y-4 text-gray-300">
                      <p>
                        I'm a Computer and Financial Technology Engineer, graduated from ESPRIT (Private Higher School of Engineering and Technology). With a strong foundation in software development, data analysis, and AI-driven automation.
                      </p>
                      <p>
                        I design and build end-to-end solutions that bridge finance and technology, leveraging advanced algorithms, intelligent data processing, and scalable architectures to enhance decision-making and operational efficiency.
                      </p>
                    </div>
                    
                    <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
                      <div className="flex items-start gap-3">
                        <Quote className="w-6 h-6 text-primary mt-1" />
                        <p className="text-gray-300 italic">
                          "Transforming financial systems through intelligent automation and human-centered design."
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "expertise" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h4 className="text-2xl font-bold mb-6">AI Automation in Finance</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      {aiExpertise.map((item, index) => {
                        const Icon = item.icon
                        return (
                          <div key={index} className="p-4 rounded-2xl bg-card/20 border border-white/10">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="p-2 rounded-lg bg-primary/10">
                                <Icon className="w-5 h-5 text-primary" />
                              </div>
                              <h5 className="font-semibold">{item.title}</h5>
                            </div>
                            <p className="text-sm text-gray-400 mb-3">{item.description}</p>
                            <ul className="space-y-1">
                              {item.benefits.map((benefit, i) => (
                                <li key={i} className="text-xs text-gray-300 flex items-center gap-2">
                                  <div className="w-1 h-1 rounded-full bg-primary"></div>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      })}
                    </div>
                  </motion.div>
                )}

                {activeTab === "impact" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h4 className="text-2xl font-bold mb-6">Real-World Impact</h4>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 rounded-2xl bg-primary/10 border border-primary/20">
                          <div className="text-2xl font-bold text-primary mb-2">85%</div>
                          <div className="text-sm text-gray-400">Process Efficiency</div>
                        </div>
                        <div className="text-center p-4 rounded-2xl bg-secondary/10 border border-secondary/20">
                          <div className="text-2xl font-bold text-secondary mb-2">60%</div>
                          <div className="text-sm text-gray-400">Cost Reduction</div>
                        </div>
                        <div className="text-center p-4 rounded-2xl bg-accent/10 border border-accent/20">
                          <div className="text-2xl font-bold text-accent mb-2">99.9%</div>
                          <div className="text-sm text-gray-400">Accuracy Rate</div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h5 className="font-semibold">Key Achievements</h5>
                        <div className="space-y-3">
                          {[
                            "Developed automated trading systems processing $10M+ daily volume",
                            "Reduced compliance reporting time from days to hours",
                            "Implemented fraud detection reducing false positives by 70%",
                            "Built scalable fintech platforms serving 100K+ users"
                          ].map((achievement, index) => (
                            <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-card/20">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                              <span className="text-gray-300 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

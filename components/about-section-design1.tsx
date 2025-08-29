"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { TrendingUp, Building, Coins, BarChart, ChevronRight, Brain, Target, Shield, Zap } from "lucide-react"

export default function AboutSectionDesign1() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1, fallback: true })
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const [showMore, setShowMore] = useState<boolean>(false)

  const aiFeatures = [
    {
      icon: Brain,
      title: "Smarter Decisions",
      color: "primary",
      summary: "AI-driven insights for better strategies",
      detail: "AI-driven systems process and analyze massive financial datasets in real time, giving faster, data-backed insights for better investment and risk strategies."
    },
    {
      icon: Zap,
      title: "Operational Impact",
      color: "secondary", 
      summary: "Automation that transforms workflows",
      detail: "Automation in finance cuts repetitive manual tasks, speeds up transactions, and improves accuracy across payment processing, compliance, and reporting."
    },
    {
      icon: Shield,
      title: "Risk & Compliance",
      color: "accent",
      summary: "AI-powered security and compliance",
      detail: "AI models detect anomalies, flag suspicious activities, and ensure regulatory alignment—reducing exposure to costly compliance breaches."
    },
    {
      icon: Target,
      title: "Scalable Solutions",
      color: "primary",
      summary: "Growth without proportional costs",
      detail: "Intelligent automation adapts to evolving market conditions, enabling financial institutions to grow without scaling costs proportionally."
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

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Panel - Modern Profile Card */}
            <div className="space-y-6">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="glass p-8 rounded-3xl relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl"></div>
                  
                  {/* Profile Header */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10">
                          <Image
                            src="/images/Amine-avatar.png"
                            alt="Mohamed Amine"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-heading font-bold mb-1">Mohamed Amine Ezzaouia</h3>
                        <p className="text-primary font-medium">FinTech Engineer & AI Enthusiast</p>
                        <p className="text-gray-400 text-sm">ESPRIT Graduate</p>
                      </div>
                    </div>

                    {/* Bio */}
                    <div className="space-y-4 mb-6">
                      <p className="text-gray-300 leading-relaxed">
                        I'm Mohamed Amine Ezzaouia, a Computer and Financial Technology Engineer, graduated from ESPRIT (Private Higher School of Engineering and Technology). With a strong foundation in software development, data analysis, and AI-driven automation.
                      </p>
                      
                      <AnimatePresence>
                        {showMore && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                          >
                            <p className="text-gray-300 leading-relaxed">
                              I design and build end-to-end solutions that bridge finance and technology, leveraging advanced algorithms, intelligent data processing, and scalable architectures to enhance decision-making and operational efficiency.
                            </p>
                            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/5 border border-primary/20">
                              <p className="text-gray-300 italic text-sm leading-relaxed">
                                "AI automation in finance isn't just technology, it's the engine for smarter, safer, and more inclusive financial systems, always guided by human insight."
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      <button
                        onClick={() => setShowMore(!showMore)}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                      >
                        {showMore ? 'Read Less' : 'Read More'}
                        <ChevronRight className={`w-4 h-4 transition-transform ${showMore ? 'rotate-90' : ''}`} />
                      </button>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {["FinTech Engineering", "AI Automation", "Data-Driven Systems", "Software Architecture"].map((skill, index) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1.5 text-xs rounded-xl glass border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Panel - Interactive AI Features */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-heading font-bold mb-2">AI Automation in Finance</h3>
                <p className="text-gray-400 text-sm">Click on any card to explore how AI transforms financial systems</p>
              </div>

              <div className="grid gap-4">
                {aiFeatures.map((feature, index) => {
                  const Icon = feature.icon
                  const isSelected = selectedCard === index
                  
                  return (
                    <motion.div
                      key={index}
                      className={`glass p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                        isSelected ? 'ring-2 ring-primary/50 scale-105' : 'hover:scale-102'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      onClick={() => setSelectedCard(isSelected ? null : index)}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-${feature.color}/10 border border-${feature.color}/20`}>
                          <Icon className={`w-5 h-5 text-${feature.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className={`font-semibold text-${feature.color}`}>{feature.title}</h4>
                            <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                          </div>
                          <p className="text-gray-300 text-sm">{feature.summary}</p>
                          
                          <AnimatePresence>
                            {isSelected && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-3 pt-3 border-t border-white/10"
                              >
                                <p className="text-gray-300 text-sm leading-relaxed">{feature.detail}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

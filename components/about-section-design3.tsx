"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Target, Play, Pause, Star, Sparkles } from "lucide-react"

export default function AboutSectionDesign3() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1, fallback: true })
  const [activeFeature, setActiveFeature] = useState<number>(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const aiJourney = [
    {
      step: "01",
      title: "Smart Analytics",
      icon: Brain,
      color: "primary",
      description: "Real-time financial data processing",
      keyFeature: "10TB+ processed daily",
      impact: "99.9% accuracy",
      visual: "📊"
    },
    {
      step: "02", 
      title: "Process Automation",
      icon: Zap,
      color: "secondary",
      description: "Streamlined workflows & operations",
      keyFeature: "85% automation rate",
      impact: "60% faster processing",
      visual: "⚡"
    },
    {
      step: "03",
      title: "Risk Protection",
      icon: Shield,
      color: "accent",
      description: "AI-powered security systems",
      keyFeature: "99.7% fraud detection",
      impact: "100% compliance",
      visual: "🛡️"
    },
    {
      step: "04",
      title: "Scalable Growth",
      icon: Target,
      color: "primary",
      description: "Adaptive market solutions",
      keyFeature: "10x scalability",
      impact: "Future-ready",
      visual: "🎯"
    }
  ]

  // Auto-rotate through features
  useEffect(() => {
    if (!isAutoPlay) return
    
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % aiJourney.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [isAutoPlay, aiJourney.length])

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
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(var(--primary),0.1),transparent_40%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(var(--secondary),0.1),transparent_40%)]"></div>
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto" ref={ref}>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-20"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">Meet Your FinTech Engineer</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-heading font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto text-lg">
              Transforming financial systems through intelligent automation
            </motion.p>
          </motion.div>

          {/* Hero Section - Compact */}
          <motion.div
            className="grid lg:grid-cols-5 gap-8 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Left - Compact Profile */}
            <div className="lg:col-span-2">
              <div className="glass p-6 rounded-3xl relative overflow-hidden h-full">
                {/* Animated background */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
                
                <div className="relative z-10">
                  {/* Compact Profile Header */}
                  <div className="text-center mb-6">
                    <div className="relative inline-block mb-4">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10">
                        <Image
                          src="/images/Amine-avatar.png"
                          alt="Mohamed Amine"
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-heading font-bold mb-2 text-gradient">Mohamed Amine Ezzaouia</h3>
                    <div className="inline-block px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/20">
                      <p className="text-primary font-medium text-sm">FinTech Engineer & AI Enthusiast</p>
                    </div>
                  </div>

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="text-center p-3 rounded-xl bg-primary/5 border border-primary/10">
                      <div className="text-2xl font-bold text-primary mb-1">5+</div>
                      <div className="text-xs text-gray-400">Years</div>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-secondary/5 border border-secondary/10">
                      <div className="text-2xl font-bold text-secondary mb-1">50+</div>
                      <div className="text-xs text-gray-400">Projects</div>
                    </div>
                  </div>

                  {/* Mission Statement */}
                  <div className="text-center">
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      Building intelligent financial systems that bridge technology and human insight.
                    </p>
                    
                    {/* Core Values */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {["Innovation", "Security", "Scalability"].map((value, index) => (
                        <span key={value} className="px-2 py-1 text-xs rounded-lg bg-accent/10 text-accent border border-accent/20">
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Interactive Feature Showcase */}
            <div className="lg:col-span-3">
              <div className="glass p-6 rounded-3xl h-full">
                {/* Header with controls */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-heading font-bold mb-1">AI Automation Showcase</h4>
                    <p className="text-gray-400 text-sm">Click or watch the auto-demo</p>
                  </div>
                  <button
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    {isAutoPlay ? <Pause className="w-4 h-4 text-primary" /> : <Play className="w-4 h-4 text-primary" />}
                  </button>
                </div>

                {/* Feature Display */}
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFeature}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/5 border border-white/10 mb-6"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-4xl">{aiJourney[activeFeature].visual}</div>
                        <div>
                          <h5 className="text-xl font-bold text-white mb-1">{aiJourney[activeFeature].title}</h5>
                          <p className="text-gray-400 text-sm">{aiJourney[activeFeature].description}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 rounded-lg bg-card/30">
                          <div className="text-lg font-bold text-primary">{aiJourney[activeFeature].keyFeature}</div>
                          <div className="text-xs text-gray-400">Key Feature</div>
                        </div>
                        <div className="p-3 rounded-lg bg-card/30">
                          <div className="text-lg font-bold text-secondary">{aiJourney[activeFeature].impact}</div>
                          <div className="text-xs text-gray-400">Impact</div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Feature Navigation */}
                <div className="grid grid-cols-4 gap-2">
                  {aiJourney.map((item, index) => {
                    const Icon = item.icon
                    const isActive = activeFeature === index
                    
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          setActiveFeature(index)
                          setIsAutoPlay(false)
                        }}
                        className={`p-3 rounded-xl transition-all duration-300 ${
                          isActive 
                            ? `bg-${item.color}/20 border-${item.color}/30 scale-105` 
                            : 'bg-card/20 hover:bg-card/30 border-white/10'
                        } border`}
                      >
                        <Icon className={`w-5 h-5 mx-auto mb-2 ${isActive ? `text-${item.color}` : 'text-gray-400'}`} />
                        <div className={`text-xs font-medium ${isActive ? 'text-white' : 'text-gray-400'}`}>
                          {item.title.split(' ')[0]}
                        </div>
                      </button>
                    )
                  })}
                </div>

                {/* Progress bar */}
                <div className="mt-4 w-full bg-card/30 rounded-full h-1">
                  <motion.div
                    className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((activeFeature + 1) / aiJourney.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quote Section - Minimal */}
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="glass p-8 rounded-3xl">
              <Star className="w-8 h-8 text-primary mx-auto mb-4" />
              <blockquote className="text-xl md:text-2xl font-medium text-gray-300 italic leading-relaxed mb-4">
                "AI automation in finance isn't just technology—it's the engine for smarter, safer, and more inclusive financial systems."
              </blockquote>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

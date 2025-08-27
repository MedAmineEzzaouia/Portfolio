"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Users, Award, Calendar, MapPin, Target, Star, TrendingUp, Heart, Zap, Globe, Network, Waves, Activity } from "lucide-react"

const impactNodes = [
  {
    id: "ieee",
    title: "IEEE Leadership",
    organization: "IEEE ESPRIT Student Branch",
    type: "Technical",
    impact: 500,
    connections: ["students", "industry", "innovation"],
    color: "blue",
    position: { x: 20, y: 30 },
    icon: <Zap className="w-5 h-5" />,
    details: {
      roles: ["Brand Ambassador", "VP RAS Chapter", "Media Manager"],
      achievements: ["15+ workshops", "40% membership growth", "Multiple competitions"],
      period: "2021-2024"
    }
  },
  {
    id: "rotaract",
    title: "Community Service",
    organization: "Rotaract Clubs",
    type: "Community",
    impact: 1000,
    connections: ["community", "charity", "volunteers"],
    color: "red",
    position: { x: 80, y: 70 },
    icon: <Heart className="w-5 h-5" />,
    details: {
      roles: ["Vice President", "Project Manager"],
      achievements: ["35K+ meals delivered", "$3K+ fundraised", "200+ blood units"],
      period: "2022-2024"
    }
  },
  {
    id: "innovation",
    title: "Technical Innovation",
    organization: "Workshops & Competitions",
    type: "Innovation",
    impact: 300,
    connections: ["students", "ieee", "industry"],
    color: "green", 
    position: { x: 60, y: 20 },
    icon: <Activity className="w-5 h-5" />,
    details: {
      roles: ["Technical Lead", "Mentor"],
      achievements: ["Robotics initiatives", "AI workshops", "Competition wins"],
      period: "2021-2024"
    }
  },
  {
    id: "mentorship",
    title: "Leadership Development",
    organization: "Mentoring & Training",
    type: "Development",
    impact: 250,
    connections: ["students", "ieee", "rotaract"],
    color: "purple",
    position: { x: 40, y: 80 },
    icon: <Users className="w-5 h-5" />,
    details: {
      roles: ["Mentor", "Trainer"],
      achievements: ["25+ members mentored", "Leadership programs", "Skill development"],
      period: "2022-2024"
    }
  }
]

const connectionLines = [
  { from: "ieee", to: "innovation", strength: 0.9 },
  { from: "ieee", to: "mentorship", strength: 0.7 },
  { from: "rotaract", to: "mentorship", strength: 0.8 },
  { from: "innovation", to: "mentorship", strength: 0.6 },
]

const impactStats = [
  { label: "Organizations", value: "4+", icon: <Network className="w-5 h-5" />, color: "primary" },
  { label: "Direct Impact", value: "1,500+", icon: <Users className="w-5 h-5" />, color: "secondary" },
  { label: "Projects Led", value: "25+", icon: <Target className="w-5 h-5" />, color: "accent" },
  { label: "Years Active", value: "4", icon: <Calendar className="w-5 h-5" />, color: "blue-400" },
]

export default function AssociativeExperienceNetwork() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const controls = useAnimation()
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

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

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: "bg-blue-500/20", border: "border-blue-500/30", text: "text-blue-400" },
      red: { bg: "bg-red-500/20", border: "border-red-500/30", text: "text-red-400" },
      green: { bg: "bg-green-500/20", border: "border-green-500/30", text: "text-green-400" },
      purple: { bg: "bg-purple-500/20", border: "border-purple-500/30", text: "text-purple-400" },
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const selectedNodeData = selectedNode ? impactNodes.find(node => node.id === selectedNode) : null

  return (
    <section id="associative" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
        
        {/* Network-like background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <motion.div
                key={i}
                className="border-r border-b border-primary/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ 
                  duration: 2, 
                  delay: i * 0.1, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))}
          </div>
        </div>
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
            Impact <span className="text-gradient">Network</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-3xl mx-auto mb-8">
            Visualizing the interconnected web of leadership roles, community impact, and collaborative initiatives that create lasting positive change.
          </motion.p>
        </motion.div>

        {/* Impact Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          variants={containerVariants}
        >
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="glass p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300"
            >
              <div className={`text-${stat.color} mb-2 flex justify-center`}>
                {stat.icon}
              </div>
              <div className={`text-2xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Impact Network Visualization */}
          <div className="lg:col-span-2">
            <motion.div
              className="glass p-8 rounded-3xl h-96 relative overflow-hidden"
              variants={itemVariants}
            >
              <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-2">
                <Network className="w-5 h-5 text-primary" />
                Leadership Impact Map
              </h3>
              
              {/* SVG Network Visualization */}
              <div className="relative w-full h-full">
                <svg className="absolute inset-0 w-full h-full">
                  {/* Connection Lines */}
                  {connectionLines.map((connection, index) => {
                    const fromNode = impactNodes.find(n => n.id === connection.from)
                    const toNode = impactNodes.find(n => n.id === connection.to)
                    if (!fromNode || !toNode) return null
                    
                    return (
                      <motion.line
                        key={index}
                        x1={`${fromNode.position.x}%`}
                        y1={`${fromNode.position.y}%`}
                        x2={`${toNode.position.x}%`}
                        y2={`${toNode.position.y}%`}
                        stroke="rgb(var(--primary))"
                        strokeWidth={connection.strength * 3}
                        strokeOpacity={0.4}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    )
                  })}
                </svg>

                {/* Impact Nodes */}
                {impactNodes.map((node, index) => {
                  const colorClasses = getColorClasses(node.color)
                  const isSelected = selectedNode === node.id
                  const isHovered = hoveredNode === node.id
                  
                  return (
                    <motion.div
                      key={node.id}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer`}
                      style={{ 
                        left: `${node.position.x}%`, 
                        top: `${node.position.y}%` 
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: isSelected || isHovered ? 1.2 : 1, 
                        opacity: 1 
                      }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.3 }}
                      onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
                      onHoverStart={() => setHoveredNode(node.id)}
                      onHoverEnd={() => setHoveredNode(null)}
                    >
                      <div className={`relative p-4 rounded-full glass border-2 ${colorClasses.border} ${colorClasses.bg}`}>
                        <div className={colorClasses.text}>
                          {node.icon}
                        </div>
                        
                        {/* Impact ripple effect */}
                        <motion.div
                          className={`absolute inset-0 rounded-full border-2 ${colorClasses.border}`}
                          animate={{ 
                            scale: [1, 1.5, 2],
                            opacity: [0.6, 0.3, 0]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: index * 0.5
                          }}
                        />
                        
                        {/* Node label */}
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-center whitespace-nowrap">
                          <div className="font-medium text-gray-300">{node.title}</div>
                          <div className={`text-xs ${colorClasses.text}`}>{node.impact}+ impacted</div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Node Details Panel */}
          <div className="lg:col-span-1">
            <motion.div
              className="glass p-6 rounded-3xl h-96"
              variants={itemVariants}
            >
              {selectedNodeData ? (
                <motion.div
                  key={selectedNodeData.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="h-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-full ${getColorClasses(selectedNodeData.color).bg} border ${getColorClasses(selectedNodeData.color).border}`}>
                      <div className={getColorClasses(selectedNodeData.color).text}>
                        {selectedNodeData.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold">{selectedNodeData.title}</h4>
                      <p className="text-sm text-gray-400">{selectedNodeData.organization}</p>
                    </div>
                  </div>

                  <div className="space-y-4 flex-1">
                    <div>
                      <h5 className="text-sm font-semibold text-secondary mb-2">Roles</h5>
                      <div className="space-y-1">
                        {selectedNodeData.details.roles.map((role, idx) => (
                          <div key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                            {role}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-semibold text-secondary mb-2">Key Achievements</h5>
                      <div className="space-y-1">
                        {selectedNodeData.details.achievements.map((achievement, idx) => (
                          <div key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                        <span className="text-sm text-gray-400">Period</span>
                        <span className="text-sm font-medium text-primary">{selectedNodeData.details.period}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 mt-2">
                        <span className="text-sm text-gray-400">Impact Reach</span>
                        <span className="text-sm font-bold text-accent">{selectedNodeData.impact}+ people</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="h-full flex items-center justify-center text-center">
                  <div>
                    <Globe className="w-12 h-12 text-primary/50 mx-auto mb-4" />
                    <h4 className="font-heading font-bold mb-2">Explore the Network</h4>
                    <p className="text-sm text-gray-400">Click on any node to see detailed information about that area of impact.</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Impact Waves Visualization */}
        <motion.div
          className="mt-16 glass p-8 rounded-3xl"
          variants={itemVariants}
        >
          <h3 className="text-xl font-heading font-bold mb-6 text-center flex items-center justify-center gap-2">
            <Waves className="w-5 h-5 text-primary" />
            Ripple Effect of Impact
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactNodes.map((node, index) => (
              <motion.div
                key={node.id}
                className="text-center space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`mx-auto w-16 h-16 rounded-full ${getColorClasses(node.color).bg} border-2 ${getColorClasses(node.color).border} flex items-center justify-center`}>
                  <div className={getColorClasses(node.color).text}>
                    {node.icon}
                  </div>
                </div>
                <h4 className="font-semibold">{node.title}</h4>
                <div className={`text-2xl font-bold ${getColorClasses(node.color).text}`}>
                  {node.impact}+
                </div>
                <p className="text-xs text-gray-400">People Impacted</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

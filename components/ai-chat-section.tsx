"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Send, Bot, User, Sparkles, RefreshCw } from "lucide-react"
import Image from "next/image"

// Personal information and knowledge base for Mohamed Amine Ezzaouia
const personalInfo = {
  name: "Mohamed Amine Ezzaouia",
  title: "Computer and Financial Technology Engineer",
  education: "ESPRIT (Private Higher School of Engineering and Technology)",
  location: "Tunis, Tunisia",
  email: "mohamedamineezzaouia3@gmail.com",
  phone: "+216 55 999 889",
  specializations: [
    "FinTech Engineering",
    "AI Automation",
    "Data-Driven Systems", 
    "Software Architecture",
    "Quantitative Finance",
    "Options Pricing",
    "Risk Management"
  ],
  biography: "Computer and Financial Technology Engineer graduated from ESPRIT. With a strong foundation in software development, data analysis, and AI-driven automation. I design and build end-to-end solutions that bridge finance and technology, leveraging advanced algorithms, intelligent data processing, and scalable architectures to enhance decision-making and operational efficiency. Skilled in Python, Java, SQL, and modern frameworks, I specialize in applying artificial intelligence to streamline financial operations, optimize data management, and deliver high-impact systems that meet real-world business needs.",
  philosophy: "For me, AI automation in finance isn't just technology, it's the engine for smarter, safer, and more inclusive financial systems, always guided by human insight to meet the needs of our era."
}

const experiences = [
  {
    company: "Vermeg for Banking and Insurance Software",
    position: "Quantitative AI Engineer – Options Pricing Platform",
    period: "Dec 2024 - Aug 2025",
    description: "Built an end-to-end options pricing system using deep learning, hybrid AI models, and real-time financial data for production systems.",
    achievements: [
      "Built an end-to-end options pricing system using deep learning, hybrid AI models, and real-time financial data",
      "Designed and tuned advanced neural network architectures to accurately price both standard and complex derivative products",
      "Combined AI models with quantitative methods to handle challenging cases such as Bermudan and barrier options",
      "Created a high-speed infrastructure enabling real-time pricing, model execution, and market data integration",
      "Developed interactive dashboards to visualize volatility surfaces, Greeks, and live option chains",
      "Implemented resilient, always-on data pipelines to support continuous market data streaming and analytics"
    ],
    technologies: ["Python", "Deep Learning", "Monte Carlo", "InfluxDB", "React.js", "Kafka", "TimescaleDB"]
  },
  {
    company: "Vermeg for Banking and Insurance Software",
    position: "AI and Software Engineer",
    period: "June 2024 - August 2024",
    description: "Built an AI system to compare SWIFT files using NLP models to detect changes and developed integrated solutions with modern tech stack.",
    achievements: [
      "Implemented Python-based AI model with Flask for document comparison",
      "Integrated AI solution with Spring Boot backend architecture",
      "Developed Angular user interface for SWIFT file upload and results display",
      "Extracted and preprocessed text from PDFs for analyzable SWIFT files"
    ],
    technologies: ["Python", "Flask", "Spring Boot", "Angular", "NLP", "AI/ML"]
  },
  {
    company: "Vermeg for Banking and Insurance Software",
    position: "Software Developer - Web App 'Mega Go Live'",
    period: "July 2023 - August 2023",
    description: "Led the 'Mega Go Live' project to improve EAR file comparison, SQL script transformation, and simulation systems.",
    achievements: [
      "Coordinated team efforts ensuring clear communication and on-time delivery",
      "Automated SQL transformations improving system scalability and reliability",
      "Enhanced EAR file comparison processes and simulation capabilities"
    ],
    technologies: ["Java", "SQL", "System Integration", "Team Leadership"]
  },
  {
    company: "BIAT (Banque Internationale Arabe de Tunisie)",
    position: "Software Developer - HR Management Systems",
    period: "July 2021 - August 2021",
    description: "Developed a web app to automate leave and attendance tracking, improving HR efficiency and aligning technical solutions with business goals.",
    achievements: [
      "Built automated leave and attendance tracking system for HR department",
      "Worked closely with HR team to gather requirements and understand business needs",
      "Delivered web application that significantly improved HR operational efficiency"
    ],
    technologies: ["Web Development", "Database Design", "HR Systems", "Business Analysis"]
  },
  {
    company: "CRNE (National Register of Enterprises Center)",
    position: "Data Analyst",
    period: "May 2021 - July 2021",
    description: "Focused on the extraction and archiving of company registration data from the RNE. Gained hands-on experience in handling sensitive information and ensuring secure, reliable storage.",
    achievements: [
      "Extracted company registration data with high accuracy",
      "Secured sensitive information through proper storage and controlled access",
      "Built and maintained structured archives for long-term data retrieval",
      "Applied strict data-handling protocols to ensure compliance and reliability",
      "Strengthened practical skills in data management and organizational processes"
    ],
    technologies: ["SQL", "Python", "Excel", "File systems", "Document management systems"]
  }
]

const projects = [
  {
    title: "VaR Estimation System",
    description: "Advanced Value at Risk (VaR) estimation system for financial risk management using Monte Carlo simulation.",
    longDescription: "Developed a comprehensive VaR estimation system that calculates portfolio risk using Monte Carlo methods and historical simulation. The system provides accurate risk metrics for investment portfolios, enabling better risk management decisions in financial markets.",
    tags: ["FinTech", "Risk Management", "Monte Carlo", "Python"],
    features: ["Monte Carlo Simulation", "Historical VaR", "Portfolio Analysis", "Risk Metrics"],
    links: {
      demo: "#",
      github: "https://github.com/mohamedamine-ezzaouia/var-estimation"
    }
  },
  {
    title: "Market Trading Simulator",
    description: "Real-time market trading simulation platform with advanced charting and portfolio management capabilities.",
    longDescription: "Built a comprehensive trading simulator that allows users to practice trading strategies without financial risk. Features real-time market data integration, advanced technical analysis tools, portfolio tracking, and performance analytics to help users learn trading concepts.",
    tags: ["Trading", "Simulation", "Angular", "Spring Boot"],
    features: ["Real-time Data", "Technical Analysis", "Portfolio Management", "Performance Analytics"],
    links: {
      demo: "#",
      github: "https://github.com/mohamedamine-ezzaouia/trading-simulator"
    }
  },
  {
    title: "Nanocash Platform",
    description: "Innovative fintech platform for digital payments and financial services with modern web architecture.",
    longDescription: "Designed and developed Nanocash, a modern fintech platform that enables secure digital payments and financial services. The platform features user-friendly interfaces, secure transaction processing, and comprehensive financial management tools built with cutting-edge web technologies.",
    tags: ["FinTech", "Payments", "Web Development", "Security"],
    features: ["Digital Payments", "Security Features", "User Management", "Transaction Processing"],
    links: {
      demo: "#",
      github: "https://github.com/mohamedamine-ezzaouia/nanocash"
    }
  },
  {
    title: "The Last Shade",
    description: "A 3-level game inspired by The 100, built in C as a way to practice and improve programming skills.",
    longDescription: "The Last Shade is a 3-level game inspired by The 100. It was built in C as a way to practice and improve programming skills. The project aims to tell a story with earthly characters in a galaxy-themed world, serve as a reference for learners exploring C, and share the creativity of Lords of Absurd with anyone ready for the adventure.",
    tags: ["C Programming", "Game Development", "Educational", "Storytelling"],
    features: ["3-Level Gameplay", "Galaxy-themed World", "Educational Reference", "C Programming Practice"],
    links: {
      demo: "#",
      github: "#"
    }
  }
]

const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "JavaScript", "SQL"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["Spring Boot", "Angular", "Flask", "React.js"]
  },
  {
    category: "Databases & Analytics",
    items: ["MySQL", "InfluxDB", "TimescaleDB", "Power BI"]
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Kubernetes", "Git", "VS Code", "Kafka"]
  },
  {
    category: "AI & Machine Learning",
    items: ["Deep Learning", "NLP", "Computer Vision", "AI/ML", "Monte Carlo Simulation"]
  },
  {
    category: "Financial Technology",
    items: ["Options Pricing", "Risk Management", "Quantitative Finance", "SWIFT Files", "Trading Systems"]
  }
]

const certifications = [
  {
    title: "Hashgraph Developer Course",
    issuer: "Hedera Hashgraph LLC",
    date: "Nov 21, 2024",
    skills: ["Hashgraph", "Blockchain", "Distributed Ledger", "Smart Contracts", "DApp Development"]
  },
  {
    title: "Containerization and Virtualization with Docker and Kubernetes",
    issuer: "DataCamp",
    date: "Nov 2024",
    skills: ["Docker", "Kubernetes", "Containerization", "DevOps", "Virtualization"]
  },
  {
    title: "Honoris Sustainability, Work Ethics and Gender Equity Certificate",
    issuer: "Honoris United Universities",
    date: "Oct 2024",
    skills: ["Sustainability", "Work Ethics", "Gender Equity", "Professional Development"]
  },
  {
    title: "Generative AI with Diffusion Models",
    issuer: "NVIDIA",
    date: "June 2024",
    skills: ["Generative AI", "Diffusion Models", "Deep Learning", "AI/ML", "Computer Vision"]
  },
  {
    title: "Building Natural Language Processing Applications with Transformers",
    issuer: "NVIDIA", 
    date: "June 2024",
    skills: ["NLP", "Transformers", "Language Models", "AI/ML", "Deep Learning"]
  },
  {
    title: "Developing Edge AI Video Applications on Jetson Nano",
    issuer: "NVIDIA",
    date: "June 2024", 
    skills: ["Edge AI", "Computer Vision", "Video Processing", "Jetson Nano", "Real-time Computing"]
  }
]

// AI Response Generation System using OpenAI API
const generatePersonalizedResponse = async (query: string): Promise<string> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: query }),
    })

    if (!response.ok) {
      throw new Error('Failed to get response from AI')
    }

    const data = await response.json()
    return data.response
  } catch (error) {
    console.error('Error generating AI response:', error)
    
    // Fallback to a basic response if API fails
    return `I'm **AI Amino**, Mohamed Amine's virtual assistant! I'm currently experiencing some technical difficulties, but I can still help you learn about:

**🎓 About Mohamed Amine**
• Personal background and education at ESPRIT
• Professional philosophy on AI automation in finance

**💼 Professional Experience** 
• Current role as Quantitative AI Engineer at Vermeg
• Previous work at BIAT and CRNE
• Leadership experience in IEEE and Rotaract

**🚀 Featured Projects**
• VaR Estimation System for risk management
• Market Trading Simulator with real-time data
• Nanocash Platform for digital payments
• GORENT app for student housing
• The Last Shade educational game

**🛠️ Technical Skills**
• Programming: Java, Python, JavaScript, SQL
• AI/ML: Deep Learning, NLP, Computer Vision
• FinTech: Options Pricing, Risk Management, Monte Carlo

**📞 Contact Information**
• Email: mohamedamineezzaouia3@gmail.com
• Phone: +216 55 999 889
• Location: Tunis, Tunisia

Please try asking your question again, or feel free to reach out directly!`
  }
}

// Predefined chat messages
const initialMessages = [
  {
    role: "assistant",
    content: `👋 Hi there! I'm **AI Amino**, Mohamed Amine's virtual assistant. 

I'm here to help you learn about Mohamed Amine Ezzaouia - a **Computer and Financial Technology Engineer** specializing in **FinTech development**, **AI automation**, and **quantitative finance**.

Ask me about his experience, projects, skills, or anything else you'd like to know! 🚀`,
  },
]

// Rich text formatting function
const formatMessage = (content: string) => {
  // Convert **text** to bold
  let formatted = content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

  // Convert bullet points to proper list items
  formatted = formatted.replace(/^• (.+)$/gm, "<li>$1</li>")

  // Wrap consecutive list items in ul tags
  formatted = formatted.replace(/(<li>.*<\/li>\s*)+/g, "<ul>$&</ul>")

  // Convert line breaks to proper spacing
  formatted = formatted.replace(/\n\n/g, "<br><br>")
  formatted = formatted.replace(/\n/g, "<br>")

  return formatted
}

export default function AIChatSection() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatMessagesRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const controls = useAnimation()

  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Listen for service click events
  useEffect(() => {
    const handleServiceMessage = async (event: any) => {
      const { message } = event.detail
      if (message) {
        // Add user message
        const userMessage = { role: "user", content: message }
        setMessages((prev) => [...prev, userMessage])
        setIsTyping(true)

        // Generate AI response using the OpenAI API
        try {
          const responseContent = await generatePersonalizedResponse(message)
          const response = {
            role: "assistant",
            content: responseContent
          }

          setMessages((prev) => [...prev, response])
        } catch (error) {
          console.error('Error generating response:', error)
          const errorResponse = {
            role: "assistant",
            content: "I apologize, but I'm experiencing some technical difficulties. Please try asking your question again, or feel free to contact Mohamed Amine directly at mohamedamineezzaouia3@gmail.com"
          }
          setMessages((prev) => [...prev, errorResponse])
        } finally {
          setIsTyping(false)
        }
      }
    }

    window.addEventListener("triggerChatMessage", handleServiceMessage)
    return () => window.removeEventListener("triggerChatMessage", handleServiceMessage)
  }, [])

  const scrollToBottom = () => {
    // Only scroll within the chat container, not the entire page
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    const currentInput = input
    setInput("")
    setIsTyping(true)

    // Focus back on input after submission
    setTimeout(() => {
      inputRef.current?.focus()
    }, 100)

    // Generate AI response using the OpenAI API
    try {
      const responseContent = await generatePersonalizedResponse(currentInput)
      const response = {
        role: "assistant",
        content: responseContent
      }

      setMessages((prev) => [...prev, response])
    } catch (error) {
      console.error('Error generating response:', error)
      const errorResponse = {
        role: "assistant",
        content: "I apologize, but I'm experiencing some technical difficulties. Please try asking your question again, or feel free to contact Mohamed Amine directly at mohamedamineezzaouia3@gmail.com"
      }
      setMessages((prev) => [...prev, errorResponse])
    } finally {
      setIsTyping(false)
    }
  }

  const handleQuickQuestion = async (question: string) => {
    // Simulate user clicking a quick question
    const userMessage = { role: "user", content: question }
    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    // Generate AI response using the OpenAI API
    try {
      const responseContent = await generatePersonalizedResponse(question)
      const response = {
        role: "assistant",
        content: responseContent
      }

      setMessages((prev) => [...prev, response])
    } catch (error) {
      console.error('Error generating response:', error)
      const errorResponse = {
        role: "assistant",
        content: "I apologize, but I'm experiencing some technical difficulties. Please try asking your question again, or feel free to contact Mohamed Amine directly at mohamedamineezzaouia3@gmail.com"
      }
      setMessages((prev) => [...prev, errorResponse])
    } finally {
      setIsTyping(false)
    }
  }

  const resetChat = () => {
    setMessages(initialMessages)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const chatElementVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
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
          className="text-center mb-12"
          style={{ opacity: 1 }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Chat with <span className="text-gradient">AI Amino</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-2xl mx-auto">
            Ask about my work experience, skills, projects, or specific services
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4"
          ></motion.div>
        </motion.div>

        <div className="max-w-3xl mx-auto" ref={chatContainerRef}>
          <motion.div
            className="glass rounded-2xl overflow-hidden chat-element"
            variants={chatElementVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Chat header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-card/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">AI Amino</h3>
                  <p className="text-xs text-gray-400">Virtual Assistant</p>
                </div>
              </div>
              <button
                onClick={resetChat}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                title="Reset chat"
                type="button"
              >
                <RefreshCw size={16} />
              </button>
            </div>

            {/* Chat messages - Fixed height container with internal scrolling */}
            <div
              ref={chatMessagesRef}
              className="h-[400px] overflow-y-auto p-4 space-y-4 scroll-smooth"
              style={{ scrollBehavior: "smooth" }}
            >
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 ${
                      message.role === "user" ? "bg-primary/20 text-white" : "bg-card/50 text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {message.role === "assistant" ? (
                        <Bot size={16} className="text-primary" />
                      ) : (
                        <User size={16} className="text-secondary" />
                      )}
                      <span className="text-xs font-medium">{message.role === "assistant" ? "AI Amino" : "You"}</span>
                    </div>
                    <div
                      className="text-sm rich-text"
                      dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }}
                    />
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="max-w-[80%] rounded-2xl p-3 bg-card/50 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <Bot size={16} className="text-primary" />
                      <span className="text-xs font-medium">AI Amino</span>
                    </div>
                    <div className="flex gap-1">
                      <span
                        className="w-2 h-2 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></span>
                      <span
                        className="w-2 h-2 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></span>
                      <span
                        className="w-2 h-2 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Invisible element to scroll to */}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick questions */}
            <div className="p-3 border-t border-white/10">
              <div className="flex gap-2 overflow-x-auto hide-scrollbar mb-2">
                <button
                  type="button"
                  onClick={() => handleQuickQuestion("Tell me about Mohamed Amine's background and education")}
                  className="px-3 py-1 text-xs rounded-full bg-card/50 border border-white/10 whitespace-nowrap hover:bg-primary/20 transition-colors"
                >
                  👨‍🎓 Background & Education
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickQuestion("What is Mohamed Amine's experience in FinTech and AI?")}
                  className="px-3 py-1 text-xs rounded-full bg-card/50 border border-white/10 whitespace-nowrap hover:bg-primary/20 transition-colors"
                >
                  💼 FinTech & AI Experience
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickQuestion("What are his technical skills and programming languages?")}
                  className="px-3 py-1 text-xs rounded-full bg-card/50 border border-white/10 whitespace-nowrap hover:bg-primary/20 transition-colors"
                >
                  💻 Technical Skills
                </button>
              </div>
              <div className="flex gap-2 overflow-x-auto hide-scrollbar">
                <button
                  type="button"
                  onClick={() => handleQuickQuestion("What professional certifications does he have?")}
                  className="px-3 py-1 text-xs rounded-full bg-card/50 border border-white/10 whitespace-nowrap hover:bg-primary/20 transition-colors"
                >
                  🏆 Certifications
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickQuestion("Tell me about his leadership experience in IEEE and Rotaract")}
                  className="px-3 py-1 text-xs rounded-full bg-card/50 border border-white/10 whitespace-nowrap hover:bg-primary/20 transition-colors"
                >
                  🤝 Leadership & Community
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickQuestion("What are his current work achievements at Vermeg?")}
                  className="px-3 py-1 text-xs rounded-full bg-card/50 border border-white/10 whitespace-nowrap hover:bg-primary/20 transition-colors"
                >
                  🚀 Current Role & Achievements
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickQuestion("How can I contact Mohamed Amine for opportunities?")}
                  className="px-3 py-1 text-xs rounded-full bg-card/50 border border-white/10 whitespace-nowrap hover:bg-primary/20 transition-colors"
                >
                  📞 Contact & Opportunities
                </button>
              </div>
            </div>

            {/* Chat input form */}
            <div className="p-4 border-t border-white/10 bg-card/30">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything about Mohamed Amine..."
                  className="flex-1 px-4 py-2 bg-card/50 border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-primary/50 transition-colors"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="p-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>

          {/* AI Assistant image */}
          <motion.div
            className="mt-8 flex justify-center chat-element"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30 glow-effect">
                <Image
                  src="/images/Amine-avatar.jpg"
                  alt="Mohamed Amine Ezzaouia"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <Sparkles size={14} className="text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

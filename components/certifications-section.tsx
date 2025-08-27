"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react"
import Image from "next/image"

interface Certification {
  title: string
  issuer: string
  date: string
  status: string
  description: string
  skills: string[]
  verificationUrl: string | null
  logo: string
}

const certifications: Certification[] = [
  {
    title: "Hashgraph Developer Course",
    issuer: "Hedera Hashgraph LLC",
    date: "Nov 21, 2024",
    status: "Completed",
    description: "Comprehensive developer training on Hedera Hashgraph technology, covering distributed ledger concepts, smart contracts, and decentralized application development on the Hedera network.",
    skills: ["Hashgraph", "Blockchain", "Distributed Ledger", "Smart Contracts", "DApp Development"],
    verificationUrl: null, // No certificate available yet
    logo: "/images/projects/hedera-icon.png"
  },
  {
    title: "Containerization and Virtualization with Docker and Kubernetes",
    issuer: "DataCamp",
    date: "Nov 2024",
    status: "Completed",
    description: "Comprehensive training on containerization technologies, Docker concepts, Kubernetes orchestration, and best practices for application deployment and scaling.",
    skills: ["Docker", "Kubernetes", "Containerization", "DevOps", "Virtualization"],
    verificationUrl: "/Containerization and Virtualization with Docker and kubernetes.pdf",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
  },
  {
    title: "Honoris Sustainability, Work Ethics and Gender Equity Certificate",
    issuer: "Honoris United Universities",
    date: "Oct 2024",
    status: "Completed",
    description: "Professional development certification focusing on sustainable business practices, ethical work standards, and promoting gender equity in the workplace.",
    skills: ["Sustainability", "Work Ethics", "Gender Equity", "Professional Development", "Corporate Responsibility"],
    verificationUrl: "/certificate_Honoris.pdf",
    logo: "/images/projects/Honoris_United_Universities_Logo.jpg"
  },
  {
    title: "Generative AI with Diffusion Models",
    issuer: "NVIDIA",
    date: "June 2024",
    status: "Completed",
    description: "Advanced training on generative artificial intelligence using diffusion models, covering state-of-the-art techniques for image and content generation.",
    skills: ["Generative AI", "Diffusion Models", "Deep Learning", "AI/ML", "Computer Vision"],
    verificationUrl: "/Generative AI with Diffusion Models.pdf",
    logo: "/images/projects/Nvidia.png"
  },
  {
    title: "Building Natural Language Processing Applications with Transformers",
    issuer: "NVIDIA",
    date: "June 2024",
    status: "Completed",
    description: "Specialized course on developing NLP applications using transformer architectures, covering modern language models and their practical implementations.",
    skills: ["NLP", "Transformers", "Language Models", "AI/ML", "Deep Learning"],
    verificationUrl: "/Building Transformer-Based Natural Language Processing Applications.pdf",
    logo: "/images/projects/Nvidia.png"
  },
  {
    title: "Developing Edge AI Video Applications on Jetson Nano",
    issuer: "NVIDIA",
    date: "June 2024",
    status: "Completed",
    description: "Hands-on training for developing AI-powered video applications on NVIDIA Jetson Nano, focusing on edge computing and real-time video processing.",
    skills: ["Edge AI", "Computer Vision", "Video Processing", "Jetson Nano", "Real-time Computing"],
    verificationUrl: "/Building Video AI Applications at the Edge on Jetson Nano.pdf",
    logo: "/images/projects/Nvidia.png"
  },
]

export default function CertificationsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const controls = useAnimation()
  const certificationsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    controls.start("visible")
  }, [controls])
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Function to handle certificate viewing
  const handleViewCertificate = (certificateUrl: string | null) => {
    if (certificateUrl) {
      window.open(certificateUrl, '_blank')
    }
  }

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
    <section id="certifications" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
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
            Certifications & <span className="text-gradient">Training</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-2xl mx-auto">
            Professional certifications and specialized training in cutting-edge technologies
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4"
          ></motion.div>
        </motion.div>

        <div ref={certificationsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="certification-card glass p-6 rounded-2xl hover:bg-card/30 transition-all duration-300 relative overflow-hidden group"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.2 },
              }}
              style={{ opacity: 1 }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Header */}
              <div className="relative z-10 flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-card/50 p-2 flex items-center justify-center">
                    <Image
                      src={cert.logo || "/placeholder.svg"}
                      alt={cert.issuer}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-green-400 font-medium">{cert.status}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-heading font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span>{cert.issuer}</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{cert.description}</p>

                {/* Skills */}
                <div className="mb-4">
                  <h5 className="text-xs font-medium mb-2 text-secondary">Skills Gained</h5>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verification Link */}
                {cert.verificationUrl ? (
                  <motion.button
                    onClick={() => handleViewCertificate(cert.verificationUrl)}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors bg-transparent border-none cursor-pointer"
                    whileHover={{ x: 3 }}
                  >
                    <ExternalLink className="w-3 h-3" />
                    View Certificate
                  </motion.button>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm text-gray-500">
                    <ExternalLink className="w-3 h-3" />
                    Certificate Not Available
                  </span>
                )}
              </div>

              {/* Hover effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-400 text-sm">
            Continuously expanding knowledge through professional development and industry certifications
          </p>
        </motion.div>
      </div>
    </section>
  )
}

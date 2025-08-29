"use client"

import { useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import Image from "next/image"
import { TrendingUp, Building, Coins, BarChart } from "lucide-react"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1, fallback: true })
  const controls = useAnimation()

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

  const listItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(var(--primary),0.1),transparent_40%)]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto" ref={ref}>
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

          <div className="split-layout">
            <motion.div
              className="glass card-hover p-6 md:p-8 h-full"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0">
                  <Image
                    src="/images/Amine-avatar.png"
                    alt="Mohamed Amine"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <motion.h3
                    className="text-xl md:text-2xl font-heading font-bold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Who I Am
                  </motion.h3>
                  <motion.p
                    className="text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    I’m Mohamed Amine Ezzaouia, a Computer and Financial Technology Engineer, graduated from ESPRIT (Private Higher School of Engineering and Technology). With a strong foundation in software development, data analysis, and AI-driven automation.
                  </motion.p>
                </div>
              </div>

              <motion.p
                className="text-gray-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                I design and build end-to-end solutions that bridge finance and technology, leveraging advanced algorithms, intelligent data processing, and scalable architectures to enhance decision-making and operational efficiency.
              </motion.p>

              <motion.div
                className="mt-6 pt-6 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="flex flex-wrap gap-3">
                  {["FinTech Engineering", "AI Automation", "Data-Driven Systems", "Software Architecture"].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className={`px-3 py-1 text-xs rounded-full glass border ${
                        index % 3 === 0
                          ? "border-primary/20 bg-primary/10"
                          : index % 3 === 1
                            ? "border-secondary/20 bg-secondary/10"
                            : "border-accent/20 bg-accent/10"
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="neomorphic p-6 md:p-8 h-full"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.h3
                className="text-xl md:text-2xl font-heading font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                AI Automation in Finance
              </motion.h3>
              <ul className="space-y-4">
                <motion.li
                  className="flex items-start"
                  custom={0}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={listItemVariants}
                >
                  <span className="inline-block mr-3 mt-1">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </span>
                  <span>
                    <strong className="text-primary">Smarter Decisions::</strong> AI-driven systems process and analyze massive financial datasets in real time, giving faster, data-backed insights for better investment and risk strategies.
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  custom={1}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={listItemVariants}
                >
                  <span className="inline-block mr-3 mt-1">
                    <Building className="w-4 h-4 text-secondary" />
                  </span>
                  <span>
                    <strong className="text-secondary"> Operational Impact:</strong> Automation in finance cuts repetitive manual tasks, speeds up transactions, and improves accuracy across payment processing, compliance, and reporting.
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  custom={2}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={listItemVariants}
                >
                  <span className="inline-block mr-3 mt-1">
                    <Coins className="w-4 h-4 text-accent" />
                  </span>
                  <span>
                    <strong className="text-accent">Risk & Compliance:</strong> AI models detect anomalies, flag suspicious activities, and ensure regulatory alignment—reducing exposure to costly compliance breaches.
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  custom={3}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={listItemVariants}
                >
                  <span className="inline-block mr-3 mt-1">
                    <BarChart className="w-4 h-4 text-primary" />
                  </span>
                  <span>
                    <strong className="text-primary">Scalable Solutions:</strong> Intelligent automation adapts to evolving market conditions, enabling financial institutions to grow without scaling costs proportionally.
                  </span>
                </motion.li>
              </ul>

              <motion.div
                className="mt-6 gradient-border p-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <p className="text-center text-sm italic">
                  "For me, AI automation in finance isn’t just technology, it’s the engine for smarter, safer, and more inclusive financial systems, always guided by human insight to meet the needs of our era."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

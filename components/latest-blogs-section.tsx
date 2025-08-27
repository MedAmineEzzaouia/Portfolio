"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, Brain, Zap, Shield, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface NewsArticle {
  id: string
  title: string
  description: string
  url: string
  publishedAt: string
  source: {
    name: string
  }
  category: {
    name: string
    icon: React.ReactNode
    color: string
  }
}

interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: {
    name: string
    icon: React.ReactNode
    color: string
  }
}

// News API configuration
const NEWS_CATEGORIES = [
  {
    name: "Technology",
    icon: <Brain className="w-3 h-3 mr-1" />,
    color: "purple",
    queries: ["artificial intelligence", "machine learning", "fintech", "blockchain", "software development"]
  },
  {
    name: "Financial Automation", 
    icon: <Zap className="w-3 h-3 mr-1" />,
    color: "cyan",
    queries: ["financial automation", "banking automation", "fintech automation", "algorithmic trading", "automated financial services", "robo-advisors", "payment automation", "regulatory automation"]
  },
  {
    name: "Professional Development",
    icon: <Shield className="w-3 h-3 mr-1" />,
    color: "red", 
    queries: ["career development", "professional skills", "leadership", "skill development"]
  }
]

// Fallback static content
const FALLBACK_POSTS: BlogPost[] = [
  {
    id: "absolute-zero",
    slug: "absolute-zero-revolution", 
    title: "Innovation in Technology Solutions",
    excerpt: "Exploring cutting-edge methodologies that enable businesses to achieve breakthrough results through innovative technology solutions.",
    date: "December 2024",
    readTime: "8 min",
    category: {
      name: "Technology",
      icon: <Brain className="w-3 h-3 mr-1" />,
      color: "purple",
    },
  },
  {
    id: "automation-2025",
    slug: "financial-automation-trends-2025",
    title: "Financial Automation Trends to Watch in 2025", 
    excerpt: "The top emerging automation technologies that will transform financial services and banking in the coming year.",
    date: "November 2024",
    readTime: "6 min",
    category: {
      name: "Financial Automation",
      icon: <Zap className="w-3 h-3 mr-1" />,
      color: "cyan",
    },
  },
  {
    id: "ai-safety",
    slug: "ai-safety-ethics", 
    title: "Best Practices in Professional Development",
    excerpt: "Examining the essential practices and considerations for continuous professional growth and career advancement.",
    date: "October 2024", 
    readTime: "10 min",
    category: {
      name: "Professional Development",
      icon: <Shield className="w-3 h-3 mr-1" />,
      color: "red",
    },
  },
]

export default function LatestBlogsSection() {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Function to fetch news from NewsAPI
  const fetchNews = async () => {
    try {
      setIsLoading(true)
      const allArticles: NewsArticle[] = []
      
      // Fetch one article per category
      for (const category of NEWS_CATEGORIES) {
        const randomQuery = category.queries[Math.floor(Math.random() * category.queries.length)]
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${encodeURIComponent(randomQuery)}&sortBy=publishedAt&pageSize=1&language=en&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
        )
        
        if (response.ok) {
          const data = await response.json()
          if (data.articles && data.articles.length > 0) {
            const article = data.articles[0]
            allArticles.push({
              id: `${category.name}-${Date.now()}`,
              title: article.title,
              description: article.description || article.content?.substring(0, 150) + "...",
              url: article.url,
              publishedAt: article.publishedAt,
              source: article.source,
              category: category
            })
          }
        }
      }
      
      setArticles(allArticles)
      setError(null)
    } catch (err) {
      console.error('Error fetching news:', err)
      setError('Failed to fetch latest news')
    } finally {
      setIsLoading(false)
    }
  }

  // Function to fetch news from alternative free APIs
  const fetchAlternativeNews = async () => {
    try {
      setIsLoading(true)
      const allArticles: NewsArticle[] = []
      
      // Using Guardian API (free tier available)
      for (const category of NEWS_CATEGORIES) {
        const randomQuery = category.queries[Math.floor(Math.random() * category.queries.length)]
        const response = await fetch(
          `https://content.guardianapis.com/search?q=${encodeURIComponent(randomQuery)}&show-fields=trailText&page-size=1&api-key=${process.env.NEXT_PUBLIC_GUARDIAN_API_KEY}`
        )
        
        if (response.ok) {
          const data = await response.json()
          if (data.response.results && data.response.results.length > 0) {
            const article = data.response.results[0]
            allArticles.push({
              id: `${category.name}-${Date.now()}`,
              title: article.webTitle,
              description: article.fields?.trailText || "Read more about this topic...",
              url: article.webUrl,
              publishedAt: article.webPublicationDate,
              source: { name: "The Guardian" },
              category: category
            })
          }
        }
      }
      
      setArticles(allArticles)
      setError(null)
    } catch (err) {
      console.error('Error fetching alternative news:', err)
      setError('Failed to fetch latest news')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // Try to fetch news, fallback to static content if fails
    const loadNews = async () => {
      if (process.env.NEXT_PUBLIC_NEWS_API_KEY) {
        await fetchNews()
      } else if (process.env.NEXT_PUBLIC_GUARDIAN_API_KEY) {
        await fetchAlternativeNews()
      } else {
        // No API keys available, use static content
        setIsLoading(false)
        setError('No news API configured')
      }
    }
    
    loadNews()
    
    // Refresh news every 30 minutes
    const interval = setInterval(loadNews, 30 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }

  // Calculate read time (rough estimate)
  const calculateReadTime = (text: string) => {
    const wordsPerMinute = 200
    const words = text.split(' ').length
    const minutes = Math.ceil(words / wordsPerMinute)
    return `${minutes} min`
  }

  // Use real news articles if available, otherwise fallback to static content
  const displayContent = articles.length > 0 ? articles : FALLBACK_POSTS

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {articles.length > 0 ? 
              'Real-time insights from trusted sources in technology, automation, and professional development' :
              'Stay updated with the latest trends and insights in technology and professional development'
            }
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4"></div>
          
          {/* Loading indicator */}
          {isLoading && (
            <div className="mt-4 text-sm text-gray-400">
              Loading latest news...
            </div>
          )}
          
          {/* Error message */}
          {error && (
            <div className="mt-4 text-sm text-red-400">
              Showing curated content (News API unavailable)
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayContent.map((item, index) => {
            const isNewsArticle = 'url' in item
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                {isNewsArticle ? (
                  // Real news article - external link
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <Card className="glass h-full flex flex-col cursor-pointer transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                          <Badge
                            variant="secondary"
                            className={`bg-${item.category.color}-500/20 text-${item.category.color}-300 border-${item.category.color}-500/30`}
                          >
                            {item.category.icon}
                            {item.category.name}
                          </Badge>
                          <ExternalLink className="w-4 h-4 text-gray-400" />
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-white line-clamp-2">{item.title}</h3>

                        <p className="text-gray-400 mb-6 flex-grow line-clamp-3">{item.description}</p>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{formatDate(item.publishedAt)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{calculateReadTime(item.description)}</span>
                            </div>
                          </div>

                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover p-0">
                            Read <ArrowRight className="w-3 h-3 ml-1" />
                          </Button>
                        </div>

                        <div className="text-xs text-gray-500 mt-2">
                          Source: {item.source.name}
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ) : (
                  // Static blog post - internal link
                  <a href={`/blogs/${item.slug}`}>
                    <Card className="glass h-full flex flex-col cursor-pointer transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                      <CardContent className="p-6 flex flex-col h-full">
                        <Badge
                          variant="secondary"
                          className={`bg-${item.category.color}-500/20 text-${item.category.color}-300 border-${item.category.color}-500/30 self-start mb-4`}
                        >
                          {item.category.icon}
                          {item.category.name}
                        </Badge>

                        <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>

                        <p className="text-gray-400 mb-6 flex-grow">{item.excerpt}</p>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{item.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{item.readTime}</span>
                            </div>
                          </div>

                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover p-0">
                            Read <ArrowRight className="w-3 h-3 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                )}
              </motion.div>
            )
          })}
        </div>
        
        {/* Refresh button for manual news update */}
        {articles.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-8"
          >
            <Button
              onClick={() => {
                if (process.env.NEXT_PUBLIC_NEWS_API_KEY) {
                  fetchNews()
                } else if (process.env.NEXT_PUBLIC_GUARDIAN_API_KEY) {
                  fetchAlternativeNews()
                }
              }}
              variant="outline"
              size="sm"
              disabled={isLoading}
              className="text-gray-400 border-gray-600 hover:bg-gray-800"
            >
              {isLoading ? 'Updating...' : 'Refresh News'}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

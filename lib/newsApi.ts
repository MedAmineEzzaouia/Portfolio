// utils/newsApi.ts
interface NewsSource {
  name: string
  url: string
}

interface NewsArticle {
  id: string
  title: string
  description: string
  url: string
  publishedAt: string
  source: NewsSource
  category: {
    name: string
    icon: any
    color: string
  }
}

interface CategoryConfig {
  name: string
  icon: any
  color: string
  queries: string[]
}

// Multiple news API providers for better reliability
export class NewsAPIService {
  private static instance: NewsAPIService
  private newsApiKey?: string
  private guardianApiKey?: string
  private newsdataApiKey?: string

  constructor() {
    this.newsApiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY
    this.guardianApiKey = process.env.NEXT_PUBLIC_GUARDIAN_API_KEY
    this.newsdataApiKey = process.env.NEXT_PUBLIC_NEWSDATA_API_KEY
  }

  static getInstance(): NewsAPIService {
    if (!NewsAPIService.instance) {
      NewsAPIService.instance = new NewsAPIService()
    }
    return NewsAPIService.instance
  }

  // NewsAPI.org implementation
  async fetchFromNewsAPI(query: string): Promise<any[]> {
    if (!this.newsApiKey) return []
    
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&pageSize=1&language=en&apiKey=${this.newsApiKey}`
      )
      
      if (response.ok) {
        const data = await response.json()
        return data.articles || []
      }
    } catch (error) {
      console.warn('NewsAPI fetch failed:', error)
    }
    
    return []
  }

  // Guardian API implementation  
  async fetchFromGuardian(query: string): Promise<any[]> {
    if (!this.guardianApiKey) return []
    
    try {
      const response = await fetch(
        `https://content.guardianapis.com/search?q=${encodeURIComponent(query)}&show-fields=trailText&page-size=1&api-key=${this.guardianApiKey}`
      )
      
      if (response.ok) {
        const data = await response.json()
        return data.response?.results || []
      }
    } catch (error) {
      console.warn('Guardian API fetch failed:', error)
    }
    
    return []
  }

  // NewsData.io implementation
  async fetchFromNewsData(query: string): Promise<any[]> {
    if (!this.newsdataApiKey) return []
    
    try {
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=${this.newsdataApiKey}&q=${encodeURIComponent(query)}&language=en&size=1`
      )
      
      if (response.ok) {
        const data = await response.json()
        return data.results || []
      }
    } catch (error) {
      console.warn('NewsData.io fetch failed:', error)
    }
    
    return []
  }

  // Main fetch method with fallbacks
  async fetchCategoryNews(categories: CategoryConfig[]): Promise<NewsArticle[]> {
    const allArticles: NewsArticle[] = []
    
    for (const category of categories) {
      const randomQuery = category.queries[Math.floor(Math.random() * category.queries.length)]
      let articles: any[] = []
      
      // Try different APIs in order of preference
      if (this.newsApiKey) {
        articles = await this.fetchFromNewsAPI(randomQuery)
        if (articles.length > 0) {
          const article = articles[0]
          allArticles.push({
            id: `newsapi-${category.name}-${Date.now()}`,
            title: article.title,
            description: article.description || article.content?.substring(0, 150) + "...",
            url: article.url,
            publishedAt: article.publishedAt,
            source: article.source,
            category: category
          })
          continue
        }
      }
      
      if (this.guardianApiKey) {
        articles = await this.fetchFromGuardian(randomQuery)
        if (articles.length > 0) {
          const article = articles[0]
          allArticles.push({
            id: `guardian-${category.name}-${Date.now()}`,
            title: article.webTitle,
            description: article.fields?.trailText || "Read more about this topic...",
            url: article.webUrl,
            publishedAt: article.webPublicationDate,
            source: { name: "The Guardian", url: "theguardian.com" },
            category: category
          })
          continue
        }
      }
      
      if (this.newsdataApiKey) {
        articles = await this.fetchFromNewsData(randomQuery)
        if (articles.length > 0) {
          const article = articles[0]
          allArticles.push({
            id: `newsdata-${category.name}-${Date.now()}`,
            title: article.title,
            description: article.description || "Read more about this topic...",
            url: article.link,
            publishedAt: article.pubDate,
            source: { name: article.source_id, url: article.source_url },
            category: category
          })
        }
      }
    }
    
    return allArticles
  }

  // Check if any API is configured
  hasAPIKey(): boolean {
    return !!(this.newsApiKey || this.guardianApiKey || this.newsdataApiKey)
  }
}

// Export singleton instance
export const newsService = NewsAPIService.getInstance()

// Helper functions
export const formatPublishDate = (dateString: string): string => {
  const date = new Date(dateString)
  const now = new Date()
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
  
  if (diffInHours < 24) {
    return `${diffInHours}h ago`
  } else if (diffInHours < 168) {
    return `${Math.floor(diffInHours / 24)}d ago`
  } else {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }
}

export const calculateReadTime = (text: string): string => {
  const wordsPerMinute = 200
  const words = text.split(' ').length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min`
}

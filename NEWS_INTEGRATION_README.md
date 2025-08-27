# Latest Insights - Real News Integration

This component fetches real-time news articles for Technology, Automation, and Professional Development categories from multiple news APIs.

## Setup Instructions 

### 1. Choose a News API Provider

#### Option A: NewsAPI.org (Recommended)
- **Free Tier:** 100 requests/day
- **Sign up:** https://newsapi.org/register
- **Add to `.env.local`:**
```
NEXT_PUBLIC_NEWS_API_KEY=your_newsapi_key_here
```

#### Option B: The Guardian API
- **Free Tier:** 12,000 requests/day
- **Sign up:** https://open-platform.theguardian.com/access/
- **Add to `.env.local`:**
```
NEXT_PUBLIC_GUARDIAN_API_KEY=your_guardian_api_key_here
```

#### Option C: NewsData.io
- **Free Tier:** 200 requests/day
- **Sign up:** https://newsdata.io/register
- **Add to `.env.local`:**
```
NEXT_PUBLIC_NEWSDATA_API_KEY=your_newsdata_api_key_here
```

### 2. Environment Variables

Create or update your `.env.local` file in the project root:

```env
# Choose one or multiple APIs for better reliability
NEXT_PUBLIC_NEWS_API_KEY=your_newsapi_key_here
NEXT_PUBLIC_GUARDIAN_API_KEY=your_guardian_api_key_here
NEXT_PUBLIC_NEWSDATA_API_KEY=your_newsdata_api_key_here
```

### 3. Features

- **Automatic Updates:** News refreshes every 30 minutes
- **Fallback Content:** Shows curated content if APIs are unavailable
- **Multiple Categories:** Technology, Automation, Professional Development
- **External Links:** News articles open in new tabs
- **Loading States:** Visual indicators for news fetching
- **Error Handling:** Graceful fallback to static content

### 4. Customization

#### Add New Categories
Edit the `NEWS_CATEGORIES` array in `latest-blogs-section.tsx`:

```typescript
{
  name: "Your Category",
  icon: <YourIcon className="w-3 h-3 mr-1" />,
  color: "blue", // purple, cyan, red, blue, green, etc.
  queries: ["keyword1", "keyword2", "keyword3"]
}
```

#### Modify Search Terms
Update the `queries` array for each category to get more relevant articles:

```typescript
queries: ["artificial intelligence", "machine learning", "fintech", "blockchain"]
```

### 5. API Rate Limits

- **NewsAPI.org:** 100 requests/day (free)
- **Guardian:** 12,000 requests/day (free)
- **NewsData.io:** 200 requests/day (free)

The component fetches 1 article per category, so it uses 3 API calls per refresh.

### 6. Deployment Notes

- Environment variables starting with `NEXT_PUBLIC_` are exposed to the client
- Consider using server-side API calls for production to hide API keys
- Implement caching to reduce API usage

### 7. Troubleshooting

- **No news showing:** Check if API keys are correctly set in `.env.local`
- **CORS errors:** Some APIs may require server-side proxying
- **Rate limit exceeded:** Wait for the limit to reset or use multiple APIs

### 8. Future Enhancements

- Server-side caching with Redis
- More sophisticated content filtering
- User preference for news sources
- Social media integration (Twitter, LinkedIn)

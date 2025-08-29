# 🚀 Netlify Deployment Guide for Mohamed Amine's Portfolio

This guide will help you deploy the portfolio to Netlify with all features working correctly.

## 📋 Prerequisites

1. **GitHub Repository**: Ensure your code is pushed to GitHub
2. **Netlify Account**: Sign up at [netlify.com](https://netlify.com)
3. **API Keys**: Obtain the required API keys (details below)

## 🔑 Required API Keys

### 1. OpenAI API Key (Required for AI Chat)
- **Sign up**: [OpenAI Platform](https://platform.openai.com)
- **Get API Key**: Go to API Keys section and create a new key
- **Cost**: Pay-per-use (very affordable for personal portfolio)

### 2. News API Keys (Optional but recommended)
Choose one or multiple for better reliability:

#### Option A: NewsAPI.org (Recommended)
- **Free Tier**: 100 requests/day
- **Sign up**: [NewsAPI.org](https://newsapi.org/register)

#### Option B: The Guardian API
- **Free Tier**: 12,000 requests/day  
- **Sign up**: [Guardian Open Platform](https://open-platform.theguardian.com/access/)

#### Option C: NewsData.io
- **Free Tier**: 200 requests/day
- **Sign up**: [NewsData.io](https://newsdata.io/register)

## 🚀 Netlify Deployment Steps

### Step 1: Connect Repository to Netlify

1. Log in to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Choose "GitHub" and authorize Netlify
4. Select your portfolio repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: `18.x`

### Step 2: Environment Variables Setup

In Netlify dashboard → Site settings → Environment variables, add:

```
OPENAI_API_KEY=your_openai_api_key_here
NEXT_PUBLIC_NEWS_API_KEY=your_newsapi_key_here
NEXT_PUBLIC_GUARDIAN_API_KEY=your_guardian_api_key_here  
NEXT_PUBLIC_NEWSDATA_API_KEY=your_newsdata_api_key_here
```

**Important Notes**:
- `OPENAI_API_KEY` is server-side only (secure)
- Variables starting with `NEXT_PUBLIC_` are client-side (less secure but needed for news APIs)

### Step 3: Deploy

1. Click "Deploy site"
2. Wait for build to complete (usually 2-5 minutes)
3. Your site will be available at `https://[random-name].netlify.app`

### Step 4: Custom Domain (Optional)

1. In Site settings → Domain management
2. Add your custom domain
3. Follow DNS configuration instructions

## 🛠️ Build Configuration

The project includes:
- ✅ `netlify.toml` - Netlify configuration
- ✅ `next.config.mjs` - Optimized for Netlify
- ✅ `.env.example` - Environment variables template

## 🔧 Troubleshooting

### Build Fails
- Check Node.js version is 18.x in Netlify settings
- Verify all dependencies are in `package.json`
- Check build logs for specific errors

### AI Chat Not Working
- Verify `OPENAI_API_KEY` is set correctly
- Check API key has sufficient credits
- Ensure API key is from OpenAI platform (not ChatGPT Plus)

### News Section Empty
- Check if at least one news API key is configured
- Verify API keys are valid and active
- News APIs have rate limits - check if exceeded

### Images Not Loading
- Ensure all images are in `public/images/` directory
- Check image file extensions match code references
- Verify image paths are correct (case-sensitive)

## 📊 Performance Optimizations

The deployed site includes:
- ✅ Image optimization
- ✅ Code splitting
- ✅ Caching headers
- ✅ Compressed assets
- ✅ Edge functions for API routes

## 🔒 Security Features

- ✅ Environment variables for sensitive data
- ✅ Security headers configured
- ✅ HTTPS enforced by Netlify
- ✅ Client-side API keys only for public APIs

## 📱 Features Included

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ AI-powered chat assistant
- ✅ Real-time news integration
- ✅ Interactive 3D animations
- ✅ Contact form functionality
- ✅ SEO optimized
- ✅ Fast loading times

## 🆘 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review Netlify build logs
3. Verify all environment variables are set
4. Ensure API keys are valid and have sufficient quota

## 🎉 Post-Deployment

After successful deployment:
1. Test all features (chat, contact form, navigation)
2. Check mobile responsiveness
3. Verify all sections load correctly
4. Test news integration
5. Share your portfolio link!

---

**Your portfolio will be live at**: `https://[your-site-name].netlify.app`

Congratulations! 🎉 Your professional portfolio is now live on Netlify!

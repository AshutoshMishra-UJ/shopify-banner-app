# 🚀 Vercel Deployment Guide

## Prerequisites
1. Create a Vercel account at https://vercel.com
2. Install Vercel CLI: `npm i -g vercel`
3. Have your Shopify Partner account ready

## Step 1: Prepare Environment Variables

Create a `.env` file in your project root:

```bash
SHOPIFY_API_KEY=your_api_key_here
SHOPIFY_API_SECRET=your_api_secret_here
SHOPIFY_APP_URL=https://your-app-name.vercel.app
NODE_ENV=production
DATABASE_URL=your_database_url_here
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI
```bash
cd shopify-banner-app
vercel
```

### Option B: Using Git Integration
1. Push your code to GitHub
2. Connect GitHub to Vercel
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy

## Step 3: Configure Shopify App

1. Go to Shopify Partners dashboard
2. Update your app URLs:
   - App URL: `https://your-app-name.vercel.app`
   - Allowed redirection URLs: `https://your-app-name.vercel.app/auth/callback`

## Step 4: Test Installation

1. Install the app on your development store
2. Go to Themes → Customize
3. Add "Promotional Banner" block
4. Customize and save

## 🎉 Your app is now live and ready!

Visit: https://your-app-name.vercel.app

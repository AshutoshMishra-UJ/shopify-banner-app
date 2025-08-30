# 🚀 Production Deployment Guide

## 📋 Pre-Deployment Checklist

✅ Git repository initialized  
✅ .gitignore configured (excludes node_modules, .env)  
✅ Production scripts added to package.json  
✅ Vercel configuration updated  
✅ Environment variables template created  

## 🌐 Step-by-Step Deployment

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Commit to Git and Push to GitHub
```bash
git add .
git commit -m "Initial commit - Shopify Banner App"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shopify-banner-app.git
git push -u origin main
```

### 4. Deploy to Vercel
```bash
vercel --prod
```

### 5. Configure Environment Variables in Vercel
After deployment, add these environment variables in Vercel dashboard:
- `SHOPIFY_API_KEY`
- `SHOPIFY_API_SECRET`
- `SHOPIFY_APP_URL` (your vercel URL)
- `NODE_ENV=production`

### 6. Update Shopify App Configuration
In your Shopify Partners dashboard:
- Update App URL to your Vercel URL
- Update redirect URLs to include your Vercel domain

## 🔗 Important URLs After Deployment

- **App URL**: https://your-app-name.vercel.app
- **API Endpoint**: https://your-app-name.vercel.app/api
- **Banner Config**: https://your-app-name.vercel.app/api/banner/config

## 🎯 Next Steps After Deployment

1. Test the live app
2. Install on Shopify development store
3. Test banner functionality
4. Submit to Shopify App Store (optional)

## 🆘 Troubleshooting

- **Build fails**: Check node version compatibility
- **API not working**: Verify environment variables
- **Banner not appearing**: Check Shopify app installation

Your app is now ready for production! 🎉

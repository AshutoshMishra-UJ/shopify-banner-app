# Quick Start Guide

## 🚀 Getting Started

### 1. Install Dependencies

```powershell
# Install Shopify CLI globally
npm install -g @shopify/cli @shopify/app

# Install project dependencies
npm install

# Install web dependencies
cd web
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..\..
```

### 2. Set Up Your Shopify App

1. **Create a Shopify Partner Account**: [partners.shopify.com](https://partners.shopify.com)
2. **Create a Development Store** in your Partner dashboard
3. **Run the development server**:
   ```powershell
   shopify app dev
   ```
4. **Follow the CLI prompts** to connect your Partner account and create/select an app

### 3. Install the App

1. The CLI will provide an installation URL
2. Open the URL and install the app on your development store
3. The app will be available in your store's admin

### 4. Add the Banner to Your Store

1. **Go to Online Store → Themes → Customize**
2. **Click "Add section"** at the top of your page
3. **Select "Promotional Banner"** from the App blocks
4. **Customize the banner**:
   - Change the text (default: "🎉 Free Shipping on All Orders! 🎉")
   - Adjust colors
   - Toggle the close button
5. **Save and publish**

### 5. Deploy to Production

#### Option A: Deploy with Vercel CLI

```powershell
# Install Vercel CLI
npm install -g vercel

# Run deployment script
.\deploy.ps1
```

#### Option B: Deploy via GitHub

1. **Push to GitHub**:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

### 6. Update App Configuration

After deployment, update your `shopify.app.toml` with your Vercel URL:

```toml
application_url = "https://your-app-name.vercel.app"

[auth]
redirect_urls = [
  "https://your-app-name.vercel.app/auth/callback",
  "https://your-app-name.vercel.app/auth/shopify/callback",
  "https://your-app-name.vercel.app/api/auth/callback"
]
```

Then deploy the configuration:
```powershell
shopify app deploy
```

## 🎯 What You Get

- ✅ **Working Shopify App** with authentication
- ✅ **Theme App Extension** for banner injection
- ✅ **Responsive Banner** with emoji and styling
- ✅ **Admin Interface** built with React and Polaris
- ✅ **Production-Ready** deployment configuration
- ✅ **Customizable** through Shopify theme editor

## 🛠️ Customization

### Banner Settings (via Theme Editor)
- Banner text
- Background color
- Text color
- Show/hide close button

### Code Customization
- Edit `extensions/banner-extension/blocks/promotional-banner.liquid` for banner HTML/CSS
- Edit `web/frontend/src/App.jsx` for admin interface
- Edit `web/index.js` for backend API endpoints

## 📞 Need Help?

Check the main README.md for detailed documentation and troubleshooting tips!

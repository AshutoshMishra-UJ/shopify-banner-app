# Shopify Banner App

A Shopify app that displays a promotional banner at the top of any Shopify store.

## Features

- 🎉 Customizable promotional banner
- 📱 Responsive design
- ⚡ Theme App Extension (no theme code modification required)
- 🎨 Customizable colors and text
- ❌ Optional close button
- 🚀 Easy deployment to Vercel

## Setup Instructions

### Prerequisites

1. **Node.js** (v18 or higher)
2. **Shopify CLI**: 
   ```bash
   npm install -g @shopify/cli @shopify/app
   ```
3. **Shopify Partner Account**: [Create one here](https://partners.shopify.com/)
4. **Development Store**: Create a development store in your Partner dashboard

### Local Development

1. **Clone and install dependencies**:
   ```bash
   cd shopify-banner-app
   npm install
   cd web && npm install
   cd frontend && npm install
   cd ../..
   ```

2. **Connect to your Shopify app**:
   ```bash
   shopify app dev
   ```
   - Follow the prompts to connect your Partner account
   - Select or create a new app
   - Choose your development store

3. **Install the app**:
   - The CLI will provide a URL to install your app
   - Open the URL and install the app on your development store

### Adding the Banner to Your Store

1. **Open Theme Editor**:
   - Go to Online Store → Themes → Customize

2. **Add the Banner**:
   - Click "Add section" at the top of your page
   - Look for "Promotional Banner" in the App blocks section
   - Add and configure the banner

3. **Customize**:
   - Edit the banner text (default: "🎉 Free Shipping on All Orders! 🎉")
   - Choose colors
   - Toggle the close button
   - Save and publish

## Deployment to Vercel

### 1. Prepare for Deployment

First, build the frontend:
```bash
cd web/frontend
npm run build
cd ../..
```

### 2. Deploy to Vercel

#### Option A: Vercel CLI
```bash
npm install -g vercel
vercel
```

#### Option B: GitHub + Vercel Dashboard
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy automatically

### 3. Update Shopify App URLs

After deployment:

1. **Get your Vercel URL** (e.g., `https://your-app-name.vercel.app`)

2. **Update `shopify.app.toml`**:
   ```toml
   application_url = "https://your-app-name.vercel.app"
   
   [auth]
   redirect_urls = [
     "https://your-app-name.vercel.app/auth/callback",
     "https://your-app-name.vercel.app/auth/shopify/callback",
     "https://your-app-name.vercel.app/api/auth/callback"
   ]
   ```

3. **Deploy the configuration**:
   ```bash
   shopify app deploy
   ```

## Project Structure

```
shopify-banner-app/
├── extensions/
│   └── banner-extension/
│       ├── blocks/
│       │   └── promotional-banner.liquid
│       └── shopify.extension.toml
├── web/
│   ├── frontend/          # React frontend
│   ├── index.js          # Express server
│   └── package.json
├── shopify.app.toml      # App configuration
├── vercel.json          # Vercel deployment config
└── package.json
```

## Banner Features

- **Responsive Design**: Looks great on desktop and mobile
- **Customizable**: Change text, colors, and visibility via theme editor
- **Animated**: Smooth slide-down animation when page loads
- **Closeable**: Optional close button for users
- **Theme Integration**: Works with any Shopify theme

## Customization

The banner can be customized through the Shopify theme editor:

- **Banner Text**: Change the promotional message
- **Background Color**: Choose your brand colors
- **Text Color**: Ensure good contrast
- **Close Button**: Toggle on/off

## Environment Variables

For production deployment, you may need to set:

- `SHOPIFY_API_KEY`: Your app's API key
- `SHOPIFY_API_SECRET`: Your app's API secret
- `SCOPES`: Required API scopes
- `HOST`: Your app's host URL

## Troubleshooting

### Common Issues

1. **App not loading**: Check your Vercel deployment logs
2. **Banner not appearing**: Ensure the extension is added to your theme
3. **Authentication errors**: Verify your redirect URLs match your deployed app

### Support

- [Shopify App Development Docs](https://shopify.dev/docs/apps)
- [Theme App Extensions Guide](https://shopify.dev/docs/apps/online-store/theme-app-extensions)
- [Vercel Deployment Docs](https://vercel.com/docs)

## License

This project is licensed under the MIT License.

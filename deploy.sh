#!/bin/bash

echo "🚀 Deploying Shopify Banner App to Vercel..."

# Build the frontend
echo "📦 Building frontend..."
cd web/frontend
npm run build
cd ../..

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Update your shopify.app.toml file with the new Vercel URL"
echo "2. Run 'shopify app deploy' to update your app configuration"
echo "3. Test your app in your development store"

# PowerShell deployment script for Windows

Write-Host "🚀 Deploying Shopify Banner App to Vercel..." -ForegroundColor Green

# Build the frontend
Write-Host "📦 Building frontend..." -ForegroundColor Yellow
Set-Location "web\frontend"
npm run build
Set-Location "..\..\"

# Deploy to Vercel
Write-Host "🌐 Deploying to Vercel..." -ForegroundColor Yellow
vercel --prod

Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Update your shopify.app.toml file with the new Vercel URL" -ForegroundColor White
Write-Host "2. Run 'shopify app deploy' to update your app configuration" -ForegroundColor White
Write-Host "3. Test your app in your development store" -ForegroundColor White

import { join } from "path";
import { readFileSync } from "fs";
import express from "express";
import serveStatic from "serve-static";
import compression from "compression";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(compression());
app.use(express.json());

// Basic authentication middleware for Shopify requests
const authenticateShopify = (req, res, next) => {
  // In a production app, you would validate the Shopify webhook signature here
  // For this demo, we'll just pass through
  next();
};

// API Routes
app.get("/api", (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: "Banner App API is running",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ 
    status: "healthy",
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    timestamp: new Date().toISOString()
  });
});

// Banner configuration endpoint
app.get("/api/banner/config", (req, res) => {
  res.status(200).json({
    defaultText: "🎉 Free Shipping on All Orders! 🎉",
    enabled: true,
    showCloseButton: true,
    backgroundColor: "#667eea",
    textColor: "#ffffff"
  });
});

// Update banner configuration
app.post("/api/banner/config", authenticateShopify, (req, res) => {
  // In a real app, you would save this to a database
  const config = req.body;
  res.status(200).json({
    success: true,
    message: "Banner configuration updated",
    config: config
  });
});

// Shopify Auth routes (basic implementation)
app.get("/api/auth", (req, res) => {
  const shop = req.query.shop;
  if (!shop) {
    return res.status(400).json({ error: "Missing shop parameter" });
  }
  
  // In a real app, you would initiate OAuth flow here
  res.redirect(`https://${shop}/admin/apps`);
});

app.get("/api/auth/callback", (req, res) => {
  // Handle OAuth callback
  res.json({ success: true, message: "Authentication successful" });
});

// Webhook endpoints
app.post("/api/webhooks", authenticateShopify, (req, res) => {
  const webhookTopic = req.headers['x-shopify-topic'];
  console.log(`Received webhook: ${webhookTopic}`);
  res.status(200).json({ received: true });
});

// Serve static files
const staticPath = process.env.NODE_ENV === 'production' ? 'dist' : 'frontend/dist';
app.use(serveStatic(staticPath, { index: false }));

// Catch-all handler for SPA
app.use("/*", async (req, res) => {
  try {
    const indexPath = join(process.cwd(), staticPath, "index.html");
    const indexHTML = readFileSync(indexPath, 'utf-8');
    return res
      .status(200)
      .set("Content-Type", "text/html")
      .send(indexHTML);
  } catch (error) {
    console.error("Error serving index.html:", error);
    return res.status(500).json({ 
      error: "Internal server error",
      message: "Could not serve application"
    });
  }
});

const PORT = parseInt(process.env.BACKEND_PORT || process.env.PORT, 10) || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Banner App server is running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 API available at: http://localhost:${PORT}/api`);
});

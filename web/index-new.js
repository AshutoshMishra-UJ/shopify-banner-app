import { join, dirname } from "path";
import { readFileSync, existsSync } from "fs";
import express from "express";
import serveStatic from "serve-static";
import compression from "compression";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';

// Get the directory of this file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(compression());
app.use(express.json());

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
app.post("/api/banner/config", (req, res) => {
  const { text, enabled, showCloseButton, backgroundColor, textColor } = req.body;
  
  // In a real app, you would save this to a database
  // For now, just return the updated config
  res.status(200).json({
    success: true,
    config: {
      text: text || "🎉 Free Shipping on All Orders! 🎉",
      enabled: enabled !== undefined ? enabled : true,
      showCloseButton: showCloseButton !== undefined ? showCloseButton : true,
      backgroundColor: backgroundColor || "#667eea",
      textColor: textColor || "#ffffff"
    }
  });
});

// Serve static files
const staticPath = process.env.NODE_ENV === 'production' ? 'dist' : 'frontend/dist';
const staticDir = join(__dirname, staticPath);

if (existsSync(staticDir)) {
  console.log(`📁 Serving static files from: ${staticDir}`);
  app.use(serveStatic(staticDir, { index: false }));
} else {
  console.log(`⚠️  Static directory not found: ${staticDir}`);
}

// Catch-all handler for SPA
app.use("/*", async (req, res) => {
  try {
    const indexPath = join(staticDir, "index.html");
    
    if (!existsSync(indexPath)) {
      console.log(`❌ Index file not found: ${indexPath}`);
      return res.status(404).json({ 
        error: "Application not built",
        message: "Please run 'npm run build' in the frontend directory first",
        indexPath: indexPath
      });
    }
    
    const indexHTML = readFileSync(indexPath, 'utf-8');
    return res
      .status(200)
      .set("Content-Type", "text/html")
      .send(indexHTML);
  } catch (error) {
    console.error("Error serving index.html:", error);
    return res.status(500).json({ 
      error: "Internal server error",
      message: "Could not serve application",
      details: error.message
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message
  });
});

const PORT = parseInt(process.env.BACKEND_PORT || process.env.PORT, 10) || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Banner App server is running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 API available at: http://localhost:${PORT}/api`);
  console.log(`🏠 App available at: http://localhost:${PORT}`);
  console.log(`📁 Static files: ${staticDir}`);
  console.log(`📄 Index file exists: ${existsSync(join(staticDir, "index.html"))}`);
});

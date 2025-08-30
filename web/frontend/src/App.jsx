import React, { useState, useEffect } from 'react'

function App() {
  const [apiStatus, setApiStatus] = useState('checking...')

  useEffect(() => {
    // Check if API is running
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setApiStatus('✅ Connected'))
      .catch(() => setApiStatus('❌ Disconnected'))
  }, [])

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>🎉 Banner App</h1>
          <p>Promotional banner for your Shopify store</p>
          <div style={{ marginTop: '10px', fontSize: '14px' }}>
            <span className="status-indicator"></span>
            API Status: {apiStatus}
          </div>
        </header>

        <div className="banner">
          <strong>🎊 Welcome to Banner App! 🎊</strong>
          <br />
          Your promotional banner extension is ready to use.
        </div>

        <div className="grid">
          <div>
            <div className="card">
              <h2>📋 How to use your banner</h2>
              <ol className="list">
                <li>Go to your store's theme editor (Online Store → Themes → Customize)</li>
                <li>Add a new section at the top of your page</li>
                <li>Select "Promotional Banner" from the app blocks</li>
                <li>Customize the banner text and appearance</li>
                <li>Save and publish your theme</li>
              </ol>
            </div>

            <div className="card">
              <h2>🚀 Features</h2>
              <div className="badges">
                <span className="badge">Customizable text</span>
                <span className="badge">Responsive design</span>
                <span className="badge">Close button option</span>
                <span className="badge">Gradient background</span>
                <span className="badge">Smooth animations</span>
              </div>
            </div>
          </div>

          <div>
            <div className="card">
              <h2>👀 Banner Preview</h2>
              <p>This is how your banner will look on the storefront:</p>
              <div className="preview-banner">
                <span className="emoji">🎉</span>
                {' '}Free Shipping on All Orders!{' '}
                <span className="emoji">🎉</span>
              </div>
            </div>

            <div className="card">
              <h2>⚙️ Customization Options</h2>
              <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                <li>Banner text content</li>
                <li>Background colors</li>
                <li>Text colors</li>
                <li>Show/hide close button</li>
                <li>Animation settings</li>
              </ul>
            </div>

            <div className="card">
              <h2>📱 Deployment</h2>
              <p>Ready to deploy your app to production:</p>
              <div className="code-block">
                npm run build<br />
                vercel --prod
              </div>
              <p style={{ fontSize: '14px', color: '#6c757d', marginTop: '8px' }}>
                See the README.md for detailed deployment instructions.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>🎯 What's Included</h2>
          <div className="grid">
            <div>
              <h3>Frontend Features:</h3>
              <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginTop: '8px' }}>
                <li>React-based admin interface</li>
                <li>Responsive design</li>
                <li>Real-time API connection</li>
                <li>Modern UI components</li>
              </ul>
            </div>
            <div>
              <h3>Backend Features:</h3>
              <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginTop: '8px' }}>
                <li>Express.js server</li>
                <li>Shopify webhook handling</li>
                <li>Authentication endpoints</li>
                <li>Banner configuration API</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

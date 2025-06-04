const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 🌐 Redirect all non-www and non-https to https://www.lilbean.fun
app.use((req, res, next) => {
  const host = req.headers.host;
  const proto = req.headers['x-forwarded-proto'];

  // Redirect if not https or not www
  if (proto !== 'https' || host === 'lilbean.fun') {
    return res.redirect(301, `https://www.lilbean.fun${req.url}`);
  }

  next();
});

// ✅ Serve static files
app.use(express.static(path.join(__dirname)));

// ✅ SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// ⛔ Redirect HTTP → HTTPS
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(`https://${req.headers.host}${req.url}`);
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

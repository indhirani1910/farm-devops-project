// server.js
const express = require('express');
const app = express();
const path = require('path');

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Optional API route for frontend JS
app.get('/api/status', (req, res) => {
  res.send("✅ Farm status: All crops are healthy!");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

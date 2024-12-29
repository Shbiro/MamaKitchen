const https = require('https');
const fs = require('fs');
const express = require('express');
const path = require('path');

const app = express();
const port = 443; // פורט HTTPS

// הגדרת תעודות SSL
const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/13.60.120.78/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/13.60.120.78/cert.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/13.60.120.78/chain.pem')
};

// הגדרת המיקום של קבצי ה-Frontend
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// כל בקשה שאינה תואמת נתיבים תעבור לעמוד index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

// הפעלת השרת עם HTTPS
https.createServer(options, app).listen(port, '0.0.0.0', () => {
  console.log(`Server is running securely on https://13.60.120.78`);
});

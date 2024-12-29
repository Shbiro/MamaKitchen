const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// הגדרת המיקום של הקבצים של frontend
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// כל בקשה שתתבצע לא תואמת בנתיבים הקיימים תעבור לעמוד index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

// עדכון הכתובת ל-0.0.0.0
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});

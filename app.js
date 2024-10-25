// Import required modules
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use Railway's environment variable for PORT

// Route for the home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

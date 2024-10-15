const express = require("express");

function createServer() {
    const app = express();
    const port = process.env.PORT||3000;
  
    // Middleware to parse JSON
    app.use(express.json());
  
    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
  
  // Export the createServer function
module.exports = { createServer };
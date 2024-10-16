const express = require("express");

const getData = async (req, res) => {
  try {
    const data = req.body;

    console.log("====================================");
    console.log("data:", data);
    console.log("====================================");

    return res.send(data);
  } catch (err) {
  res.send(err);
  }
};

function createServer() {
    const app = express();
    const port = process.env.PORT||3000;
  
    // Middleware to parse JSON
    app.use(express.json());

    // Route registration for getData
    app.post('/getdata', getData);
  
    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
  
  // Export the createServer function
module.exports = { createServer };
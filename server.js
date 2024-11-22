const express = require("express");
const cors = require("cors"); // Import the cors middleware
const axios = require("axios");

const app = express();
const port = 5000;

app.use(express.json({ limit: '50mb' })); // Increase to 50MB (adjust as needed)

// Use CORS middleware
app.use(cors()); // Allows requests from any origin

app.use(express.json());

app.post("/proxy", async (req, res) => {
  try {
    const response = await axios.post(
      "https://script.google.com/macros/s/AKfycbxlZEr2yOb5aDzribupHhX998W3OUpEd6WU5eHdkcjYdM92VDqkXfCMOECDd3XHBKUerQ/exec",
      req.body
    );
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
});

app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});

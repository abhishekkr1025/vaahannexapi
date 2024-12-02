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
      "https://script.google.com/macros/s/AKfycbxNp0x8YoO8c_6Sh0O_TrNiuZpU3b5kppHNcFdZNx3MJBM9oI_kpAEpBKHG1WZPQ0Uk/exec",
      req.body
    );
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
});

app.post("/save", async (req, res) => {
  try {
    const response = await axios.post(
      "https://script.google.com/macros/s/AKfycbxzDejvY_Z_5fSQLgSPfMll809SHOJAIuxxoisOy7GhsdeE7WLZ-QLodwy2yfjPHLE/exec",
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

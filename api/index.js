const express = require("express");

const app = express();
const PORT = 3000;

// Basic Route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

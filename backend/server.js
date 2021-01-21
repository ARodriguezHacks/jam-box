import express from "express";

// Initialize express
const app = express();

app.listen(5000, console.log("Server running on port 5000"));

// Routes
app.get("/", (req, res) => {
  res.send("Api is running");
});

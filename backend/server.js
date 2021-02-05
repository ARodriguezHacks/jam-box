import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/db.js";
import { songs } from "./data/music.js";

dotenv.config();
// Initialize express
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Routes
app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/songs", (req, res) => {
  res.send(songs);
});

app.get("/about", (req, res) => {
  res.send("About Page is Showing");
});

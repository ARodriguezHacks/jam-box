import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/db.js";
import songRoutes from "./routes/songRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

connectDatabase();

// Initialize express
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

// Routes
app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/songs", songRoutes);
app.use("/api/users", userRoutes);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

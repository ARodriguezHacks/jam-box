import express from "express";
import { songs } from "../data/music.js";

const router = express.Router();

// add a try/catch method for best practices and for future database fetching
router.get("/", (req, res) => {
  res.send(songs);
});

export default router;

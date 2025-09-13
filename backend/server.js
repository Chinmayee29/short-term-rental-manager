import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import listingRoutes from "./routes/listingRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// ES module __dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve frontend static files (your HTML, CSS, JS in /frontend)
app.use(express.static(path.join(__dirname, "../frontend")));

// Routes with /api prefix
app.use("/api/users", userRoutes);
app.use("/api/listings", listingRoutes);

// ✅ Catch-all route → send frontend's index.html (signup/login/etc.)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/signup.html")); 
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

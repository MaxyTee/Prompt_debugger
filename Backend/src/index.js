import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import aiRouter from "../routes/ai.js";
import authRoutes from "../routes/auth.routes.js";
import chatsRoutes from "../routes/chats.routes.js";
import { connectDB } from "../db/connectDB.js";
import messageRoutes from "../routes/message.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(cookieParser());
app.use(express.json());

// app.use("/api", aiRouter);
app.use("/api/auth", authRoutes);
app.use("/api/chatList", chatsRoutes);
app.use("/api/messages", messageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log("Sever running on", PORT);
});

//

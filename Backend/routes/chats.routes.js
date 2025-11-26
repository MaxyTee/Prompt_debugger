import express from "express";
import {
  postChat,
  getChats,
  getChatbyId,
} from "../controllers/chats.controller.js";
const router = express.Router();

router.post("/chat", postChat);
router.get("/chats/:userId", getChats);
router.get("/chat/:chatId", getChatbyId);

export default router;

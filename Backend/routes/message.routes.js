import express from "express";
import {
  createMessage,
  getMessagesByChatId,
} from "../controllers/message.controller.js";
const router = express.Router();

router.post("/message", createMessage);
router.get("/allMessages/:chatId", getMessagesByChatId);

export default router;

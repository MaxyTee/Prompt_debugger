import { Message } from "../models/message.model.js";
import { debug_prompt } from "../utils/ai.js";
import { Chats } from "../models/chats.model.js";

export const createMessage = async (req, res) => {
  console.log(req.body);

  const { content, chatId, role } = req.body;

  try {
    if (!chatId) {
      return res.status(400).json({ message: "ChatId is required" });
    }

    const ai_response = await debug_prompt(content);
    console.log(ai_response);
    const userMessage = new Message({
      message_content: content,
      role,
      chatId,
    });

    const aiMessage = new Message({
      message_content: ai_response,
      role: "assistant",
      chatId,
    });
    await userMessage.save();
    await aiMessage.save();

    const chat = await Chats.findById(chatId);
    if (chat.title == "New Conversation") {
      chat.title = `analyse - ${content}`;
    }
    await chat.save();

    res.status(201).json({
      success: true,
      message: "Message created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
};

export const getMessagesByChatId = async (req, res) => {
  const { chatId } = req.params;

  try {
    if (!chatId) {
      return res
        .status(400)
        .status({ success: false, message: "chatId is required" });
    }

    const messages = await Message.find({ chatId: chatId });

    if (!messages) {
      return res
        .status(400)
        .json({ success: true, message: "Messages not found" });
    }

    res
      .status(200)
      .json({ success: true, messages: "Messages get successfully", messages });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
};

import { Chats } from "../models/chats.model.js";
import { Message, messageSchema } from "../models/message.model.js";
import { debug_prompt } from "../utils/ai.js";
export const postChat = async (req, res) => {
  const { content, userId } = req.body;
  console.log(req.body);
  try {
    if (!content || !userId) {
      console.log(content, userId);
      return res
        .status(400)
        .json({ success: false, message: "requires UserId and title" });
    }
    const title = `New Conversation`;
    const chat = new Chats({
      title,
      userId,
    });

    await chat.save();
    //Saving message
    const chatId = chat._id;
    const newMessage = new Message({
      chatId,
      role: "user",
      message_content: content,
    });
    const ai_response = await debug_prompt(content);
    const aiMessage = new Message({
      message_content: ai_response,
      role: "assistant",
      chatId,
    });

    await newMessage.save();
    await aiMessage.save();
    return res.status(201).json({
      success: true,
      message: "Chat created successfully",
      chat: { ...chat._doc },
    });
  } catch (error) {
    console.log("Error", error.message);
  }
};

export const getChats = async (req, res) => {
  const { userId } = req.params;

  try {
    const chats = await Chats.find({ userId: userId }).sort({ createdAt: -1 });
    res.json({ success: true, chats });
  } catch (error) {}
};

export const getChatbyId = async (req, res) => {
  const { chatId } = req.params;
  try {
    const chat = await Chats.findById(chatId);

    if (!chat) {
      return res
        .status(404)
        .json({ success: false, message: "Chat not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Chat fetched successfuuly", chat });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

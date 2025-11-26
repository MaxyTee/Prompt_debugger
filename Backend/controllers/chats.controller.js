import { Chats } from "../models/chats.model.js";
import { messageSchema } from "../models/message.model.js";

export const postChat = async (req, res) => {
  const { title, userId } = req.body;
  try {
    if (!title || !userId) {
      return res
        .status(400)
        .json({ success: false, message: "requires UserId and title" });
    }

    const chat = new Chats({
      title,
      userId,
    });

    await chat.save();

    res.status(201).json({
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
    const chats = await Chats.find({ userId: userId });
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

import mongoose from "mongoose";

export const messageSchema = new mongoose.Schema(
  {
    message_content: {
      type: mongoose.Schema.Types.Mixed, // allows string, object, array, number, etc.
      required: true,
    },
    chatId: { type: String, required: true },
    role: { type: String, required: true },
  },
  { timestamps: true }
);

export const Message = mongoose.model("Messages", messageSchema);

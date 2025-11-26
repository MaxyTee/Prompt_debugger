import mongoose from "mongoose";

const chatsSchema = new mongoose.Schema(
  { title: String, userId: String },
  { timestamps: true }
);

export const Chats = mongoose.model("Chat", chatsSchema);

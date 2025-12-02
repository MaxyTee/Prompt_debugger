import { userChatStore } from "../store/chatStore";
import { useMessageStore } from "../store/messageStore";

const createMessage = useMessageStore.getState().createMessage;
const postChat = userChatStore.getState().postChat;
export const start_NewChat = async ({ content, userId }) => {
  if (!content || !userId) {
    console.log("Required fields are missging");
    return;
  }
  try {
    const response = await postChat({ content, userId });
    if (!response.success) {
      return { success: false };
    }
    return {
      success: true,
      chatId: response.chatId,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const addMessage = async ({ content, chatId, role = "user" }) => {
  if (!content || !chatId) {
    console.log("Can't send message, Required fields are missing");
    return;
  }
  try {
    const response = await createMessage({ content, chatId, role });
    if (!response.success) {
      return {
        success: false,
      };
    }
    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

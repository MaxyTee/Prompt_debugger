import { useAuthStore } from "../store/authStore";
import { userChatStore } from "../store/chatStore";
import { useMessageStore } from "../store/messageStore";
import { useState, useRef, useEffect } from "react";
import {
  Send,
  Bot,
  Sparkles,
  Menu,
  X,
  Moon,
  Sun,
  ChevronDown,
  LogOut,
} from "lucide-react";
import { getTimeCategory } from "../utils/getTimeCategory";
import Sidebar from "../components/ChatsComponent/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { addMessage, start_NewChat } from "../utils/getSendMessageAction";
import { extractMessageContent } from "../utils/extractMessageContent";

export default function PromptDebuggerChat() {
  const [darkMode, setDarkMode] = useState(true);
  const { chatId } = useParams();
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const { postChat, getChats, getChatbyId, chats, chat } = userChatStore();
  const { getMessagesByChatId, messagesDB } = useMessageStore();

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentChatId, setCurrentChatId] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    const fetchAllChats = async () => {
      // Uncomment in your implementation
      await getChats(user._id);
      if (chat?._id) {
        await getChatbyId(chat._id);
        await getMessagesByChatId(chat._id);
      }
    };
    if (user?._id) {
      fetchAllChats();
    }
  }, [user?._id]);

  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const userInitials = getInitials(user?.name);

  // Load messages from messagesDB when available
  useEffect(() => {
    if (messagesDB && messagesDB.length > 0) {
      const formattedMessages = messagesDB.map((msg) => ({
        role: msg.role || (msg.sender === "user" ? "user" : "assistant"),
        content: `${
          msg.role === "user" ? msg.message_content : extractMessageContent(msg)
        }`,
        username: user?.name,
        userInitials: getInitials(user?.name),
        timestamp: msg.timestamp || msg.createdAt,
      }));
      setMessages(formattedMessages);
    }
  }, [messagesDB]);

  const handleLogout = async () => {
    await logout();
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const newChatpayload = {
      content: input,
      userId: user._id,
    };

    const newMsg = {
      role: "user",
      content: input,
      username: user?.name,
      userInitials,
      chatId: chat?._id,
      timestamp: new Date().toISOString(),
    };

    // Optimistic update
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    setIsTyping(true);

    try {
      if (chatId) {
        const messagePayload = {
          content: input,
          chatId: chat?._id,
        };
        // Existing chat
        await addMessage(messagePayload);
      } else {
        // New chat
        const response = await start_NewChat(newChatpayload);

        if (response?.success) {
          navigate(`/chats/${response.chatId}`);
        }
      }
    } catch (error) {
      console.error("Message sending failed:", error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const startNewChat = async () => {
    const newChatTitle = "New Conversation";

    try {
      await postChat(newChatTitle, user?._id);
      await getChats(user._id);

      setMessages([]);
      setCurrentChatId(chat?._id);
      console.log("New chat created");
    } catch (error) {
      console.error("Error creating new chat:", error);
    }
  };

  const loadChat = async (chatId) => {
    try {
      setCurrentChatId(chatId);
      await getChatbyId(chatId);
      await getMessagesByChatId(chatId);
      console.log("Loading chat:", chatId);
    } catch (error) {
      console.error("Error loading chat:", error);
    }
  };

  useEffect(() => {
    if (!chatId) {
      return;
    }
    loadChat(chatId);
  }, [chatId]);

  // Format chats from store
  const formattedChats = chats.map((c) => ({
    id: c._id,
    title: c.title || "Untitled Chat",
    time: c.createdAt || c.updatedAt,
    messages: c.messages || [],
  }));

  const groupedChats = formattedChats.reduce((acc, chat) => {
    const category = getTimeCategory(chat.time);
    if (!acc[category]) acc[category] = [];
    acc[category].push(chat);
    return acc;
  }, {});

  const bgClass = darkMode
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    : "bg-gradient-to-br from-gray-50 to-white";

  const sidebarBg = darkMode
    ? "bg-black/40 backdrop-blur-xl border-gray-800"
    : "bg-white/80 backdrop-blur-xl border-gray-200";

  const textPrimary = darkMode ? "text-white" : "text-gray-900";
  const textSecondary = darkMode ? "text-gray-400" : "text-gray-600";
  const textTertiary = darkMode ? "text-gray-500" : "text-gray-500";

  const inputBg = darkMode
    ? "bg-gray-900/50 border-gray-800 text-white"
    : "bg-white border-gray-300 text-gray-900";
  const cardBg = darkMode
    ? "bg-gray-900/50 border-gray-800"
    : "bg-white border-gray-200";
  const hoverBg = darkMode ? "hover:bg-gray-800/50" : "hover:bg-gray-100";
  const activeBg = darkMode
    ? "bg-gradient-to-r from-amber-600/20 to-amber-700/20 border-amber-600/30"
    : "bg-gradient-to-r from-amber-100 to-amber-50 border-amber-300";

  return (
    <div className={`flex h-screen ${bgClass} ${textPrimary}`}>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        sidebarBg={sidebarBg}
        darkMode={darkMode}
        startNewChat={startNewChat}
        textTertiary={textTertiary}
        inputBg={inputBg}
        groupedChats={groupedChats}
        loadChat={loadChat}
        activeBg={activeBg}
        currentChatId={currentChatId}
        textPrimary={textPrimary}
        textSecondary={textSecondary}
        hoverBg={hoverBg}
        setMessages={setMessages}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <div
          className={`${sidebarBg} border-b ${
            darkMode ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`p-2 ${hoverBg} rounded-lg transition-colors`}
              >
                {sidebarOpen ? (
                  <X className={`w-5 h-5 ${textSecondary}`} />
                ) : (
                  <Menu className={`w-5 h-5 ${textSecondary}`} />
                )}
              </button>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className={`text-base sm:text-lg font-bold ${textPrimary}`}>
                  Prompt Debugger
                </h1>
                <p className={`text-xs ${textSecondary}`}>
                  AI-powered analysis
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 ${hoverBg} rounded-lg transition-colors`}
              >
                {darkMode ? (
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                ) : (
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                )}
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className={`flex items-center gap-2 px-2 sm:px-3 py-2 ${hoverBg} rounded-lg transition-colors`}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm">
                    {userInitials}
                  </div>
                  <span
                    className={`hidden sm:inline text-sm font-medium ${textPrimary}`}
                  >
                    {user?.name}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 ${textSecondary} hidden sm:block`}
                  />
                </button>

                {showUserMenu && (
                  <div
                    className={`absolute right-0 mt-2 w-48 ${
                      darkMode ? "bg-gray-900" : "bg-white"
                    } rounded-lg shadow-2xl border ${
                      darkMode ? "border-gray-800" : "border-gray-200"
                    } py-1 z-10`}
                  >
                    <div
                      className={`px-4 py-2 border-b ${
                        darkMode ? "border-gray-800" : "border-gray-100"
                      }`}
                    >
                      <div className={`text-sm font-medium ${textPrimary}`}>
                        {user?.name}
                      </div>
                      <div className={`text-xs ${textSecondary}`}>
                        Logged in
                      </div>
                    </div>
                    <button
                      onClick={handleLogout}
                      className={`w-full flex items-center gap-2 px-4 py-2 ${textSecondary} ${hoverBg} transition-colors text-sm`}
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        {messages.length === 0 ? (
          <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
            <div className="text-center max-w-2xl w-full px-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center shadow-2xl">
                <Sparkles className="w-12 h-12 sm:w-14 sm:h-14 text-white" />
              </div>
              <h2
                className={`text-2xl sm:text-3xl font-bold ${textPrimary} mb-2 sm:mb-3`}
              >
                Welcome back {user?.name}!
              </h2>
              <p
                className={`${textSecondary} text-base sm:text-lg mb-6 sm:mb-8`}
              >
                What project do you want to build today?
              </p>

              <div className="relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Describe your task or drop a project file..."
                  className={`w-full ${inputBg} rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 pr-12 sm:pr-14 focus:outline-none focus:ring-2 focus:ring-amber-600 resize-none shadow-lg text-sm sm:text-base`}
                  rows="3"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="absolute right-2 sm:right-3 bottom-2 sm:bottom-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white p-2 sm:p-2.5 rounded-lg sm:rounded-xl hover:from-amber-700 hover:to-amber-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all shadow-lg"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              <div
                className={`mt-6 sm:mt-8 flex items-center justify-center gap-2 text-xs ${textTertiary}`}
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Powered by Forge AI</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
              {messages.map((message, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 sm:gap-4 ${
                    message.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg ${
                      message.role === "user"
                        ? "bg-gradient-to-br from-amber-500 to-amber-700 text-white font-semibold text-xs sm:text-sm"
                        : "bg-gradient-to-br from-amber-500 to-amber-700"
                    }`}
                  >
                    {message.role === "user" ? (
                      message.userInitials || userInitials
                    ) : (
                      <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    )}
                  </div>
                  <div className="flex flex-col gap-1 max-w-full sm:max-w-2xl">
                    {message.role === "user" && message.username && (
                      <div className={`text-xs ${textSecondary} px-1`}>
                        {message.username}
                      </div>
                    )}
                    <div
                      className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl whitespace-pre-wrap shadow-lg text-sm sm:text-base ${
                        message.role === "user"
                          ? "bg-gradient-to-br from-amber-600 to-amber-700 text-white"
                          : `${cardBg} ${textPrimary}`
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                    <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div
                    className={`${cardBg} px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg`}
                  >
                    <div className="flex gap-1">
                      <div
                        className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
        )}

        {/* Input Area - Only show when there are messages */}
        {messages.length > 0 && (
          <div
            className={`${sidebarBg} border-t ${
              darkMode ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
              <div className="relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Paste your prompt here for analysis..."
                  className={`w-full ${inputBg} rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 pr-12 sm:pr-14 focus:outline-none focus:ring-2 focus:ring-amber-600 resize-none shadow-lg text-sm sm:text-base`}
                  rows="2"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="absolute right-2 sm:right-3 bottom-2 sm:bottom-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white p-2 sm:p-2.5 rounded-lg sm:rounded-xl hover:from-amber-700 hover:to-amber-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all shadow-lg"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

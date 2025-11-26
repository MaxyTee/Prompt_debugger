// import React, { useState, useRef, useEffect } from "react";
// import {
//   Send,
//   Bot,
//   Sparkles,
//   MessageSquare,
//   Settings,
//   Menu,
//   X,
//   Plus,
//   Clock,
//   MoreHorizontal,
//   Search,
//   Moon,
//   Sun,
//   ChevronDown,
//   LogOut,
// } from "lucide-react";
import { useAuthStore } from "../store/authStore";
import { userChatStore } from "../store/chatStore";
import { useMessageStore } from "../store/messageStore";
import { useAIStore } from "../store/aiStore";

// export default function PromptDebuggerChat() {
//   const [darkMode, setDarkMode] = useState(true);

//   const { user, logout } = useAuthStore();
//   const { postChat, getChats, getChatbyId, chats, chat } = userChatStore();
//   const { createMessage, getMessagesByChatId, messagesDB } = useMessageStore();
//   const { aiData, debugPrompt, isLoading } = useAIStore();
//   const [showUserMenu, setShowUserMenu] = useState(false);

//   const [userDetials] = useState(user);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [chatHistory, setChatHistory] = useState([
//     { id: 1, title: "Assisted in 3D modeling setup", time: "Just now" },
//     { id: 2, title: "Optimized workflow automation", time: "Just now" },
//     { id: 3, title: "Created identity concepts", time: "2 hours ago" },
//     { id: 4, title: "Resource for Q4 project", time: "2 hours ago" },
//     { id: 5, title: "Team session notes", time: "3 days ago" },
//     { id: 6, title: "Product roadmap planning", time: "5 days ago" },
//     { id: 7, title: "UX research synthesis", time: "5 days ago" },
//     { id: 8, title: "Product roadmap planning", time: "2 months ago" },
//     { id: 9, title: "UX research synthesis", time: "2 months ago" },
//   ]);
//   const [currentChatId, setCurrentChatId] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const messagesEndRef = useRef(null);

//   console.log(userDetials);
//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   console.log(chat);
//   console.log(chats);
//   console.log(aiData);
//   console.log(messagesDB);

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, isTyping]);

//   useEffect(() => {
//     const fetchAllChats = async () => {
//       await getChats(user._id);
//       await getChatbyId(chat?._id);
//       await getMessagesByChatId(chat?._id);
//     };
//     if (user?._id) {
//       fetchAllChats();
//     }
//   }, [user?._id]);

//   const getInitials = (name) => {
//     return name
//       ?.split("")
//       .map((word) => word[0])
//       .join("")
//       .toUpperCase()
//       .slice(0, 2);
//   };
//   const userInitials = getInitials(user?.name);

//   const handleLogout = async () => {
//     console.log("Logged Out");
//     await logout();
//   };

//   const analyzePrompt = (prompt) => {
//     const issues = [];
//     const suggestions = [];
//     const strengths = [];

//     if (prompt.length < 10) {
//       issues.push("Your prompt is too short - it may lack necessary context");
//     } else if (prompt.length > 2000) {
//       issues.push(
//         "Your prompt is very long - consider breaking it into sections"
//       );
//     } else {
//       strengths.push("Good prompt length");
//     }

//     if (prompt.includes("?")) {
//       strengths.push("Contains clear questions");
//     } else {
//       suggestions.push("Try adding specific questions for clearer direction");
//     }

//     const hasContext = /context|background|about|regarding/i.test(prompt);
//     if (hasContext) {
//       strengths.push("Provides contextual information");
//     } else {
//       suggestions.push(
//         "Add context or background information for better results"
//       );
//     }

//     const vague = /something|anything|stuff|thing/i.test(prompt);
//     if (vague) {
//       issues.push("Contains vague terms - try to be more specific");
//     }

//     const hasExample = /example|such as|like|for instance/i.test(prompt);
//     if (hasExample) {
//       strengths.push("Includes helpful examples");
//     } else {
//       suggestions.push("Consider adding examples to illustrate what you want");
//     }

//     const hasConstraints =
//       /must|should|limit|maximum|minimum|exactly|only/i.test(prompt);
//     if (hasConstraints) {
//       strengths.push("Specifies constraints or requirements");
//     } else {
//       suggestions.push(
//         "Add constraints like length, format, or style if needed"
//       );
//     }

//     const hasFormat = /format|structure|json|list|table|markdown/i.test(prompt);
//     if (hasFormat) {
//       strengths.push("Specifies desired output format");
//     } else {
//       suggestions.push("Specify your desired output format");
//     }

//     const wordCount = prompt.trim().split(/\s+/).length;
//     const sentenceCount = prompt
//       .split(/[.!?]+/)
//       .filter((s) => s.trim().length > 0).length;
//     const score = Math.max(
//       0,
//       100 - issues.length * 15 - suggestions.length * 5
//     );

//     return { issues, suggestions, strengths, wordCount, sentenceCount, score };
//   };

//   const generateResponse = (userPrompt) => {
//     const analysis = analyzePrompt(userPrompt);

//     let response = `I've analyzed your prompt! Here's what I found:\n\n`;
//     response += `📊 **Quality Score: ${analysis.score}/100**\n`;
//     response += `📝 ${analysis.wordCount} words, ${analysis.sentenceCount} sentences\n\n`;

//     if (analysis.strengths.length > 0) {
//       response += `✅ **Strengths:**\n`;
//       analysis.strengths.forEach((s) => (response += `• ${s}\n`));
//       response += `\n`;
//     }

//     if (analysis.issues.length > 0) {
//       response += `⚠️ **Issues to Fix:**\n`;
//       analysis.issues.forEach((i) => (response += `• ${i}\n`));
//       response += `\n`;
//     }

//     if (analysis.suggestions.length > 0) {
//       response += `💡 **Suggestions:**\n`;
//       analysis.suggestions.forEach((s) => (response += `• ${s}\n`));
//       response += `\n`;
//     }

//     response += `\nFeel free to send me a revised version or a new prompt to analyze!`;

//     return response;
//   };

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMessage = {
//       role: "user",
//       content: input,
//       userDetials: user?.name,
//       userInitials,
//     };

//     console.log(userMessage);
//     const newMessages = [...messages, userMessage];
//     setMessages(newMessages);
//     setInput("");
//     setIsTyping(true);

//     const userMainMessage = userMessage.content;

//     await debugPrompt(userMessage.content);
//     await createMessage(userMainMessage, aiData, chat?._id);

//     if (currentChatId) {
//       setChatHistory((prev) =>
//         prev.map((chat) =>
//           chat.id === currentChatId
//             ? {
//                 ...chat,
//                 messages: newMessages,
//                 time: "Just now",
//                 title: input.slice(0, 30) + (input.length > 30 ? "..." : ""),
//               }
//             : chat
//         )
//       );
//     }

//     // setTimeout(() => {
//     //   const response = generateResponse(input);
//     //   const assistantMessage = { role: "assistant", content: response };
//     //   const updatedMessages = [...newMessages, assistantMessage];
//     //   setMessages(updatedMessages);

//     //   setIsTyping(false);

//     //   if (currentChatId) {
//     //     setChatHistory((prev) =>
//     //       prev.map((chat) =>
//     //         chat.id === currentChatId
//     //           ? { ...chat, messages: updatedMessages }
//     //           : chat
//     //       )
//     //     );
//     //   }
//     // }, 1000);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   const startNewChat = async () => {
//     const newChat = {
//       id: Date.now(),
//       title: "New Conversation",
//       time: "Just now",
//       messages: [],
//     };
//     setChatHistory([newChat, ...chatHistory]);
//     setCurrentChatId(newChat.id);
//     setMessages([]);

//     await postChat(newChat.title, user._id);

//     // await getChats();
//   };

//   const loadChat = (chatId) => {
//     const chat = chatHistory.find((c) => c.id === chatId);

//     if (chat) {
//       setCurrentChatId(chatId);
//       setMessages(chat.messages || []);
//     }
//   };

//   const getTimeCategory = (time) => {
//     if (time === "Just now" || time.includes("hours")) return "Today";
//     if (time.includes("days") && parseInt(time) < 7) return "Yesterday";
//     if (time.includes("days")) return "Last 7 days";
//     if (time.includes("month")) return "Last 30 Days";
//     return "Last 2 Months";
//   };

//   const groupedChats = chatHistory.reduce((acc, chat) => {
//     const category = getTimeCategory(chat.time);
//     if (!acc[category]) acc[category] = [];
//     acc[category].push(chat);
//     return acc;
//   }, {});

//   const bgClass = darkMode
//     ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
//     : "bg-gradient-to-br from-gray-50 to-white";

//   const sidebarBg = darkMode
//     ? "bg-black/40 backdrop-blur-xl border-gray-800"
//     : "bg-white/80 backdrop-blur-xl border-gray-200";

//   const textPrimary = darkMode ? "text-white" : "text-gray-900";
//   const textSecondary = darkMode ? "text-gray-400" : "text-gray-600";
//   const textTertiary = darkMode ? "text-gray-500" : "text-gray-500";

//   const inputBg = darkMode
//     ? "bg-gray-900/50 border-gray-800 text-white"
//     : "bg-white border-gray-300 text-gray-900";
//   const cardBg = darkMode
//     ? "bg-gray-900/50 border-gray-800"
//     : "bg-white border-gray-200";
//   const hoverBg = darkMode ? "hover:bg-gray-800/50" : "hover:bg-gray-100";
//   const activeBg = darkMode
//     ? "bg-gradient-to-r from-amber-600/20 to-amber-700/20 border-amber-600/30"
//     : "bg-gradient-to-r from-amber-100 to-amber-50 border-amber-300";

//   return (
//     <div className={`flex h-screen ${bgClass} ${textPrimary}`}>
//       {/* Mobile Overlay */}
//       {sidebarOpen && (
//         <div
//           className="md:hidden fixed inset-0 bg-black/50 z-40"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <div
//         className={`${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 ${
//           sidebarOpen ? "md:w-72" : "md:w-0"
//         } w-72 fixed md:relative z-50 h-full ${sidebarBg} border-r transition-all duration-300 overflow-hidden flex flex-col`}
//       >
//         <div
//           className={`p-4 border-b ${
//             darkMode ? "border-gray-800" : "border-gray-200"
//           }`}
//         >
//           <button
//             onClick={startNewChat}
//             className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all shadow-lg"
//           >
//             <Plus className="w-5 h-5" />
//             <span className="font-semibold">New Chat</span>
//           </button>
//         </div>

//         <div className="flex-1 overflow-y-auto px-3 py-4">
//           <div className="mb-4">
//             <div className="relative">
//               <Search
//                 className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${textTertiary}`}
//               />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className={`w-full ${inputBg} text-sm rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600`}
//               />
//             </div>
//           </div>

//           {Object.entries(groupedChats).map(([category, chats]) => (
//             <div key={category} className="mb-6">
//               <div
//                 className={`text-xs font-semibold ${textTertiary} mb-2 px-2 uppercase tracking-wider`}
//               >
//                 {category}
//               </div>
//               <div className="space-y-1">
//                 {chats.map((chat) => (
//                   <div
//                     key={chat.id}
//                     onClick={() => loadChat(chat.id)}
//                     className={`group flex items-center justify-between gap-2 p-3 rounded-xl cursor-pointer transition-all border ${
//                       currentChatId === chat.id
//                         ? activeBg
//                         : `border-transparent ${hoverBg}`
//                     }`}
//                   >
//                     <div className="flex items-start gap-3 flex-1 min-w-0">
//                       <MessageSquare className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
//                       <div className="flex-1 min-w-0">
//                         <div
//                           className={`text-sm font-medium ${textPrimary} truncate`}
//                         >
//                           {chat.title}
//                         </div>
//                         <div
//                           className={`text-xs ${textSecondary} flex items-center gap-1 mt-0.5`}
//                         >
//                           <Clock className="w-3 h-3" />
//                           {chat.time}
//                         </div>
//                       </div>
//                     </div>
//                     <button
//                       className={`opacity-0 group-hover:opacity-100 p-1 ${hoverBg} rounded transition-opacity`}
//                     >
//                       <MoreHorizontal className={`w-4 h-4 ${textSecondary}`} />
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div
//           className={`p-4 border-t ${
//             darkMode ? "border-gray-800" : "border-gray-200"
//           } space-y-1`}
//         >
//           <button
//             className={`w-full flex items-center gap-3 px-3 py-2.5 ${textSecondary} ${hoverBg} rounded-lg transition-colors`}
//           >
//             <Settings className="w-4 h-4" />
//             <span className="text-sm font-medium">Settings</span>
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Top Navigation */}
//         <div
//           className={`${sidebarBg} border-b ${
//             darkMode ? "border-gray-800" : "border-gray-200"
//           }`}
//         >
//           <div className="px-6 py-4 flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => setSidebarOpen(!sidebarOpen)}
//                 className={`p-2 ${hoverBg} rounded-lg transition-colors`}
//               >
//                 {sidebarOpen ? (
//                   <X className={`w-5 h-5 ${textSecondary}`} />
//                 ) : (
//                   <Menu className={`w-5 h-5 ${textSecondary}`} />
//                 )}
//               </button>
//               <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center shadow-lg">
//                 <Sparkles className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h1 className={`text-lg font-bold ${textPrimary}`}>
//                   Prompt Debugger
//                 </h1>
//                 <p className={`text-xs ${textSecondary}`}>
//                   AI-powered analysis
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => setDarkMode(!darkMode)}
//                 className={`p-2 ${hoverBg} rounded-lg transition-colors`}
//               >
//                 {darkMode ? (
//                   <Sun className="w-5 h-5 text-amber-500" />
//                 ) : (
//                   <Moon className="w-5 h-5 text-gray-600" />
//                 )}
//               </button>

//               {/* <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg">
//                 {userInitials}
//               </div> */}

//               <div className="relative">
//                 <button
//                   onClick={() => setShowUserMenu(!showUserMenu)}
//                   className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors"
//                 >
//                   <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center text-white font-semibold text-sm">
//                     {userInitials}
//                   </div>
//                   <span className="text-sm font-medium text-gray-700">
//                     {user?.name}
//                   </span>
//                   <ChevronDown className="w-4 h-4 text-gray-500" />
//                 </button>

//                 {showUserMenu && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
//                     <div className="px-4 py-2 border-b border-gray-100">
//                       <div className="text-sm font-medium text-gray-900">
//                         {user.name}
//                       </div>
//                       <div className="text-xs text-gray-500">Logged in</div>
//                     </div>
//                     <button
//                       onClick={handleLogout}
//                       className="w-full flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors text-sm"
//                     >
//                       <LogOut className="w-4 h-4" />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Messages Area */}
//         {messages.length === 0 ? (
//           <div className="flex-1 flex items-center justify-center p-6">
//             <div className="text-center max-w-2xl">
//               <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center shadow-2xl">
//                 <Sparkles className="w-14 h-14 text-white" />
//               </div>
//               <h2 className={`text-3xl font-bold ${textPrimary} mb-3`}>
//                 Welcome back {`${user?.name}`}!
//               </h2>
//               <p className={`${textSecondary} text-lg mb-8`}>
//                 What project do you want to build today?
//               </p>

//               <div className="relative">
//                 <textarea
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   placeholder="Describe your task or drop a project file..."
//                   className={`w-full ${inputBg} rounded-2xl px-6 py-4 pr-14 focus:outline-none focus:ring-2 focus:ring-amber-600 resize-none shadow-lg`}
//                   rows="3"
//                 />
//                 <button
//                   onClick={handleSend}
//                   disabled={!input.trim()}
//                   className="absolute right-3 bottom-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white p-2.5 rounded-xl hover:from-amber-700 hover:to-amber-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all shadow-lg"
//                 >
//                   <Send className="w-5 h-5" />
//                 </button>
//               </div>

//               <div
//                 className={`mt-8 flex items-center justify-center gap-2 text-xs ${textTertiary}`}
//               >
//                 <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
//                 <span>Powered by Forge AI</span>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="flex-1 overflow-y-auto">
//             <div className="max-w-4xl mx-auto px-6 py-6 space-y-6">
//               {messages.map((message, idx) => (
//                 <div
//                   key={idx}
//                   className={`flex gap-4 ${
//                     message.role === "user" ? "flex-row-reverse" : "flex-row"
//                   }`}
//                 >
//                   <div
//                     className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg ${
//                       message.role === "user"
//                         ? "bg-gradient-to-br from-amber-500 to-amber-700 text-white font-semibold text-sm"
//                         : "bg-gradient-to-br from-amber-500 to-amber-700"
//                     }`}
//                   >
//                     {message.role === "user" ? (
//                       message.userInitials || "U"
//                     ) : (
//                       <Bot className="w-6 h-6 text-white" />
//                     )}
//                   </div>
//                   <div className="flex flex-col gap-1 max-w-2xl">
//                     {message.role === "user" && message.username && (
//                       <div className={`text-xs ${textSecondary} px-1`}>
//                         {message.username}
//                       </div>
//                     )}
//                     <div
//                       className={`px-5 py-3 rounded-2xl whitespace-pre-wrap shadow-lg ${
//                         message.role === "user"
//                           ? "bg-gradient-to-br from-amber-600 to-amber-700 text-white"
//                           : `${cardBg} ${textPrimary}`
//                       }`}
//                     >
//                       {message.content}
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               {isTyping && (
//                 <div className="flex gap-4">
//                   <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center shadow-lg">
//                     <Bot className="w-6 h-6 text-white" />
//                   </div>
//                   <div className={`${cardBg} px-5 py-3 rounded-2xl shadow-lg`}>
//                     <div className="flex gap-1">
//                       <div
//                         className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"
//                         style={{ animationDelay: "0ms" }}
//                       ></div>
//                       <div
//                         className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"
//                         style={{ animationDelay: "150ms" }}
//                       ></div>
//                       <div
//                         className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"
//                         style={{ animationDelay: "300ms" }}
//                       ></div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//               <div ref={messagesEndRef} />
//             </div>
//           </div>
//         )}

//         {/* Input Area - Only show when there are messages */}
//         {messages.length > 0 && (
//           <div
//             className={`${sidebarBg} border-t ${
//               darkMode ? "border-gray-800" : "border-gray-200"
//             }`}
//           >
//             <div className="max-w-4xl mx-auto px-6 py-4">
//               <div className="relative">
//                 <textarea
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   placeholder="Paste your prompt here for analysis..."
//                   className={`w-full ${inputBg} rounded-2xl px-6 py-4 pr-14 focus:outline-none focus:ring-2 focus:ring-amber-600 resize-none shadow-lg`}
//                   rows="2"
//                 />
//                 <button
//                   onClick={handleSend}
//                   disabled={!input.trim()}
//                   className="absolute right-3 bottom-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white p-2.5 rounded-xl hover:from-amber-700 hover:to-amber-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all shadow-lg"
//                 >
//                   <Send className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Bot,
  Sparkles,
  MessageSquare,
  Settings,
  Menu,
  X,
  Plus,
  Clock,
  MoreHorizontal,
  Search,
  Moon,
  Sun,
  ChevronDown,
  LogOut,
} from "lucide-react";

export default function PromptDebuggerChat() {
  const [darkMode, setDarkMode] = useState(true);

  // Import stores (you'll need to uncomment these in your actual implementation)
  const { user, logout } = useAuthStore();
  const { postChat, getChats, getChatbyId, chats, chat } = userChatStore();
  const { createMessage, getMessagesByChatId, messagesDB } = useMessageStore();
  const { aiData, isLoading } = useAIStore();

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const messagesEndRef = useRef(null);

  console.log(chat);
  console.log(chats);
  console.log(aiData);
  console.log(messagesDB);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Fetch all chats and messages on mount
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
          msg.role === "user"
            ? msg.message_content
            : `Original Prompt: ${
                msg.message_content.original_prompt
              } \n **Suggestions** ${msg.message_content.suggestions.join(
                "\n"
              )} \n **Message:** ${msg.message_content.explanation}`
        }`,
        username: user?.name,
        userInitials: getInitials(user?.name),
        timestamp: msg.timestamp || msg.createdAt,
      }));
      setMessages(formattedMessages);
    }
  }, [messagesDB]);

  const handleLogout = async () => {
    console.log("Logged Out");
    await logout();
    // Implement your logout logic here
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const payload = {
      role: "user",
      content: input,
      username: user?.name,
      userInitials,
      chatId: chat?._id,
      timestamp: new Date().toISOString(),
    };

    const newMessages = [...messages, payload];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    console.log(aiData);

    try {
      // Call AI debug function
      // await debugPrompt(userPrompt);

      // Create message in database

      // const aiMessage = {
      //   role: "assistant",
      //   content: `Original Prompt: ${
      //     aiData.original_prompt
      //   } Suggestions: - ${aiData.suggestions} Explanation: ${
      //     aiData.explanation
      //   }`,
      //   // content: aiData || "No Newtwork",
      //   timestamp: new Date().toISOString(),
      // };

      // setMessages([...newMessages, aiMessage]);
      await createMessage(payload);

      await getMessagesByChatId(chat._id);

      setIsTyping(false);
    } catch (error) {
      console.error("Error sending message:", error);
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

  const getTimeCategory = (time) => {
    if (!time) return "Today";
    const date = new Date(time);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays <= 7) return "Last 7 days";
    if (diffDays <= 30) return "Last 30 Days";
    return "Last 2 Months";
  };

  // Format chats from store
  const formattedChats = chats.map((c) => ({
    id: c._id,
    title: c.title || "Untitled Chat",
    time: c.updatedAt || c.createdAt,
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
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 ${
          sidebarOpen ? "md:w-72" : "md:w-0"
        } w-72 fixed md:relative z-50 h-full ${sidebarBg} border-r transition-all duration-300 overflow-hidden flex flex-col`}
      >
        <div
          className={`p-4 border-b ${
            darkMode ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <button
            onClick={startNewChat}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all shadow-lg"
          >
            <Plus className="w-5 h-5" />
            <span className="font-semibold">New Chat</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4">
          <div className="mb-4">
            <div className="relative">
              <Search
                className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${textTertiary}`}
              />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full ${inputBg} text-sm rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600`}
              />
            </div>
          </div>

          {Object.keys(groupedChats).length > 0 ? (
            Object.entries(groupedChats).map(([category, categoryChats]) => (
              <div key={category} className="mb-6">
                <div
                  className={`text-xs font-semibold ${textTertiary} mb-2 px-2 uppercase tracking-wider`}
                >
                  {category}
                </div>
                <div className="space-y-1">
                  {categoryChats.map((chatItem) => (
                    <div
                      key={chatItem.id}
                      onClick={() => loadChat(chatItem.id)}
                      className={`group flex items-center justify-between gap-2 p-3 rounded-xl cursor-pointer transition-all border ${
                        currentChatId === chatItem.id
                          ? activeBg
                          : `border-transparent ${hoverBg}`
                      }`}
                    >
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        <MessageSquare className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div
                            className={`text-sm font-medium ${textPrimary} truncate`}
                          >
                            {chatItem.title}
                          </div>
                          <div
                            className={`text-xs ${textSecondary} flex items-center gap-1 mt-0.5`}
                          >
                            <Clock className="w-3 h-3" />
                            {getTimeCategory(chatItem.time)}
                          </div>
                        </div>
                      </div>
                      <button
                        className={`opacity-0 group-hover:opacity-100 p-1 ${hoverBg} rounded transition-opacity`}
                      >
                        <MoreHorizontal
                          className={`w-4 h-4 ${textSecondary}`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className={`text-center py-8 px-4 ${textSecondary}`}>
              <p className="text-sm">No chats yet. Start a new conversation!</p>
            </div>
          )}
        </div>

        <div
          className={`p-4 border-t ${
            darkMode ? "border-gray-800" : "border-gray-200"
          } space-y-1`}
        >
          <button
            className={`w-full flex items-center gap-3 px-3 py-2.5 ${textSecondary} ${hoverBg} rounded-lg transition-colors`}
          >
            <Settings className="w-4 h-4" />
            <span className="text-sm font-medium">Settings</span>
          </button>
        </div>
      </div>

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
                  disabled={!input.trim() || isLoading}
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
                  disabled={!input.trim() || isLoading}
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

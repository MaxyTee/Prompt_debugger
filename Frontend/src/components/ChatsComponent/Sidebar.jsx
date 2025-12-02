import React, { useState } from "react";
import {
  MessageSquare,
  Settings,
  Plus,
  Clock,
  MoreHorizontal,
  Search,
} from "lucide-react";
import { getTimeCategory } from "../../utils/getTimeCategory";
import { useNavigate } from "react-router-dom";

const Sidebar = ({
  sidebarOpen,
  sidebarBg,
  darkMode,
  textTertiary,
  inputBg,
  groupedChats,
  activeBg,
  currentChatId,
  textPrimary,
  textSecondary,
  hoverBg,
  setMessages,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  return (
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
          onClick={() => {
            navigate("/chats");
            setMessages([]);
          }}
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
                    onClick={() => navigate(`/chats/${chatItem.id}`)}
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
                      <MoreHorizontal className={`w-4 h-4 ${textSecondary}`} />
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
  );
};

export default Sidebar;

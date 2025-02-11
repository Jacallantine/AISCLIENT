import sendIcon from "../assets/send.svg";
import logo from "../assets/logo.svg";

import React, { useState } from "react";

function Chat() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);

  function createNewChat() {
    setSelectedChat(null); // Reset view to show empty state
  }

  function callOpenAi() {
    if (message.trim() === "") return;
  
    const userMessage = message.trim();
    setMessage(""); // Clear input field
  
    let updatedChats = [...chats];
    let chatToUpdate = selectedChat;
  
    if (!selectedChat) {
      // Create a new chat if none is selected
      chatToUpdate = {
        chat_id: Date.now(),
        Title: `Chat ${chats.length + 1}`,
        messages: [`You: ${userMessage}`], // Start chat with first message
      };
  
      updatedChats = [chatToUpdate, ...chats];
    } else {
      // Update the selected chat with the new message
      chatToUpdate = {
        ...selectedChat,
        messages: [...selectedChat.messages, `You: ${userMessage}`],
      };
  
      updatedChats = updatedChats.map((chat) =>
        chat.chat_id === chatToUpdate.chat_id ? chatToUpdate : chat
      );
    }
  
    setChats(updatedChats);
    setSelectedChat(chatToUpdate); // ✅ Ensure selected chat updates with new messages
  }
  
  

  return (
    <section className="h-[90vh]">
      <div className="flex flex-row w-full h-full">
        {/* Sidebar */}
        <div className="w-1/6 border-r-2 border-gray-700 flex flex-col items-center py-5 800-md:hidden">
          <h3 className="pb-3">Chat History</h3>
          <h4
            className="text-lg cursor-pointer hover:bg-gray-700 w-full text-center py-2"
            onClick={createNewChat} // Resets the view but doesn't create a chat yet
          >
            New Chat
          </h4>
          <div id="TitleContainer" className="w-full flex flex-col items-center">
            {chats.map((chat) => (
              <div
                key={chat.chat_id}
                className={`py-2 w-full text-center cursor-pointer hover:bg-gray-700 ${
                  selectedChat?.chat_id === chat.chat_id ? "bg-gray-600" : ""
                }`}
                onClick={() => setSelectedChat(chat)}
              >
                {chat.Title}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="w-5/6 flex flex-col items-center justify-center relative 800-md:w-full">
          <div className="w-full h-[98%] flex flex-col justify-end overflow-y-auto p-3 rounded-md text-white">
            {selectedChat ? (
              selectedChat.messages.map((msg, index) => (
                <div key={index} className="p-2 my-1 bg-gray-700 rounded-md">
                  {msg}
                </div>
              ))
            ) : (
              <div className="h-full flex flex-col items-center justify-center">
                <h2 className="">Send a message to get started!</h2>
                <h3 className="text-gray-400">or click a chat to see previous chats!</h3>
                <img src={logo} className="opacity-100 w-[150px] h-[150px] mt-12" />
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex flex-row items-center gap-x-5 w-full px-5 py-3">
            <textarea
              id="question"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-fit text-white w-full max-h-20 bg-gray-800 rounded-md placeholder-white p-3 resize-none"
              placeholder="Message UniScout"
            />
            <button
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center w-10 h-10"
              onClick={callOpenAi}
            >
              <img src={sendIcon} alt="Send" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chat;

import sendIcon from "../assets/send.svg";
import logo from "../assets/logo.svg";

import React, { useState } from "react";

function Chat() {
  
  function guid() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
  }
  
  const storedUser = sessionStorage.getItem("apiLogin");
    const user = JSON.parse(storedUser)
    React.useEffect(() => {
      if (user?.AccountId) {
        getChats();
      }
    }, [user?.AccountId]);

    let apikey = ''

  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);

  function createNewChat() {
    setSelectedChat(null); // Reset view to show empty state
  }

 
  async function getChats(){

const getChatResp = await fetch("http://localhost:5087/api/Chat/GetChats",{
  method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({AccountId : user.AccountId})
  })
  
  
  if(getChatResp.ok)
  {
    const data = await getChatResp.json()
    console.log("it worked")
    console.log(data)
    setChats(data);
  }
  else{
    console.log('it failed')
  }
        


  }
  async function callOpenAi() {
    if (message.trim() === "") return;
  
    const userMessage = message.trim();
    setMessage(""); // Clear input field
  
    let chatId = selectedChat?.chat_id;
    let chatTitle = selectedChat ? selectedChat.Title : `Chat ${chats.length + 1}`;
  
    try {
      // 🔹 Step 1: Call OpenAI API first
      const aiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apikey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userMessage }],
        }),
      });
  
      const data = await aiResponse.json();
      const botMessage = data.choices[0].message.content;
  
      if (!chatId && !selectedChat) {
        // 🔹 Step 2: Create a new chat if one does not exist
        const chatResponse = await fetch("http://localhost:5087/api/Chat/NewChat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            Title: chatTitle,
            ChatId : guid(),
            AccountId: user.AccountId,
            Time: new Date().toISOString()
          })
        });
  
  
        const chatData = await chatResponse.json;
        chatId = chatData.ChatId; // Get the new chat ID
  
        // Update state with new chat
        const newChat = {
          ChatId: chatId,
          Title: chatTitle,
          messages: [`You: ${userMessage}`, `AI: ${botMessage}`],
          datetime: chatData.datetime
        };
  
        setChats([newChat, ...chats]);
        setSelectedChat(newChat);
      } else {
        // 🔹 Step 3: Update existing chat state
        const updatedChat = {
          ...selectedChat,
          messages: [...selectedChat.messages, `You: ${userMessage}`, `AI: ${botMessage}`]
        };
  
        setChats(chats.map(chat => chat.chat_id === chatId ? updatedChat : chat));
        setSelectedChat(updatedChat);
      }
  
      // 🔹 Step 4: Send messages to Messages table
      await postMessage(chatId, "user", userMessage);
      await postMessage(chatId, "AI", botMessage);
      
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  // 🔹 Function to post messages to Messages table
  async function postMessage(chatId, sender, content) {
    try {
      await fetch("http://localhost:5087/api/Chat/NewMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ChatId: chatId,
          sender: sender,
          content: content,
          Time: new Date().toISOString()
        })
      });
    } catch (error) {
      console.error("Error posting message:", error);
    }
  }
  
  
  

  return (
    <section className="h-[90vh]">
      <div className="flex flex-row w-full h-full">
        {/* Sidebar */}
        <div className="w-1/6 border-r-2 border-gray-700 bg-gray-800 flex flex-col items-center py-5 800-md:hidden">
          <h3 className="pb-3">Chat History</h3>
          <h4
            className="text-lg cursor-pointer hover:bg-gray-700 w-full text-center py-2 [border-top:1px_solid_white] [border-bottom:1px_solid_rgba(255,255,255,0.6)] "
            onClick={createNewChat} 
          >
            New Chat
          </h4>
          <div id="TitleContainer" className="w-full flex flex-col items-center">
            {chats.map((chat) => (
              <div
                key={chat.chat_id}
                className={`py-2 w-full text-center cursor-pointer [border-bottom:1px_solid_rgba(255,255,255,0.6)]   hover:bg-gray-700 ${
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
          <div className="flex flex-row items-center gap-x-5 w-2/6 1000-md:2/3 px-5 py-3 800-md:w-2/3">
            <textarea
              id="question"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-fit text-white w-full max-h-20 bg-gray-800 rounded-md placeholder-white p-3 resize-none"
              placeholder="Message UniScout"
            />
            
            <div
              className={`p-2 rounded-[20px] bg-[rgba(32,32,32,1)] overflow-hidden flex items-center justify-center w-10 h-10 hover:bg-[rgba(255,255,255,0.1)]`}
              onClick={callOpenAi}
             
            >
              <img
                src={sendIcon}
                alt="Send Icon"
                className="object-contain max-w-full max-h-full [opacity:1] [cursor:pointer]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chat;

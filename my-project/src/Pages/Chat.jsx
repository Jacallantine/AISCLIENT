// import { callChatGPT } from "../Components/ChatGpt"
import sendIcon from "../assets/send.svg";
import logo from "../assets/logo.svg"


import React, { useState, useCallback, useEffect } from 'react';
function Chat() {
const [message, setMessage] = useState("");
const [chats, setChats] = useState([
  { chat_id: 1, Title: "Chat 1", messages: ["Hello", "How are you?"] },
  { chat_id: 2, Title: "Chat 2", messages: ["Hi there!", "What's up?"] },
]);

const [selectedChat, setSelectedChat] = useState(null);

function changeChat(chat_id)
{
const chat = chats.find((c)=> c.chat_id === chat_id)
setSelectedChat(chat)
}


const ApiBody = {
    
        model: "gpt-4o-mini",
        messages: [{"role": "user", "content": "what is 25 + 25"}],
        temperature: 0.7
    }
async function callOpenAi(){
    console.log("Calling Api");
    await fetch("https://api.openai.com/v1/chat/completions",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiKey2
        },
        body: JSON.stringify(ApiBody)
    }


    ).then((data )=>{
        return data.json()
    }).then((data)=> {
        console.log(data)
    })
}






console.log(message)



  return (
    <section className="h-[90vh]">
      <div className="flex flex-row w-full h-full">
        <div className="w-1/6 [border-right:2px_solid_gray] flex flex-col items-center py-5">
          <h3 className="[padding-bottom:10px]">Chat History</h3>
          <h4 className="[font-size:16px] [cursor:pointer] hover:bg-gray-700 w-full flex justify-center py-2 ">New Chat</h4>

         <div id="TitleContainer" className="w-full flex flex-col justify-center">
         {chats.map((chat) => (
          <div
                key={chat.chat_id}
                className={`py-2 w-full flex justify-center [cursor:pointer] hover:[background-color:rgba(255,255,255,0.1)] ${
                  selectedChat?.chat_id === chat.chat_id ? "bg-gray-600" : ""
                }`}
                onClick={() => changeChat(chat.chat_id)}
              >
                {chat.Title}
              </div>
        ))}
         
         </div>


        </div>

        <div className="w-5/6 flex flex-col items-center justify-center relative">

        <div className="w-full h-[98%] overflow-y-autop-3 rounded-md text-white">
        {selectedChat ? (
          selectedChat.messages.map((msg, index) => (
            <div key={index} className="p-2 my-1 bg-gray-700 rounded-md">
              {msg}
            </div>
          ))
        ) : (
          <div className="h-full flex flex-col items-center justify-center">
          <h2 className="">Send a message to get Started!</h2>
          <h3 className="text-gray-400">or click a chat to see previous chats!</h3>
          <img src={logo} className="[opacity:1] w-[150px] h-[150px] mt-12" />
          
          </div>

          
        )}
      </div>






        {/* input*/}
          <div className="flex flex-row items-center gap-x-5">
            <textarea
              id="question"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              className="h-fit [color:white] [width:300px] [max-height:50px] flex-grow bg-[rgba(255,255,255,0.3)] rounded-md placeholder-white p-3"
              placeholder="Message UniScout"
            />

            <div
              className={`p-2 rounded-[20px] bg-[rgba(255,255,255,0.1)] overflow-hidden flex items-center justify-center w-10 h-10 `}
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

export default React.memo(Chat); // Memoizing the component to avoid unnecessary re-renders

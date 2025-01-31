// import { callChatGPT } from "../Components/ChatGpt"
import sendIcon from "../assets/send.svg";


import React, { useState, useCallback, useEffect } from 'react';
function Chat() {
const [message, setMessage] = useState("");


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


const [chats] = useState([{"chat_id": 2, "Title": "test"}]);




console.log(message)



  return (
    <section className="h-[90vh]">
      <div className="flex flex-row w-full h-full">
        <div className="w-1/6 [border-right:2px_solid_gray] flex flex-col items-center py-5">
          <h3 className="[padding-bottom:20px]">Chat History</h3>

         <div id="TitleContainer" className="w-full flex justify-center">
         {chats.map((chat) => (
          <div
            key={chat.chat_id} 
            className="[border-top:1px_solid_rgba(255,255,255,0.4)] [border-bottom:1px_solid_rgba(255,255,255,0.4)] py-2 w-full flex justify-center [cursor:pointer] hover:[background-color:rgba(255,255,255,0.1)]"
            onClick={() => console.log(`Chat with ID: ${chat.chat_id} clicked`)}
          >
            {chat.Title}
          </div>
        ))}
         
         </div>


        </div>

        <div className="w-5/6 flex flex-row justify-center items-end relative">
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

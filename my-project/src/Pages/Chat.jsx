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





console.log(message)



  return (
    <section className="h-[90vh]">
      <div className="flex flex-row w-full h-full">
        <div className="w-1/6 [border-right:2px_solid_gray] flex flex-col items-center py-5">
          <h3>Chat History</h3>
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

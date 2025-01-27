
import Button from "../Components/Button"
import React, { useState, useCallback, useEffect } from 'react';




function LogIn(){


  const [Email, setEmail] = useState("");
        const [Password, setPassword] = useState("");

        function handleSubmit(e) {
            e.preventDefault(); // Prevents the default form submission behavior
            LoginRequest(); // Calls your login request function
          }
          

    async function LoginRequest(){
        
      
        console.log("Attempting to login");
        let Body = {
            Email,
            Password
        }
        console.log(Body)
        await fetch("http://localhost:5087/api/Login/Login",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Body)
        }
    
    
        ).then((data )=>{
            return data.json()
        }).then((data)=> {
            sessionStorage.setItem("apiLogin", JSON.stringify(data));
            console.log(data)
        }).then(  window.location.href = "/Chat" )
    }




return <section className="relative h-[100vh] flex justify-center py-52 [background-repeat:no-repeat] [background-size:cover] [z-index:1]"
style={{ backgroundImage: "url('../public/UA.jpg')" }}
>

<div className="absolute inset-0 bg-black bg-opacity-50"></div>

<form onSubmit={handleSubmit} className="flex h-fit flex-col items-center gap-y-10 bg-slate-700 px-40 py-24 z-40 [border:2px_solid_gray]">

<h3 className="[font-size:32px]">Please Sign In</h3>
<input type="text" value={Email} placeholder="Username" onChange={(e) => setEmail(e.target.value)}/>

<input type="text" value={Password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>


<Button  label="Log In" />


</form>



</section>



}

export default LogIn
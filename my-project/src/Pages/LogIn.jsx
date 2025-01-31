
import Button from "../Components/Buttons/Button"
import Button2 from "../Components/Buttons/Button2";
import React, { useState, useCallback, useEffect } from 'react';

import { Link } from 'react-router-dom';


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
        })
        // .then(  window.location.href = "/Chat" )
    }




return <section className="relative h-[100vh] flex justify-center py-52 [background-repeat:no-repeat] [background-size:cover] [background-position:center] [z-index:1] 800-md:[background-size:cover] 800-md:py-24"
style={{ backgroundImage: "url('../public/UA.jpg')" }}
>

<div className="absolute inset-0 bg-black bg-opacity-50"></div>

<form onSubmit={handleSubmit} className="flex h-fit flex-col items-center gap-y-6 bg-slate-700 px-40 py-24 z-40 [border:2px_solid_gray] 800-md:px-20 800-md:py-18">

<h3 className="[font-size:32px]">Please Sign In</h3>
<input type="text" value={Email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>

<input type="text" value={Password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

<div className="flex flex-col gap-y-4">
<Button2  label="Log In"/>
<Link to ="/NewAccount" className="hover:text-cyan-200 text-sm">New? Click to register</Link>

</div>



</form>



</section>



}

export default LogIn
import Section100 from "../Components/Sections/Section100"

import Button2 from "../Components/Buttons/Button2";
import React, { useState, useCallback, useEffect } from 'react';
function NewAccount()
{


    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [School, setSchool] = useState("")


    function handleSubmit(e) {
        e.preventDefault(); // Prevents the default form submission behavior
        LoginRequest(); // Calls your login request function
      }
      

async function LoginRequest(){
    
  
    console.log("Attempting to login");
    let Body = {
        Email,
        Password,
        FirstName, 
        LastName,
        School,
        AccountID : 1
    }
    console.log(Body)
    await fetch("http://localhost:5087/api/Account/NewAccount",{
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




return <section className="relative h-[100vh] flex justify-center py-24 [background-repeat:no-repeat] [background-size:cover] [background-position:center] [z-index:1]"
style={{ backgroundImage: "url('../public/UA.jpg')" }}
>

<div className="absolute inset-0 bg-black bg-opacity-50"></div>

<form onSubmit={handleSubmit} className="flex h-fit flex-col items-center gap-y-10 800-md:gap-y-4 bg-slate-700 px-20 py-12 z-40  800-md:px-14 [border:2px_solid_gray]">

<h3 className="[font-size:32px] 800-md:[font-size:32px]">Register Account</h3>

<div className="flex flex-row gap-x-4 800-md:flex-col 800-md:gap-y-4">
<input type="text" value={Email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>

<input type="text" value={Password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
</div>

<div className="flex flex-row 800-md:flex-col gap-x-4 800-md:gap-y-4">

<input type="text" value={FirstName} placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
<input type="text" value={LastName} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
</div>


<input type="text" value={School} placeholder="University" onChange={(e) => setSchool(e.target.value)} className="w-2/3 800-md:w-fit"/>


<Button2  label="Register" />


</form>



</section>


}

export default NewAccount
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import H2 from '../Components/text/H2';
import H3 from '../Components/text/H3'


function AccountPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ Name: '', Email: '' });
  const [newFirstName, setNewFirstName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newSchool, setNewSchool] = useState('');
 


  useEffect(() => {
    const storedUser = sessionStorage.getItem("apiLogin");
    // console.log(storedUser)
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setNewFirstName(parsedUser.FirstName);
      setNewEmail(parsedUser.Email);
      setNewSchool(parsedUser.School);

    } else {
      navigate('/login');
    }
  }, [navigate]);
  // let body = {

  //   newFirstName, newEmail, newSchool
  // }

 

  async function handleUpdate() {
    const storedUser = sessionStorage.getItem("apiLogin");
    const user = JSON.parse(storedUser);
  
    user.FirstName = newFirstName;
    user.School = newSchool;
    user.Email = newEmail;
    sessionStorage.setItem("apiLogin", JSON.stringify(user));
  
    const response = await fetch("http://localhost:5087/api/Account/UpdateAccount", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        AccountId: user.AccountId,
        FirstName: newFirstName,
        School: newSchool,
        Email: newEmail
      })
    });
  
    if (response.ok) {
      
      
   window.location.reload();
   alert("Profile has been updated")

   // ✅ Ensures re-render happens
    } else {
      alert("Failed to update profile.");
    }
  }
  

  return (
    <section className="flex flex-col justify-center items-center h-[75vh] w-full">
    <div className='flex flex-col items-center bg-slate-700 px-16 py-12 [border:2px_solid_rgba(255,255,255,0.3)]'>
      <H3 label={"Account Details"}/>

      
      <div className="mt-4">
        <label className="block">Name:</label>
        <input 
          type="text" 
          value={newFirstName} 
          onChange={(e) => setNewFirstName(e.target.value)}
          className="border p-2"
        />
      </div>
      <div className="mt-4">
        <label className="block">Email:</label>
        <input 
          type="email" 
          value={newEmail} 
          onChange={(e) => setNewEmail(e.target.value)}
          className="border p-2"
        />
      </div>

      <div className="mt-4">
        <label className="block">University:</label>
        <input 
          type="text" 
          value={newSchool} 
          onChange={(e) => setNewSchool(e.target.value)}
          className="border p-2"
        />
      </div>
      <button onClick={handleUpdate} className="mt-4 bg-blue-500 text-white px-4 py-2">Update</button>
      </div>
      
    </section>
  );
}

export default AccountPage;

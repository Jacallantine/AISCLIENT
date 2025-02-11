import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function AccountPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ Name: '', Email: '' });
  const [newFirstName, setNewFirstName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newSchool, setNewSchool] = useState('');


  useEffect(() => {
    const storedUser = sessionStorage.getItem("apiLogin");
    console.log(storedUser)
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

  let body = {
    newFirstName, newEmail, newSchool
  }

  async function handleUpdate() {
    const storedUser = sessionStorage.getItem("apiLogin");
    const user = JSON.parse(storedUser)
    user.FirstName = newFirstName
    user.School = newSchool
    user.Email = newEmail
    sessionStorage.setItem("apiLogin", JSON.stringify(user));

    console.log(user)

  

    const response = await fetch("http://localhost:5087/api/account/UpdateAccount", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    
    if (response.ok) {
      const updatedUser = await response.json();
      sessionStorage.setItem("apiLogin", JSON.stringify(updatedUser));
      setUser(updatedUser);
      alert("Profile updated successfully!");
    } else {
      alert("Failed to update profile.");
    }
  }

  return (
    <section className="flex flex-col items-center py-10">
      <h2 className="text-2xl font-bold">Account Details</h2>
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
    </section>
  );
}

export default AccountPage;

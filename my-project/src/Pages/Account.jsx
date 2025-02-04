// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// function AccountPage() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({ Name: '', Email: '' });
//   const [newName, setNewName] = useState('');
//   const [newEmail, setNewEmail] = useState('');

//   useEffect(() => {
//     const storedUser = sessionStorage.getItem("apiLogin");
//     if (storedUser) {
//       const parsedUser = JSON.parse(storedUser);
//       setUser(parsedUser);
//       setNewName(parsedUser.Name);
//       setNewEmail(parsedUser.Email);
//     } else {
//       navigate('/login');
//     }
//   }, [navigate]);

//   async function handleUpdate() {
//     const response = await fetch("http://localhost:5087/api/User/Update", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ Email: newEmail, Name: newName })
//     });
    
//     if (response.ok) {
//       const updatedUser = await response.json();
//       sessionStorage.setItem("apiLogin", JSON.stringify(updatedUser));
//       setUser(updatedUser);
//       alert("Profile updated successfully!");
//     } else {
//       alert("Failed to update profile.");
//     }
//   }

//   return (
//     <section className="flex flex-col items-center py-10">
//       <h2 className="text-2xl font-bold">Account Details</h2>
//       <div className="mt-4">
//         <label className="block">Name:</label>
//         <input 
//           type="text" 
//           value={newName} 
//           onChange={(e) => setNewName(e.target.value)}
//           className="border p-2"
//         />
//       </div>
//       <div className="mt-4">
//         <label className="block">Email:</label>
//         <input 
//           type="email" 
//           value={newEmail} 
//           onChange={(e) => setNewEmail(e.target.value)}
//           className="border p-2"
//         />
//       </div>
//       <button onClick={handleUpdate} className="mt-4 bg-blue-500 text-white px-4 py-2">Update</button>
//     </section>
//   );
// }

// export default AccountPage;

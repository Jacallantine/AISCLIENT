import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './Home.jsx';
import LogIn from './LogIn.jsx';
import Chat from './Chat.jsx';
import Account from './Account.jsx';
import { useState } from 'react';

function AppRouter() {
  const [homeKey, setHomeKey] = useState(0);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    setHomeKey(prevKey => prevKey + 1); // Increment key to force remount
    navigate('/'); // Navigate to Home
  };
  const login = sessionStorage.getItem("apiLogin");
  let user = ""


  if (login) {
  try {
    const userData = JSON.parse(login);
    user = userData?.FirstName || ""; // Safely access FirstName or default to an empty string
  } catch (error) {
    console.error("Error parsing session storage data:", error);
  }
}


 
 

  return (
    <section className='z-50'>
      <nav className="flex justify-start gap-x-12 py-4 px-32 800-md:px-16">
        {user ? (
          <Link to="/Account">{user}</Link>
        ) : (
          <Link to="/LogIn">Login</Link>
        )}
        <button className='[color:black]' onClick={handleHomeClick}>Home</button>
      </nav>

      <Routes>
        <Route path="/" element={<Home key={homeKey} />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Account" element={<Account/>}/>
        <Route path="*" element={<Home />} />
      </Routes>
    </section>
  );
}
export default AppRouter

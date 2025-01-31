import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './Home.jsx';
import Option from './Option.jsx';
import LogIn from './LogIn.jsx';
import Chat from './Chat.jsx';
import Account from './Account.jsx';
import { useState } from 'react';
import QuickTips from './QuickTips.jsx';
import Hamburger from '../Components/Buttons/Hamburger.jsx';
import NewAccount from './NewAccount.jsx';

function AppRouter() {
  const [  slideRightNav, setSlideRightNav] = useState(false);

  const login = sessionStorage.getItem("apiLogin");
  let user = ""


  const handleHamburgerClick = () => {
    setSlideRightNav((prev) => {
      console.log("Updated slideRightNav:", !prev); // Logs the new state
      return !prev;
    });
  };
  


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
      <nav className="flex gap-x-4 h-[65px] px-32 800-md:hidden bg-white">
      <Link to="/Home" className=" transition-all duration-300 ease-in-out">Home</Link>
        {user ? (
          <>
          <Link to="/Account" className=" transition-all duration-300 ease-in-out">{user}</Link>
          <Link to ="/QuickTips" className="transition-all duration-300 ease-in-out">Quick Tips</Link>
          <Link to = "/Chat" className=" transition-all duration-300 ease-in-out">Chat</Link>
          </>
          
        ) : (
          <>
          
          <Link to="/LogIn" className="hover:  transition-all duration-300 ease-in-out">Login</Link>
          <Link to ="/QuickTips"  className="  transition-all duration-300 ease-in-out">Quick Tips</Link>
          <Link to="/LogIn" className="  transition-all duration-300 ease-in-out">Chat</Link>
          </>
          
        )}
        
        
      </nav>

      <nav className='hidden h-[65px] 800-md:flex items-center px-6'>
      <Hamburger onClick={(e) => {
        e.stopPropagation(); // Prevent multiple event firings
        handleHamburgerClick();
      }} className={"z-50"} />
      

      <div className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ${  slideRightNav ? 'trans' : 'translate-x-full'}`}>
      
      </div>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Account" element={<Account/>}/>
        <Route path = "/QuickTips" element = {<QuickTips/>}/>
        <Route path='/Option' element = {<Option/>}/>
        <Route path='/NewAccount' element = {<NewAccount/>}/>
        <Route path="*" element={<Home />} />
      </Routes>
    </section>
  );
}
export default AppRouter

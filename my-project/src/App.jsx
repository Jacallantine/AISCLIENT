
import React, { useEffect } from 'react';
import '../CSS/uni.css'
// Import your page components
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import AppRouter from './Pages/AppRouter.jsx'; // Import your router

function App() {


  return (
    <BrowserRouter> {/* Wrapping the app with BrowserRouter */}
    <AppRouter />
  </BrowserRouter>
      
   
  );
}

export default App;
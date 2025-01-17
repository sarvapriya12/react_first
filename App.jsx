import React from "react";
import { Routes, Route } from "react-router-dom"; // Correct import for react-router-dom v6+
import Header from './Header.jsx'; 
import NavBar from "./NavBar";
import  GptLogic  from './pages/gptlogic'; // Ensure this file exists and has the GptLogic component

function App() {
  return (
    <div>
      <Header></Header>
      
    </div>  
  );
}

export default App;

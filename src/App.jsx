import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header.jsx";
import GptLogic from "../pages/gptlogic.jsx";

function App() {
  return (
    <div>
      {/* Always display the header */}
      <Header />

      {/* Define routes for different pages */}
      <Routes>
        <Route path="/gptlogicpage" element={<GptLogic />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import ProductivityForm from "./components/ProductivityForm";
import "./index.css"; // Make sure Tailwind or your global CSS is loaded

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-[#00205B] via-[#004880] to-[#00B4A0] px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg text-center mb-8">
        Agent Productivity Tracker
      </h1>
      <ProductivityForm />
    </div>
  );
};

export default App;

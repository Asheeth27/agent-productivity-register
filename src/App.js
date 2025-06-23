import React from "react";
import ProductivityForm from "./components/ProductivityForm";
import "./index.css";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#00205B] via-[#004880] to-[#00B4A0] text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center drop-shadow-lg">
        Agent Productivity Tracker
      </h1>
      <ProductivityForm />
    </div>
  );
};

export default App;

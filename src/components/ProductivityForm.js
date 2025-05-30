import React, { useState } from "react";

const ProductivityForm = ({ onAddEntry }) => {
  const [entry, setEntry] = useState({
    agent: "",
    campaign: "",
    shift: "",
    
  });

  const agents = ["Sahil Rajkumar", "Tyresse Pillay", "Nikhil Rajkumar", "Asheeth Batchulall"];
  const campaigns = ["OVO Energy", "SES Water", "YouGarden"];
  const shifts = ["9:00am - 18:00pm", "10:00am - 19:00pm", "11:00am - 20:00pm"];
  

  const handleChange = (e) => {
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEntry(entry);
    setEntry({ agent: "", campaign: "", shift: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-green-500 shadow-md rounded-xl p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-700">Agent Productivity Entry</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-600 mb-2">Agent Name</label>
          <select
            name="agent"
            value={entry.agent}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Agent</option>
            {agents.map((agent) => (
              <option key={agent} value={agent}>{agent}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-600 mb-2">Campaign</label>
          <select
            name="campaign"
            value={entry.campaign}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Campaign</option>
            {campaigns.map((campaign) => (
              <option key={campaign} value={campaign}>{campaign}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-800 mb-7">Shift</label>
          <select
            name="shift"
            value={entry.shift}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Shift</option>
            {shifts.map((shift) => (
              <option key={shift} value={shift}>{shift}</option>
            ))}
          </select>
        </div>

        <div>
        

        </div>
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="bg-black-600 hover:bg-blue-700 text-green px-6 py-2 rounded-lg transition duration-200"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProductivityForm;

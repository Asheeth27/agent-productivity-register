import React, { useState } from "react";

const ProductivityForm = () => {
  const [entry, setEntry] = useState({
    agent: "",
    campaign: "",
    shift: "",
    syn: "",
  });

  const agents = ["Sahil Rajkumar", "Tyresse Pillay", "Nikhil Rajkumar", "Asheeth Batchulall"];
  const campaigns = ["OVO Energy", "SES Water", "YouGarden"];
  const shifts = ["9:00am - 18:00pm", "10:00am - 19:00pm", "11:00am - 20:00pm"];

  const handleChange = (e) => {
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Entry:", entry);
    setEntry({ agent: "", campaign: "", shift: "", syn: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-lg space-y-6 text-left"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-white">Agent Name</label>
          <select
            name="agent"
            value={entry.agent}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white bg-opacity-80 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Agent</option>
            {agents.map((agent) => (
              <option key={agent} value={agent}>
                {agent}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-white">Campaign</label>
          <select
            name="campaign"
            value={entry.campaign}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white bg-opacity-80 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Campaign</option>
            {campaigns.map((campaign) => (
              <option key={campaign} value={campaign}>
                {campaign}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-white">Shift</label>
          <select
            name="shift"
            value={entry.shift}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white bg-opacity-80 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Shift</option>
            {shifts.map((shift) => (
              <option key={shift} value={shift}>
                {shift}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-white">SYN</label>
          <input
            type="text"
            name="syn"
            value={entry.syn}
            onChange={handleChange}
            placeholder="Enter SYN value"
            className="w-full p-3 rounded-lg bg-white bg-opacity-80 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-[#00B4A0] hover:bg-[#007d73] text-white font-semibold transition duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProductivityForm;

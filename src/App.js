import React, { useState } from 'react';
import ProductivityForm from './components/ProductivityForm';
import ProductivityTable from './components/ProductivityTable';
import './App.css';


function App() {
  const [entries, setEntries] = useState([]);

  const handleAddEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  return (
    <div className="App App-header">
      <h1 className="text-3xl bg-green-500 font-bold mb-4 text-center text-green">
  Agent Productivity Register
</h1>
      <ProductivityForm onAdd={handleAddEntry} />
      <ProductivityTable entries={entries} />
    </div>
  );
}

export default App;

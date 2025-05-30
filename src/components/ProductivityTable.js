import React from 'react';

const ProductivityTable = ({ entries = [] }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            
            
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index} className="text-center">
              <td className="border px-4 py-2">{entry.date}</td>
              <td className="border px-4 py-2">{entry.agent}</td>
              <td className="border px-4 py-2">{entry.calls}</td>
              <td className="border px-4 py-2">{entry.conversions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductivityTable;

import React from "react";
import { useLocation } from "react-router";

export default function Transaction() {
  const location = useLocation();
  const data = location.state?.formData;

  if (!data) {
    return (
      <div className="p-8 text-center text-gray-500">
        No transaction data available
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Transaction Summary
      </h2>

      <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="p-3 border">Field</th>
            <th className="p-3 border">Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, value]) => {
            if (typeof value === "object" && value !== null) {
              return Object.entries(value).map(([subKey, subValue]) => (
                <tr key={key + subKey}>
                  <td className="p-3 border font-medium capitalize">
                    {subKey}
                  </td>
                  <td className="p-3 border">{subValue}</td>
                </tr>
              ));
            }

            return (
              <tr key={key}>
                <td className="p-3 border font-medium capitalize">{key}</td>
                <td className="p-3 border">{value}</td>
              </tr>
            );
          })}
          <tr>
            <td className="p-3 border font-medium">Transaction ID</td>
            <td className="p-3 border">TXN{Date.now()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

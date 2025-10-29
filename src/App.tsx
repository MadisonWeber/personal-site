import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8">
      <div className="flex space-x-8 mb-8">
        <a
          href="https://vite.dev"
          target="_blank"
          className="hover:scale-110 transition-transform"
        >
          <img src={viteLogo} className="w-16 h-16" alt="Vite logo" />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          className="hover:scale-110 transition-transform"
        >
          <img
            src={reactLogo}
            className="w-16 h-16 animate-spin"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8 text-center">
        Madison Weber
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
        <p className="text-gray-600 text-center">
          Edit{" "}
          <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
            src/App.tsx
          </code>{" "}
          and save to test HMR
        </p>
      </div>

      <p className="text-gray-500 text-sm mt-8 text-center max-w-md">
        Click on the Vite and React logos to learn more
      </p>

      {/* Tailwind Test Elements */}
      <div className="mt-12 space-y-4">
        <div className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition-colors cursor-pointer">
          🎉 Tailwind CSS is working!
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-red-100 p-4 rounded text-red-800 text-center">
            Red
          </div>
          <div className="bg-green-100 p-4 rounded-xl text-green-800 text-center">
            Green
          </div>
          <div className="bg-purple-100 p-4 rounded text-purple-800 text-center">
            Purple
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
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
          <img src={reactLogo} className="w-16 h-16" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8 text-center">
        Madison Weber
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto border border-blue-200">
        <p className="text-gray-600 text-center">
          Edit{" "}
          <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono">
            src/App.tsx
          </code>{" "}
          and save to test HMR
        </p>
      </div>

      <p className="text-gray-500 text-sm mt-8 text-center max-w-md">
        Click on the Vite and React logos to learn more
      </p>

      {/* Custom Theme Examples */}
      <div className="mt-12 space-y-6">
        {/* Single color usage */}
        <div
          className="bg-test-blue hover:bg-primary-600 text-white px-6 py-3 rounded-lg shadow-md transition-colors cursor-pointer"
          style={{ backgroundColor: "#337ab7" }}
        >
          🎨 Custom Test Blue Button (with inline fallback)
        </div>

        {/* Full palette usage */}
        <div className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg shadow-md transition-colors cursor-pointer">
          ✨ Primary-500 Button
        </div>

        <div className="bg-secondary-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md transition-colors cursor-pointer">
          💜 Secondary Button
        </div>

        <div className="bg-test-blue hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition-colors cursor-pointer">
          🚀 Accent Button
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-primary-100 border border-primary-300 p-4 rounded-xl text-primary-800 text-center">
            Primary Light
          </div>
          <div className="bg-primary-500 border border-primary-600 p-4 rounded-xl text-white text-center">
            Primary Main
          </div>
          <div className="bg-primary-900 border border-primary-800 p-4 rounded-xl text-white text-center">
            Primary Dark
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import "../output.css";
import Home from "./Home";

export default function Layout() {
  const [showHome, setShowHome] = useState(false);

  const handleClickPlay = () => {
    setShowHome(true);
  };

  const handleClickExit = () => {
    setShowHome(false);
  };

  return (
    <div className="overflow-hidden" style={{ backgroundImage: `url('./backgroundheritage.jpg')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      {!showHome && (
        <div className="flex justify-center items-center h-full">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-200 mr-4"
            onClick={handleClickPlay}
          >
            <span className="animate-pulse">Play</span>
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200"
            onClick={handleClickExit}
          >
            Exit
          </motion.button>
        </div>
      )}

      {showHome && (
        <div className="absolute top-4 right-4 z-10">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200"
            onClick={handleClickExit}
          >
            Exit
          </motion.button>
        </div>
      )}

      {showHome && <Home />}

      <div className="w-full min-h-screen flex flex-col justify-center items-center px-20 py-8">
        <Outlet />
      </div>
    </div>
  );
}

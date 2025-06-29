import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function GuruPopupPrototype() {
  const [showGuru, setShowGuru] = useState(false);

  const triggerGuru = () => {
    setShowGuru(true);
    setTimeout(() => setShowGuru(false), 3000);
  };

  return (
    <div className="p-4 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold mb-4">Double Down Trigger Demo</h1>
      <Button onClick={triggerGuru}>Execute Double Down</Button>

      <AnimatePresence>
        {showGuru && (
          <motion.div
            className="fixed bottom-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg flex items-center space-x-2"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/guru-bot.svg"
              alt="Guru Bot"
              className="w-16 h-16 rounded-full"
            />
            <p className="text-sm font-semibold text-gray-800">Guru Move! 💡</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

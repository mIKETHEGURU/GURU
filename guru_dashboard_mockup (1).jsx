import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Day 1", value: 10000 },
  { name: "Day 2", value: 10050 },
  { name: "Day 3", value: 10120 },
  { name: "Day 4", value: 10230 },
  { name: "Day 5", value: 10429 },
];

export default function GuruDashboardMockup() {
  const [showGuru, setShowGuru] = useState(false);

  const triggerGuru = () => {
    setShowGuru(true);
    setTimeout(() => setShowGuru(false), 3000);
  };

  return (
    <div className="p-4 min-h-screen bg-gray-50">
      <div className="mb-4 text-center">
        <h1 className="text-2xl font-bold text-indigo-900">GURU Dashboard</h1>
        <p className="text-sm text-gray-600">Your money, growing effortlessly</p>
      </div>

      <div className="grid gap-4">
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-md font-semibold">Total Portfolio Value</h2>
          <p className="text-xl text-green-600 font-bold">$10,429.85</p>
          <p className="text-sm text-gray-500">+9.4% this month</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-md font-semibold mb-2">Performance Chart</h2>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={data}>
              <XAxis dataKey="name" hide />
              <YAxis hide domain={[10000, 10500]} />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-md font-semibold">Bot Status</h2>
          <p className="text-sm">TrendBot active • Conservative strategy</p>
        </div>

        <Button className="mt-2" onClick={triggerGuru}>
          Simulate Double Down Win
        </Button>
      </div>

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

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 w-full bg-white shadow-md flex justify-around p-2 text-sm text-gray-700">
        <div className="text-center">🏠<br />Home</div>
        <div className="text-center">📊<br />Bots</div>
        <div className="text-center">📈<br />Performance</div>
        <div className="text-center">⚙️<br />Settings</div>
      </div>
    </div>
  );
}

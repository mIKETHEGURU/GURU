import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export default function MobileTradingApp() {
  const [step, setStep] = useState(1);
  const [risk, setRisk] = useState("Balanced");
  const [amount, setAmount] = useState(20);
  const [frequency, setFrequency] = useState("Monthly");

  const steps = {
    1: (
      <Card className="p-4 text-center">
        <h1 className="text-xl font-bold">Welcome to Sentinel AI</h1>
        <p className="text-sm">Smarter, safer investing powered by AI.</p>
        <Button className="mt-4" onClick={() => setStep(2)}>
          Get Started
        </Button>
      </Card>
    ),
    2: (
      <Card className="p-4">
        <h2 className="text-lg font-semibold mb-2">Set Your Risk Profile</h2>
        <Select value={risk} onChange={(e) => setRisk(e.target.value)}>
          <option>Conservative</option>
          <option>Balanced</option>
          <option>Aggressive</option>
        </Select>
        <Button className="mt-4" onClick={() => setStep(3)}>
          Next
        </Button>
      </Card>
    ),
    3: (
      <Card className="p-4">
        <h2 className="text-lg font-semibold mb-2">Start Paper Trading</h2>
        <p className="text-sm mb-2">Start risk-free with $10,000 virtual funds.</p>
        <Button onClick={() => setStep(4)}>Continue</Button>
      </Card>
    ),
    4: (
      <Card className="p-4">
        <h2 className="text-lg font-semibold mb-2">Select Your AI Bot</h2>
        <ul className="text-sm space-y-2">
          <li><strong>TrendBot:</strong> Momentum-driven, low drawdown</li>
          <li><strong>ReboundBot:</strong> Buys dips, exits fast</li>
          <li><strong>HedgeBot:</strong> Stability-first, defensive</li>
        </ul>
        <Button className="mt-4" onClick={() => setStep(5)}>
          Activate Bot
        </Button>
      </Card>
    ),
    5: (
      <Card className="p-4">
        <h2 className="text-lg font-semibold mb-2">Set Auto-Deposit</h2>
        <Input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="$20 minimum"
          className="mb-2"
        />
        <Select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
          <option>Weekly</option>
          <option>Bi-weekly</option>
          <option>Monthly</option>
        </Select>
        <Button className="mt-4" onClick={() => setStep(6)}>
          Link Bank
        </Button>
      </Card>
    ),
    6: (
      <Card className="p-4 text-center">
        <h2 className="text-xl font-bold">You're Ready to Trade</h2>
        <p className="text-sm">Your auto-deposit is active and your bot is running.</p>
        <Button className="mt-4">Go to Dashboard</Button>
      </Card>
    ),
  };

  return <div className="max-w-md mx-auto mt-4">{steps[step]}</div>;
}

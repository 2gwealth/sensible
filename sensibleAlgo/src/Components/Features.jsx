import React from "react";
import { LineChart, Bell, ShieldCheck, Zap } from "lucide-react"; // Feature icons

function ExploreFeatures() {
  const features = [
    {
      icon: <LineChart className="h-10 w-10 text-blue-600" />,
      title: "Strategy Builder",
      description:
        "Create and customize trading strategies with powerful tools and backtesting support.",
    },
    {
      icon: <Bell className="h-10 w-10 text-blue-600" />,
      title: "Real-Time Alerts",
      description:
        "Get instant notifications on trade signals, price actions, and market changes.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
      title: "Secure Brokerage Connection",
      description:
        "Connect to supported brokers with end-to-end encryption for safe trading.",
    },
    {
      icon: <Zap className="h-10 w-10 text-blue-600" />,
      title: "Lightning Fast Execution",
      description:
        "Execute trades with minimal delay using our optimized infrastructure.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Explore Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExploreFeatures;

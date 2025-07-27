import React, { useState } from "react";

function PricingPlans() {
  const [activeTab, setActiveTab] = useState("monthly");

  const plans = {
    monthly: [
      { name: "Basic", price: "₹ 3000/mo", features: ["1 Strategy", "Email Support", "Basic Analytics"] },
      { name: "Pro", price: "₹ 3500/mo", features: ["5 Strategies", "Priority Support", "Advanced Analytics"] },
      { name: "Enterprise", price: "₹ 4000/mo", features: ["Unlimited Strategies", "Dedicated Support", "Full Analytics"] },
    ],
    quarterly: [
      { name: "Basic", price: "₹ 7500/qtr", features: ["1 Strategy", "Email Support", "Basic Analytics"] },
      { name: "Pro", price: "₹ 10500/qtr", features: ["5 Strategies", "Priority Support", "Advanced Analytics"] },
      { name: "Enterprise", price: "₹ 12000/qtr", features: ["Unlimited Strategies", "Dedicated Support", "Full Analytics"] },
    ],
    yearly: [
      { name: "Basic", price: "₹ 24000/yr", features: ["1 Strategy", "Email Support", "Basic Analytics"] },
      { name: "Pro", price: "₹ 30000/yr", features: ["5 Strategies", "Priority Support", "Advanced Analytics"] },
      { name: "Enterprise", price: " ₹ 36000/yr", features: ["Unlimited Strategies", "Dedicated Support", "Full Analytics"] },
    ],
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Pricing Plans</h2>
        <p className="text-gray-600 mb-8">Choose the plan that fits your trading needs</p>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 mx-2 rounded-lg ${activeTab === "monthly" ? "bg-blue-600 text-white" : "bg-white border"}`}
            onClick={() => setActiveTab("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-lg ${activeTab === "quarterly" ? "bg-blue-600 text-white" : "bg-white border"}`}
            onClick={() => setActiveTab("quarterly")}
          >
            Quarterly
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-lg ${activeTab === "yearly" ? "bg-blue-600 text-white" : "bg-white border"}`}
            onClick={() => setActiveTab("yearly")}
          >
            Yearly
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans[activeTab].map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold text-blue-600 mb-6">{plan.price}</p>
              <ul className="text-gray-600 mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingPlans;

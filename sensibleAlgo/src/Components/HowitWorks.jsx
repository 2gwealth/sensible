import React from "react";
import { UserPlus, Settings, Shield, TrendingUp } from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="h-8 w-8 text-blue-600" />,
      title: "Sign Up",
      description:
        "Create your free account in minutes and unlock access to powerful trading tools.",
    },
    {
      icon: <Settings className="h-8 w-8 text-blue-600" />,
      title: "Choose a Strategy",
      description:
        "Select from pre-built strategies or create your own tailored to your needs.",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Risk-Free Trading",
      description:
        "Practice with virtual funds and test your strategies without any financial risk.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Trade with Ease",
      description:
        "Connect to brokers and start trading seamlessly with our optimized platform.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://www.rawshorts.com/blog/wp-content/uploads/2018/02/heres-how-it-works-whiteboard.png"
            alt="Trading Illustration"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side - Steps */}
        <div className="w-full md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            How It Works
          </h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="mr-4">{step.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;

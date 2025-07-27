import React from "react";

function StatsSection() {
  const stats = [
    { title: "Total Users", value: "12,345" },
    { title: "Active Users", value: "2,300" },
    { title: "Active Brokers", value: "4" },
    { title: "Trading Volume", value: "₹ 45M+" },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <h3 className="text-4xl font-bold text-blue-600">{stat.value}</h3>
              <p className="mt-2 text-lg text-gray-700">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;

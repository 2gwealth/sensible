import React from "react";

function SupportedBrokers() {
  const brokers = [
    {
      name: "Zerodha",
      logo: "https://zerodha.com/static/images/logo.svg",
    },
    {
      name: "Upstox",
      logo: "https://exchange4media.gumlet.io/photos/Upstox-logo.jpg?w=400&dpr=2.6",
    },
    {
      name: "Angel One",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Angel_One_Logo.svg/1280px-Angel_One_Logo.svg.png",
    },
    {
      name: "Groww",
      logo: "https://image.pngaaa.com/289/7142289-middle.png",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Supported Brokers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {brokers.map((broker, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={broker.logo}
                alt={broker.name}
                className="h-16 object-contain mb-3"
              />
              <p className="text-gray-700 font-medium">{broker.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SupportedBrokers;

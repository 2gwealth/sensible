

function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-screen text-white"
      style={{
        backgroundImage: `url("https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?q=80&w=1255&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Automate Your Trading. Maximize Your Profits
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl">
          Harness the power of smart algorithms and real-time market data. Build, test, and execute strategies with ease – all in one secure platform.
        </p>
        <div className="space-x-4">
          <a
            href="#get-started"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="bg-transparent border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

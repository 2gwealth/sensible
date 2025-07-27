import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">Sensible Algo</h3>
          <p className="text-gray-400 text-sm">
            Unlock your trading potential with smart algorithms and secure broker integration.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            <li><a href="#terms" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm">📍 123 Trade Street, Mumbai, India</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">📧 support@sensiblealgo.com</p>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-white">🌐</a>
            <a href="#" className="hover:text-white">🐦</a>
            <a href="#" className="hover:text-white">📘</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sensible Algo. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

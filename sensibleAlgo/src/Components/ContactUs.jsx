import React from "react";

function ContactUs() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side - Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Send us a message
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Company Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Company Details
            </h3>
            <p className="text-gray-600 mb-4">
              Have questions? Reach out to us through the following details:
            </p>
            <div className="space-y-3">
              <p><strong>📍 Address:</strong> Rajouri Garden, New Delhi, India</p>
              <p><strong>📞 Phone:</strong> +91 99887755445</p>
              <p><strong>📧 Email:</strong> support@sensiblealgo.com</p>
              <p><strong>🕒 Working Hours:</strong> Mon - Fri: 9 AM - 6 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;

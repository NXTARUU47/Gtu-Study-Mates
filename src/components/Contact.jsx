import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  return (
    <div id="contact" className="min-h-screen bg-slate-50">
      {/* Heading */}
      <section className="text-center pt-8 pb-6 px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-600">
          Contact Us
        </h1>

        <p className="text-gray-600 text-sm mt-2 max-w-md mx-auto">
          If you have any queries, feedback, or suggestions, feel free to reach
          out to us.
        </p>
      </section>

      {/* Main Contact Section */}
      <section className="px-4 pb-10 flex justify-center">
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 w-full max-w-sm">
          {/* Heading */}
          <h2 className="text-lg font-bold text-gray-800">
            Send Us a Message
          </h2>

          <p className="text-gray-500 text-sm mt-1 mb-4">
            Fill out the form below and we'll get back to you soon.
          </p>

          {/* Success Message */}
          {success && (
            <div className="mb-4 bg-green-100 border border-green-200 text-green-700 text-sm px-3 py-2 rounded-lg">
              ✓ Message sent successfully!
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Name */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Your Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Your Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none transition"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
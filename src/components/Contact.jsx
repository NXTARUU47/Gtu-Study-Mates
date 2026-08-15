import React from "react";
import {
  IoPersonOutline,
  IoMailOutline,
  IoChatbubbleEllipsesOutline,
  IoSendOutline,
} from "react-icons/io5";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your form submission logic here
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="max-w-3xl mx-auto">

        {/* Form Card */}
        <div className="bg-white border border-gray-100 rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden">

          {/* Header */}
          <div className="px-5 sm:px-8 md:px-10 pt-7 sm:pt-9">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center">
                <IoChatbubbleEllipsesOutline
                  className="text-indigo-600"
                  size={22}
                />
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Send us a message
                </h2>

                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                  We'd love to hear from you.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="px-5 sm:px-8 md:px-10 py-7 sm:py-9 space-y-5"
          >

            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Your Name
                </label>

                <div className="relative">
                  <IoPersonOutline
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={19}
                  />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="
                      w-full
                      h-12
                      pl-11
                      pr-4
                      rounded-xl
                      border border-gray-200
                      bg-gray-50/70
                      text-gray-800
                      text-sm
                      outline-none
                      transition-all
                      duration-200
                      placeholder:text-gray-400
                      focus:bg-white
                      focus:border-indigo-500
                      focus:ring-4
                      focus:ring-indigo-500/10
                    "
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>

                <div className="relative">
                  <IoMailOutline
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={19}
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="
                      w-full
                      h-12
                      pl-11
                      pr-4
                      rounded-xl
                      border border-gray-200
                      bg-gray-50/70
                      text-gray-800
                      text-sm
                      outline-none
                      transition-all
                      duration-200
                      placeholder:text-gray-400
                      focus:bg-white
                      focus:border-indigo-500
                      focus:ring-4
                      focus:ring-indigo-500/10
                    "
                  />
                </div>
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What would you like to tell us?"
                required
                className="
                  w-full
                  h-12
                  px-4
                  rounded-xl
                  border border-gray-200
                  bg-gray-50/70
                  text-gray-800
                  text-sm
                  outline-none
                  transition-all
                  duration-200
                  placeholder:text-gray-400
                  focus:bg-white
                  focus:border-indigo-500
                  focus:ring-4
                  focus:ring-indigo-500/10
                "
              />
            </div>

            {/* Message */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Message
                </label>

                <span className="text-xs text-gray-400">
                  Required
                </span>
              </div>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  border border-gray-200
                  bg-gray-50/70
                  text-gray-800
                  text-sm
                  outline-none
                  resize-none
                  transition-all
                  duration-200
                  placeholder:text-gray-400
                  focus:bg-white
                  focus:border-indigo-500
                  focus:ring-4
                  focus:ring-indigo-500/10
                "
              />
            </div>

            {/* Bottom */}
            <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">

              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                We'll get back to you as soon as possible.
              </p>

              <button
                type="submit"
                className="
                  group
                  w-full
                  sm:w-auto
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-6
                  py-3
                  rounded-xl
                  bg-indigo-600
                  hover:bg-indigo-700
                  active:scale-[0.98]
                  text-white
                  text-sm
                  font-semibold
                  shadow-lg
                  shadow-indigo-600/20
                  transition-all
                  duration-200
                "
              >
                Send Message

                <IoSendOutline
                  size={18}
                  className="
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
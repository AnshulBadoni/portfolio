'use client';

import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: 'Thank you for your message. I will get back to you shortly.'
        });
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'An error occurred. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full font-roobert text-rich-black pb-16 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-0 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">

          {/* Left Column — Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight">
              Let's Talk
            </h1>

            <p className="text-sm sm:text-base leading-relaxed text-gray-600 max-w-md">
              Have a project in mind? Or just want to connect? I respond to every message.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {/* Email */}
              <div>
                <p className="text-xs sm:text-sm text-gray-500 mb-1">Email</p>
                <a
                  href="mailto:anshulbadoni359@gmail.com"
                  className="text-base sm:text-lg md:text-xl font-medium text-rich-black hover:text-gray-700 transition-colors break-all sm:break-normal"
                >
                  anshulbadoni359@gmail.com
                </a>
              </div>

              {/* Location */}
              <div>
                <p className="text-xs sm:text-sm text-gray-500 mb-1">Location</p>
                <span className="text-base sm:text-lg md:text-xl font-medium text-rich-black">
                  Gurugram Haryana, India
                </span>
              </div>

              {/* Social Icons */}
              <div>
                <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">Connect</p>
                <div className="flex space-x-3">
                  <a
                    href="https://www.linkedin.com/in/anshul-badoni-301a07201/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 border border-gray-300 rounded-full text-rich-black hover:bg-rich-black hover:text-white transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/AnshulBadoni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 border border-gray-300 rounded-full text-rich-black hover:bg-rich-black hover:text-white transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.502.338c1.91-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Contact Form */}
          <div className="border border-gray-300 rounded-lg p-5 sm:p-6 md:p-8 bg-slate-50">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

              <div>
                <label htmlFor="firstName" className="text-xs sm:text-sm font-medium mb-2 block">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full h-10 sm:h-12 border-0 border-b border-gray-300 text-rich-black text-sm sm:text-base px-0 focus:outline-none focus:border-rich-black transition-colors bg-transparent"
                  placeholder="John"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="text-xs sm:text-sm font-medium mb-2 block">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full h-10 sm:h-12 border-0 border-b border-gray-300 text-rich-black text-sm sm:text-base px-0 focus:outline-none focus:border-rich-black transition-colors bg-transparent"
                  placeholder="Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-xs sm:text-sm font-medium mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-10 sm:h-12 border-0 border-b border-gray-300 text-rich-black text-sm sm:text-base px-0 focus:outline-none focus:border-rich-black transition-colors bg-transparent"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-xs sm:text-sm font-medium mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  maxLength={5000}
                  className="w-full border-0 border-b border-gray-300 text-rich-black text-sm sm:text-base px-0 pb-2 focus:outline-none focus:border-rich-black transition-colors resize-none bg-transparent"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-rich-black text-white text-center border border-rich-black rounded px-8 sm:px-12 py-2.5 sm:py-3 text-sm sm:text-base font-medium leading-[1.3] hover:bg-faded-green transition-all duration-280 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {formStatus.message && (
              <div className={`mt-4 sm:mt-6 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 rounded ${formStatus.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                {formStatus.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
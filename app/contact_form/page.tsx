"use client";

import React, { useState } from "react";
import ContactSection from "@/components/hero_page/contact_section";
import Navigator from "@/components/hero_page/navigator";
import Footer from "@/components/hero_page/footer";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col min-h-screen dark:text-primary bg-[#F5F8FE] text-blue" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <Navigator />
      
      <main className="flex-grow px-4 sm:px-6 md:px-10 py-8 md:py-15">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center text-[#043873] pb-4 sm:pb-6">CONTACT US</h2>
          <p className="text-center text-sm sm:text-base pb-4 sm:pb-6 max-w-2xl mx-auto">
            If you have any questions, concerns, or feedback, please feel free to reach out to our dedicated team.
          </p>
          
          <ContactSection />
          
          <div className="flex justify-center mt-6 sm:mt-8 md:mt-10">
            <div className="w-full max-w-xl bg-white text-black p-4 sm:p-6 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-sm sm:text-base">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-sm sm:text-base">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold text-sm sm:text-base">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    rows={5}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto md:px-8 bg-[#165388] text-white py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base font-medium item-center flex justify-center"
                >
                  Send Message
                </button>
              </form>
              {submitted && <p className="text-center text-green-600 pt-3 sm:pt-4 text-sm sm:text-base">Message sent successfully!</p>}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactForm;
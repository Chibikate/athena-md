"use client";

import React, { useState } from "react";
import ContactCard from "@/components/hero_page/contactus_card";
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
    <div className="flex flex-col dark:text-primary bg-[#F5F8FE] text-blue p-10" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <Navigator />
      
      <h2 className="font-bold text-4xl text-center text-[#043873] pb-6">CONTACT US</h2>
      <p className="text-center pb-6">
        If you have any questions, concerns, or feedback, please feel free to reach out to our dedicated team.
      </p>
      
      <ContactSection />
      
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-md bg-white text-black p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
          {submitted && <p className="text-center text-green-600 pt-4">Message sent successfully!</p>}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactForm;

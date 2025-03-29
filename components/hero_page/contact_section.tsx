import React from "react";
import { EnvelopeIcon, PhoneIcon, MapIcon } from "@heroicons/react/24/outline";

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center px-6 py-12 md:py-16 bg-[#F5F8FE]ext-gray-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <EnvelopeIcon className="w-14 h-14 text-blue-700 mb-4" />
          <h3 className="font-semibold text-xl mb-2">Email</h3>
          <p className="text-gray-700">lemuelclarkvelasco@g.msuiit.edu.ph</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <PhoneIcon className="w-14 h-14 text-blue-700 mb-4" />
          <h3 className="font-semibold text-xl mb-2">Phone</h3>
          <p className="text-gray-700">+63 9358688933</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <MapIcon className="w-14 h-14 text-blue-700 mb-4" />
          <h3 className="font-semibold text-xl mb-2">Address</h3>
          <p className="text-gray-700">MSU-IIT, Tibanga, Iligan City 9200</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
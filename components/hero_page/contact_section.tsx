import React from "react";
import ContactCard from "./contactus_card";
import { EnvelopeIcon, PhoneIcon, MapIcon } from "@heroicons/react/24/outline";

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center p-10 bg-[#1c1648] text-white">
      <h2 className="font-bold text-4xl text-center text-[#ffc248] pb-6">Contact Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ContactCard
          title="Email"
          description="kaye.velarde@g.msuiit.edu.ph"
          icon={<EnvelopeIcon className="w-12 h-12" />}
        />
        <ContactCard
          title="Phone"
          description="MSU-IIT"
          icon={<PhoneIcon className="w-12 h-12" />}
        />
        <ContactCard
          title="Address"
          description="MSU-IIT, Tibanga, Iligan City"
          icon={<MapIcon className="w-12 h-12" />}
        />
      </div>
    </div>
  );
};

export default ContactSection;
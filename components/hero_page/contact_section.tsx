import React from "react";
import ContactCard from "./contactus_card";
import { EnvelopeIcon, PhoneIcon, MapIcon } from "@heroicons/react/24/outline";

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center p-10 bg-[#EDF5FE] text-white">
      <h2 className="font-bold text-4xl text-center text-[#043873] pb-6">Contact Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#043873]">
        <ContactCard
          title="Email"
          description="kaye.velarde@g.msuiit.edu.ph"
          icon={<EnvelopeIcon className="w-12 h-12 text-[#043873]"  />}
        />
        <ContactCard
          title="Phone"
          description="MSU-IIT"
          icon={<PhoneIcon className="w-12 h-12 text-[#043873] " />}
        />
        <ContactCard
          title="Address"
          description="MSU-IIT, Tibanga, Iligan City"
          icon={<MapIcon className="w-12 h-12 text-[#043873]" />}
        />
      </div>
    </div>
  );
};

export default ContactSection;
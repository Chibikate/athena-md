import React from "react";

interface ContactCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default ContactCard;
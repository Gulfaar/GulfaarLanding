import { Phone, Clock, Mail, MapPin } from "lucide-react";

const ContactUs = () => {
  const contactDetails = [
    {
      icon: <Phone size={28} className="text-[#2E5F5C]" />,
      title: "Call for inquiry",
      info: "+18-555-169-667",
    },
    {
      icon: <Clock size={28} className="text-[#2E5F5C]" />,
      title: "Opening hours",
      info: "Mon - Fri: 10AM - 10PM",
    },
    {
      icon: <Mail size={28} className="text-[#2E5F5C]" />,
      title: "Send us email",
      info: "info@gulfaar.com",
    },
    {
      icon: <MapPin size={28} className="text-[#2E5F5C]" />,
      title: "Office",
      info: "Gulfaar Tours & Travels,Revipuram,Kochi,Kerala",
    },
  ];

  return (
    <section className="py-16 px-6 text-center">
      {/* Heading */}
      <h2 className="text-xl font-semibold text-[#2E5F5C] mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-10">
        If you have any questions about our Cookie Policy, please reach out to us:
      </p>
      
      {/* Contact Details */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {contactDetails.map((contact, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-2">
            <div className="bg-gray-100 p-4 rounded-full">{contact.icon}</div>
            <h3 className="font-semibold text-gray-800">{contact.title}</h3>
            <p className="text-gray-600">{contact.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactUs;

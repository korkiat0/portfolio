import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      {/* Title Section */}
      <h2 className="my-10 text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
        Contact
      </h2>

      {/* Contact Information Section */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {/* Address */}
        <div className="flex items-center gap-2 bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaMapMarkerAlt className="text-2xl text-pink-400" />
          <p className="text-sm">
            83/28 พหลโยธิน 59 แขวงอนุสาวรีย์ เขตบางเขน กทม.
          </p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2 bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaPhoneAlt className="text-2xl text-pink-400" />
          <p className="text-sm">095-5954944</p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaEnvelope className="text-2xl text-pink-400" />
          <p className="text-sm">56160235.buu@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

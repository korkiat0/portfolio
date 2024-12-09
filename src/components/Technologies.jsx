import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-16 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      {/* Section Title */}
      <h2 className="my-12 text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
        Technologies
      </h2>

      {/* Icon Grid Section */}
      <div className="flex flex-wrap items-center justify-center gap-6">
        {[
          {
            icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
            name: "React",
          },
          {
            icon: <FaHtml5 className="text-7xl text-orange-600" />,
            name: "HTML5",
          },
          {
            icon: <IoLogoJavascript className="text-7xl text-yellow-400" />,
            name: "JavaScript",
          },
          {
            icon: <IoLogoCss3 className="text-7xl text-blue-600" />,
            name: "CSS3",
          },
          {
            icon: <RiTailwindCssLine className="text-7xl text-cyan-300" />,
            name: "Tailwind CSS",
          },
          {
            icon: <FaBootstrap className="text-7xl text-purple-400" />,
            name: "Bootstrap",
          },
          {
            icon: <FaGithub className="text-7xl text-gray-300" />,
            name: "GitHub",
          },
          {
            icon: <SiPostman className="text-7xl text-orange-400" />,
            name: "Postman",
          },
          {
            icon: <TbBrandMysql className="text-7xl text-purple-300" />,
            name: "MySQL",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border-4 border-neutral-700 p-4 transition transform hover:scale-105 hover:border-pink-400 duration-300"
          >
            {item.icon}
            <p className="text-sm mt-2 text-center text-gray-300">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      {/* Skills Description Section */}
      <div className="flex flex-wrap justify-center gap-4 mt-12">
        <div className="w-5/6 md:w-1/3 bg-gray-700 text-gray-200 rounded-2xl border-2 border-neutral-700 p-6 text-center">
          Front-End: HTML, CSS, JavaScript, React, Tailwind, Bootstrap
        </div>
        <div className="w-5/6 md:w-1/3 bg-gray-700 text-gray-200 rounded-2xl border-2 border-neutral-700 p-6 text-center">
          Back-End: Node.js, Express.js, MySQL, Prisma ORM
        </div>
        <div className="w-5/6 md:w-1/3 bg-gray-700 text-gray-200 rounded-2xl border-2 border-neutral-700 p-6 text-center">
          Tools & Others: GitHub, Postman, Agile
        </div>
      </div>
    </div>
  );
};

export default Technologies;

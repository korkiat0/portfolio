const PROJECTS = [
  {
    title: " แอปพลิเคชันแจ้งเตือนการซ่อมแซมหอพัก",
    description:
      "แอปพลิเคชันแจ้งเตือนการซ่อมแซมมีเป้าหมายเพื่อเป็นแพลตฟอร์มสำหรับการจัดการการบำรุงรักษาอพาร์ทเมนต์โดยมอบวิธีที่มีประสิทธิภาพในการรายงาน ติดตาม และแก้ไขปัญหาการซ่อมแซม",
    technologies: "React, Tailwind CSS, Express, Prisma, MySQL",
  },
  {
    title: "Stella CarRental Site",
    description:
      "Stella CarRental Site - เว็บไซต์เช่ารถออนไลน์ที่สวยงาม ตอบสนองอย่างเต็มที่ และใช้งานง่าย รับผิดชอบส่วนใหญ่สำหรับ UX/UI ของหน้าแรกและส่วนหน้า",
    technologies:
      "React,Tailwind CSS,GoogleMap ,Google/FacebookSignup,  Express, Prisma, MySQL, Stripe",
  },
];

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Section Title */}
      <h1 className="my-12 text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
        Projects
      </h1>

      {/* Projects Grid */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 border-2 border-neutral-700 rounded-lg shadow-md hover:shadow-xl hover:border-pink-400 transition-shadow duration-300 w-full md:w-[350px] lg:w-[400px] p-6"
          >
            {/* Project Title */}
            <h3 className="text-lg font-semibold mb-2 text-gray-200">
              {project.title}
            </h3>

            {/* Description */}
            <p className="mb-2 text-sm text-neutral-400 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies Section */}
            <p className="text-sm text-purple-400 mb-3 font-medium">
              {project.technologies}
            </p>

            {/* Project Links Section */}
            <div className="mt-4 flex justify-between gap-2">
              {project.links?.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-pink-500 text-white rounded-lg shadow-sm hover:bg-pink-600 transition duration-300"
                >
                  Demo
                </a>
              )}
              {project.links?.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-sm hover:bg-gray-600 transition duration-300"
                >
                  Repository
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

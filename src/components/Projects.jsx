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
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((projects, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{projects.title}</h6>
              <p className="mb-4 text-neutral-400">{projects.description}</p>
              <p className="mb-4 text-purple-400 text-sm font-medium">
                {projects.technologies}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

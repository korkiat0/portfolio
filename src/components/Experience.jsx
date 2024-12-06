const EXPERIENCE = [
  {
    year: "2024 - Present",
    role: "Database Administrator",
    company: "CHEETAH-PTERIS JOINT VENTURE CO., LTD",
    description:
      "1. วิเคราะห์สาเหตุ ปัญหา แนวทางแก้ไขป้องกันความเสียหายของระบบฐานข้อมูลในระบบสายพานลำเลียง 2. ดูแล บำรุงรักษาโปรแกรมระบบฐานข้อมูล และการทำงานของเครื่อง Server เช่น Process หรือ Background Process เป็นต้น ให้สามารถทำงานได้อย่างถูกต้องและมีประสิทธิภาพตามขีดความสามารถของเครื่อง 3. ตรวจสอบปัญหาการทำงานของโปรแกรมระบบงานฐานข้อมูลและเครื่อง Server และแก้ไขเมื่อมีส่วนหนึ่งส่วนใดผิดพลาดหรือขัดข้อง พร้อมทั้งรายงานปัญหาและวิธีการแก้ปัญหา 4. ทำการ Backup ข้อมูลที่อยู่ในระบบปฏิบัติการ และฐานข้อมูลที่อยู่ใน Server ในห้องควบคุมกระเป๋าสัมภาระ (BCR) ตามรอบระยะเวลาที่ได้ถูกกำหนดอยู่ในแผนงาน 5. ตรวจสอบข้อมูลในฐานข้อมูล เช่น ข้อมูลเที่ยวบิน ข้อมูล BSM หรือข้อมูล Local File ต่างๆ เป็นต้น",
  },
  {
    year: "Mar 2024 - Jul 2024",
    role: "Intensive Code Camp Fullstack Javascript Course",
    company: "Software Park Thailand",
    description:
      "เรียนรู้ครบทั้ง Frontend และ Backend คุณจะได้เรียนรู้ตั้งแต่การพัฒนาเว็บด้วยเทคโนโลยีฝั่ง Frontend เช่น React, HTML, CSS และการจัดการ UI ไปจนถึงฝั่ง Backend เช่น Node.js, Express และการเชื่อมต่อฐานข้อมูล (MongoDB, MySQL) JavaScript พร้อมสำหรับการทำงานในสาย Web Development ไม่ว่าจะเป็นการพัฒนาเว็บไซต์เต็มรูปแบบ หรือการสร้าง RESTful APIs",
  },
  {
    year: "2020 - 2024",
    role: " Personal Assistant",
    company: "Anonymous individual",
    description:
      "*จัดการงานส่วนตัวและงานอาชีพของผู้บริหารเพื่อให้การดำเนินงานประจำวันเป็นไปอย่างราบรื่น  *จัดทำรายงานประจำวันโดยให้ข้อมูลเชิงลึกที่ช่วยให้ตัดสินใจได้อย่างรอบรู้ *ดำเนินการตามคำสั่งอย่างแม่นยำและรอบคอบ โดยรักษาความลับและความเป็นมืออาชีพอย่างสม่ำเสมอ",
  },
  {
    year: "2019 - 2020",
    role: "  EXPERT FRIED CHICKEN",
    company: "McDonald’s",
    description:
      "เป็นผู้เชี่ยวชาญการไก่ทอดเพื่อให้มั่นใจถึงมาตรฐานสูงปฏิบัติตามและรักษามาตรการควบคุมคุณภาพที่เข้มงวดให้บริการลูกค้าอย่างยอดเยี่ยม ทำเบอร์เกอร์ได้",
  },
  {
    year: "2015 - 2019",
    role: "   Service Employee",
    company: "Seven Eleven Public Company Limited",
    description:
      "ร่วมมือกับทีมเพื่อบรรลุเป้าหมายรับฟังและตอบสนองความต้องการของลูกค้าอย่างแข็งขันมีบทบาทสำคัญในการเพิ่มยอดขาย",
  },
];

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCE.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-blue-600">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-2/6">
              <h6 className="mb-2 font-semibold ">
                {experience.role} -{" "}
                <span className="text-sm text-purple-300">
                  {experience.company}
                </span>
              </h6>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

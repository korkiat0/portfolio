import aboutImg from "../img/img1.jpg";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <h2 className="my-12 text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
        About <span className="text-gray-400">Me</span>
      </h2>
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 p-8">
          <div className="flex justify-center lg:justify-end">
            <img
              className="w-[200px] h-[200px] rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
              src={aboutImg}
              alt="About Me"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-8">
          <div className="text-center lg:text-left">
            <p className="text-lg font-light text-gray-300 leading-relaxed mb-4">
              ผมเป็นคนที่มองโลกในแง่ดีและมีความรับผิดชอบสูง
              ชอบตั้งเป้าหมายให้ตัวเองเพื่อพัฒนาตัวเองอยู่เสมอ
              นิสัยส่วนตัวของผมคือเป็นกันเอง ยิ้มง่าย
              และมักจะให้ความสำคัญกับการดูแลจิตใจของคนรอบข้าง
            </p>
            <p className="text-lg font-light text-gray-300 leading-relaxed mb-4">
              เวลาว่าง ผมชอบทำหลายสิ่งที่ช่วยให้ผ่อนคลายและเติมพลัง เช่น
              อ่านหนังสือแนวพัฒนาตัวเองหรือนิยาย
              บางครั้งก็ชอบออกไปเดินเล่นในธรรมชาติ
              เพราะรู้สึกว่ามันช่วยให้หัวโล่งและเพิ่มแรงบันดาลใจ
            </p>
            <p className="text-lg font-light text-gray-300 leading-relaxed mb-4">
              นอกจากนี้ผมยังสนใจการดูภาพยนตร์และซีรีส์
              โดยเฉพาะแนวที่ท้าทายความคิด
              สิ่งที่ผมภูมิใจในตัวเองคือการเป็นคนที่พร้อมช่วยเหลือคนอื่นเสมอ
              ไม่ว่าจะเป็นเรื่องเล็กน้อยหรือเรื่องใหญ่
            </p>
            <p className="text-lg font-light text-gray-300 leading-relaxed">
              ผมเชื่อว่าการส่งต่อความช่วยเหลือและกำลังใจสามารถสร้างความเปลี่ยนแปลงได้
              และทุกความสัมพันธ์เป็นโอกาสที่จะได้เรียนรู้สิ่งใหม่ ๆ
              และเติบโตไปด้วยกัน
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import profilePic from "../img/STV01552.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 lg:mb-35 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 p-8">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-6 text-4xl font-extrabold tracking-tight lg:mt-16 lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
              KORKIAT CHAOKHAO
            </h1>
            <span className="text-3xl font-medium tracking-wide text-slate-300">
              Front End Developer
            </span>
            <p className="mt-4 max-w-xl text-lg font-light text-gray-300 leading-relaxed">
              นายก่อเกียรติ ชาวเขา ชื่อเล่น: แบงค์ อายุ: 30
            </p>
            <p className="mt-2 max-w-xl text-lg font-light text-gray-300 leading-relaxed">
              สำเร็จการศึกษา ปริญญาตรี สาขา วิทยาการคอมพิวเตอร์ มหาวิทยาลัยบูรพา
            </p>
            <p className="mt-2 max-w-xl text-lg font-light text-gray-300 leading-relaxed">
              มีประสบการณ์ทำงานเป็นผู้ช่วยส่วนตัว (PA) มานานกว่า 5 ปี ปัจจุบันทำงานตำแหน่ง
              <strong className="text-white">Database Administrator</strong> ที่ CHEETAH-PTERIS JOINT VENTURE CO., LTD สุวรรณภูมิ
            </p>
            <p className="mt-4 max-w-xl text-lg font-light text-gray-300 leading-relaxed">
              ผมจบหลักสูตร Code Camp Fullstack JavaScript แบบเร่งรัดที่ Software Park Thailand
              และกำลังมุ่งเน้นไปที่การเป็นนักพัฒนาส่วนหน้า มีความหลงใหลในการสร้างเว็บไซต์และแอปพลิเคชันที่สวยงาม น่าดึงดูด และใช้งานง่าย
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition duration-300"
              >
                ดูโปรไฟล์
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
              >
                ติดต่อผม
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-8">
          <div className="flex justify-center lg:justify-end">
            <img
              className="w-[200px] h-[300px] rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              src={profilePic}
              alt="Korkiat Chaokhao"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
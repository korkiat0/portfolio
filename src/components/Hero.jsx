import profilePic from "../img/STV01552.jpg";

const Hero = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4 lg:mb-35">
      <div className=" flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className=" flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
              KORKIAT CHAOKHAO
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Front End Developer
            </span>
            <p className="my-2 max-w-xl pt-2 font-medium text-xl tracking-tighter ">
              <span> </span>นายก่อเกียรติ ชาวเขา ชื่อเล่น : แบงค์ อายุ : 30
            </p>
            <p className="my-2 max-w-xl  font-medium text-xl tracking-tighter ">
              สำเร็จการศึกษา ปริญญาตรี สาขา วิทยาการคอมพิวเตอร์ มหาลัยบูรพา
            </p>
            <p className="my-2 max-w-xl  font-medium text-xl tracking-tighter ">
              ทำงานเป็นผู้ช่วยส่วนตัว (PA) มานานกว่า 5 ปี ปัจจุบันทำงาน ตำแหน่ง
              Database Administrator ที่ CHEETAH-PTERIS JOINT VENTURE CO., LTD
              สุวรรณภูมิ
            </p>
            <p className="my-2 max-w-xl  font-medium text-xl tracking-tighter ">
              ผมจบหลักสูตร Code Camp Fullstack JavaScript แบบเร่งรัดที่ Software
              Park Thailand
              ตอนนี้ผมกำลังมุ่งเน้นไปที่การเป็นนักพัฒนาส่วนหน้าที่มีความหลงใหลในการสร้างเว็บไซต์และแอปพลิเคชันที่สวยงามน่าดึงดูดและใช้งานง่าย
            </p>
          </div>
        </div>
        <div className=" p-4 w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              className="w-[200px] h-[300px]"
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

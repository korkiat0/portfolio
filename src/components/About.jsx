import aboutImg from "../img/img1.jpg";

const About = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
      <h2 className=" my-20 text-center text-4xl ">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className=" rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className=" flex justify-center lg:justify-start">
            <p>
            นายก่อเกียรติ ชาวเขา ชื่อเล่น : แบงค์ อายุ : 30 สำเร็จการศึกษา 
            ปริญญาตรี สาขา วิทยาการคอมพิวเตอร์ มหาลัยบูรพา
             หลังจากทำงานเป็นผู้ช่วยส่วนตัว (PA) มานานกว่า 5 ปี
              ตัดสินใจกลับมาทำงานสายที่ตรงกลับที่เรียนมา
              นั่นก็คือการเขียนโค้ด ผมเคยทำโปรเจกต์ต่าง ๆ
              รวมถึงการสร้างหน้าเว็บที่ตอบสนองทุกอุปกรณ์ด้วย tailwind UI
              และกำลังพัฒนาทักษะของตัวเองอย่างต่อเนื่อง
              เพื่อสร้างเว็บแอปพลิเคชันที่ใช้งานง่ายและมีประสิทธิภาพ

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

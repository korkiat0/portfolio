const DropDown = () => {
  return (
    <div className=" flex flex-col dropDownProfile  ">
      <ul className=" flex flex-col gap-4  ">
        <li>
          <a href="#" className=" text-blue-400 p-2">
            Home
          </a>
        </li>
        <li>
          <a href="#" className=" text-blue-400 p-2">
            About
          </a>
        </li>
        <li>
          <a href="#" className=" text-blue-400 p-2">
            skills
          </a>
        </li>
        <li>
          <a href="#" className=" text-blue-400 p-2">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;

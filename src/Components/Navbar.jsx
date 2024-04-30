import React, { useState } from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Home1 from "../assets/Homeimg/HomeImg1.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    navigate(`/${selectedValue}`);
  };

  return (
    <>
      <div className="bg-my4 flex justify-between items-center table-fixed px-10 py-6">
        <div onClick={() => navigate("/home")}>
          <img src={Home1} alt="" className="w-[50px] cursor-pointer" />
        </div>
        <div className="mt-4">
          <div className="bg-white w-[130px] outline-none rounded-lg font-font3 py-2 ml-[-170px]">
            <select
              className="bg-transparent outline-none ml-[10px] w-[100px]"
              onChange={handleOptionChange}
            >
              <option value="">Resources</option>
              <option value="VideoNotes">Notes</option>
              <option value="QP">Question paper</option>
            </select>
          </div>
        </div>

        <div className="flex items-center ">
          <ul className=" gap-14 mt-[30px] ml-6 px-20 grid grid-cols-3 font-font3 text-white">
            <li>
              <span className="grid grid-cols-2 ">
                <IoIosHelpCircleOutline size={26} />
               <h1 className="-ml-[100px] font-bold cursor-pointer" onClick={() => navigate("/Contact")}>Help</h1>
              </span>
            </li>
            <li>
              <span className="grid grid-cols-2 ">
               
                <div className="bg-white w-[170px] outline-none rounded-lg font-font3 py-2 ml-[-40px] text-black">
                <select
                  className="bg-transparent outline-none  w-[170px]"
                  onChange={handleOptionChange}
                >
                  <option value="">Signup</option>
                  <option value="Teacher_Profile">Signup for Teachers</option>
                  <option value="Student_Profile">Signup for Students</option>
                </select>
                </div>
              </span>
            </li>
            <li>
              <span className="grid grid-cols-2 ">
                <FaMapLocationDot size={26} />
                <a href="https://www.google.com/maps/search/nearby+tuition+centre/@9.9020354,78.1213676,14.88z?entry=tt"><h1 className="-ml-[90px] font-bold">Location</h1></a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
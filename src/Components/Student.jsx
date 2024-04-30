import React from "react";
import { useNavigate } from "react-router-dom";
import LoginImg from "../assets/LoginImg.png";

const Student = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gradient-to-tl from-my2 from-40%  to-my1 to-100% font-font1 grid grid-cols-2 h-screen">
        <div className="xl:py-[100px] xl:ml-[200px] ">
          <h1 className="font-font1 text-white font-semibold xl:text-5xl">
            Learn Locate Connect
          </h1>
          <h1 className="text-white font-font1 font-semibold xl:text-2xl xl:py-6">
            Rigester for Students
          </h1>
          <div className="grid grid-cols-2">
            <div className="bg-gradient-to-tl from-my2 from-40%  to-my1 to-100% flex items-center w-[200px] mt-5 py-2 px-2 rounded-xl  ">
              <input
                type="text"
                placeholder="First Name"
                className="bg-transparent font-font1 px-1 outline-none w-[260px] "
              />
            </div>
            <div className="bg-gradient-to-tl from-my2 from-40%  to-my1 to-100% flex items-center w-[200px] mt-5 py-2 px-2 rounded-xl -ml-[80px] ">
              <input
                type="text"
                placeholder="Last Name"
                className="bg-transparent font-font1 px-1 outline-none w-[260px] "
              />
            </div>
          </div>

          <div className="bg-gradient-to-tl from-my2 from-40%  to-my1 to-100% flex items-center w-[450px] mt-5 py-2 px-2 rounded-xl ">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent font-font1 px-1 outline-none w-[260px] "
            />
          </div>
          <div className="bg-gradient-to-tl from-my2 from-40%  to-my1 to-100% flex items-center w-[450px] mt-5 py-2 px-2 rounded-xl  ">
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent font-font1 outline-none px-1 w-[260px] "
            />
          </div>
          <div className="bg-gradient-to-tl from-my2 from-40%  to-my1 to-100% flex items-center w-[450px] mt-5 py-2 px-2 rounded-xl  ">
            <input
              type="password"
              placeholder="Confirm Password"
              className="bg-transparent font-font1 outline-none px-1 w-[260px] "
            />
          </div>
          <div className="grid grid-cols-2 mt-5">
            <div className="bg-white w-[220px] outline-none rounded-lg">
              <select
                name=""
                id=""
                className=" bg-transparent  text-xl py-3 px-6 "
              >
                <option value="">standard</option>
                <option value="">Primary</option>
                <option value="">Secondary</option>
                <option value="">Higher Secondary</option>
              </select>
            </div>
            <div>
              <div className="bg-white w-[180px] outline-none rounded-lg ml-[-100px]">
                <select
                  name=""
                  id=""
                  className=" bg-transparent  text-xl py-3 px-6"
                >
                  <option value="">Course</option>
                  <option value="">Science</option>
                  <option value="">Maths</option>
                </select>
              </div>
            </div>
          </div>
          <div className="bg-my3  flex items-center w-[450px] py-3 px-2 mt-5  rounded-xl ">
            <h1 className="font-font1 ml-[160px] text-white cursor-pointer" onClick={() => navigate("/")}>REGISTER NOW</h1>
          </div>
        </div>
        <div className="mt-[200px]">
          <img src={LoginImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Student;

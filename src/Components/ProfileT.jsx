import React from "react";
import { FaCamera } from "react-icons/fa";
import { MdDriveFolderUpload } from "react-icons/md";
import { LuUpload } from "react-icons/lu";

const ProfileT = () => {
  return (
    <>
      <div className="bg-mybg py-4 grid grid-cols-2">
        <div className="ml-[400px]">
          <div className="bg-my7 w-[200px] h-[200px] rounded-full border-2 border-black"></div>
          <div>
            <FaCamera size={30} className="ml-[149px] mt-[-50px]" />
          </div>
          <div className="pt-5 -ml-3">
            <div className="bg-my8 flex items-center w-[240px]  text-white gap-5 mt-5 py-2 px-2 rounded-xl ">
              <MdDriveFolderUpload className="xl:size-6 " />
              <h1>Upload Notes Material</h1>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white flex items-center border border-black w-[280px] py-2 px-2 mt-5 rounded-xl ">
            <input
              type="text"
              placeholder="TutorName"
              className="bg-transparent font-font1 outline-none px-1 w-[260px] "
            />
          </div>
          <div className="bg-white flex items-center border border-black w-[280px] py-2 px-2 mt-5 rounded-xl ">
            <input
              type="Standard"
              placeholder="Qualification"
              className="bg-transparent font-font1 outline-none px-1 w-[260px] "
            />
          </div>
          <div className="bg-white flex items-center border border-black w-[280px] py-2 px-2 mt-5 rounded-xl ">
            <input
              type="text"
              placeholder="Teaching Skills"
              className="bg-transparent font-font1 outline-none px-1 w-[260px] "
            />
          </div>
          <div className="bg-white flex items-center border border-black w-[280px] py-2 px-2 mt-5 rounded-xl ">
            <input
              type="text"
              placeholder="Eperience"
              className="bg-transparent font-font1 outline-none px-1 w-[260px] "
            />
          </div>
          <div className="bg-white flex items-center border border-black w-[280px] py-2 px-2 mt-5 rounded-xl ">
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-transparent font-font1 outline-none px-1 w-[260px] "
            />
          </div>
          <div className="bg-white border border-black  w-[280px] h-[150px] py-2 px-2 mt-5 rounded-xl ">
            <input
              type="text"
              placeholder="Address"
              className="bg-transparent  outline-none font-font1 text-center px-1 w-[260px] h-[130px] "
            />
          </div>
          <div className="bg-white flex items-center border gap-5 border-black w-[280px] py-2 px-2 mt-5 rounded-xl ">
            <LuUpload size={30} />
            <input
              type="text"
              placeholder="UPLOAD VEDIO LECTURE"
              className="bg-transparent font-font1 outline-none px-1 w-[260px] "
            />
          </div>
          <div className="bg-my8 w-[110px] h-[50px] rounded-xl ml-[170px] mt-5">
            <button className="text-center py-2 text-lg font-font3 font-bold text-white  ml-[25px]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileT;

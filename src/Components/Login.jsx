import React from "react";
import LoginImg from "../assets/LoginImg.png";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gradient-to-tl from-my2 from-40%  to-my1 to-100% grid grid-cols-2 h-screen">
        <div className="xl:py-[140px] xl:ml-[200px] ">
          <h1 className="font-font1 text-white font-semibold text-5xl">
            Learn Locate Connect
          </h1>
          <h1 className="text-white font-font1 font-semibold xl:text-2xl xl:py-6">
            Login to your account
          </h1>
          <div className="bg-gradient-to-tl from-my2 from-40%  to-my1 to-100% flex items-center w-[450px] mt-5 py-2 px-2 rounded-xl ">
            <input
              type="text"
              placeholder="Username"
              className="bg-transparent font-font1 px-1 outline-none w-[260px] text-2xl"
            />
          </div>
          <div className="bg-gradient-to-tl from-my2 from-40%  to-my1 to-100% flex items-center w-[450px] h-[] py-2 px-2 mt-5 rounded-xl ">
            <input
              type="text"
              placeholder="Password"
              className="bg-transparent font-font1 outline-none px-1 w-[260px] text-2xl "
            />
          </div>
          <div className="bg-my3  flex items-center w-[450px] py-3 px-2 mt-5  rounded-xl ">
            <h1
              className="font-font1 ml-[190px] text-white text-xl cursor-pointer "
              onClick={() => navigate("/home")}
            >
              Login
            </h1>
          </div>
          <br />
          <button className="mt-2 ml-[113px] text-white text-xl">
            Don’t have an account?
          </button>
          <div className="flex flex-row">
            <div className="bg-my3  flex items-center w-[200px] py-3 px-2 mt-5 ml-2 rounded-xl ">
              <h1
                className="font-font1 ml-[20px] text-white text-xl cursor-pointer "
                onClick={() => navigate("/Teacher_Login")}
              >
                Teacher Signup
              </h1>
            </div>
            <div className="bg-my3  flex items-center w-[200px] py-3 px-2 mt-5 ml-5 rounded-xl ">
              <h1
                className="font-font1 ml-[20px] text-white text-xl cursor-pointer"
                onClick={() => navigate("/Student_Login")}
              >
                Student Signup
              </h1>
            </div>
          </div>
          {/* <button className="text-xl mt-5 ml-[270px] text-white">
            forgot Password?
          </button> */}
          {/* <div className="bg-my3  flex items-center w-[450px] py-3 px-2 mt-5  rounded-xl ">
            <h1 className="font-font1 ml-[180px] text-white text-2xl ">LOGIN</h1>
          </div> */}
        </div>
        <div className="mt-[200px] ml-[100px]">
          <img src={LoginImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;

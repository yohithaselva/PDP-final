import React from "react";
import { MdStars } from "react-icons/md";
import Home2 from "../assets/Homeimg/Home2.png";
import Home3 from "../assets/Homeimg/Home3.png";
import Home4 from "../assets/Homeimg/Home4.png";
import Home5 from "../assets/Homeimg/Home5.png";
import Home6 from "../assets/Homeimg/Home6.png";
import Home7 from "../assets/Homeimg/Home7.png";
import Home8 from "../assets/Homeimg/Home8.png";
import Home9 from "../assets/Homeimg/Home9.png";
import Home10 from "../assets/Homeimg/Home10.png";
import Home11 from "../assets/Homeimg/Home11.png";
import Home12 from "../assets/Homeimg/Home12.png";
import home14 from "../assets/Homeimg/home14.png";
import home15 from "../assets/Homeimg/home15.png";
import { useNavigate } from "react-router-dom";

const Home1 = () => {
  const data = [
    {
      id: 1,
      name: "Maths",
      image: Home2,
    },
    {
      id: 2,
      name: "Phyics",
      image: Home3,
    },
    {
      id: 3,
      name: "Chemistry",
      image: Home4,
    },
    {
      id: 4,
      name: "Computer Science",
      image: Home5,
    },
    {
      id: 5,
      name: "Accounts",
      image: Home6,
    },
    {
      id: 6,
      name: "Economics",
      image: home14,
    },
    {
      id: 7,
      name: "Biology",
      image: home15,
    },
  ];

  const data2 = [
    {
      id: 1,
      image: Home7,
      name1: "Student Success center",
      name2: "Chennai, Tamil Nadu 600099.",
      name3: "Phone No: 67823 56781",
      icon: <MdStars />,
      num: "4.4/5",
    },
    {
      id: 2,
      image: Home8,
      name1: "DASAN Center",
      name2: "Chennai, Tamil Nadu 600067.",
      name3: " Phone No: 78900 34578",
      icon: <MdStars />,
      num: "4.4/5",
    },
    {
      id: 3,
      image: Home9,
      name1: "Home Tuition",
      name2: " Tirchy, Tamil Nadu 620006.",
      name3: "Phone No: 98712 34567",
      icon: <MdStars />,
      num: "4.3/5",
    },
    {
      id: 4,
      image: Home9,
      name1: "Balaji Tuition",
      name2: " Madurai, Tamil Nadu 625006.",
      name3: "Phone No: 98231 54987",
      icon: <MdStars />,
      num: "4.2/5",
    },
  ];
  const data3 = [
    {
      id: 1,
      image: Home10,
      name1: "Prospect tuition center",
      name2: " Selam, Tamil Nadu 600026.",
      name3: "Phone No: 92172 34077",
      icon: <MdStars />,
      num: "4.5/5",
    },
    {
      id: 2,
      image: Home11,
      name1: "Learn Succeed center",
      name2: " virudhunagar, Tamil Nadu 600019.",
      name3: "Phone No: 72135 81344",
      icon: <MdStars />,
      num: "4.5/5",
    },
    {
      id: 3,
      image: Home12,
      name1: "Byju’s learning center",
      name2: "Chennai, Tamil Nadu 600099.",
      name3: "Phone No: 81990 22315",
      icon: <MdStars />,
      num: "4.6/5",
    },
    {
      id: 4,
      image: Home12,
      name1: "Explore  center",
      name2: "Vellore, Tamil Nadu 600099.",
      name3: "Phone No: 52172 77839",
      icon: <MdStars />,
      num: "4.3/5",
    },
  ];

  const navigate = useNavigate();
  return (
    <>
      <div className="bg-mybg">
        <div>
          <h1 className="font-font3 font-bold text-xl py-4 ml-[100px]">
            Let’s Start With
          </h1>
          <div className="flex items-center ml-[60px]">
            {data.map((item, index) => (
              <div key={index} className=" p-4 rounded-md ml-12 px-6 " >
                <img src={item.image} alt={item.alt} className="w-[150px] " />
                <h1 className="text-center">{item.name}</h1>
              </div>
            ))}
          </div>
          <div className="w-[1500px] h-[1px] ml-[145px] mt-5 bg-my5"></div>
          <h1 className="font-font3 font-bold text-xl py-4 ml-[100px]">
            Top Rating Tutors
          </h1>
          <div>
            <div className="flex items-center px-5 py-10 ml-[60px]">
              {data2.map((item, index) => (
                <div key={index} className=" p-4 rounded-md ml-12 px-12  cursor-pointer"  onClick={() => navigate("/details")} >
                  <img src={item.image} alt={item.alt} className="w-[250px] " />
                  <div className="bg-my6 -mt-3">
                    <h1 className="text-center font-font3 text-xl font-bold py-6">
                      {item.name1}
                    </h1>
                    <h1 className="text-center">{item.name2}</h1>
                    <h1 className="text-center">{item.name3}</h1>

                    <span className="flex items-center gap-5 py-5 px-2">
                      <span className="text-yellow-500 size-4">
                        {item.icon}
                      </span>

                     <b> {item.num}</b>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-font3 font-bold text-xl py-4 ml-[100px]">
           Home Tutors Near You
          </h1>
         
          <div className="flex items-center px-5 py-10 ml-[60px]">
            {data3.map((item, index) => (
              <div key={index} className=" p-4 rounded-md ml-12 px-12  cursor-pointer " onClick={() => navigate("/details")}>
                <img src={item.image} alt={item.alt} className="w-[250px] " />
                <div className="bg-my6 -mt-3">
                  <h1 className="text-center font-font3 text-xl font-bold py-6">
                    {item.name1}
                  </h1>
                  <h1 className="text-center">{item.name2}</h1>
                  <h1 className="text-center">{item.name3}</h1>

                  <span className="flex items-center gap-5 py-5 px-2">
                    <span className="text-yellow-500 size-4">{item.icon}</span>

                   <b> {item.num} </b>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center px-5 py-10 ml-[60px]">
            {data3.map((item, index) => (
              <div key={index} className=" p-4 rounded-md ml-12 px-12  cursor-pointer " onClick={() => navigate("/details")}>
                <img src={item.image} alt={item.alt} className="w-[250px] " />
                <div className="bg-my6 -mt-3">
                  <h1 className="text-center font-font3 text-xl font-bold py-6">
                    {item.name1}
                  </h1>
                  <h1 className="text-center">{item.name2}</h1>
                  <h1 className="text-center">{item.name3}</h1>

                  <span className="flex items-center gap-5 py-5 px-2">
                    <span className="text-yellow-500 size-4">{item.icon}</span>

                   <b> {item.num} </b>
                  </span>
                </div>
              </div>
            ))}
            
          </div>
          <h1 className="font-font3 font-bold text-xl py-4 ml-[100px]">
          All Subject Tutors 
          </h1>
         
          <div className="flex items-center px-5 py-10 ml-[60px]">
            {data3.map((item, index) => (
              <div key={index} className=" p-4 rounded-md ml-12 px-12  cursor-pointer " onClick={() => navigate("/details")}>
                <img src={item.image} alt={item.alt} className="w-[250px] " />
                <div className="bg-my6 -mt-3">
                  <h1 className="text-center font-font3 text-xl font-bold py-6">
                    {item.name1}
                  </h1>
                  <h1 className="text-center">{item.name2}</h1>
                  <h1 className="text-center">{item.name3}</h1>

                  <span className="flex items-center gap-5 py-5 px-2">
                    <span className="text-yellow-500 size-4">{item.icon}</span>

                   <b> {item.num} </b>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <h1 className="font-font3 font-bold text-xl py-4 ml-[100px]">
          Science Tutors 
          </h1>
         
          <div className="flex items-center px-5 py-10 ml-[60px]">
            {data3.map((item, index) => (
              <div key={index} className=" p-4 rounded-md ml-12 px-12  cursor-pointer " onClick={() => navigate("/details")}>
                <img src={item.image} alt={item.alt} className="w-[250px] " />
                <div className="bg-my6 -mt-3">
                  <h1 className="text-center font-font3 text-xl font-bold py-6">
                    {item.name1}
                  </h1>
                  <h1 className="text-center">{item.name2}</h1>
                  <h1 className="text-center">{item.name3}</h1>

                  <span className="flex items-center gap-5 py-5 px-2">
                    <span className="text-yellow-500 size-4">{item.icon}</span>

                   <b> {item.num} </b>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <h1 className="font-font3 font-bold text-xl py-4 ml-[100px]">
          Higher Secondary Science Tutors 
          </h1>
         
          <div className="flex items-center px-5 py-10 ml-[60px]">
            {data3.map((item, index) => (
              <div key={index} className=" p-4 rounded-md ml-12 px-12  cursor-pointer " onClick={() => navigate("/details")}>
                <img src={item.image} alt={item.alt} className="w-[250px] " />
                <div className="bg-my6 -mt-3">
                  <h1 className="text-center font-font3 text-xl font-bold py-6">
                    {item.name1}
                  </h1>
                  <h1 className="text-center">{item.name2}</h1>
                  <h1 className="text-center">{item.name3}</h1>

                  <span className="flex items-center gap-5 py-5 px-2">
                    <span className="text-yellow-500 size-4">{item.icon}</span>

                   <b> {item.num} </b>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <h1 className="font-font3 font-bold text-xl py-4 ml-[100px]">
          Higher Secondary Commerce Tutors 
          </h1>
         
          <div className="flex items-center px-5 py-10 ml-[60px]">
            {data3.map((item, index) => (
              <div key={index} className=" p-4 rounded-md ml-12 px-12  cursor-pointer " onClick={() => navigate("/details")}>
                <img src={item.image} alt={item.alt} className="w-[250px] " />
                <div className="bg-my6 -mt-3">
                  <h1 className="text-center font-font3 text-xl font-bold py-6">
                    {item.name1}
                  </h1>
                  <h1 className="text-center">{item.name2}</h1>
                  <h1 className="text-center">{item.name3}</h1>

                  <span className="flex items-center gap-5 py-5 px-2">
                    <span className="text-yellow-500 size-4">{item.icon}</span>

                   <b> {item.num} </b>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <h1 className="font-font3 font-bold text-xl py-4 ml-[100px]">
          Higher Secondary Humanities Tutors 
          </h1>
         
          <div className="flex items-center px-5 py-10 ml-[60px]">
            {data3.map((item, index) => (
              <div key={index} className=" p-4 rounded-md ml-12 px-12  cursor-pointer " onClick={() => navigate("/details")}>
                <img src={item.image} alt={item.alt} className="w-[250px] " />
                <div className="bg-my6 -mt-3">
                  <h1 className="text-center font-font3 text-xl font-bold py-6">
                    {item.name1}
                  </h1>
                  <h1 className="text-center">{item.name2}</h1>
                  <h1 className="text-center">{item.name3}</h1>

                  <span className="flex items-center gap-5 py-5 px-2">
                    <span className="text-yellow-500 size-4">{item.icon}</span>

                   <b> {item.num} </b>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1;

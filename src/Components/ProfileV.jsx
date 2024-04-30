import React from "react";
import Home2 from "../assets/Homeimg/Home2.png";
import Home3 from "../assets/Homeimg/Home3.png";
import Home4 from "../assets/Homeimg/Home4.png";
import Home5 from "../assets/Homeimg/Home5.png";
import Home6 from "../assets/Homeimg/Home6.png";
import Home13 from "../assets/Homeimg/Home13.png";

const ProfileV = () => {
  const data = [
    {
      id: 1,
      name: "Maths",
      image: Home2,
    },
    {
      id: 2,
      name: "Physics",
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
      image: Home13,
    },
  ];
  return (
    <>
      <div className="bg-mybg font-font3">
        <div>
          <h1 className="font-font3 font-bold text-xl py-4 ml-[100px]">
            VIDEO LECTURES
          </h1>
        </div>
        <div className="py-10 ml-[150px] space-y-5">
          <div className="flex items-center gap-10">
            <iframe
              className="ml-[50px]"
              width="350"
              height="215"
              src="https://www.youtube-nocookie.com/embed/DuCe9tBjZfU?si=3eKDxoZXpwAXYzv6"
            ></iframe>
            <div>
              <h1 className="w-[250px] text-xl ml-[200px] font-bold">
                Discrete mathematics: Quantifiers topics discussed: 1,Definition
                of quantifiers. 2,Quantifiers examples
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <iframe
              className="ml-[50px]"
              width="350"
              height="215"
              src="https://www.youtube-nocookie.com/embed/VgP4kJDNY8o?si=e-81mi5dvAa2ouUo"
            ></iframe>
            <div>
              <h1 className="w-[250px] text-xl ml-[200px] font-bold">
                Learn to define quantifiers in mathematical logic. Discover what
                universal and existential quantifiers are. Learn how to use
                their symbols.
              </h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-font3 font-bold text-xl py-4 ml-[100px]">
            BOARD EXAM LECTURES
          </h1>
          <div className="flex py-5 items-center ml-[150px]">
            <iframe
              className="ml-[50px]"
              width="350"
              height="215"
              src="https://www.youtube-nocookie.com/embed/DuCe9tBjZfU?si=3eKDxoZXpwAXYzv6"
            ></iframe>
            <iframe
              className="ml-[50px]"
              width="350"
              height="215"
              src="https://www.youtube-nocookie.com/embed/VgP4kJDNY8o?si=e-81mi5dvAa2ouUo"
            ></iframe>
            <iframe
              className="ml-[50px]"
              width="350"
              height="215"
              src="https://www.youtube-nocookie.com/embed/DuCe9tBjZfU?si=3eKDxoZXpwAXYzv6"
            ></iframe>
          </div>
        </div>
        <div>
          <h1 className="font-font3 font-bold text-xl py-4 ml-[100px]">
            STUDY MATERIALS FOR HIGHER SECONDARY
          </h1>
          <div className="flex items-center py-5 ml-[60px]">
            {data.map((item, index) => (
              <div key={index} className=" p-4 rounded-md ml-8 px-6 ">
                <img src={item.image} alt={item.alt} className="w-[150px] " />
                <h1 className="text-center font-bold py-2">{item.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileV;

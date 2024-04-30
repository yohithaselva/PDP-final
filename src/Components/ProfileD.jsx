import React from "react";
import ProfileImg from "../assets/ProfileD.png";
import Profile1Img from "../assets/ProfileD1.png";

const ProfileD = () => {
  return (
    <>
      <div className="bg-mybg">
        <div>
          <h1 className="font-bold font-font3 text-2xl py-10 text-center">
            STUDENTS TUITION CENTER
          </h1>
          <h1 className="font-bold font-font3 text-xl text-center">
            Tutor Profile
          </h1>
          <div className="flex items-center py-10 gap-14 ml-[350px]">
            <div>
              <img src={ProfileImg} alt="" className="w-[250px]" />
            </div>
            <div className="font-bold space-y-5 text-2xl">
              <h1>
                Name: <span className="font-normal">Malar</span>
              </h1>

              <h1>
                Qualification: <span className="font-normal">MA,B.ED</span>
              </h1>

              <h1>
                Experience:
                <span className="font-normal">3 year Teaching Field</span>
              </h1>

              <h1>
                Specialization: <span className="font-normal">Maths</span>
              </h1>
            </div>
          </div>
          <div className="flex items-center py-10 gap-14 ml-[250px]">
            <div>
              <img src={Profile1Img} alt="" className="w-[450px]" />
            </div>
            <div className="font-bold space-y-3 text-xl">
              <h1>
                Mode: <span className="font-normal">Offline/Home Tuition</span>
              </h1>

              <h1>
                Adress:{" "}
                <span className="font-normal">
                  city plaza, 1 marriyamman temple, <br />
                  Old Post Office Rd, near sedal, Bhima Nagar,
                  <br /> Tiruchirappalli, Tamil Nadu 620001
                </span>
              </h1>

              <h1>
                Standards:
                <span className="font-normal">
                  All Standards mainly 9th-12th
                </span>
              </h1>

              <h1>
                Contacts: <span className="font-normal">98765 76589</span>
              </h1>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default ProfileD;

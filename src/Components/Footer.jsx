import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-my4 flex items-center table-fixed text-white px-20 py-6">
        <div className="font-font2">
          <h1 className="text-2xl">Contact us</h1>
          <br />

          <h1>Help and support</h1>
          <h1>Email : Support@learnlocateconnect.com </h1>
          <h1>Phone: +1(953)321-5344</h1>
        </div>
        <div className="font-font2 ml-[300px]">
          <h1 className="text-3xl">Legal</h1>
          <br />
          <br />
          <h1 className="text-2xl"> Terms and Condition Privacy policy</h1>
        </div>
        <div>
          <div className="flex items-center gap-10 ml-[330px]">
            <span>
              <FaFacebook size={50} />
            </span>
            <span>
              <FaTwitter size={50} />
            </span>
            <span>
              <FaInstagram size={50} />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

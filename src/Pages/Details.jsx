import React from "react";
import Navbar from "../Components/Navbar";
import ProfileD from "../Components/ProfileD";
import Footer from "../Components/Footer";
import ReviewTable from "../Components/ReviewTable";

const Details = () => {
  return (
    <>
      <Navbar />
      <div className="bg-mybg">
        <ProfileD />
        <ReviewTable />
        <div className="-mt-40">
          <h1 className="bg-gradient-to-tl from-my2 from-40%  to-my1 to-100% text-white p-4 rounded-lg w-[500px] ml-[600px]   text-xl font-bold">
            <a
              href="https://www.google.com/maps/search/nearby+tuition+centre/@9.9020354,78.1213676,14.88z?entry=ttu"
              className="ml-[175px]"
            >
              Locate Us On
            </a>
          </h1>
          <img
            className="ml-[470px] mt-[60px] pb-[20px]"
            src="src/assets/locate.png"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;

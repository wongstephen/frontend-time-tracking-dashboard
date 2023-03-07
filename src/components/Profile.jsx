import React from "react";

const Profile = ({ timeFrame, setTimeFrame }) => {
  const handleClick = (el) => {
    setTimeFrame((prev) => {
      return el.target.textContent.toLowerCase();
    });
  };
  return (
    <div className="w-full bg-dark-blue rounded-2xl sm:col-span-2 lg:col-span-1 lg:row-span-2">
      <div className="bg-blue flex gap-4 py-10 px-8 rounded-2xl items-center lg:flex-col lg:items-start">
        <img
          src="./assets/image-jeremy.png"
          className="border-white border-2 rounded-full w-16"
          alt="profile avator"
        />
        <div className="lg:my-8">
          <p className="text-pale-blue text-sm font-light">Report for</p>
          <h1 className="text-white font-light text-2xl lg:text-4xl">
            Jeremy Robson
          </h1>
        </div>
      </div>
      <div className="flex justify-between p-7 lg:flex-col lg:gap-6">
        <p
          className={`text-pale-blue text-[18px] font-extralight cursor-pointer hover:text-white ${
            timeFrame === "daily" && "text-white"
          }`}
          onClick={handleClick}
        >
          Daily
        </p>

        <p
          className={`text-pale-blue text-[18px] font-extralight cursor-pointer hover:text-white ${
            timeFrame === "weekly" && "text-white"
          }`}
          onClick={handleClick}
        >
          Weekly
        </p>

        <p
          className={`text-pale-blue text-[18px] font-extralight cursor-pointer hover:text-white ${
            timeFrame === "monthly" && "text-white"
          }`}
          onClick={handleClick}
        >
          Monthly
        </p>
      </div>
    </div>
  );
};

export default Profile;

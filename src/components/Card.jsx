import React from "react";

const Card = ({ data, timeFrame }) => {
  return (
    <div className="w-full">
      <div className={`${data.color} rounded-2xl `}>
        <div className={`overflow-clip w-full h-10`}>
          <img
            src={`./assets/icon-${data.imageSrc}`}
            className={`relative 
            ${data.title !== "Exercise" && "-top-[10px]"}
             ml-auto mr-4`}
            alt={data.imageSrc}
          />
        </div>
        <div className="bg-dark-blue gap-4 px-6 py-8 rounded-2xl w-[100.5%] -ml-[.25%] relative hover:bg-desaturated-blue">
          <div className="flex justify-between items-center">
            <p className="font-bold text-white text-lg">{data.title}</p>
            <span>
              <svg
                width="21"
                height="5"
                className="text-pale-blue hover:text-white cursor-pointer"
                fill="currentColor"
              >
                <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
              </svg>
            </span>
          </div>
          <div className="flex justify-between items-center sm:flex-col sm:items-start">
            <p className="text-white font-extralight text-3xl sm:text-5xl sm:mt-6">
              {data.timeframes[timeFrame].current}hrs
            </p>
            <p className="text-pale-blue font-extralight text-sm sm:mt-4">
              Last Week - {data.timeframes[timeFrame].previous}hrs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import service_img from "../../../images/servicing/Annotation 2021-11-10 104144.png";

const Servicing = () => {
  return (
    <div className="my-8">
      <p className="text-4xl text-gray-900 font-bold heading lg:pb-8">
        SERVICING <span className="text-red-500">CENTER</span>
      </p>
      <div className="container grid grid-cols-12 mx-auto">
        <div
          className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover dark:bg-coolGray-700 lg:col-span-6 lg:h-auto shadow-xl"
          style={{
            backgroundColor: "lightgray",
            backgroundPosition: "center center",
            backgroundBlendMode: "multiply",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col items-center py-16 text-center">
            <img className="lg:ml-36 shadow-xl" src={service_img} alt="" />
          </div>
        </div>
        <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-coolGray-700">
          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-right text-3xl font-bold heading">
              ADJUST & INSTALL
            </h1>
            <p className="text-right">
              After buying from us you can have full servicing of
              <br /> adjustment and installation
            </p>
            <div className="flex justify-end">
              <button className="inline-flex text-sm text-gray-50 items-center bg-red-500 border-0 py-1 px-6 focus:outline-none hover:bg-blue-900 mt-4 md:mt-0">
                READ MORE
              </button>
            </div>
          </div>
          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-right text-3xl font-bold heading">
              TUNE-UPS & BUILDS
            </h1>
            <p className="text-right">
              We also build your bike for the first time
              <br /> after you purchase them
            </p>
            <div className="flex justify-end">
              <button className="inline-flex text-sm text-gray-50 items-center bg-red-500 border-0 py-1 px-6 focus:outline-none hover:bg-blue-900 mt-4 md:mt-0">
                READ MORE
              </button>
            </div>
          </div>
          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-right text-3xl font-bold heading">
              PERSONAL BIKE KIT
            </h1>
            <p className="text-right">
              We have latest personal bike kit which is used to service your
              bike
              <br /> we will gonna love it
            </p>
            <div className="flex justify-end">
              <button className="inline-flex text-sm text-gray-50 items-center bg-red-500 border-0 py-1 px-6 focus:outline-none hover:bg-blue-900 mt-4 md:mt-0">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicing;

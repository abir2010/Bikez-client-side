import React from "react";
import banner_img from "../../../images/banner/banner.jpg";

const Banner = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 items-center justify-center flex-col">
        <img
          class="lg:mt-4 lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={banner_img}
        />
        <div class="text-center lg:w-2/3 w-full -mt-16 lg:-mt-8">
          <h1 class="sm:text-4xl lg:text-5xl mb-4 font-bold text-gray-900 heading ">
            FIND A <span className="text-red-500">HIGH QUALITY</span> BIKE AND SHOP NOW
          </h1>
          <p class="mb-8 leading-relaxed">
            Why buy from Bikes Online? The bikes in our online bike shop are
            often half the price of comparable bikes in the market, and that is
            due to our direct to consumer business model. We source high-quality
            bikes from the manufacturer, cut out the middlemen, and pass on the
            savings to you - where they belong. Add to that our free, fast
            delivery and local support and you can rest assured knowing you are
            getting the best deal on your new bike.
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 text-lg">
              EXPLORE BIKE
            </button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border border-2 border-red-500 py-2 px-6 focus:outline-none hover:bg-gray-200 text-lg">
              ABOUT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React from "react";
import top from "../../../images/banner/top.png";

const Banner = () => {
  return (
    <div>
      <section class="text-gray-100 bg-blue-900 body-font">
        <div class="container lg:px-16 mt-4 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 w-full">
            <img src={top} alt="" />
          </div>
          <div class="lg:w-2/6 md:w-1/2 rounded-lg py-8 px-4 lg:px-0 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <p className="text-4xl text-left font-bold text-white heading">
              FIND A <br />{" "}
              <span className="text-red-500 text-5xl">HIGH QUALITY</span> BIKE{" "}
              <br /> AND SHOP NOW
            </p>
            <p className="text-md text-left mt-8 text-gray-400">
              Why buy from Bikez Shop? The bikes in our online bike shop are
              often half the price of comparable bikes in the market, and that
              is due to our direct to consumer business model. We source
              high-quality bikes from the manufacturer, cut out the middlemen,
              and pass on the savings to you - where they belong. Add to that
              our free, fast delivery and local support and you can rest assured
              knowing you are getting the best deal on your new bike.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;

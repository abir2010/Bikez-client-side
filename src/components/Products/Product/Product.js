import React from "react";
import { useHistory } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Product = (props) => {
  const history = useHistory();
  const { _id, name, description, price, image } = props.product;
  return (
    <div
      className="p-4 lg:p-8 md:w-1/3 card"
      data-aos="fade-down"
      data-aos-delay="10"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <div className="h-full overflow-hidden">
        <img
          className="lg:h-56 xl:h-64 md:h-36 w-full object-cover object-center"
          src={image}
          alt="blog"
        />
        <div className="p-6">
          <h1 className="title-font text-lg font-bold text-blue-900 mb-3">
            {name}
          </h1>
          <h2 className="tracking-widest text-sm font-bold text-red-500 mb-1">
            $ {price}
          </h2>
          <p className="leading-relaxed mb-3">{description.slice(0, 200)}</p>
          <div className="flex items-center flex-wrap ">
            <button
              onClick={() => history.push(`/placeorder/${_id}`)}
              className="inline-flex text-gray-50 items-center text-sm bg-red-500 border-0 py-1 px-6 focus:outline-none hover:bg-blue-900 mt-4 md:mt-0 lg:ml-4"
              data-aos="zoom-in"
            >
              PURCHASE
            </button>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

import React from "react";
import { useHistory } from "react-router";

const Product = (props) => {
  const history = useHistory();
  const { _id, name, description, price, image } = props.product;
  return (
    <div class="p-4 md:w-1/3 card">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          class="lg:h-56 xl:h-64 md:h-36 w-full object-cover object-center"
          src={image}
          alt="blog"
        />
        <div class="p-6">
          <h1 class="title-font text-lg font-bold text-blue-900 mb-3">
            {name}
          </h1>
          <h2 class="tracking-widest text-sm font-bold text-red-500 mb-1">
            $ {price}
          </h2>
          <p class="leading-relaxed mb-3">{description.slice(0, 200)}</p>
          <div class="flex items-center flex-wrap ">
            <button
              onClick={() => history.push(`/placeorder/${_id}`)}
              class="inline-flex text-gray-50 items-center text-sm bg-red-500 border-0 py-1 px-6 focus:outline-none hover:bg-blue-900 mt-4 md:mt-0 lg:ml-4"
            >
              PURCHASE
            </button>
            <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                class="w-4 h-4 mr-1"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              1.2K
            </span>
            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg
                class="w-4 h-4 mr-1"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
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
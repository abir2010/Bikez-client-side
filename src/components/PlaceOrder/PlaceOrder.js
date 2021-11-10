import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PlaceOrder = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const { user } = useAuth();
  const { id } = useParams();

  const pd = products.find((product) => product._id == id);

  return (
    <div className="lg:flex justify-center gap-20">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <p className="text-3xl font-bold my-5">
          YOUR <span className="text-red-500">CHOICE</span>
        </p>
        <img class="w-full" src={pd?.image} alt="" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{pd?.name}</div>
          <p class="text-gray-700 text-base">{pd?.description}</p>
        </div>
      </div>
      <form class="w-full max-w-lg">
        <p className="text-3xl font-bold my-5">
          ORDER <span className="text-red-500">FORM</span>
        </p>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-name"
            >
              Full Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-900"
              id="grid-name"
              type="text"
              placeholder="Jon Abruzzi"
              value={user?.displayName}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-email"
            >
              Email
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-900"
              id="grid-email"
              type="email"
              placeholder="example@example.com"
              value={user?.email}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-number"
            >
              PHONE NUMBER
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-900"
              id="grid-number"
              type="number"
              placeholder="+96-123-456-789"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Street
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-900"
              id="grid-city"
              type="text"
              placeholder="123 park st."
            />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              City
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-900"
              id="grid-city"
              type="text"
              placeholder="Albuquerque"
            />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              COUNTRY
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-900"
              id="grid-zip"
              type="text"
              placeholder="United States"
            />
          </div>
        </div>
        <button class="inline-flex text-gray-50 items-center bg-red-500 border-0 py-2 mb-12 px-8 focus:outline-none hover:bg-blue-900 mt-4 md:mt-0 lg:ml-4">
          SEND ORDER NOW
        </button>
      </form>
    </div>
  );
};

export default PlaceOrder;

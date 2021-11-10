import React, { useEffect, useState } from "react";
import MyOrders from "../MyOrders/MyOrders";

const MyOrder = (props) => {
  const { _id, userAddress, productName, orderDate, status } = props.order;
  const { handleorderDeleteBtn } = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const pd = products.find((product) => product.name === productName);

  return (
    <div>
      <div className="">
        <div className="container grid grid-cols-12 mx-auto">
          <div className="bg-no-repeat col-span-full lg:col-span-4">
            <img className="h-56" src={pd?.image} alt="" />
          </div>
          <div className="flex flex-col col-span-full lg:row-span-full lg:col-span-8 lg:p-10 h-24">
            <div className="flex justify-start">
              <span
                className={
                  status === "Pending"
                    ? "px-2 py-1 text-xs rounded-full bg-red-200 text-red-600"
                    : "px-2 py-1 text-xs rounded-full bg-green-200 text-green-600"
                }
              >
                {status}
              </span>
            </div>
            <h1 className="text-3xl font-semibold text-left">{productName}</h1>
            <p className="flex-1 pt-2">
              <span className=""></span>
            </p>
            <div className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-400">
              <p className="text-md font-bold text-blue-900">
                Shipment details :{" "}
              </p>
              <p>
                Address :{" "}
                <span className="text-sm font-bold">{userAddress}</span>
              </p>
            </div>
            <div className="flex items-center justify-between pt-2">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 dark:text-coolGray-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="self-center text-sm">
                  Order was recieved by BIKEZ
                </span>
              </div>
              <div className="">
                <button
                  onClick={() => handleorderDeleteBtn(_id)}
                  className="bg-red-600 text-white px-3 py-1"
                >
                  Cancel order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;

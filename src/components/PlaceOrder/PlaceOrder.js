import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Header from "../Shared/Header/Header";

const PlaceOrder = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const history = useHistory();

  const [products, setProducts] = useState([]);

  const initialInfo = {
    userName: user?.displayName,
    userEmail: user?.email,
    userImage: user?.photoURL
      ? user.photoURL
      : "https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/2x/external-user-interface-kiranshastry-lineal-kiranshastry.png",
  };
  const [orderInfo, setOrderInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...initialInfo };
    newInfo[field] = value;
    setOrderInfo(newInfo);
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    const order = {
      ...orderInfo,
      productName: pd.name,
      orderDate: new Date(),
      status: "Pending",
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully added to your shopping list");
          if (alert) {
            history.push("/dashboard/myOrders");
          }
        }
      });
    e.preventDefault();
  };

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const pd = products.find((product) => product._id == id);

  return (
    <div>
      <Header />
      <div className="lg:flex justify-center gap-20">
        <div className="max-w-sm rounded overflow-hidden shadow-lg pb-4">
          <p className="text-3xl font-bold mt-5">
            YOUR <span className="text-red-500">CHOICE</span>
          </p>
          <img className="w-full" src={pd?.image} alt="" />
          <div className="px-6">
            <div className="font-bold text-xl mb-2">{pd?.name}</div>
            <p className="text-gray-700 text-base">{pd?.description}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <p className="text-3xl font-bold my-5">
            ORDER <span className="text-red-500">FORM</span>
          </p>
          <div className="flex flex-wrap -mx-3 mb-6 pt-8">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-name"
              >
                Full Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-900"
                id="grid-name"
                type="text"
                placeholder="Jon Abruzzi"
                value={user?.displayName}
                readOnly
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-900"
                id="grid-email"
                type="email"
                placeholder="example@example.com"
                value={user?.email}
                readOnly
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-number"
              >
                PHONE NUMBER
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-900"
                id="grid-number"
                type="number"
                onBlur={handleOnBlur}
                required
                name="userPhone"
                placeholder="+96-123-456-789"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-address"
              >
                ADDRESS
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-900"
                id="grid-address"
                type="text"
                onBlur={handleOnBlur}
                required
                name="userAddress"
                placeholder="123-park st,Albaquarqe,United States"
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex text-gray-50 items-center bg-red-500 border-0 py-2 mb-12 px-8 focus:outline-none hover:bg-blue-900 mt-4 md:mt-0 lg:ml-4"
          >
            SEND ORDER NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;

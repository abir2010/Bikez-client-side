import React, { useRef } from "react";
import { useHistory } from "react-router";

const AddProduct = () => {
  const history = useHistory();
  const nameRef = useRef();
  const infoRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();

  const handleSubmit = (e) => {
    const product = {
      name: nameRef.current.value,
      description: infoRef.current.value,
      image: imageRef.current.value,
      price: parseInt(priceRef.current.value),
    };
    // console.log(review);
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully added your product");
          if (alert) {
            history.push("/home");
          }
        }
      });
    e.preventDefault();
  };
  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <p className="text-3xl font-bold my-5">
          PRODUCT ADD <span className="text-red-500">FORM</span>
        </p>
        <div className="flex flex-wrap -mx-3 mb-6 pt-8">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-name"
            >
              Product Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-900"
              id="grid-name"
              type="text"
              ref={nameRef}
              placeholder="Phoenix"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-details"
            >
              Product details
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-900"
              id="grid-details"
              type="text"
              ref={infoRef}
              placeholder="product information"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-image"
            >
              Product image-url
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-900"
              id="grid-image"
              type="text"
              ref={imageRef}
              required
              placeholder=" image-url "
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-price"
            >
              product price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-900"
              id="grid-price"
              type="number"
              ref={priceRef}
              required
              placeholder=" $ "
            />
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex text-gray-50 items-center bg-red-500 border-0 py-2 mb-12 px-8 focus:outline-none hover:bg-blue-900 mt-4 md:mt-0 lg:ml-4"
        >
          ADD PRODUCT
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

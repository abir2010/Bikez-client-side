import React, { useRef } from "react";
import { useHistory } from "react-router";

const MakeAdmin = () => {
  const history = useHistory();
  const emailRef = useRef();
  const handleSubmit = (e) => {
    const doc = { email: emailRef.current.value };
    fetch("http://localhost:5000/allusers", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(doc),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Successfully added an Admin");
          if (alert) {
            history.push("/dashboard");
          }
        }
      });
    e.preventDefault();
  };
  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <p className="text-3xl font-bold my-5">
          MAKE <span className="text-red-500">ADMIN</span>
        </p>
        <div className="flex flex-wrap -mx-3 mb-6 pt-8">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Enter Email Address
            </label>
            <input
              className="appearance-none block w-full border-b-2 border-blue-900 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-email"
              type="email"
              ref={emailRef}
              placeholder="example@example.com"
            />
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex text-gray-50 items-center bg-red-500 border-0 py-2 mb-12 px-8 focus:outline-none hover:bg-blue-900 mt-4 md:mt-0 lg:ml-4"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default MakeAdmin;

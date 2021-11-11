import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const history = useHistory();
  const { user } = useAuth();
  const messageRef = useRef();
  const ratingRef = useRef();

  const handleSubmit = (e) => {
    const review = {
      userName: user?.displayName,
      userEmail: user?.email,
      urserImage: user?.photoURL
        ? user.photoURL
        : "https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/2x/external-user-interface-kiranshastry-lineal-kiranshastry.png",
      userMessage: messageRef.current.value,
      userRating: parseInt(ratingRef.current.value),
    };
    // console.log(review);
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully added your review");
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
          REVIEW <span className="text-red-500">FORM</span>
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
              htmlFor="grid-message"
            >
              REVIEW MESSAGE
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-900"
              id="grid-message"
              type="text"
              ref={messageRef}
              required
              // onBlur={handleOnBlur}
              name="userMessage"
              placeholder=" your message here "
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-rating"
            >
              RATING
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-900"
              id="grid-rating"
              type="number"
              ref={ratingRef}
              required
              // onBlur={handleOnBlur}
              name="userRating"
              placeholder=" ? / 5 "
            />
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex text-gray-50 items-center bg-red-500 border-0 py-2 mb-12 px-8 focus:outline-none hover:bg-blue-900 mt-4 md:mt-0 lg:ml-4"
        >
          SEND YOUR REVIEW
        </button>
      </form>
    </div>
  );
};

export default Review;

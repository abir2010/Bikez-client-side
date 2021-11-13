import React, { useState } from "react";
import "./Review.css";

const Review = (props) => {
  const { userName, userEmail, urserImage, userMessage, userRating } =
    props.review;
  return (
    <div
      className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-coolGray-700"
      data-aos="fade-up"
      data-aos-delay="10"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src={urserImage}
              alt=""
              className="object-cover w-12 h-12 rounded-full dark:bg-coolGray-500"
            />
          </div>
          <div>
            <h4 className="font-bold">{userName}</h4>
            <span className="text-xs dark:text-coolGray-400">2 days ago</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 dark:text-yellow-500">
          {[...Array(userRating)].map(() => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453l-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107l-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4l4.536-4.082c.297-.268.406-.686.278-1.065z"
                fill="currentColor"
              />
            </svg>
          ))}
          {[...Array(5 - userRating)].map(() => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M6.516 14.323l-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4l4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454l-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315l-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385l-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603l1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962l4.09-.326z"
                fill="currentColor"
              />
            </svg>
          ))}
          <span className="text-xl font-bold">{userRating} / 5</span>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm dark:text-coolGray-400">
        <p>{userMessage}</p>
      </div>
    </div>
  );
};

export default Review;

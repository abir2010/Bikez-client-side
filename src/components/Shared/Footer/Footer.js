import React from "react";
import "./Footer.css";
import footer_icon from "../../../images/Icon/icons8-bicycle-50.png";

const Footer = () => {
  return (
    <footer className="">
      <div className="container px-5 pb-2 pt-12 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-white">
            <div>
              <img src={footer_icon} alt="" />
              <h2 className="font-bold tracking-widest text-2xl mb-3">
                BIKEZ.
              </h2>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-white">
            <h2 className="font-bold tracking-widest text-md mb-3">PAGES</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="/" className="">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="/" className="">
                  SERVICE
                </a>
              </li>
              <li>
                <a href="/" className="">
                  PRODUCTS
                </a>
              </li>
              <li>
                <a href="/" className="">
                  CONTACT
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-bold tracking-widest text-md mb-3">LINKS</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="/" className="">
                  GALLERY
                </a>
              </li>
              <li>
                <a href="/" className="">
                  RENT A BIKE
                </a>
              </li>
              <li>
                <a href="/" className="">
                  GEARS
                </a>
              </li>
              <li>
                <a href="/" className="">
                  FAQ'S
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-white">
            <h2 className="font-bold tracking-widest text-md mb-3">
              SUBSCRIBES
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label htmlFor="footer-field" className="leading-7 text-sm">
                  Placeholder
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  placeholder="Your e-mail"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-red-500 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-red-500 hover:text-white">
                SEND
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
              Join our news letter
              <br className="lg:block hidden" />
              to get latest news
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="">
        <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            Copyright © 2020 Bikez —
            <a
              href="/"
              rel="noopener noreferrer"
              className="text-gray-500 ml-1"
              target="_blank"
            >
              bike shop & servicing website
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="/" className="text-gray-200">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="/" className="ml-3 text-gray-200">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="/" className="ml-3 text-gray-200">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href="/" className="ml-3 text-gray-200">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

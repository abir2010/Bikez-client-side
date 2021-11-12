import React, { useRef } from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import Header from "../../Shared/Header/Header";
import cycle from "../../../images/banner/Annotation 2021-11-11 111234.png";
import { Link } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const location = useLocation();
  const history = useHistory();
  const { handleGoogleSignIn, newUserSignIn } = useAuth();
  return (
    <div>
      <Header />
      <section className="text-gray-100 bg-blue-900 body-font">
        <div className="container lg:px-5 mt-4 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 w-full">
            <img src={cycle} alt="" />
          </div>
          <div className="lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-100 text-xl font-bold font-medium title-font mb-5">
              Log In
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-100"
              >
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                ref={emailRef}
                required
                className="w-full bg-gray-400 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-100"
              >
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                name="password"
                ref={passRef}
                required
                className="w-full bg-gray-400 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={() =>
                newUserSignIn(
                  emailRef.current.value,
                  passRef.current.value,
                  location,
                  history
                )
              }
              className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 text-lg"
            >
              LOGIN
            </button>
            <div>
              <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mt-2">
                Already registered?{" "}
                <Link className="text-white text-sm" to="/register">
                  Register Here
                </Link>
              </h2>
            </div>
            <div>
              <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mt-2">
                Or SIGN IN using
                <br />
                <div className="flex justify-center">
                  <button onClick={() => handleGoogleSignIn(location, history)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="5em"
                      height="5em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <g strokeWidth="1.5" fill="none">
                        <path
                          d="M15.547 8.303A5.148 5.148 0 0 0 12.11 7C9.287 7 7 9.239 7 12s2.287 5 5.109 5c3.47 0 4.751-2.57 4.891-4.583h-4.159"
                          stroke="currentColor"
                        />
                        <path
                          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10z"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="5em"
                      height="5em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container lg:px-5 py-4 mx-auto flex items-center md:flex-row flex-col">
          <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              WE LAUNCHED OUR MOBILE APP
            </h2>
            <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">
              BIKEZ SHOP APP
            </h1>
          </div>
          <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 512 512"
              >
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
              </svg>
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                <span className="title-font font-medium">Google Play</span>
              </span>
            </button>
            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 305 305"
              >
                <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
              </svg>
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-xs text-gray-600 mb-1">
                  Download on the
                </span>
                <span className="title-font font-medium">App Store</span>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

// {user?.email ? (
//   <>
//     <button onClick={logOut} className="bg-red-500 p-2 rounded-lg">Log out</button>
//     <p className="text-2xl font-bold text-red-400">{user?.displayName}</p>
//     <p className="text-xl font-bold text-red-400">{user?.email}</p>
//   </>
// ) : (
//   <button onClick={()=>handleGoogleSignIn(location,history)} className="bg-red-500 p-2 rounded-lg">Google log in</button>
// )}

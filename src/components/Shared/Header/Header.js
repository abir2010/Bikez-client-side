import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import header_icon from "../../../images/Icon/icons8-bicycle-50.png";
import cart_icon from "../../../images/Icon/Group.png";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <header class="text-gray-900">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          class="flex title-font font-bold items-center text-blue-900 mb-4 md:mb-0"
        >
          <img width="60px" src={header_icon} alt="" />
          <span class="ml-3 text-2xl">BIKEZ</span>
        </Link>
        <ul class="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center">
          <li>
            <Link to="/home" class="mr-5 hover:text-red-500">
              HOMEPAGE
            </Link>
          </li>
          <li>
            <Link to="/bikes" class="mr-5 hover:text-red-500">
              BIKES
            </Link>
          </li>
          <li>
            <Link to="/services" class="mr-5 hover:text-red-500">
              SERVICE
            </Link>
          </li>
          {user?.email && (
            <li>
              <Link to="/dashboard" class="mr-5 hover:text-red-500">
                DASHBOARD
              </Link>
            </li>
          )}
          <li>
            <Link to="/about" class="mr-5 hover:text-red-500">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/contact" class="mr-5 hover:text-red-500">
              CONTACT
            </Link>
          </li>
        </ul>

        <div>
          <img width="30px" src={cart_icon} alt="" />
        </div>
        {!user?.email ? (
          <Link to="/login">
            <button class="inline-flex text-gray-50 items-center bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 mt-4 md:mt-0 lg:ml-4">
              LOGIN
            </button>
          </Link>
        ) : (
          <>
            <p className="text-red-500 lg:ml-4">{user?.displayName}</p>
            <img
              src={
                user?.photoURL
                  ? user.photoURL
                  : "https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/2x/external-user-interface-kiranshastry-lineal-kiranshastry.png"
              }
              className="w-12 h-12 lg:mx-2 rounded-full border-2 border-red-500"
              alt=""
            />
            <button
              onClick={logOut}
              class="inline-flex text-gray-50 items-center bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 mt-4 md:mt-0"
            >
              LOG OUT
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

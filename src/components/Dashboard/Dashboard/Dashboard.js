import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../AdminRoute/AdminRoute";
import AddProduct from "../AdminPages/AddProduct/AddProduct";
import AllOrders from "../AdminPages/AllOrders/AllOrders";
import MakeAdmin from "../AdminPages/MakeAdmin/MakeAdmin";
import ManageProducts from "../AdminPages/ManageProducts/ManageProducts";
import DashBoardHome from "../DashBoardHome/DashBoardHome";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import Review from "../Review/Review";

const Dashboard = () => {
  let [count, setCount] = useState(1);
  const { user, isAdmin, logOut } = useAuth();
  const { url, path } = useRouteMatch();
  return (
    <div>
      <div className="flex justify-between items-center border-b-2 border-blue-900 lg:px-8 lg:py-4">
        <button onClick={() => setCount(count+=3)} className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-5 h-5 fillCurrent"
          >
            <rect width="352" height="32" x="80" y="96"></rect>
            <rect width="352" height="32" x="80" y="240"></rect>
            <rect width="352" height="32" x="80" y="384"></rect>
          </svg>
        </button>
        <div className="flex items-center p-2 space-x-4 justify-self-end">
          <img
            src={
              user?.photoURL
                ? user.photoURL
                : "https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/2x/external-user-interface-kiranshastry-lineal-kiranshastry.png"
            }
            alt=""
            className="w-12 h-12 rounded-lg dark:bg-coolGray-500"
          />
          <div>
            <h2 className="text-lg font-semibold">{user?.displayName}</h2>
            <span className="flex items-center space-x-1">
              <a
                href="/"
                className="text-xs hover:underline"
              >
                View profile
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="lg:flex">
        <div
          className={
            count % 2 == 0
              ? "flex flex-col h-screen p-3 w-72 bg-blue-900 text-gray-100 lg:block block"
              : "flex flex-col h-screen p-3 w-72 bg-blue-900 text-gray-100 lg:block hidden"
          }
        >
          <div className="space-y-3">
            <div className="flex items-center justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="2em"
                height="2em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#455A64"
                  d="M36 4H26c0 1.1-.9 2-2 2s-2-.9-2-2H12C9.8 4 8 5.8 8 8v32c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4z"
                />
                <path
                  fill="#fff"
                  d="M36 41H12c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h24c.6 0 1 .4 1 1v32c0 .6-.4 1-1 1z"
                />
                <g fill="#90A4AE">
                  <path d="M26 4c0 1.1-.9 2-2 2s-2-.9-2-2h-7v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4h-7z" />
                  <path d="M24 0c-2.2 0-4 1.8-4 4s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z" />
                </g>
                <g fill="#CFD8DC">
                  <path d="M21 20h12v2H21z" />
                  <path d="M15 19h4v4h-4z" />
                </g>
                <g fill="#03A9F4">
                  <path d="M21 29h12v2H21z" />
                  <path d="M15 28h4v4h-4z" />
                </g>
              </svg>
              <Link to={`${url}`} className="text-2xl ml-3 font-bold">
                Dashboard
              </Link>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center py-4">
                <button
                  type="submit"
                  className="p-2 focus:outline-none focus:ring"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 dark:text-coolGray-400"
                  >
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="Search..."
                className="w-full py-2 pl-10 text-sm dark:border-transparent rounded-md focus:outline-none dark:bg-coolGray-800 dark:text-coolGray-100 focus:dark:bg-coolGray-900"
              />
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="rounded-md hover:bg-red-500">
                  <Link
                    to="/home"
                    className="flex items-center p-2 space-x-3 rounded-md text-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1.3em"
                      height="1.3em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 48 48"
                    >
                      <path fill="#E8EAF6" d="M42 39H6V23L24 6l18 17z" />
                      <g fill="#C5CAE9">
                        <path d="M39 21l-5-5V9h5z" />
                        <path d="M6 39h36v5H6z" />
                      </g>
                      <path
                        fill="#B71C1C"
                        d="M24 4.3L4 22.9l2 2.2L24 8.4l18 16.7l2-2.2z"
                      />
                      <path fill="#D84315" d="M18 28h12v16H18z" />
                      <path fill="#01579B" d="M21 17h6v6h-6z" />
                      <path
                        fill="#FF8A65"
                        d="M27.5 35.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5z"
                      />
                    </svg>
                    <span>Home</span>
                  </Link>
                </li>
                {!isAdmin ? (
                  <>
                    <li className="rounded-md hover:bg-red-500">
                      <Link
                        to={`${url}/pay`}
                        className="flex items-center p-2 space-x-3 rounded-md text-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          width="1.4em"
                          height="1.4em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#78909C"
                            d="M40 41H8c-2.2 0-4-1.8-4-4V16.1c0-1.3.6-2.5 1.7-3.3L24 0l18.3 12.8c1.1.7 1.7 2 1.7 3.3V37c0 2.2-1.8 4-4 4z"
                          />
                          <path fill="#AED581" d="M14 1h20v31H14z" />
                          <g fill="#558B2F">
                            <path d="M13 0v33h22V0H13zm20 31H15V2h18v29z" />
                            <path d="M34 3c0 1.7-.3 3-2 3s-3-1.3-3-3s1.3-2 3-2s2 .3 2 2z" />
                            <path d="M16 1c1.7 0 3 .3 3 2s-1.3 3-3 3s-2-1.3-2-3s.3-2 2-2z" />
                            <circle cx="24" cy="8" r="2" />
                            <circle cx="24" cy="20" r="6" />
                          </g>
                          <path
                            fill="#CFD8DC"
                            d="M40 41H8c-2.2 0-4-1.8-4-4V17l20 13l20-13v20c0 2.2-1.8 4-4 4z"
                          />
                        </svg>
                        <span>Pay</span>
                      </Link>
                    </li>
                    <li className="rounded-md hover:bg-red-500">
                      <Link
                        to={`${url}/myOrders`}
                        className="flex items-center p-2 space-x-3 rounded-md text-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          width="1.4em"
                          height="1.4em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#2E7D32"
                            d="M25.4 5.6c-.8-.8-2-.8-2.8 0l-12 12c-.8.8-.8 2 0 2.8c.4.4.9.6 1.4.6s1-.2 1.4-.6l12-12c.8-.8.8-2 0-2.8z"
                          />
                          <path
                            fill="#1B5E20"
                            d="M37.4 17.6l-12-12c-.8-.8-2-.8-2.8 0c-.8.8-.8 2 0 2.8l12 12c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8z"
                          />
                          <path
                            fill="#388E3C"
                            d="M37.4 41H10.6c-1 0-1.8-.7-2-1.6L5 21h38l-3.7 18.4c-.2.9-1 1.6-1.9 1.6z"
                          />
                          <path
                            fill="#4CAF50"
                            d="M43 23H5c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h38c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2z"
                          />
                          <path
                            fill="#DCEDC8"
                            d="M30.8 24.8l-7.9 7.9l-3.7-3.8l-2.2 2.2l5.9 5.9L33 26.9z"
                          />
                        </svg>
                        <span>My Orders</span>
                      </Link>
                    </li>
                    <li className="rounded-md hover:bg-red-500">
                      <Link
                        to={`${url}/review`}
                        className="flex items-center p-2 space-x-3 rounded-md text-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          width="1.3em"
                          height="1.3em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#F44336"
                            d="M34 9c-4.2 0-7.9 2.1-10 5.4C21.9 11.1 18.2 9 14 9C7.4 9 2 14.4 2 21c0 11.9 22 24 22 24s22-12 22-24c0-6.6-5.4-12-12-12z"
                          />
                        </svg>
                        <span>Review</span>
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="rounded-md hover:bg-red-500">
                      <Link
                        to={`${url}/allOrders`}
                        className="flex items-center p-2 space-x-3 rounded-md text-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          width="1.3em"
                          height="1.3em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 48 48"
                        >
                          <g fill="#263238">
                            <path d="M11 44H9c-.6 0-1-.4-1-1v-2h4v2c0 .6-.4 1-1 1z" />
                            <path d="M39 44h-2c-.6 0-1-.4-1-1v-2h4v2c0 .6-.4 1-1 1z" />
                          </g>
                          <path
                            fill="#37474F"
                            d="M27 7h-6c-1.7 0-3 1.3-3 3v3h2v-3c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v3h2v-3c0-1.7-1.3-3-3-3z"
                          />
                          <path
                            fill="#78909C"
                            d="M40 43H8c-2.2 0-4-1.8-4-4V15c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4z"
                          />
                        </svg>
                        <span>Manage All Orders</span>
                      </Link>
                    </li>
                    <li className="rounded-md hover:bg-red-500">
                      <Link
                        to={`${url}/addProduct`}
                        className="flex items-center p-2 space-x-3 rounded-md text-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          width="1.3em"
                          height="1.3em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 48 48"
                        >
                          <circle fill="#4CAF50" cx="24" cy="24" r="21" />
                          <g fill="#fff">
                            <path d="M21 14h6v20h-6z" />
                            <path d="M14 21h20v6H14z" />
                          </g>
                        </svg>
                        <span>Add Product</span>
                      </Link>
                    </li>
                    <li className="rounded-md hover:bg-red-500">
                      <Link
                        to={`${url}/makeAdmin`}
                        className="flex items-center p-2 space-x-3 rounded-md text-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          width="1.4em"
                          height="1.4em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 48 48"
                        >
                          <circle fill="#FFA726" cx="12" cy="21" r="5" />
                          <g fill="#455A64">
                            <path d="M2 34.7s2.8-6.3 10-6.3s10 6.3 10 6.3V38H2v-3.3z" />
                            <path d="M46 34.7s-2.8-6.3-10-6.3s-10 6.3-10 6.3V38h20v-3.3z" />
                          </g>
                          <circle fill="#FFB74D" cx="24" cy="17" r="6" />
                          <path
                            fill="#607D8B"
                            d="M36 34.1s-3.3-7.5-12-7.5s-12 7.5-12 7.5V38h24v-3.9z"
                          />
                          <circle fill="#FFA726" cx="36" cy="21" r="5" />
                          <circle fill="#FFA726" cx="12" cy="21" r="5" />
                          <circle fill="#FFA726" cx="36" cy="21" r="5" />
                        </svg>
                        <span>Make Admin</span>
                      </Link>
                    </li>
                    <li className="rounded-md hover:bg-red-500">
                      <Link
                        to={`${url}/manageProducts`}
                        className="flex items-center p-2 space-x-3 rounded-md text-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          width="1.4em"
                          height="1.4em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#3F51B5"
                            d="M42 29H20.8c-.5 0-1-.2-1.4-.6l-3.7-3.7c-.4-.4-.4-1 0-1.4l3.7-3.7c.4-.4.9-.6 1.4-.6H42c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1z"
                          />
                          <path fill="#CFD8DC" d="M9 6h2v36H9z" />
                          <g fill="#90A4AE">
                            <circle cx="10" cy="10" r="3" />
                            <circle cx="10" cy="24" r="3" />
                            <circle cx="10" cy="38" r="3" />
                          </g>
                          <path
                            fill="#448AFF"
                            d="M34 43H20.8c-.5 0-1-.2-1.4-.6l-3.7-3.7c-.4-.4-.4-1 0-1.4l3.7-3.7c.4-.4.9-.6 1.4-.6H34c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1z"
                          />
                          <path
                            fill="#00BCD4"
                            d="M35 15H20.8c-.5 0-1-.2-1.4-.6l-3.7-3.7c-.4-.4-.4-1 0-1.4l3.7-3.7c.4-.4.9-.6 1.4-.6H35c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1z"
                          />
                        </svg>
                        <span>Manage Products</span>
                      </Link>
                    </li>
                  </>
                )}
                <li className="rounded-md hover:bg-red-500">
                  <button
                    onClick={logOut}
                    className="flex items-center p-2 space-x-3 rounded-md text-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1.5em"
                      height="1.5em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 48 48"
                    >
                      <g transform="rotate(180 24 24)">
                        <path
                          fill="#F8BBD0"
                          d="M7 40V8c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v32c0 2.2-1.8 4-4 4H11c-2.2 0-4-1.8-4-4z"
                        />
                        <g fill="#E91E63">
                          <path d="M13.3 24L24 15v18z" />
                          <path d="M19 21h23v6H19z" />
                        </g>
                      </g>
                    </svg>
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={
            count % 2 == 0
              ? "flex flex-col h-full p-3 w-full col-span-3 lg:block hidden"
              : "flex flex-col h-full p-3 w-full col-span-3 lg:block block"
          }
        >
          <Switch>
            <Route exact path={path}>
              <DashBoardHome></DashBoardHome>
            </Route>
            <Route path={`${path}/pay`}>
              <Pay></Pay>
            </Route>
            <Route path={`${path}/myOrders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/review`}>
              <Review></Review>
            </Route>
            <AdminRoute path={`${path}/allOrders`}>
              <AllOrders></AllOrders>
            </AdminRoute>
            <AdminRoute path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/manageProducts`}>
              <ManageProducts></ManageProducts>
            </AdminRoute>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

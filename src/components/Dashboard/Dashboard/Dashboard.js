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
      <div className="flex justify-between items-center border-b-2 border-red-200 lg:px-8 lg:py-4">
        <button onClick={() => setCount(count++)} className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-5 h-5 fillCurrent dark:text-coolGray-100"
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
                className="text-xs hover:underline dark:text-coolGray-400"
              >
                View profile
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div
          className={
            count % 2 == 0
              ? "flex flex-col h-screen p-3 w-72 bg-red-200 lg:block block"
              : "flex flex-col h-screen p-3 w-72 bg-red-200 lg:block hidden"
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
                <li className="rounded-sm">
                  <Link
                    to="/home"
                    className="flex items-center p-2 space-x-3 rounded-md text-lg font-bold"
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
                    <li className="rounded-sm">
                      <Link
                        to={`${url}/pay`}
                        className="flex items-center p-2 space-x-3 rounded-md text-lg font-bold"
                      >
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
                          <g
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M12 1v22" />
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                          </g>
                        </svg>
                        <span>Pay</span>
                      </Link>
                    </li>
                    <li className="rounded-sm">
                      <Link
                        to={`${url}/myOrders`}
                        className="flex items-center p-2 space-x-3 rounded-md text-lg font-bold"
                      >
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
                            d="M16 18a2 2 0 1 1 0 4a2 2 0 0 1 0-4zm0 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-9-1a2 2 0 1 1 0 4a2 2 0 0 1 0-4zm0 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2zM18 6H4.273l2.547 6H15a.994.994 0 0 0 .8-.402l3-4h.001A1 1 0 0 0 18 6zm-3 7H6.866L6.1 14.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-1.75-2.97l.72-1.474L2.338 4H1V3h2l.849 2H18a2 2 0 0 1 1.553 3.26l-2.914 3.886A1.998 1.998 0 0 1 15 13z"
                            fill="currentColor"
                          />
                        </svg>
                        <span>My Orders</span>
                      </Link>
                    </li>
                    <li className="rounded-sm dark:bg-coolGray-800 dark:text-coolGray-50">
                      <Link
                        to={`${url}/review`}
                        className="flex items-center p-2 space-x-3 rounded-md text-lg font-bold"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fillCurrent dark:text-coolGray-400"
                        >
                          <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                        </svg>
                        <span>Review</span>
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="rounded-sm">
                      <Link
                        to={`${url}/allOrders`}
                        className="flex items-center p-2 space-x-3 rounded-md text-lg font-bold"
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
                    <li className="rounded-sm">
                      <Link
                        to={`${url}/addProduct`}
                        className="flex items-center p-2 space-x-3 rounded-md text-lg font-bold"
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
                    <li className="rounded-sm dark:bg-coolGray-800 dark:text-coolGray-50">
                      <Link
                        to={`${url}/makeAdmin`}
                        className="flex items-center p-2 space-x-3 rounded-md text-lg font-bold"
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
                    <li className="rounded-sm dark:bg-coolGray-800 dark:text-coolGray-50">
                      <Link
                        to={`${url}/manageProducts`}
                        className="flex items-center p-2 space-x-3 rounded-md text-lg font-bold"
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
                <li className="rounded-sm">
                  <button
                    onClick={logOut}
                    className="flex items-center p-2 space-x-3 rounded-md text-lg font-bold"
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

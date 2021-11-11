import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import DashBoardHome from "../DashBoardHome/DashBoardHome";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import Review from "../Review/Review";

const Dashboard = () => {
  let [count, setCount] = useState(1);
  const { user, logOut } = useAuth();
  const { url, path } = useRouteMatch();
  return (
    <div>
      <div className="flex justify-between items-center border-b-2 border-red-400 lg:px-8 lg:py-4">
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
              ? "flex flex-col h-screen p-3 w-72 bg-red-400 lg:block block"
              : "flex flex-col h-screen p-3 w-72 bg-red-400 lg:block hidden"
          }
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Link to={`${url}`} className="text-2xl font-bold">
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
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fillCurrent dark:text-coolGray-400"
                    >
                      <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                    </svg>
                    <span>Home</span>
                  </Link>
                </li>
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
                <li className="rounded-sm">
                  <button
                    onClick={logOut}
                    className="flex items-center p-2 space-x-3 rounded-md text-lg font-bold"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fillCurrent dark:text-coolGray-400"
                    >
                      <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                      <rect width="32" height="64" x="256" y="232"></rect>
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
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { useHistory } from "react-router";
import notfound from "../../images/banner/notfound.jpg";

const Notfound = () => {
  const history = useHistory();
  return (
    <div>
      <section className="text-gray-100 bg-blue-900 body-font h-screen">
        <div className="container lg:px-16 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 w-full lg:h-screen">
            <img src={notfound} className="lg:h-screen" alt="" />
          </div>
          <div className="lg:w-2/6 md:w-1/2 rounded-lg py-8 px-4 lg:px-0 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <p className="text-4xl font-bold text-white heading">
              404 <br />
              PAGE NOT FOUND <br />
              <button
                onClick={() => history.push("/home")}
                className="inline-flex text-xl text-gray-50 items-center bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-red-500 mt-4 md:mt-0"
              >
                Go back to Home
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notfound;

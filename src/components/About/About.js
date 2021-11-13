import React from "react";
import about from "../../images/banner/about.png";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  return (
    <div>
      <Header />
      <section
        className="text-gray-100 bg-blue-900 body-font"
        data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div className="container lg:px-5 mt-4 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 w-full">
            <img src={about} alt="" />
          </div>
          <div className="lg:w-2/6 md:w-1/2 rounded-lg py-8 px-4 lg:px-0 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <p className="text-5xl text-left font-bold text-white heading">
              ABOUT US
            </p>
            <p className="text-md text-left mt-16 text-gray-400">
              Bikez is a Chittagong based, online specialty retailer of bicycles
              and the accessories that go with them. You might have noticed that
              our prices are some of the best in America – that’s because we
              sell global brands direct from the manufacturer, cutting out the
              middleman and passing on the savings to you – where they belong.
            </p>
          </div>
        </div>
      </section>
      <section
        className="flex justify-center"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div>
          <section className="container lg:px-36 px-4 text-gray-500 mt-12 body-font">
            But it’s not just the incredible value that has made us so popular.
            Years of experience in the bike industry allows us to offer the
            personalized service that you get from a local store and combine it
            with a dynamic, interactive experience only possible on the web. We
            believe transparency is important - that’s why when you shop at
            Bikes Online we provide all the information you need. We give you
            detailed specifications, unbiased competitor comparisons, customer
            reviews, media reviews as well as in depth product videos. When you
            combine this along with our huge range you are able to make an
            informed decision. If you need more help, our customer service team
            is available via email, phone or live chat to help with any
            questions you might have.
          </section>
          <section className="container lg:px-36 px-4 text-gray-500 mt-12 body-font">
            We know that buying a bike is a big investment so we ensure all
            bikes are pro built and tuned prior to shipment, and offer a Free
            14-Day Bike Returns to back it up. We offer fast and free shipping
            to all orders over $50 to most zip codes across the lower 48 states.
            Our commitment to you does not end after your purchase. As we work
            directly with manufacturers, we can ensure fast warranty support,
            local spares and knowledgeable after sales service. You can rest
            assured as we also have a nationwide servicing network. Let us show
            you why buying your next bike online with us will be the best
            experience you have ever had buying a new bike.
          </section>
        </div>
      </section>
      <section
        className="text-gray-600 mt-24 mb-12 body-font"
        data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
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
      <Footer />
    </div>
  );
};

export default About;

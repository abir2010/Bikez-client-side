import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Product from "../Product/Product";
import Review from "../Review/Review";
import Servicing from "../Servicing/Servicing";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <Header />
      
      {/* top banner section */}
      <Banner></Banner>

      {/* products section */}
      <section class="text-gray-600 body-font">
        <p className="text-4xl text-gray-900 font-bold heading lg:pt-24 pt-12">
          CHOOSE YOUR <span className="text-red-500">BIKE</span>
        </p>
        <div class="container px-5 lg:pb-24 pb-12 lg:pt-12 pt-4 mx-auto">
          <div class="flex flex-wrap -m-4">
            {products
              .map((product) => (
                <Product key={product._id} product={product}></Product>
              ))
              .slice(0, 6)}
          </div>
        </div>
      </section>

      {/* servicing section */}
      <Servicing></Servicing>

      {/* reviews section */}
      <section class="text-gray-600 body-font">
        <p className="text-4xl text-gray-900 font-bold heading lg:pt-24 pt-12">
          WHAT OUR <span className="text-red-500">CUSTOMERS</span> SAYS
        </p>
        <div class="container px-5 lg:pb-24 pb-12 lg:pt-12 pt-4 mx-auto">
          <div class="flex flex-wrap -m-4">
            {reviews.map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

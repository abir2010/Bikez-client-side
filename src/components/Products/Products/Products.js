import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <section class="text-gray-600 body-font">
        <p className="text-4xl text-gray-900 font-bold heading lg:pt-8 pt-12">
          ALL YOUR <span className="text-red-500">BIKES</span> ARE HERE
        </p>
        <div class="container px-5 lg:pb-24 pb-12 lg:pt-12 pt-4 mx-auto">
          <div class="flex flex-wrap -m-4">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

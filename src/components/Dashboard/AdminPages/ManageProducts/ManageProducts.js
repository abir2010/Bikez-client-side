import React, { useEffect, useState } from "react";
import ManageProduct from "../ManageProduct/ManageProduct";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleDelteBtn = (id) => {
    const dialogue = window.confirm(
      "Want to remove this product from your website?"
    );
    if (!dialogue) {
      return;
    } else {
      fetch(`http://localhost:5000/products?id=${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Your Product removed successfully!");
            const filtered = products.filter((order) => order._id != id);
            setProducts(filtered);
          }
        });
    }
  };
  return (
    <div>
      <div>
        <p className="text-3xl font-bold my-5">
          MANAGE <span className="text-red-500">PRODUCTS</span> OF YOUR WEBSITE
        </p>
      </div>
      <div>
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-16">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-sm font-medium text-blue-900 uppercase tracking-wider"
                      >
                        product name
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-sm font-medium text-blue-900 uppercase tracking-wider"
                      >
                        product code
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-sm font-medium text-blue-900 uppercase tracking-wider"
                      >
                        price
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-sm font-medium text-blue-900 uppercase tracking-wider text-center"
                      >
                        manage
                      </th>
                      <th scope="col" class="relative px-6 py-3">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    {products.map((product) => (
                      <ManageProduct
                        key={product._id}
                        product={product}
                        handleDelteBtn={handleDelteBtn}
                      ></ManageProduct>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;

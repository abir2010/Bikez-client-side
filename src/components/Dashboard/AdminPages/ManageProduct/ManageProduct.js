import React from "react";

const ManageProduct = (props) => {
  const { _id, name, description, image, price } = props.product;
  const { handleDelteBtn } = props;
  return (
    <tr>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
          <div class="flex-shrink-0 h-16 w-16">
            <img class="" src={image} alt="" />
          </div>
          <div class="ml-4">
            <div class="text-sm font-medium text-gray-900 text-left">
              {name}
            </div>
            <div class="text-sm text-gray-500">{description.slice(0, 50)}...</div>
          </div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900 text-left">{_id}</div>
        {/* <div class="text-sm text-gray-500 text-left">{userAddress}</div> */}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-left">
        <span class="px-2 py-1 text-xs font-bold rounded-full bg-blue-200 text-blue-700">
          $ {price}
        </span>
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          onClick={() => handleDelteBtn(_id)}
          class="text-white px-2 py-1 bg-red-500 hover:bg-red-600 hover:text-gray-100"
        >
          DELETE
        </button>
      </td>
    </tr>
  );
};

export default ManageProduct;

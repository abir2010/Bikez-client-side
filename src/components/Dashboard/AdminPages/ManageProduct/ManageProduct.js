import React from "react";

const ManageProduct = (props) => {
  const { _id, name, description, image, price } = props.product;
  const { handleDelteBtn } = props;
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-16 w-16">
            <img className="" src={image} alt="" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900 text-left">
              {name}
            </div>
            <div className="text-sm text-gray-500">
              {description.slice(0, 50)}...
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900 text-left">{_id}</div>
        {/* <div className="text-sm text-gray-500 text-left">{userAddress}</div> */}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-left">
        <span className="px-2 py-1 text-xs font-bold rounded-full bg-blue-200 text-blue-700">
          $ {price}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          onClick={() => handleDelteBtn(_id)}
          className="text-white px-2 py-1 bg-red-500 hover:bg-red-600 hover:text-gray-100"
        >
          DELETE
        </button>
      </td>
    </tr>
  );
};

export default ManageProduct;

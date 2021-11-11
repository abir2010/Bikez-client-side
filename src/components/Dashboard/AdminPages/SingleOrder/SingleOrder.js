import React from "react";

const SingleOrder = (props) => {
  const { _id, userName, userEmail, userImage, userAddress, productName, status } = props.order;
  const {handleDelteBtn} = props;
const {handleApproveBtn} = props;
  return (
    <tr>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
          <div class="flex-shrink-0 h-10 w-10">
            <img
              class="h-10 w-10 rounded-full"
              src={userImage}
              alt=""
            />
          </div>
          <div class="ml-4">
            <div class="text-sm font-medium text-gray-900 text-left">
              {userName}
            </div>
            <div class="text-sm text-gray-500">{userEmail}</div>
          </div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900 text-left">{productName}</div>
        <div class="text-sm text-gray-500 text-left">{userAddress}</div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-left">
        <span
          class={
            status === "Pending"
              ? "px-2 py-1 text-xs font-bold rounded-full bg-red-200 text-red-700"
              : "px-2 py-1 text-xs font-bold rounded-full bg-green-200 text-green-600"
          }
        >
          {status}
        </span>
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          onClick={()=>handleApproveBtn(_id)}
          class="text-white mr-2 px-2 py-1 bg-blue-800 hover:bg-blue-900 hover:text-gray-100"
        >
          APPROVE
        </button>
        <button
          onClick={()=>handleDelteBtn(_id)}
          class="text-white px-2 py-1 bg-red-500 hover:bg-red-600 hover:text-gray-100"
        >
          DELETE
        </button>
      </td>
    </tr>
  );
};

export default SingleOrder;

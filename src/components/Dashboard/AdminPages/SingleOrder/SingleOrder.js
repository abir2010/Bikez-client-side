import React from "react";

const SingleOrder = (props) => {
  const {
    _id,
    userName,
    userEmail,
    userImage,
    userAddress,
    productName,
    status,
  } = props.order;
  const { handleDelteBtn } = props;
  const { handleApproveBtn } = props;
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src={userImage} alt="" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900 text-left">
              {userName}
            </div>
            <div className="text-sm text-gray-500">{userEmail}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900 text-left">{productName}</div>
        <div className="text-sm text-gray-500 text-left">{userAddress}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-left">
        <span
          className={
            status === "Pending"
              ? "px-2 py-1 text-xs font-bold rounded-full bg-red-200 text-red-700"
              : "px-2 py-1 text-xs font-bold rounded-full bg-green-200 text-green-600"
          }
        >
          {status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          onClick={() => handleApproveBtn(_id)}
          className="text-white mr-2 px-2 py-1 bg-blue-800 hover:bg-blue-900 hover:text-gray-100"
        >
          APPROVE
        </button>
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

export default SingleOrder;

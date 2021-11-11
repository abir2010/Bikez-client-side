import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleorderDeleteBtn = (id) => {
    const dialogue = window.confirm("Want to cancel your order");
    if (!dialogue) {
      return;
    } else {
      fetch(`http://localhost:5000/orders?id=${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Your Order removed successfully!");
            const filtered = orders.filter((order) => order._id != id);
            setOrders(filtered);
          }
        });
    }
  };
  return (
    <div>
      {orders.map((order) => (
        <MyOrder
          key={order._id}
          order={order}
          handleorderDeleteBtn={handleorderDeleteBtn}
        ></MyOrder>
      ))}
    </div>
  );
};

export default MyOrders;

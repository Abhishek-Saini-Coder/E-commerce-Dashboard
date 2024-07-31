import { useState, useEffect } from "react";

export default function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setOrders([
        { id: 1, customer: "John Doe", total: 100 },
        { id: 2, customer: "Jane Smith", total: 150 },
        { id: 3, customer: "Bob Johnson", total: 200 },
      ]);
    }, 1000);
  }, []);

  return (
    <div>
      <h3>Order List</h3>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.customer} - ${order.total}
          </li>
        ))}
      </ul>
    </div>
  );
}

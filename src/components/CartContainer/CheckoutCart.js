import React, { useState } from "react";
import { createOrder } from "../../data_base/firestore";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

function CheckoutCart({ cart, total }) {
  const [orderId, setOrderId] = useState(null);
  const navigateTo = useNavigate();

  async function handleCheckout(userData) {
    const orderData = {
      buyer: userData,
      items: cart,
      total: total,
      timestamp: new Date(),
    };
    const id = await createOrder(orderData);

    setOrderId(id);
    navigateTo(`/checkout/${id}`);
  }

  return (
    <div>
      {orderId ? (
        <h3>Gracias por tu compra </h3>
      ) : (
        <CheckoutForm onSubmit={handleCheckout} />
      )}
    </div>
  );
}

export default CheckoutCart;

import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = () => {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: "Item",
          amount: {
            currency_code: "USD",
            value: "9.99",
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "sb" }}>
      <PayPalButtons
        style={{ layout: "horizontal" }}
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    </PayPalScriptProvider>
  );
};

export { PayPalButton };

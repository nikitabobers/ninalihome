import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({ products, price }) => {
  const productNames = products.map((product) => product.name).join(", ");

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: productNames,
          amount: {
            currency_code: "EUR",
            value: price,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AXGbuPI_89LUAA9hOnfG9F4uudj1fEwWczKGI7xzspyJgKDWg_MC72DnyNLq_bDPP-8asMpkLLIUd6pR",
        currency: "EUR",
      }}
    >
      <PayPalButtons
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    </PayPalScriptProvider>
  );
};

export { PayPalButton };

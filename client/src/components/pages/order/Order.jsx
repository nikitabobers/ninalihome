import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { countTotalPrice } from "../../../actions/cartActions";
import { Loader } from "../../layout/loader/Loader";
import { OrderItem } from "./orderItem/OrderItem";
import { OrderShippingItem } from "./orderShippingItem/OrderShippingItem";
import "./order.css";

function Order() {
  const cart = useSelector((state) => state.cart);

  const { cartItems, loading, shipping, total } = cart;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countTotalPrice());
  }, [dispatch]);

  const shippingInfo = (shipping) => {
    if (shipping) {
      return Object.keys(shipping).map((key, keyIndex) => {
        return (
          <OrderShippingItem key={keyIndex} label={key} value={shipping[key]} />
        );
      });
    } else {
      return <Loader />;
    }
  };
  useEffect(() => {
    shippingInfo();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : (
        <div className="order__section">
          <div className="order__bag">
            <h2 className="">Bag</h2>
            {cartItems.map((item) => (
              <OrderItem
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.images[0]}
                categories={item.categories}
                color={item.color}
                size={item.size}
                qty={item.qty}
              />
            ))}
          </div>
          <div className="order__shipping">
            <h2 className="">Shipping info</h2>
            <div>{shippingInfo(shipping)}</div>
          </div>
          <div className="order__checkout">
            <h2 className="">Summary</h2>
            <div className="cart__section-total">
              <p>Total:</p>
              <span>{cartItems.length > 0 ? total : 0}$</span>
            </div>
            <Link className="btn btn--black btn--link" to="/order">
              Place Order
            </Link>
            <Link className="btn btn--grey btn--link" to="/cart">
              Back to Cart
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Order;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "./cartItem/cartItem";
import { Loader } from "../../layout/loader/Loader";

const Cart = (props) => {
	const cart = useSelector((state) => state.cart);

	const { cartItems, loading } = cart;

	console.log(cartItems);

	return (
		<div className="container">
			{loading ? (
				<Loader />
			) : (
				<div className="cart__section">
					{cartItems.map((item) => (
						<CartItem
							key={item.id}
							name={item.name}
							price={item.price}
							image={item.images[0]}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Cart;

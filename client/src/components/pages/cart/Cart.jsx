import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "./cartItem/cartItem";
import { removeItemFromCart } from "../../../actions/cartActions";
import { Loader } from "../../layout/loader/Loader";
import "./cart.css";

const Cart = (props) => {
	const cart = useSelector((state) => state.cart);

	const { cartItems, loading } = cart;

	const dispatch = useDispatch();

	const removeItem = () => {
		dispatch(removeItemFromCart());
	};
	console.log(cartItems);

	return (
		<div className="container">
			{loading ? (
				<Loader />
			) : (
				<div className="cart__section">
					<div className="cart__section-list">
						<h2 className="">Bag</h2>
						{cartItems.map((item) => (
							<CartItem
								key={item.id}
								name={item.name}
								categories={item.categories}
								price={item.price}
								image={item.images[0]}
								color={item.color}
								size={item.size}
								qty="1"
							/>
						))}
					</div>
					<div className="cart__section-pay">
						<h2 className="">Summary</h2>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;

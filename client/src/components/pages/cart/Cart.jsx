import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "./cartItem/CartItem";
import { removeItemFromCart } from "../../../actions/cartActions";
import { Loader } from "../../layout/loader/Loader";
import "./cart.css";

const Cart = (props) => {
	const cart = useSelector((state) => state.cart);

	const { cartItems, loading } = cart;

	const dispatch = useDispatch();

	const removeItem = (id) => {
		dispatch(removeItemFromCart(id));
	};

	const calcTotal = () => {
		const prices = cartItems.map((item) => item.price);
		const sum = prices.reduce((acc, val) => acc + val);
		return sum;
	};

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
								id={item.id}
								name={item.name}
								categories={item.categories}
								price={item.price}
								image={item.images[0]}
								color={item.color}
								size={item.size}
								qty={item.qty}
								onClick={() => removeItem(item.id)}
							/>
						))}
					</div>
					<div className="cart__section-pay">
						<h2 className="">Summary</h2>
						<div className="cart__section-promo">Do you have Promo Code?</div>
						<div className="cart__section-total">
							<p>Total:</p>
							<span>{cartItems.length > 0 ? calcTotal() : 0}$</span>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;

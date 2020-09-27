import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "./cartItem/CartItem";
import {
	removeItemFromCart,
	countTotalPrice,
} from "../../../actions/cartActions";
import { Loader } from "../../layout/loader/Loader";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = () => {
	const cart = useSelector((state) => state.cart);

	const { cartItems, total, loading } = cart;

	const dispatch = useDispatch();

	const removeItem = (id) => {
		dispatch(removeItemFromCart(id));
	};

	useEffect(() => {
		if (cartItems.length > 0) {
			dispatch(countTotalPrice());
		}
	}, [dispatch, cartItems.length]);

	const emtyBag = () => {
		if (cartItems.length < 1) {
			return (
				<>
					<h3 className="mt-2">There are no items in your bag.</h3>
					<div className="mt-2">
						<Link className="btn btn--black" to="/shop">
							Go to shopping
						</Link>
					</div>
				</>
			);
		}
	};

	const returnToShop = () => {
		if (cartItems.length > 0) {
			return (
				<>
					<h2 className="">Summary</h2>
					<div className="cart__section-total">
						<p>Total:</p>
						<span>{cartItems.length > 0 ? total : 0}$</span>
					</div>
					<Link className="btn btn--black btn--link" to="/shipping">
						Checkout
					</Link>
				</>
			);
		}
	};

	if (loading) return <Loader />;

	return (
		<div className="container">
			<div className="cart__section">
				<div className="cart__section-list">
					<h2 className="title--border">Bag</h2>
					{emtyBag()}
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
				<div className="cart__section-pay">{returnToShop()}</div>
			</div>
		</div>
	);
};

export default Cart;

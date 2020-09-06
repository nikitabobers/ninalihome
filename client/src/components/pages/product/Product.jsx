import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "../../layout/loader/Loader";
import { detailsProduct } from "../../../actions/productActions";
import { addToCart } from "../../../actions/cartActions";
import { Button } from "../../layout/button/Button";
import "./product.css";
import DropDown from "../../layout/dropDown/DropDown";

const Product = (props) => {
	const id = props.match.params.id;

	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const productDetails = useSelector((state) => state.productDetails);

	const { cartItems } = cart;

	const { product, loading } = productDetails;

	useEffect(() => {
		dispatch(detailsProduct(id));
		// eslint-disable-next-line
	}, []);

	const cartProduct = {
		id: product.id,
		name: product.name,
		categories: product.categories,
		images: product.images,
		price: product.price,
		sizes: product.sizes,
		qty: 1,
	};

	const buyItem = (product) => {
		dispatch(addToCart(product));
		props.history.push("/cart");
	};

	const goToCart = () => {
		props.history.push("/cart");
	};

	//Check if product is in the cart
	let button;
	if (product.available) {
		if (cartItems.length < 1) {
			button = (
				<Button
					buttonStyle="btn--order"
					onClick={() => {
						buyItem(cartProduct);
					}}
				>
					Buy Item
				</Button>
			);
		}
		for (let item of cartItems) {
			if (item.id === cartProduct.id) {
				button = (
					<Button buttonStyle="btn--order" onClick={() => goToCart()}>
						Checkout Cart
					</Button>
				);
				break;
			} else {
				button = (
					<Button
						buttonStyle="btn--order"
						onClick={() => {
							buyItem(cartProduct);
						}}
					>
						Buy Item
					</Button>
				);
			}
		}
	} else {
		button = (
			<Button buttonStyle="btn--order" onClick={() => goToCart()}>
				Place order
			</Button>
		);
	}

	//Check if product is available
	let status;

	if (product.available) {
		status = <p className="success">In Stock</p>;
	} else {
		status = <p className="danger">Out of Stock</p>;
	}

	return loading ? (
		<Loader />
	) : (
		<div className="container">
			<div className="product__section">
				<div className="product__images">
					{product.images &&
						product.images.map((image, index) => (
							<img key={index} src={image} alt={product.name} />
						))}
				</div>
				<div className="product__info">
					<div className="product__info-top">
						{status}
						<p>{product.price}$</p>
					</div>
					<div className="product__name">
						<h1>{product.name}</h1>
					</div>
					<div className="product__colors">
						<p>4 colors</p>
					</div>
					<div className="product__description">
						<p>{product.description}</p>
					</div>
					<div className="product__button">{button}</div>
					{product.materials && (
						<div className="product__sizeMaterial--dropdown">
							<DropDown
								title="Materials and Dimensions"
								list={product.materials}
							/>
						</div>
					)}
					{product.time && (
						<div className="product__delivery">
							<DropDown title="Delivery" list={product.time} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Product;

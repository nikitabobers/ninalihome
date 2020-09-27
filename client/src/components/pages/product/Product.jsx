import React, { useEffect } from "react";
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
		id: product._id,
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

	const goToContact = () => {
		props.history.push("/contact");
	};

	const buttonType = (text, action, path = null) => {
		return (
			<Button
				buttonStyle="btn--order"
				onClick={() => {
					action(path);
				}}
			>
				{text}
			</Button>
		);
	};

	//Check if product is in the cart
	let button;
	if (product.stock) {
		if (cartItems.length < 1) {
			button = buttonType("Buy Item", buyItem, cartProduct);
		}
		for (let item of cartItems) {
			if (item.id === cartProduct.id) {
				button = buttonType("Checkout Cart", goToCart);
				break;
			} else {
				button = buttonType("Buy Item", buyItem, cartProduct);
			}
		}
	} else {
		button = buttonType("Order Item", goToContact);
	}

	//Check if product is available
	let status;

	if (product.stock) {
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

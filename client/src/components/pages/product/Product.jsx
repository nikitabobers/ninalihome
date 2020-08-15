import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "../../layout/loader/Loader";
import { detailsProduct } from "../../../actions/productActions";
import { addToCart } from "../../../actions/cartActions";
import "./product.css";
import DropDown from "../../layout/dropDown/DropDown";

const Product = (props) => {
	const id = props.match.params.id;

	const productDetails = useSelector((state) => state.productDetails);

	const { product, loading } = productDetails;

	const dispatch = useDispatch();

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
		dispatch(addToCart(cartProduct));
		props.history.push("/cart");
	};

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
						{product.available ? (
							<p className="success">In Stock</p>
						) : (
							<p className="danger">Out of Stock</p>
						)}
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
					<div className="product__button">
						<button className="btn btn--order" onClick={() => buyItem(product)}>
							{product.available ? "Buy now" : "Order"}
						</button>
					</div>
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

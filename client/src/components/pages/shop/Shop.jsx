import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../../actions/productActions";
import { checkLoading } from "../../layout/loader/Loader";
import ShopMenu from "./menu/ShopMenu.jsx";
import ShopList from "./list/ShopList.jsx";
import "./shop.css";

const Shop = () => {
	const productList = useSelector((state) => state.productList);

	const { products, loading } = productList;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listProducts());
		// eslint-disable-next-line
	}, []);

	return (
		<div className="container">
			{checkLoading(loading)}
			<div className="shop-section">
				<ShopMenu list={products} />
				<ShopList list={products} />
			</div>
		</div>
	);
};

export default Shop;

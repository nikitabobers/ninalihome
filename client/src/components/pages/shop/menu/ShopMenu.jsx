import React, { useEffect, useState } from "react";
import DropDown from "../../../layout/dropDown/DropDown.jsx";
import { useSelector } from "react-redux";
// import { listProducts } from "../../../../actions/productActions";
import "./shopMenu.css";

const ShopMenu = () => {
	const [categories, setCategories] = useState([]);

	const [color, setColor] = useState([]);

	const productList = useSelector((state) => state.productList);

	const { products } = productList;

	const filterUndefined = (array) =>
		array.filter((element) => element !== undefined);

	const getParameters = (array) => {
		const categoriesData = filterUndefined([
			...new Set(array.map((x) => x.categories)),
		]);

		const colorData = filterUndefined([...new Set(array.map((x) => x.color))]);

		setCategories(categoriesData);

		setColor(colorData);
	};

	useEffect(() => {
		getParameters(products);
	}, [products]);

	return (
		<div className="shop-menu">
			<div className="shop-menu__items">
				<DropDown
					title={<p>Categories</p>}
					list={categories}
					border={true}
					hover={true}
				/>
				<DropDown
					title={<p>Colors</p>}
					list={color}
					border={true}
					hover={true}
				/>
			</div>
		</div>
	);
};

export default ShopMenu;

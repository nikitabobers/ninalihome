import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../../actions/productActions";
import { HomeSectionOne } from "./layoutHome/section-1/HomeSection1";
import { HomeSectionTwo } from "./layoutHome/section-2/HomeSection2";
import { HomeSectionThree } from "./layoutHome/section-3/HomeSection3";
import { HomeSectionFour } from "./layoutHome/section-4/HomeSection4";
import { Loader } from "../../layout/loader/Loader";
import "./home.css";

const Home = () => {
	const productList = useSelector((state) => state.productList);

	const { products, loading } = productList;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listProducts());
		// eslint-disable-next-line
	}, []);

	if (loading) return <Loader />;

	return (
		<Fragment>
			<HomeSectionOne list={products.slice(5, 6)} />
			<HomeSectionTwo list={products.slice(0, 3)} />
			<HomeSectionThree list={products.slice(3, 5)} />
			<HomeSectionFour list={products.slice(5, 8)} />
		</Fragment>
	);
};

export default Home;

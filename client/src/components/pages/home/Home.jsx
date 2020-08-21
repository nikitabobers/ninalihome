import React, { useEffect, Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../../actions/productActions";
import SectionOne from "./layoutHome/section-1/HomeSection1";
import SectionTwo from "./layoutHome/section-2/HomeSection2";
import SectionThree from "./layoutHome/section-3/HomeSection3";
import SectionFour from "./layoutHome/section-4/HomeSection4";
import "./home.css";

const Home = () => {
	const productList = useSelector((state) => state.productList);

	const [sectionList, setlist] = useState({});

	const { products, loading } = productList;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listProducts());
		// eslint-disable-next-line
	}, []);

	return (
		<Fragment>
			<SectionOne />
			<SectionTwo list={products.slice(0, 3)} />
			<SectionThree list={products.slice(3, 5)} />
			<SectionFour list={products.slice(3, 7)} />
			{/* <SectionFive /> */}
		</Fragment>
	);
};

export default Home;

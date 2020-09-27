import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../../layout/button/Button";
import { listProducts } from "../../../../actions/productActions";
import { Loader } from "../../../layout/loader/Loader";
import { PanelListItem } from "./panelListItem/PaneListItem";
import { logOut } from "../../../../actions/adminActions";
import "./adminPanel.css";

const AdminPanel = () => {
	const productList = useSelector((state) => state.productList);
	const { products, loading } = productList;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listProducts());
		// eslint-disable-next-line
	}, []);

	if (loading) return <Loader />;

	return (
		<div className="container">
			<div className="admin__section">
				<div className="admin__section-list">
					<div className="admin__section-top-panel title--border">
						<h3>Product List</h3>
						<Link to={"/admin/panel/item/new"}>
							<span>Add new product</span>
							<i className="far fa-plus-square"></i>
						</Link>
					</div>
					{products.map((item) => (
						<PanelListItem
							key={item._id}
							id={item._id}
							name={item.name}
							categories={item.categories}
							image={item.images[0]}
						/>
					))}
				</div>
				<div className="logOut">
					<Button onClick={logOut()} buttonStyle="btn--light">
						Log Out
					</Button>
				</div>
			</div>
		</div>
	);
};

export default AdminPanel;

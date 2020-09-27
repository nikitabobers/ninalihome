import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../layout/button/Button";
import { deleteProduct } from "../../../../../actions/productActions";
import "./paneListItem.css";

const PanelListItem = ({ id, name, categories, image }) => {
	return (
		<div className="panel--item">
			<img className="product__item-image" src={image} alt={name} />
			<div className="product__item-info">
				<div>
					<p className="product__item-name">{name}</p>
					<p className="product__item-categories">{categories}</p>
				</div>
				<div>
					<Link to={`/admin/panel/item/edit/${id}`}>
						<i className="far fa-edit"></i>
					</Link>
					<Button onClick={deleteProduct(id)}>
						<i className="far fa-trash-alt"></i>
					</Button>
				</div>
			</div>
		</div>
	);
};

export { PanelListItem };

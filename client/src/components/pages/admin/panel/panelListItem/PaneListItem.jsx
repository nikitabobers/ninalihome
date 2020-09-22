import React from "react";
import { Link } from "react-router-dom";
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
                    <Link to={`/admin/panel/item/${id}`}>
                        <i className="far fa-edit"></i>
                    </Link>
                    <i className="far fa-trash-alt"></i>
                </div>
            </div>
        </div>
    );
};

export { PanelListItem };

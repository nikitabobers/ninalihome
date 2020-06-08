import React from "react";
import { Link } from "react-router-dom";
import "./shopListItem.css";

const ShopListItem = ({ id, name, price, images }) => {
  return (
    <Link to={`product/${id}`}>
      <div className="list-item">
        <div className="image__container">
          <img className="image--front" src={images} alt="product" />
        </div>
        <div className="item-info">
          <div className="info">
            <p className="info-name">{name}</p>
            <p className="info-color">4 Colors</p>
            <p className="info-status">In stock</p>
          </div>
          <div className="price">{price}</div>
        </div>
      </div>
    </Link>
  );
};

export default ShopListItem;

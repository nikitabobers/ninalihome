import React from "react";
import "./shopListItem.css";
import { Link } from "react-router-dom";

const ShopListItem = () => {
  return (
    <Link to="/">
      <div className="list-item">
        <div className="list-item__image">Image</div>
        <div className="item-info">
          <div className="info">
            <p className="info-name">Bag</p>
            <p className="info-color">4 Colors</p>
            <p className="info-status">In stock</p>
          </div>
          <div className="price">12$</div>
        </div>
      </div>
    </Link>
  );
};

export default ShopListItem;

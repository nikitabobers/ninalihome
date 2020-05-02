import React from "react";
import ShopMenu from "./menu/ShopMenu.jsx";
import ShopList from "./list/ShopList.jsx";
import "./shop.css";

const Shop = () => {
  return (
    <div className="container">
      <div>Top</div>
      <div className="shop-section">
        <ShopMenu />
        <ShopList />
      </div>
    </div>
  );
};

export default Shop;

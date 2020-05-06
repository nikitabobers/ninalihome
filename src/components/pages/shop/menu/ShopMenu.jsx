import React from "react";
import DropDown from "../../../layout/dropDown/DropDown.jsx";
import "./shopMenu.css";

const ShopMenu = () => {
  const data = {
    categories: [
      {
        id: 0,
        title: "Bag",
        selected: false,
        key: "categories",
      },
      {
        id: 1,
        title: "Clothing",
        selected: false,
        key: "categories",
      },
      {
        id: 3,
        title: "Accessories",
        selected: false,
        key: "categories",
      },
    ],
  };

  return (
    <div className="shop-menu">
      <DropDown title="Categories" list={data.categories} />
    </div>
  );
};

export default ShopMenu;

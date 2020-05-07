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
    colors: [
      {
        id: 0,
        title: "Black",
        selected: false,
        key: "colors",
      },
      {
        id: 1,
        title: "White",
        selected: false,
        key: "colors",
      },
      {
        id: 2,
        title: "Purple",
        selected: false,
        key: "colors",
      },
    ],
  };

  return (
    <div className="shop-menu">
      <div className="shop-menu__items">
        <DropDown title="Categories" list={data.categories} />
        <DropDown title="Colors" list={data.colors} />
      </div>
    </div>
  );
};

export default ShopMenu;

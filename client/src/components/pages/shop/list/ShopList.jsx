import React from "react";
import "./shopList.css";
import ShopListItem from "./shopListItem/ShopListItem";

const ShopList = () => {
  const data = [
    { id: 1, name: "" },
    { id: 2, name: "" },
    { id: 3, name: "" },
    { id: 4, name: "" },
    { id: 5, name: "" },
    { id: 6, name: "" },
    { id: 7, name: "" },
    { id: 8, name: "" },
    { id: 9, name: "" },
  ];
  return (
    <div className="shop-list">
      {data.map((item) => (
        <ShopListItem key={item.id} id={item.id} width={item.itemWidth} />
      ))}
    </div>
  );
};

export default ShopList;

import React from "react";
import ShopListItem from "./shopListItem/ShopListItem";
import "./shopList.css";

const ShopList = ({ list }) => {
    return (
        <div className="shop-list">
            {list.map((item) => (
                <ShopListItem
                    key={item._id}
                    id={item._id}
                    width={item.itemWidth}
                    name={item.name}
                    images={item.images[0]}
                    price={item.price}
                />
            ))}
        </div>
    );
};

export default ShopList;

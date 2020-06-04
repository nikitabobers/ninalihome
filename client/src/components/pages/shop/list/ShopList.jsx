import React, { useState, useEffect } from "react";
import axios from "axios";
import ShopListItem from "./shopListItem/ShopListItem";
import "./shopList.css";

const ShopList = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");

      setProduct(data);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div className="shop-list">
      {products.map((item) => (
        <ShopListItem
          key={item.id}
          id={item.id}
          width={item.itemWidth}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default ShopList;

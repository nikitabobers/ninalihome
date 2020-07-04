import React, { useEffect } from "react";
import ShopListItem from "./shopListItem/ShopListItem";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../../../actions/productActions";
import { Loader } from "../../../layout/loader/Loader";
import "./shopList.css";

const ShopList = () => {
  const productList = useSelector((state) => state.productList);

  const { products, loading } = productList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="shop-list">
      {products.map((item) => (
        <ShopListItem
          key={item.id}
          id={item.id}
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

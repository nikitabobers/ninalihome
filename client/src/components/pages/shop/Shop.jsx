import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    listProducts,
    filterProductsCategories,
} from "../../../actions/productActions";
import { Loader } from "../../layout/loader/Loader";
import ShopMenu from "./menu/ShopMenu.jsx";
import ShopList from "./list/ShopList.jsx";
import "./shop.css";

const Shop = () => {
    const productList = useSelector((state) => state.productList);

    const { products, filterProducts, loading } = productList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        // eslint-disable-next-line
    }, []);

    const handleSelectItem = (e) => {
        dispatch(filterProductsCategories(e.target.value, products));
    };

    const checkList = () => {
        if (filterProducts !== undefined && filterProducts.length > 0) {
            return filterProducts;
        }
        return products;
    };

    if (loading) return <Loader />;

    return (
        <div className="container">
            <div className="shop-section">
                <ShopMenu list={products} filterHandler={handleSelectItem} />
                <ShopList list={checkList()} />
            </div>
        </div>
    );
};

export default Shop;

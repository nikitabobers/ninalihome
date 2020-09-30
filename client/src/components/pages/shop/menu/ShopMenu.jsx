import React, { useEffect, useState } from "react";
import { Select } from "../../../layout/select/Select";
import "./shopMenu.css";

const filterUndefined = (array) =>
    array.filter((element) => element !== undefined);

const ShopMenu = ({ list, filterHandler }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (list) {
            const getParameters = (array) => {
                const categoriesData = filterUndefined([
                    ...new Set(array.map((x) => x.categories)),
                ]);
                setCategories(categoriesData);
            };
            getParameters(list);
        }
    }, [list]);

    // const categories = ["Bags", "Accessories", "Clothing"];

    return (
        <div className="shop-menu">
            <div className="shop-menu__items">
                <Select
                    onChange={(e) => filterHandler(e)}
                    list={categories}
                    selectStyle="select--border"
                    show={true}
                />
            </div>
        </div>
    );
};

export default ShopMenu;

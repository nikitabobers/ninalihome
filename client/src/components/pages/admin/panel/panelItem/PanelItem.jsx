import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../../../../../actions/productActions";
import { Loader } from "../../../../layout/loader/Loader";
import { updateProduct } from "../../../../../actions/productActions";
import "./panelItem.css";

const PanelItem = (props) => {
    const id = props.match.params.id;

    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);

    const { product, loading } = productDetails;

    const [newProduct, setNewProduct] = useState({});

    useEffect(() => {
        dispatch(detailsProduct(id));
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        setNewProduct(() => ({ ...product }));
    }, [product]);

    const setStringValue = (name, value) => {
        setNewProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const setArrayValue = (name, value) => {
        const newArr = value.split(",");
        setNewProduct((prev) => ({
            ...prev,
            [name]: newArr,
        }));
    };

    const isArr = (arr) => {
        return Array.isArray(arr);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        for (let key in product) {
            if (key === name) {
                if (isArr(product[key])) {
                    setArrayValue(name, value);
                } else {
                    setStringValue(name, value);
                }
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct(newProduct));
    };

    return (
        <div className="container">
            <div className="admin__section">
                <div className="admin__section-product">
                    <h3 className="title--border">Product Details</h3>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-grid">
                            {Object.keys(product).map((key) => {
                                return (
                                    <label className="label">
                                        {key}
                                        <input
                                            onChange={(e) => handleChange(e)}
                                            type="text"
                                            name={key}
                                            value={newProduct[key]}
                                            editable="true"
                                        />
                                    </label>
                                );
                            })}
                        </div>
                        <input
                            type="submit"
                            name="submit"
                            value="Save"
                            className="btn btn--black"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PanelItem;

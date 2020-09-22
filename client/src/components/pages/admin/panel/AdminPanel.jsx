import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../../../actions/productActions";
import { Loader } from "../../../layout/loader/Loader";
import { PanelListItem } from "./panelListItem/PaneListItem";
import "./adminPanel.css";

const AdminPanel = () => {
    const productList = useSelector((state) => state.productList);
    const { products, loading } = productList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        // eslint-disable-next-line
    }, []);

    if (loading) return <Loader />;

    return (
        <div className="container">
            <div className="admin__section">
                <div className="admin__section-list">
                    <h3 className="title--border">Product List</h3>
                    {products.map((item) => (
                        <PanelListItem
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            categories={item.categories}
                            image={item.images[0]}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;

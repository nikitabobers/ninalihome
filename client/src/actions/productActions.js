import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FILTER,
    PRODUCT_UPDATE,
} from "../constants/productConstants";
import axios from "axios";

const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const { data } = await axios.get("/api/products");
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

const filterProductsCategories = (category, products) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_LIST_FILTER,
            payload: products.filter(
                (product) => product.categories === category
            ),
        });
    } catch (error) {
        console.log(error);
    }
};

const detailsProduct = (productId) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
        const { data } = await axios.get(`/api/products/${productId}`);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

const updateProduct = (newProduct) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const { data } = await axios.put(
            `/api/products/${newProduct._id}`,
            newProduct,
            config
        );
        dispatch({ type: PRODUCT_UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};
export {
    listProducts,
    filterProductsCategories,
    detailsProduct,
    updateProduct,
};

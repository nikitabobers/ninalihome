import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "../../layout/loader/Loader";
import { detailsProduct } from "../../../actions/productActions";

const Product = (props) => {
  const id = props.match.params.id;

  const productList = useSelector((state) => state.productDetails);

  const { product, loading } = productList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(id));
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="container">
      <div className="product__section">
        <div className="product__images"></div>
        <div className="product__info">
          <div className="product--name">{product.name}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;

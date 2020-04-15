import React from "react";
import "./sliderItem.css";
import ButtonShop from "../../button/ButtonShop";

const SliderItem = ({ id }) => {
    return (
        <div className="slider__item">
            <div>{id}</div>
            <ButtonShop path="/shop" />
        </div>
    );
};

export default SliderItem;

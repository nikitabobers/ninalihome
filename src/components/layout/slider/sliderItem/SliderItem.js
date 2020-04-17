import React from "react";
import "./sliderItem.css";
import ButtonShop from "../../button/ButtonShop";

const SliderItem = ({ id, width }) => {
    const itemWidth = {
        width: width + "px",
    };
    return (
        <div className="slider__item" style={itemWidth}>
            <div>{id}</div>
            <ButtonShop path="/shop" />
        </div>
    );
};

export default SliderItem;

import React, { Fragment } from "react";
import SliderItem from "./sliderItem/SliderItem";
import "./slider.css";

const Slider = () => {
    return (
        <div className="slider-container">
            <button className="btn btn__slider-left">
                <i className="fas fa-chevron-left" />
            </button>
            <div className="slider">
                <SliderItem />
                <SliderItem />
                <SliderItem />
                <SliderItem />
            </div>
            <button className="btn btn__slider-right">
                <i className="fas fa-chevron-right" />
            </button>
            <div className="slider__bar"></div>
        </div>
    );
};

export default Slider;

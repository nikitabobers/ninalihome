import React, { useState, useEffect } from "react";
import SliderItem from "./sliderItem/SliderItem";
import "./slider.css";

const Slider = () => {
    const margin = 30;
    const data = [
        { id: 1, name: "" },
        { id: 2, name: "" },
        { id: 3, name: "" },
        { id: 4, name: "" },
        { id: 5, name: "" },
        { id: 6, name: "" },
        { id: 7, name: "" },
        { id: 8, name: "" },
    ];
    const initialState = {
        items: 0,
        totalItems: 0,
        margin: "",
    };
    const [slider, setSlider] = useState(initialState);

    // const responsive = [
    //     { breakPoint: { width: 0, item: 1 } }, //if width greater than 0 (1 item will show)
    //     { breakPoint: { width: 600, item: 2 } }, //if width greater than 600 (2  item will show)
    //     { breakPoint: { width: 1000, item: 4 } }, //if width greater than 1000 (4 item will show)
    // ];

    // function load() {
    //     for (let i = 0; i < responsive.length; i++) {
    //         if (window.innerWidth > responsive[i].breakPoint.width) {
    //             setSlider({ ...slider, items: responsive[i].breakPoint.item });
    //         }
    //     }
    //     console.log(slider);
    // }

    const right = (e) => {
        e.preventDefault();
        setSlider({ ...slider, margin: `${margin}` });
        console.log(slider);
    };

    useEffect(() => {}, []);

    const moveDiv = () => {
        const aaa = {
            transform: `translateX(${slider.margin}px)`,
        };
        return aaa;
    };

    return (
        <div className="slider-container">
            <button className="btn slider__btn-left">
                <i className="fas fa-chevron-left" />
            </button>
            <div className="slider" style={moveDiv()}>
                {data.map((item) => (
                    <SliderItem key={item.id} id={item.id} />
                ))}
            </div>
            <button className="btn slider__btn-right" onClick={() => right()}>
                <i className="fas fa-chevron-right" />
            </button>
            <div className="slider__bar"></div>
        </div>
    );
};

export default Slider;

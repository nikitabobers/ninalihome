import React from "react";
import "./panelTop.css";

const PanelTop = () => {
    return (
        <div className="panel">
            <div className="panel__item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Shipping to Denmark</span>
            </div>
            <div className="panel__item-flex">
                <p>EN</p>
            </div>
        </div>
    );
};

export default PanelTop;

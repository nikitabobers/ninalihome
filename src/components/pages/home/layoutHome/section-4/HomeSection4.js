import React from "react";
import ButtonShop from "../../../../layout/button/ButtonShop";
import "./homeSection4.css";

const HomeSection4 = () => {
    return (
        <div className="section__four">
            <div className="section__four--grid container">
                <div className="section__four-item">
                    <div className="section__four--text">
                        <ButtonShop path="/shop" />
                    </div>
                </div>
                <div className="section__four-item">
                    <div className="section__four--text">
                        <ButtonShop path="/shop" />
                    </div>
                </div>
                <div className="section__four-item">
                    <div className="section__four--text">
                        <ButtonShop path="/shop" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSection4;

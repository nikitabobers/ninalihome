import React from "react";
import "./homeSection1.css";
import ButtonShop from "../../../../layout/button/ButtonShop";

const HomeSection1 = () => {
    return (
        <div className="section__one">
            <div className="ma">
                <div className="img">
                    <img src={require("./bag.jpg")} alt="bag" />
                </div>
                <div className="info-area">
                    <p>Summer bag</p>
                    <ButtonShop address="/shop" />
                </div>
            </div>
        </div>
    );
};

export default HomeSection1;

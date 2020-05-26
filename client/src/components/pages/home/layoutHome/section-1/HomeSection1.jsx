import React from "react";
import "./homeSection1.css";
import ButtonShop from "../../../../layout/button/ButtonShop";

const HomeSection1 = () => {
    return (
        <div className="section section__one">
            <div className="section--flex container">
                <div className="section__one--img">
                    <img src={require("./bag.jpg")} alt="bag" />
                </div>
                <div className="section__one--text">
                    <h2 className="section__title">Summer bag</h2>
                    <p>Stylish everyday bag for summer</p>
                    <ButtonShop path="/shop" />
                </div>
            </div>
        </div>
    );
};

export default HomeSection1;

import React, { Fragment } from "react";
import SectionOne from "./layoutHome/section-1/HomeSection1";
import SectionTwo from "./layoutHome/section-2/HomeSection2";
import SectionThree from "./layoutHome/section-3/HomeSection3";
import SectionFour from "./layoutHome/section-4/HomeSection4";
import SectionFive from "./layoutHome/section-5/HomeSection5";
import "./home.css";

const Home = () => {
    return (
        <Fragment>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
        </Fragment>
    );
};

export default Home;

import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import SliderItem from "./sliderItem/SliderItem";
import "./slider.css";

const Slider = () => {
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
  const sliderWidth = useRef();

  const initialState = {
    items: 0,
    totalItems: data,
    itemWidth: 0,
    margin: 0,
  };

  const [slider, setSlider] = useState(initialState);

  const [hasRendered, setHasRendered] = useState(false);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const responsive = [
    { breakPoint: { width: 0, item: 1 } }, //if width greater than 0 (1 item will show)
    { breakPoint: { width: 700, item: 2 } }, //if width greater than 600 (2  item will show)
    { breakPoint: { width: 1200, item: 4 } }, //if width greater than 1000 (4 item will show)
  ];

  // Calculate each item width
  const resizeWidth = () => {
    const width = sliderWidth.current.offsetWidth;
    const calc = width / slider.items - 20;
    setSlider({ ...slider, itemWidth: calc });
  };

  // Calculate total amount of items to display, depended on screen width
  const itemsDisplay = () => {
    for (let i = 0; i < responsive.length; i++) {
      if (dimensions.width > responsive[i].breakPoint.width) {
        setSlider((prevState) => ({
          ...prevState,
          items: responsive[i].breakPoint.item,
        }));
      }
    }
  };

  // Change width on load
  useLayoutEffect(() => {
    setHasRendered(true);
    resizeWidth();
    itemsDisplay();
    // eslint-disable-next-line
  }, [hasRendered]);

  function debounce(fn, ms) {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }

  // Change width on screen width change, after load
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      resizeWidth();
      itemsDisplay();
    }, 60);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  const itemRef = data.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  let index = 4;

  const clickBtn = (increase) => {
    index = index + increase;
    // index = Math.min(Math.max(index, 0), itemRef.length - 1);
    if (index <= 0) {
      console.log("0");
      return;
    } else {
      itemRef[index].current.scrollIntoView({
        behavior: "smooth",
      });
    }
    console.log(index);
  };

  return (
    <div className="slider-container">
      <button className="btn slider__btn-left" onClick={() => clickBtn(-1)}>
        <i className="fas fa-chevron-left" />
      </button>
      <ul className="slider" ref={sliderWidth}>
        {data.map((item) => (
          <SliderItem
            key={item.id}
            id={item.id}
            ref={itemRef[item.id]}
            width={slider.itemWidth}
          />
        ))}
      </ul>
      <button className="btn slider__btn-right" onClick={() => clickBtn(+1)}>
        <i className="fas fa-chevron-right" />
      </button>
      <div className="slider__bar"></div>
    </div>
  );
};

export default Slider;

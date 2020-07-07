// import React, { useRef } from "react";
// import "./sliderItem.css";
// import ButtonShop from "../../button/ButtonShop";

// const SliderItem = ({ id, width }) => {
//   const itemWidth = {
//     width: width + "px",
//   };

//   return (
//     <li className="slider__item" style={itemWidth}>
//       <div>{id}</div>
//       <ButtonShop path="/shop" />
//     </li>
//   );
// };

// export default SliderItem;

import React, { forwardRef } from "react";
import "./sliderItem.css";
import ButtonShop from "../../button/ButtonShop";

const SliderItem = forwardRef(({ id, width }, ref) => {
	const itemWidth = {
		width: width + "px",
	};

	return (
		<li className="slider__item" ref={ref} style={itemWidth}>
			<div>{id}</div>
			<ButtonShop path="/shop" />
		</li>
	);
});

export default SliderItem;

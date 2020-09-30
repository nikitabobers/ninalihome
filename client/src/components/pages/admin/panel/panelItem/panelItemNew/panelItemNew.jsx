import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../../../actions/productActions";

const PanelItemNew = (props) => {
	const dispatch = useDispatch();

	const [newProduct, setNewProduct] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addProduct(newProduct));
		props.history.push("/admin/panel");
	};

	const setStringValue = (name, value) => {
		setNewProduct((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	const setArrayValue = (name, value) => {
		const newArr = value.split(",");
		setNewProduct((prev) => ({
			...prev,
			[name]: newArr,
		}));
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		if (
			name === "color" ||
			name === "images" ||
			name === "materials" ||
			name === "dimensions" ||
			name === "sizes" ||
			name === "time"
		) {
			setArrayValue(name, value);
		} else {
			setStringValue(name, value);
		}
	};

	return (
		<div className="container">
			<div className="admin__section">
				<div className="admin__section-product">
					<h3 className="title--border">Product Details</h3>
					<form className="form" onSubmit={handleSubmit}>
						<div className="form-grid">
							<label className="label">
								Color
								<input
									type="text"
									name="color"
									is="array"
									onChange={(e) => handleChange(e)}
								/>
							</label>
							<label className="label">
								Images
								<input
									type="text"
									name="images"
									onChange={(e) => handleChange(e)}
								/>
							</label>
							<label className="label">
								Price
								<input
									type="text"
									name="price"
									onChange={(e) => handleChange(e)}
								/>
							</label>
							<label className="label">
								Materials
								<input
									type="text"
									name="materials"
									onChange={(e) => handleChange(e)}
								/>
							</label>
							<label className="label">
								Dimensions
								<input
									type="text"
									name="dimensions"
									onChange={(e) => handleChange(e)}
								/>
							</label>
							<label className="label">
								Sizes
								<input
									type="text"
									name="sizes"
									onChange={(e) => handleChange(e)}
								/>
							</label>
							<label className="label">
								Stock
								<input
									type="text"
									name="stock"
									onChange={(e) => handleChange(e)}
								/>
							</label>
							<label className="label">
								Time
								<input
									type="text"
									name="time"
									onChange={(e) => handleChange(e)}
								/>
							</label>
							<label className="label">
								Name
								<input
									type="text"
									name="name"
									onChange={(e) => handleChange(e)}
								/>
							</label>
							<label className="label">
								Categories
								<input
									type="text"
									name="categories"
									onChange={(e) => handleChange(e)}
								/>
							</label>
							<label className="label">
								Description
								<input
									type="text"
									name="description"
									onChange={(e) => handleChange(e)}
								/>
							</label>
						</div>
						<input
							type="submit"
							name="submit"
							value="Create"
							className="btn btn--black"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export { PanelItemNew };

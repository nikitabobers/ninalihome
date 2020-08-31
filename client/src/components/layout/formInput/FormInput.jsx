import React from "react";
import "./formInput.css";

function FormInput({ label, type, errorMessage, style, onChangeFunction }) {
    return (
        <label className="order--label">
            {label}
            <input
                type={type}
                onChange={(e) => onChangeFunction(e.target.value)}
            />
            <div className="error--message">{errorMessage}</div>
        </label>
    );
}

export { FormInput };

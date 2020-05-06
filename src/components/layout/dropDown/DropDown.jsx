import React, { useState, useRef, useEffect } from "react";
import FontAwesome from "react-fontawesome";
import "./dropDown.css";

const DropDown = ({ title, list }) => {
  let initialState = {
    listOpen: false,
    headerTitle: title,
  };

  const [state, setState] = useState(initialState);

  const toggleList = () => {
    setState((prevState) => ({
      listOpen: !prevState.listOpen,
      headerTitle: title,
    }));
  };

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setState({
        listOpen: false,
        headerTitle: title,
      });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const { headerTitle, listOpen } = state;

  const wrapperRef = useRef(null);

  return (
    <div className="dd-wrapper" ref={wrapperRef}>
      <div className="dd-header" onClick={() => toggleList()}>
        <div className="dd-header-title">{headerTitle}</div>
        {listOpen ? (
          <FontAwesome name="angle-up" size="lg" />
        ) : (
          <FontAwesome name="angle-down" size="lg" />
        )}
      </div>
      {listOpen && (
        <ul className="dd-list">
          {list.map((item) => (
            <li className="dd-list-item" key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;

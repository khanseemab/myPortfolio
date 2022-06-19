import React from "react";
import "./DrawerToggleButton.css";

const drawerToggleButton = (props) => {
  return (
    <button className="toggle-button" onClick={props.click}>
      {/* <div className="toggle-button__line"></div>
      <div className="toggle-button__line"></div>
      <div className="toggle-button__line"></div> */}
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <title />
        <g data-name="menu " id="menu_">
          <path
            fill={`#ffffff`}
            d="M29,6H3A1,1,0,0,0,3,8H29a1,1,0,0,0,0-2Z"
          />
          <path
            fill={`#ffffff`}
            d="M3,17H16a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z"
          />
          <path
            fill={`#ffffff`}
            d="M25,24H3a1,1,0,0,0,0,2H25a1,1,0,0,0,0-2Z"
          />
        </g>
      </svg>
      
    </button>
  );
};

export default drawerToggleButton;

import React from "react";
import './MainProgressBar.css';
import ProgBar from "../../../utils/ProgressBar/ProgressBar";

const MainProgressBar = props => {
  return (
    <div className="Main-Progress-Bar">
      <div className="bar-text">
        <div className="text-white font-weight-bold float-left prog-font">
          {props.name}
        </div>
        <div className="text-white font-weight-bold float-right prog-font">
          {props.percentage} %
        </div>
      </div>
      <div className="progbar">
        <ProgBar percentage={props.percentage} />
      </div>
    </div>
  );
};

export default MainProgressBar;

import React from "react";
import './Heading.css';

const Heading = props => {
  return (
    <h2 className="background-line">
      <span className={`foreground-line ${props.classes}`}>
        <span className="font-weight-bold">{props.firstname}</span>
        <span className="font-weight-light"> {props.lastname}</span>
      </span>
    </h2>
  );
};

export default Heading;

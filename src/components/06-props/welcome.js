import React from "react";
import "./welcome.scss";

const Welcome = (props) => {
  return (
    <h1 className="welcome">
      Welcome {props.firstName} {props.lastName}
    </h1>
  );
};

export default Welcome;

import React from "react";
import Welcome from "./welcome";

const Greetings = () => {
  return (
    <div>
      <Welcome firstName="Yavuz" lastName="Erşatır" />
      <Welcome firstName="Meltem" lastName="Erşatır" />
    </div>
  );
};

export default Greetings;

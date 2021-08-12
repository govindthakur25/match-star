import React from "react";
import utils from "../math-utils";

const StarsDisplay = (props) => (
  <>
    {utils.range(1, props.count).map(starID =>
      <div key={starID} className="star" />
    )}
  </>
);

export default StarsDisplay;
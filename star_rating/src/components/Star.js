
import React from "react";
import PropTypes from "prop-types";

const Star = (props) => {
  const starTexts = {
    1: "Terrible",
    2: "Poor",
    3: "Ok",
    4: "Good",
    5: "Excellent",
  };

  const text = starTexts[props] || "";

  return (
    <span className={props ? "star selected" : "star"}>
      &#9733; {text}
    </span>
  );
};

Star.propTypes = {
  selected: PropTypes.number.isRequired,
};

export default Star;

/*
function Star(props) {
    const labels = {
        1: 'Terrible',
        2: 'Poor',
        3: 'Ok',
        4: 'Good',
        5: 'Excellent',
      };
  return (
    <h2>{props.labels}</h2>
  )
}

export default Star*/
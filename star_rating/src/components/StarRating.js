
import React, { useState } from "react";
import PropTypes from "prop-types";
import Star from "./Star";

function StarRating() {
  const [selectStar, setSelectStar] = useState(0);
  const [hover, setHover] = useState(0);

  const starTexts = {
    1: "Terrible",
    2: "Poor",
    3: "Ok",
    4: "Good",
    5: "Excellent",
  };

  const selectedText = starTexts[selectStar] || "";

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, idx) => {
        idx += 1;
        return (
          <button
            type="button"
            key={idx}
            id={idx}
            className={idx <= ((selectStar && hover) || hover) ? "gold" : "grey"}
            onClick={() => setSelectStar(idx)}
            onMouseEnter={() => setHover(idx)}
            onMouseLeave={() => setHover(selectStar)}
            onDoubleClick={() => {
            setSelectStar(0);
            setHover(0);
            }}
          >
            <Star selected={idx <= ((selectStar && hover) || hover)} />
          </button>
        );
      })}
      <h2>{selectedText}</h2>
    </div>
  );
}

StarRating.propTypes = {
  name: PropTypes.number,
};

StarRating.defaultProps = {
  name: "",
};

export default StarRating;

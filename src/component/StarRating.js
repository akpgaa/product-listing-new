import React from "react";

const StarRating = ({ numberOfStars }) => {
  const stars = [];

  // Push filled stars
  for (let i = 0; i < numberOfStars; i++) {
    stars.push(
      <i
        key={i}
        className="fa fa-star"
        style={{ fontSize: 12, marginRight: 2 }}
      ></i>
    );
  }

  // Push empty stars
  for (let i = numberOfStars; i < 5; i++) {
    stars.push(
      <i
        key={i}
        className="fa fa-star-o"
        style={{ fontSize: 12, marginRight: 2 }}
      ></i>
    );
  }

  return <div>{stars}</div>;
};

export default StarRating;
